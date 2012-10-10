warpzoom
========

Simple picture zoom plugin for jQuery 1.4+

Unlike jQZoom you move directly within the magnified zone.

Usage
-----

Example:

 $('#ul').zoom(options);

 available options:

  divName:           '#zoom',        // div that will hold the zoomed (magnified) pictured
  delay:             1,              // delay in ms between each mousemove poll
  cursor:            'crosshair',    // cursor pointer
  grabCursor:        'move',    // cursor when zoomed
  grabbingCursor:    'move',         // cursor when grabbing
  movingCursor:      'move',
  selected:          0,              // initially selected file
  startEvent:        'dblclick',     // event that will run the magnify, must be a valid bindable jQuery event
  loupe:             'loupe.gif',    // loop overlay, set to false to disable
  loupeInfo:         {normal: 'Click here to zoom', zoomed: 'Click here to go to normal size'},
  drag:              false,          // drag&drop mode
  debug:             false,          // Enable debug (needs console object)
  keepZoom:          false,          // If zoom mode is activated and a thumbnail is selected, it goes to zoom mode
  zoomTrack:         false,          // keep track of zoom in the thumbnail
  loaderImg:         'loader.gif'    // Loading image displayed before we get img size

See sample for sample code.

Future
------

Who knows ? If you do give me a call ;)


Licence
-------

WarpZoom is distributed under the MIT licence.

Copyright (c) 2009 Nicolas Ramz.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.