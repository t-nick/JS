window.onload = function() {
			var scrolled;
			var timer;
			
			document.getElementById('top').onclick = function() {
				scrolled = window.pageYOffset;
				scrollToTop();
			}
			function scrollToTop() {
			console.log(scrolled);
				if (scrolled > 0) {
					window.scrollTo (0, scrolled);
					scrolled = scrolled - 100; //100 скорость прокрутки
					timer = setTimeout(scrollToTop, 100);
				}
				else {
					clearTimeout(timer);
					window.scrollTo(0,0);
				}
			}
		}
