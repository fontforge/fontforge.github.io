---
published: true
layout: default
title: removing overlap (proposal)
---

*This is a proposal for an algorithm to remove overlap.  It is
intended to replace the old algorithm in fontforge and to give better
stability and correctness.  Removing overlap in cubic beziers involves
many corner cases and numeric accuracy issues which have to be
accounted for.  This doesn't claim to be complete, but is intended as
a starting point for an implementation, and meant to evolve.  Any
improvements are welcome.  Feel free to fill in any gaps which aren't
obvious.*

### The problem

This algorithm works on closed paths using the [nonzero winding
rule](http://en.wikipedia.org/wiki/Nonzero-rule).  If another rule is
used it should be converted first.  We can put the problem in a
semiformal way:

#### Input:

A set of closed paths consisting of cubic bezier segments.  We can see
each curve as an directed edge, being directed from its first control
point to its last.  The following properties should be present:

- for every bezier segment endpoint (first or last control point) the
  number of curves going in and out should be exactly the same.
- A point is *filled* if the [winding
  number](http://en.wikipedia.org/wiki/Winding_number) is nonzero.

#### Output:
A set of bezier curves, such that:

- No curves overlap except in the endpoints.
- Every offcurve point has a winding number of either zero or one.
- If a point has a nonzero winding number in the input, it will have a
  winding number of one in the output, otherwise zero.
- For the last property, a small amount of inaccuracy is allowed due
  to rounding of floating point numbers.  However the deviation
  shouldn't be too large.

It is possible to give more requirements, like to minimize the number of
bezier curves used.
  
### Overview

The algorithm can be broken down in several parts:

1. Find all intersections of all curves.
2. Each curve will be split at those intersections.
3. This gives a one or more graphs of points which are connected by the curves.
   We walk over each graph, eliminating edges based on the winding number.  We keep edges
   when the winding number is positive on one side, and zero or negative on the other side.
4. Finally we check if a graph is completely contained in another, in which case it can be
   removed.

### Finding an intersection between two bezier curves

To find an intersection between two bezier curves, a fast and stable
algorithm is *bezier clipping*.  A good explanation can be found in
[Computer Aided Geometry
Design](http://tom.cs.byu.edu/~557/text/cagd.pdf) by Thomas Sederberg,
paragraph 7.7.  It's implemented in lib2geom, which could be used as a
reference implementation.  I also have an [implementation in
haskell](https://github.com/kuribas/cubicbezier/blob/master/Geom2D/CubicBezier/Intersection.hs).

#### Checking for similar curves.

The number of intersections between two different bezier curves should
at most 9, however when the segments are part of the same curve, the
number of intersections can be infinite.  This special case should be
checked before running the algorithm.

When the endpoints are the same, we have the same curve, and it's
enough to compare the control points agains each other. The endpoints
may lie on different parts of the curve.  Finding if curves overlap
can be done by considering the following: A bezier curve \\(B(t)\\)
can be *reparametrized* with another parameter \\(u\\) by using
\\(B(e*u + f)\\), with any constants \\(e \neq 0\\) and \\(f\\).  If
we can find such constants that transform one bezier curve into the
other, we known the segments lie on the same curve.  The two curves
will overlap if the intervals \\([0, 1\\) and \\([f, e+f]\\) overlap.

Consider two bezier curves \\(P\\) and \\(Q\\) in power basis form.
We want to find \\(e\\) and \\(f\\) such that \\(P(t) = Q(e*t+f)\\).

Note that two overlapping segments may intersect in another point.

### Finding all intersections

Finding all intersections can be done by checking every curve against
every other curve.  This has complexity \\(O(n^2)\\), but it should be
good enough when \\(n\\) is low, like in fonts.  When the number of
curves is large, for example in generated graphics, it's better to use
a line sweep algorihm, such as [Bentley
Ottman](http://en.wikipedia.org/wiki/Bentley%E2%80%93Ottmann_algorithm),
modified for bezier curves.

#### self intersections

Self intersections aren't found by this method.  A simple way to find
a self intersection would be to split the bezier curve at horizontal
extrema, and use the bezier clipping algorithm to find any
intersections.  The horizontal extrema can be found by finding points
where the x coordinate of the first derivative is zero.  For a cubic
bezier this requires solving a quadratic equation.

