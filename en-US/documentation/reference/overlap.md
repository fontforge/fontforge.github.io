---
published: true
layout: default
title: removing overlap (proposal)
---

*This is a proposal for an algorithm to remove overlap.  It was
suggested as a replacement for the old algorithm in fontforge to give
better stability and correctness.  Since work is being done to
incorporate the geometry library
[lib2geom](http://lib2geom.sourceforge.net) into fontforge, the
following algorithm is kept for reference purposes.*

**disclaimer:** *Currently this is work in progress.  While the author
is positive that this information is helpful for anyone implementing
the algorithm, no guarantee is made for completeness or correctness.*

### The problem

The goal is to remove any overlapping regions from a set of closed
paths.  To determine if a point is on the interior or exterior of a
path, the [nonzero winding
rule](http://en.wikipedia.org/wiki/Nonzero-rule) is used.  The
algorithm doesn't depend on the type of curve used, as long as the
following operations are supported:

- Given two curves, return all overlapping points
- Split a curve at a certain point into two curves.

#### Input:


A set of closed paths consisting of cubic bezier segments.  We can see
each curve as an directed edge, being directed from its first control
point to its last.  The following properties should be present:

- For every curve endpoint (first or last control point) the number of
  curves going in and out should be exactly the same.
- A point is on
  the inside of the path if the [winding
  number](http://en.wikipedia.org/wiki/Winding_number) is nonzero.

#### Output:
A set of curves, such that:

- No curves overlap except in the endpoints.
- Every offcurve point has a winding number of either zero or one.
- If a point has a nonzero winding number in the input, it will have a
winding number of one in the output, otherwise zero.
- Some error may be acceptable due to floating point errors, as long
as the deviation is small, and has no visual artifacts.

It is possible to give more requirements, like to minimize the number of
curves used.
  
### Overview

The technique used is a plane sweep similar to the [Bentley Ottman
Algorithm](http://en.wikipedia.org/wiki/Bentley%E2%80%93Ottmann_algorithm)
for calculating intersections of line segments.  This algorithm has a
running time of \\(O((n+k) log(n))\\).  This is not theoretically
optimal, but it has a good trade-off between ease of implementation
and efficiency.

The basic idea is to sweep a vertical line from left to right over all
the elements.  During the sweep information about adjacency and
winding numbers is kept about all the segments that intersect the
line.  New intersections are calculated and inside curves are
discarded.

### Detailed algorithm

*To be written.*

### Finding an intersection between two bézier curves

The most used curves in CAGD are bézier curves and NURBS.  Good
algorithms exist for finding intersections between two bézier curves
of any degree.  A fast and stable algorithm is *bézier clipping*.  For
general information consult [Computer Aided Geometry
Design](http://tom.cs.byu.edu/~557/text/cagd.pdf) by Thomas Sederberg,
paragraph 7.7.  The paper [Curve intersection by beziér
clipping](http://nishitalab.org/user/nis/cdrom/cad/CAGD90Curve.pdf)
has more in-depth information about this algorithm.

It's implemented in [lib2geom](http://lib2geom.sourceforge.net), which
can be used as a reference implementation.  I also have an
[implementation in
haskell](https://github.com/kuribas/cubicbezier/blob/master/Geom2D/CubicBezier/Intersection.hs).

A faster, but more involved algorithm is implicitization, which can be
found in [Computer Aided Geometry
Design](http://tom.cs.byu.edu/~557/text/cagd.pdf).
