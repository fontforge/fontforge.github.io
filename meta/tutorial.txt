The FontForge Manual
====================
Forging Fonts

Sketch
------

The book should be brief enough to read in a few hours (or a day for a slow reader),ld and cover the topics of making fonts using FontForge, and extending FontForge for improved speed or usage, with a special section for developers. Other things which don’t seem to fit into the plan can be kept in separate articles, that go into more depth. (In gray is bits for me to include or notes.)

	     Contributors

	1    Terminology
	2    The interface

	     Making Fonts
	     ============

	3    Drawing with vector outlines  
	      ( cubic, quadratic, spiros.. bitmaps = separate article?
	4    Building letters  
	      ( construction, accented glyphs
	5    Metrics 
	      ( includes spacing & kerning
	6    Opentype Features  
	      ( should it include all types of lookups? probably should be its own article
	7    Names  
	      ( font names, glyph names, unicode
	9    Generating the font file : includes validating
	10   Testing

	     Forging farther
	     ===============

	11   Customizing FontForge
	12   Scripting

	     Appendix A: Keyboard shortcuts
	     Appendix B: Glossary of Terms
	     Appendix C: Libré type initiatives

	     FAQ
	     Further Reading
	     Index

	     Things to work in:
	     ==================

	     Interpolation
	     The style functions
	     MM
	     Encodings


Notes
=====

These are just my notes. :)

Terms
-----

Define the usage of these terms in the scope of the manual:

- Glyph
  - Font
  - Family
 
- Anatomy
  - Serif / Sans serif
  - Counter
  - Terminal
  - Ligature
  - Kern
 
- Metrics
  - Body size
  - Width
  - Ascent
  - Descent
  - Cap, ascender, & descender lines
  - Overshoot

In-depth definitions of kerning and bezier curves will be in their respective chapters, and in the glossary.

----

Drawing with beziers
--------------------

Start explaining them:

1. With a brief history of bezier curves
2. an explanation of the different types of beziers and curves (mention spiros)
3. The “anatomy” of a bezier curve
4. With animations showing usage.
