/**
 * 
 * photoshopMove is distributed under the MIT licence.
 * 
 * Copyright (c) 2012 Nicolas Ramz.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
(function($) {
	$.fn.photoshopMove = function(options) {
		(function(options, elements)  {
			$(elements).each(function() {
				var dragEnabled = false,
					mouseDown = false,
					keyDown = false;
					ts = null,
					left = $(this).offset().left,
					top = $(this).offset().top,
					lastX = 0,
					lastY = 0,
					element = $(this),
					options = options;

				function startDrag() {
					if (options.startCB) {
						options.startCB();
					}
					dragEnabled = true;
					ts = null;
				};

				function stopDrag() {
					dragEnabled = false;
				};

				$(this).bind('mousedown', function(event) {
					// prevents OS image drag
					event.preventDefault();
					mouseDown = true;
					lastX = event.pageX;
					lastY = event.pageY;
				});

				$(this).bind('mouseup', function() {
					mouseDown = false;
				});

				$(this).bind('mousemove', function(event) {
					var offsetx = event.pageX - lastX,
						offsety = event.pageY - lastY,
						scrollLeft = element.scrollLeft(),
						scrollTop = element.scrollTop();

					if (dragEnabled && mouseDown) {
						element.scrollLeft(offsetx + scrollLeft);
						element.scrollTop(offsety + scrollTop);
						lastX = event.pageX;
						lastY = event.pageY;
					}
				});

				$(document).bind('keydown', function(event) {
					if (event.keyCode == 32) {
						event.stopImmediatePropagation();
						event.preventDefault();

						if (!keyDown) {
							keyDown = true;
							element.css('cursor', 'move');
						
							if (!dragEnabled) {
								ts = setTimeout(startDrag, 400);
							}
						}
						return false;
					}
				});

				$(document).bind('keyup', function(event) {
					// user released the key before the drag started
					if (event.keyCode == 32) {
						if (!dragEnabled) {
							clearTimeout(ts);
							ts = null;
							element.css('cursor', '');
						}
						if (options.endCB) {
							options.endCB();
						}
						keyDown = false;
					}
				});
			});	// each()
		})(options, $(this));
	};
})(jQuery);