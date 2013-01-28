/* Header animation */

'use strict';

var HEADER = function() {
	var app = (function() {
			
		})(),
	
		colors = (function() {
			var values = [
					'#FFE101',
					'#FFC800',
					'#FF7D32',
					'#5BDC96',
					'#4FC185'
				],
				count = values.length;
			
			return {
				random : function() {
					var index = Math.floor(count * Math.random());
					return values[index];
				}
			};
		})(),
	
		units = (function() {
			var values = [
					70,
					100,
					100,
					130,
					200
				],
				count = values.length;
			
			return {
				random : function() {
					var index = Math.floor(count * Math.random());
					return values[index];
				}
			};
		})(),
		
		speed = (function() {
			var start = 100,
				end = 2500,
				delta = 100,
				current = start;
				
			return {
				next : function() {
					// delta += 50;
					current += delta;
					return current;
				},
				is_end : function() {
					return current > end ? true : false;
				}
			}
		})(),
		
		container = document.getElementsByClassName('hero-unit')[0],
		
		canvas = (function() {
			var el = document.createElement('canvas'),
				ctx = el.getContext('2d');
				
			container.appendChild(el);
			el.style.cssText = 'position: absolute; \
				top: 0;\
				left: 0;';
			
			el.width = 1600;
			el.height = 400;
			
			function rect(x, y) {
				var width = units.random(),
					height = units.random();
						
				ctx.fillStyle = colors.random();
				ctx.fillRect(x, y, width, height);
				
				if(x < 1600) {
					rect(x + width, y);
				} 
				
				if(y < 400) {
					rect(x, y + height);
				} 
			}
			
			return {
				draw_random : function() {
					var x = 0,
						y = 0;
					
					ctx.fillStyle = colors.random();
					ctx.fillRect(0, 0, 1600, 400);
						
					rect(x, y);
				}
			};
		})();
	
	
	(function redraw() {
		canvas.draw_random();
		if (!speed.is_end()) {
			setTimeout(redraw, speed.next());	
		};
	})();
	
};

window.onload = HEADER;
