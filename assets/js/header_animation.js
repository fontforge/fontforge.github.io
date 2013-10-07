/* Header animation */

'use strict';

var HEADER = function() {
		var colors = (function() {
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
					130
				],
				count = values.length;
			
			return {
				random : function() {
					var index = Math.floor(count * Math.random());
					return values[index];
				}
			};
		})(),
		
		container = document.getElementsByClassName('hero-unit')[0],
		container_width = container.clientWidth,
		container_height = container.clientHeight,
		
		speed = (function() {
			var start = 10,
				end = 2500,
				delta = 1,
				current = start;
				
			return {
				next : function() {
					current += delta;
					return current;
				},
				reset : function() {
					current = start;
				},
				is_end : function() {
					return current > end ? true : false;
				}
			}
		})(),
		
		canvas = (function() {
			var el = document.createElement('canvas'),
				ctx = el.getContext('2d');
				
			container.appendChild(el);
			el.style.cssText = '\
				position: absolute; \
				top: 0;\
				left: 0;\
				z-index: -2;';
			
			el.width = container_width;
			el.height = container_height;
			
			function rect(x, y, width, height) {
				ctx.fillStyle = colors.random();
				ctx.fillRect(x, y, width, height);
			}
			
			function clear(x, y, width, height) {
				ctx.clearRect(x, y, width, height);
			}
			
			ctx.fillStyle = '#FFFFFF';
			ctx.fillRect(0, 0, container_width, container.height);
			
			return {
				draw_cell : function(cell) {
					rect(cell.x, cell.y, cell.width, cell.height);
				},
				clear_cell : function(cell) {
					clear(cell.x, cell.y, cell.width, cell.height);
				},
				fill_random : function() {
					ctx.fillStyle = colors.random();
					ctx.fillRect(0, 0, container_width, container.height);
				}
			};
		})(),
		
		grid = (function(){
			var coords_x = [],
				coords_y = [],
				cells = [],
				x = 0,
				y = 0;
				
			while(x < container_width) {
				coords_x.push(x);
				
				x = x + units.random();
			}
			
			while(y < container_height) {
				coords_y.push(y);
				
				y = y + units.random();
			}

			for(var i = 0, c_x = coords_x.length; i < c_x; i++) {
				var next_x = coords_x[i + 1];
				
				for(var j = 0, c_y = coords_y.length; j < c_y; j++) {
					var next_y = coords_y[j + 1],
						
						cell = {
							x      : coords_x[i],
							y      : coords_y[j],
							width  : next_x ? (next_x - coords_x[i]) : 400,
							height : next_y ? (next_y - coords_y[j]) : 400
						};
					
					cells.push(cell);
				}
			}
			
			for(var j, x, i = cells.length; i; j = parseInt(Math.random() * i), x = cells[--i], cells[i] = cells[j], cells[j] = x);
			
			var current = -1;

			return {
				next_cell : function() {
					current++;
					return cells[current];
				},
				reset : function() {
					current = -1;
				}
			};
		})();

	function draw() {
		var cell = grid.next_cell();
		
		if (cell) {
			canvas.draw_cell(cell);
			
			setTimeout(draw, speed.next());	
		} else {
			grid.reset();
			speed.reset();
			clear();
		}
	}
	
	function clear() {
		var cell = grid.next_cell();
		
		if (cell) {
			canvas.clear_cell(cell);
			
			setTimeout(clear, speed.next());	
		} 
	}
	
	draw();

};

document.addEventListener('DOMContentLoaded', HEADER, false);