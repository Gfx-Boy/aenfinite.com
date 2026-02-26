// Language: Chinese (Simplified) (zh)
// Auto-generated from English source - do not edit directly
import type { Metadata } from 'next';
import HtmlPage from '@/components/HtmlPage';

export const metadata: Metadata = {
  title: "Aenfinite® – Global Digital æœºæž„ for ç½‘é¡µè®¾è®¡, å“ç‰Œç­–åˆ’, SEO & AI Solutions",
  description: "Aenfinite® is a global æ•°å­—æœºæž„ based in Colorado, offering ç½‘é¡µè®¾è®¡, UI/UX, å“ç‰Œç­–åˆ’, SEO, æ•°å­—è¥é”€, ä¸šåŠ¡è‡ªåŠ¨åŒ–, and AI-powered solutions for modern brands worldwide.",
  keywords: "æ•°å­—æœºæž„, web design, branding, SEO, AI solutions, digital marketing, business automation, UI UXè®¾è®¡, Aenfinite",
  alternates: { canonical: "https://aenfinite.com/zh/darkmode/", languages: {"x-default":"https://aenfinite.com/darkmode/","en":"https://aenfinite.com/darkmode/","es":"https://aenfinite.com/es/darkmode/","fr":"https://aenfinite.com/fr/darkmode/","de":"https://aenfinite.com/de/darkmode/","it":"https://aenfinite.com/it/darkmode/","ar":"https://aenfinite.com/ar/darkmode/","pt":"https://aenfinite.com/pt/darkmode/","zh":"https://aenfinite.com/zh/darkmode/","hi":"https://aenfinite.com/hi/darkmode/","nl":"https://aenfinite.com/nl/darkmode/","ja":"https://aenfinite.com/ja/darkmode/","ko":"https://aenfinite.com/ko/darkmode/"} },
  openGraph: {"title":"Aenfinite® – Global Digital æœºæž„ for ç½‘é¡µè®¾è®¡, å“ç‰Œç­–åˆ’, SEO & AI Solutions","description":"Aenfinite® delivers world-class ç½‘é¡µè®¾è®¡, å“ç‰Œç­–åˆ’, UI/UX, SEO, Marketing, and AI-driven automation solutions. Based in Colorado with clients across the globe.","url":"https://aenfinite.com/zh/darkmode/","siteName":"Aenfinite","type":"website","images":[{"url":"https://aenfinite.com/wp-content/uploads/2025/01/aenfinite-darkmode-thumbnail.jpg"}]},
  twitter: {"card":"summary_large_image","title":"Aenfinite® – Global Digital æœºæž„ for ç½‘é¡µè®¾è®¡, å“ç‰Œç­–åˆ’, SEO & AI Solutions","description":"Aenfinite® is a creative æ•°å­—æœºæž„ offering ç½‘é¡µè®¾è®¡, å“ç‰Œç­–åˆ’, SEO, Marketing, and AI-driven business automation solutions for global brands.","images":["https://aenfinite.com/wp-content/uploads/2025/01/aenfinite-darkmode-thumbnail.jpg"]},
  robots: { index: true, follow: true },
};

const bodyClass = `page-template page-template-page-black-php page-id-1411 document`;

const headStyles = `
			
			* {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			body, html {
				cursor: none !important;
			}

			svg {
				display: none;
			}

			.aenfinite-cursor {
				pointer-events: none;
				position: fixed;
				display: block;
				border-radius: 0;
				transform-origin: center center;
				top: 0;
				left: 0;
				z-index: 99999;
				filter: url("#goo");
				width: 26px;
				height: 26px;
			} .header {
			background-image: radial-gradient(black 1px, transparent 0);
			background-size: 20px 20px;
			background-position: -9px -9px;
		}

			.aenfinite-cursor span {
				position: absolute;
				display: block;
				width: 26px;
				height: 26px;
				border-radius: 50%;
				background-color: #227bf3;
				transform-origin: center center;
				transform: translate(-50%, -50%);
			}

			/* On mobile devices, hide the cursor and restore default behavior */
			@media (max-width: 768px) {
				.aenfinite-cursor {
					display: none !important;
				}
				
				body, html {
					cursor: auto !important;
				}
			}
		
img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }

		/* Navigation Logo Styling */
		.nav-logo {
			height: 28px !important;
			width: auto !important;
			max-width: 140px !important;
			transition: all 0.3s ease;
			filter: none;
			object-fit: contain;
			object-position: left center;
		}
		
		/* Logo switching CSS to match homepage behavior */
		.nav-logo-default,
		.nav-logo-active {
			position: absolute;
			top: 0;
			left: 0;
			height: 28px !important;
			width: auto !important;
			max-width: 140px !important;
			object-fit: contain;
			object-position: left center;
			transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			transform-origin: left center;
		}

		/* Container for logos to maintain position */
		.topbar-logo a {
			position: relative;
			display: inline-block;
			height: 28px;
			min-width: 140px;
		}

		/* Default state - show white logo, hide active logo */
		.nav-logo-default {
			display: block;
			opacity: 1;
			transform: scale(1);
			z-index: 2;
		}

		.nav-logo-active {
			display: block;
			opacity: 0;
			transform: scale(0.95);
			z-index: 1;
		}

		/* When navbar becomes active/dark - hide white logo, show blue logo */
		.mainnav.active .nav-logo-default,
		.mainnav.always-active .nav-logo-default,
		.mainnav:hover .nav-logo-default {
			opacity: 0;
			transform: scale(0.95);
			z-index: 1;
		}

		.mainnav.active .nav-logo-active,
		.mainnav.always-active .nav-logo-active,
		.mainnav:hover .nav-logo-active {
			opacity: 1;
			transform: scale(1.05);
			z-index: 2;
		}
    

		* {
			cursor: none !important;
		}
		
		.cursor-container {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			pointer-events: none;
			z-index: 99999;
		}
		
		.cursor-dot {
			position: absolute;
			width: 4px;
			height: 4px;
			background: rgb(255, 255, 255);
			border-radius: 50%;
			filter: url(#goo);
			transform: translate(-50%, -50%);
		}
		
		@media (max-width: 768px) {
			.cursor-container {
				display: none;
			}
			* {
				cursor: auto !important;
			}
		}
		
		@media (pointer: coarse) {
			.cursor-container {
				display: none;
			}
			* {
				cursor: auto !important;
			}
		}
	`;

const overrideCss = "/wp-content/themes/aenfinite.com/black-static/css/main8783.css?v=20221012-1710";

const pageContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800">
			<defs>
			  <filter id="goo">
				<feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
				<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo" />
				<feComposite in="SourceGraphic" in2="goo" operator="atop"/>
			  </filter>
			</defs>
		</svg>
<svg style="position: fixed; top: -1000px; left: -1000px; width: 0; height: 0;">
		<defs>
			<filter id="goo">
				<feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
				<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
				<feComposite in="SourceGraphic" in2="goo" operator="atop"/>
			</filter>
		</defs>
	</svg>
<script>
			// Advanced Cursor Implementation
			function initAdvancedCursor() {
				// Check if mobile device
				if (window.innerWidth <= 768) {
					return; // Don't initialize cursor on mobile
				}

				// Remove any existing cursor elements
				const existingCursors = document.querySelectorAll('.aenfinite-cursor');
				existingCursors.forEach(cursor => cursor.remove());

				const cursor = document.createElement('div');
				cursor.className = 'aenfinite-cursor';
				cursor.id = 'aenfinite-cursor';
				document.body.appendChild(cursor);

				const amount = 20;
				const sineDots = Math.floor(amount * 0.3);
				const width = 26;
				const idleTimeout = 150;
				let lastFrame = 0;
				let mousePosition = {x: 0, y: 0};
				let dots = [];
				let timeoutID;
				let idle = false;

				class Dot {
					constructor(index = 0) {
						this.index = index;
						this.anglespeed = 0.05;
						this.x = 0;
						this.y = 0;
						this.scale = 1 - 0.05 * index;
						this.range = width / 2 - width / 2 * this.scale + 2;
						this.limit = width * 0.75 * this.scale;
						this.element = document.createElement("span");
						if (window.gsap && window.gsap.set) {
							gsap.set(this.element, {scale: this.scale});
						} else {
							this.element.style.transform = \`scale(\${this.scale})\`;
						}
						cursor.appendChild(this.element);
					}

					lock() {
						this.lockX = this.x;
						this.lockY = this.y;
						this.angleX = Math.PI * 2 * Math.random();
						this.angleY = Math.PI * 2 * Math.random();
					}

					draw(delta) {
						if (!idle || this.index <= sineDots) {
							if (window.gsap && window.gsap.set) {
								gsap.set(this.element, {x: this.x, y: this.y});
							} else {
								this.element.style.transform = \`translate(\${this.x}px, \${this.y}px) scale(\${this.scale})\`;
							}
						} else {
							this.angleX += this.anglespeed;
							this.angleY += this.anglespeed;
							this.y = this.lockY + Math.sin(this.angleY) * this.range;
							this.x = this.lockX + Math.sin(this.angleX) * this.range;
							if (window.gsap && window.gsap.set) {
								gsap.set(this.element, {x: this.x, y: this.y});
							} else {
								this.element.style.transform = \`translate(\${this.x}px, \${this.y}px) scale(\${this.scale})\`;
							}
						}
					}
				}

				function startIdleTimer() {
					timeoutID = setTimeout(goInactive, idleTimeout);
					idle = false;
				}

				function resetIdleTimer() {
					clearTimeout(timeoutID);
					startIdleTimer();
				}

				function goInactive() {
					idle = true;
					for (let dot of dots) {
						dot.lock();
					}
				}

				function buildDots() {
					for (let i = 0; i < amount; i++) {
						let dot = new Dot(i);
						dots.push(dot);
					}
				}

				const onMouseMove = event => {
					mousePosition.x = event.clientX - width / 2;
					mousePosition.y = event.clientY - width / 2;
					resetIdleTimer();
				};

				const onTouchMove = (event) => {
					if (event.touches && event.touches.length > 0) {
						mousePosition.x = event.touches[0].clientX - width / 2;
						mousePosition.y = event.touches[0].clientY - width / 2;
						resetIdleTimer();
					}
				};

				const render = timestamp => {
					const delta = timestamp - lastFrame;
					positionCursor(delta);
					lastFrame = timestamp;
					requestAnimationFrame(render);
				};

				const positionCursor = delta => {
					let x = mousePosition.x;
					let y = mousePosition.y;
					dots.forEach((dot, index, dots) => {
						let nextDot = dots[index + 1] || dots[0];
						dot.x = x;
						dot.y = y;
						dot.draw(delta);
						if (!idle || index <= sineDots) {
							const dx = (nextDot.x - dot.x) * 0.35;
							const dy = (nextDot.y - dot.y) * 0.35;
							x += dx;
							y += dy;
						}
					});
				};

				// Initialize cursor system
				window.addEventListener("mousemove", onMouseMove);
				window.addEventListener("touchmove", onTouchMove);
				lastFrame = performance.now();
				buildDots();
				render();
				startIdleTimer();

				// Handle window resize
				window.addEventListener('resize', function() {
					if (window.innerWidth <= 768) {
						// Remove cursor on mobile
						const cursorEl = document.getElementById('aenfinite-cursor');
						if (cursorEl) {
							cursorEl.remove();
						}
					} else if (!document.getElementById('aenfinite-cursor')) {
						// Reinitialize cursor on desktop
						initAdvancedCursor();
					}
				});
			}

			// Initialize cursor when DOM is ready
			document.addEventListener('DOMContentLoaded', function() {
				initAdvancedCursor();
			});

			// Backup initialization
			if (document.readyState === 'loading') {
				document.addEventListener('DOMContentLoaded', initAdvancedCursor);
			} else {
				initAdvancedCursor();
			}
		</script>
<script >
		  (function (d, u, h, s) {
			h = d.getElementsByTagName('head')[0];
			s = d.createElement('script');
			s.async = 1;
			s.src = u + new Date().getTime();
			h.appendChild(s);
		  })(document, 'https://grow.clearbitjs.com/api/pixel.js?v=');
		</script>
<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());
		  gtag('config', 'G-K9VRBCFE61');
		</script>
<script>
		document.addEventListener('DOMContentLoaded', function() {
			// Check if it's a mobile device
			const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
			const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
			
			if (isMobile || hasTouch) {
				return; // Exit early on mobile devices
			}
			
			const cursorContainer = document.createElement('div');
			cursorContainer.className = 'cursor-container';
			document.body.appendChild(cursorContainer);
			
			const numDots = 20;
			const dots = [];
			const mousePosition = { x: 0, y: 0 };
			
			// Create dots
			for (let i = 0; i < numDots; i++) {
				const dot = document.createElement('div');
				dot.className = 'cursor-dot';
				cursorContainer.appendChild(dot);
				dots.push({
					element: dot,
					x: 0,
					y: 0,
					targetX: 0,
					targetY: 0,
					delay: i * 0.02
				});
			}
			
			// Mouse move handler
			function handleMouseMove(e) {
				mousePosition.x = e.clientX;
				mousePosition.y = e.clientY;
			}
			
			document.addEventListener('mousemove', handleMouseMove);
			
			// Animation loop
			function animate() {
				dots.forEach((dot, index) => {
					const delay = index * 0.1;
					const ease = 0.15 - (index * 0.005);
					
					dot.targetX = mousePosition.x;
					dot.targetY = mousePosition.y;
					
					dot.x += (dot.targetX - dot.x) * ease;
					dot.y += (dot.targetY - dot.y) * ease;
					
					dot.element.style.left = dot.x + 'px';
					dot.element.style.top = dot.y + 'px';
					dot.element.style.opacity = Math.max(0, 1 - index * 0.05);
					dot.element.style.transform = "translate(-50%, -50%) scale(" + Math.max(0.1, 1 - index * 0.05) + ")";
				});
				
				requestAnimationFrame(animate);
			}
			
			// Start animation
			animate();
			
			// Hide cursor when leaving window
			document.addEventListener('mouseleave', function() {
				cursorContainer.style.opacity = '0';
			});
			
			document.addEventListener('mouseenter', function() {
				cursorContainer.style.opacity = '1';
			});
			
			// Handle hover effects
			const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .clickable');
			
			interactiveElements.forEach(element => {
				element.addEventListener('mouseenter', function() {
					dots.forEach(dot => {
						dot.element.style.backgroundColor = 'rgb(200, 200, 200)';
						dot.element.style.transform += ' scale(1.5)';
					});
				});
				
				element.addEventListener('mouseleave', function() {
					dots.forEach(dot => {
						dot.element.style.backgroundColor = 'rgb(255, 255, 255)';
					});
				});
			});
			
			// Initialize cursor position
			const rect = document.body.getBoundingClientRect();
			mousePosition.x = rect.width / 2;
			mousePosition.y = rect.height / 2;
		});
	</script>

	
		<div style="display:none!important;">
			
			<div class="url">Darkmode</div>
			<div class="urlback">https://aenfinite.com/</div>
			<div class="datas">08.15.2025</div>
			<div class="times">2-19 pm</div>
		</div>

		<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
			<symbol id="i-heart" viewBox="0 0 1729 1281" fill="none">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M861.461 453.539L413.544 5.62201L0 419.166L861.526 1280.69L1275.07 867.148L1275.01 867.083L1728.54 413.544L1315 0L861.461 453.539Z" fill="#227bf3" />
			</symbol>
		</svg>

		<div class="container">

			<div class="header">
				<div class="video">
					<video autoplay loop muted playsinline>
																			<source src="/wp-content/themes/aenfinite.com/images/intro.mp4" type="video/mp4"> 
																	</video>
				</div>
				<div class="wrapper">
					<div class="header-canvas">
						<div class="heart">
							<svg class="icon" width="100%" height="100%">
								<use xlink:href="#i-heart"></use>
							</svg>
							<div class="heart-text">
								<span>Press this heart</span>
							</div>
						</div>
					</div>
					<div class="header-content">
						<div class="topbar">
							<div class="topbar-logo">
								<a href="../">
									<img src="/wp-content/themes/aenfinite.com/images/aenfinite-full.svg" alt="Aenfinite" class="nav-logo" loading="eager" decoding="async">
								</a>
							</div>
							<div class="desktop">
								<ul id="menu-footer-company-menu" class="topnav"><li id="menu-item-959" class="menu-item menu-item-type-post_type topnav-item menu-item-959"><a href="/zh/featured-work/">ä½œå“</a></li>
<li id="menu-item-275" class="menu-item menu-item-type-post_type topnav-item menu-item-275"><a href="../agency/">æœºæž„</a></li>
<li id="menu-item-482" class="menu-item menu-item-type-post_type topnav-item menu-item-482"><a href="../services/">æœåŠ¡</a></li>

<li id="menu-item-4127" class="menu-item menu-item-type-post_type topnav-item menu-item-4127"><a href="../contact/">è”ç³»æˆ‘ä»¬</a></li>
</ul>							</div>
							<div class="menu-button mobile js-menu-toggle"></div>
						</div>
						<div class="header-caption">
							<div class="inner-wrapper">
								<div class="title title__default">
									<h1>Shaping Digital Futures<br />
from &nbsp;the&nbsp;Mile-High City</h1>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>


			<div class="main">

				<div class="section section__services">
					<div class="wrapper">

						<div class="active-header js-active-header">

							<div class="header-cross js-cross">
								<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
									<line x1="0" y1="0" x2="100%" y2="100%" vector-effect="non-scaling-stroke" stroke="currentColor" stroke-width="1.5" />
								</svg>
							</div>
							<div class="header-cross js-cross">
								<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
									<line x1="100%" y1="0" x2="0" y2="100%" vector-effect="non-scaling-stroke" stroke="currentColor" stroke-width="1.5" />
								</svg>
							</div>


							<div class="inner-wrapper">
  <div class="services-grid">
    <div class="services-caption">
      <div class="section-caption_text">
        <h2>Our Core æœåŠ¡</h2>
      </div>
    </div>

    <div class="services-list">

      <!-- ç½‘é¡µè®¾è®¡ -->
      <div class="servicebox">
        <div class="service active">
          <div class="service-title">
            <span class="service-name">ç½‘é¡µè®¾è®¡</span>
          </div>
          <div class="service-content">
            <div class="service-tags">
              <div class="chips">
                <div class="chip"><a href="/zh/services/web-design/">ç€é™†é¡µ</a></div>
                <div class="chip"><a href="/zh/services/web-design">ä¼ä¸šç½‘ç«™</a></div>
                <div class="chip"><a href="/zh/services/web-design">å®šåˆ¶ç½‘ç«™è®¾è®¡</a></div>
                <div class="chip"><a href="/zh/services/ui-ux-design/">å“åº”å¼è®¾è®¡</a></div>
                <div class="chip"><a href="/zh/services/ui-ux-design/">UI/UXè®¾è®¡</a></div>
              </div>
            </div>
            <div class="service-text">
              <p>We create world-class websites that blend modern design, seamless functionality, and user-focused experiences.  
              Our mobile-first, SEO-friendly builds are fast, secure, and designed to convert visitors into customers.</p>
            </div>
            <div class="service-action">
              <a href="/zh/contact/" class="redlink"><span>Learn more</span></a>
            </div>
          </div>
        </div>
      </div>

      <!-- å“ç‰Œä¸Žæ ‡å¿—è®¾è®¡ -->
      <div class="service">
        <div class="service-title">
          <span class="service-name">å“ç‰Œä¸Žæ ‡å¿—è®¾è®¡</span>
        </div>
        <div class="service-content">
          <div class="service-tags">
            <div class="chips">
              <div class="chip"><a href="/zh/services/branding/">ä¼ä¸šå½¢è±¡</a></div>
              <div class="chip"><a href="/zh/services/logo-design/">Logo Creation</a></div>
              <div class="chip"><a href="/zh/services/branding/">Re-å“ç‰Œç­–åˆ’</a></div>
              <div class="chip"><a href="/zh/services/conference-branding/">å“ç‰Œè§„èŒƒ</a></div>
            </div>
          </div>
          <div class="service-text">
            <p>From logos to full brand systems, we help businesses craft memorable identities that resonate with their audience and communicate their story with impact.</p>
          </div>
          <div class="service-action">
            <a href="/zh/contact/" class="redlink"><span>Learn more</span></a>
          </div>
        </div>
      </div>

      <!-- æ•°å­—è¥é”€ -->
      <div class="service">
        <div class="service-title">
          <span class="service-name">æ•°å­—è¥é”€</span>
        </div>
        <div class="service-content">
          <div class="service-tags">
            <div class="chips">
              <div class="chip"><a href="/zh/services/search-engine-optimization/">SEOä¼˜åŒ–</a></div>
              <div class="chip"><a href="/zh/services/social-media-marketing/">ç¤¾äº¤åª’ä½“è¥é”€</a></div>
              <div class="chip"><a href="/zh/services/paid-ads/">ä»˜è´¹å¹¿å‘Š</a></div>
              <div class="chip"><a href="/zh/services/pay-per-click/">PPC Advertising</a></div>
            </div>
          </div>
          <div class="service-text">
            <p>Boost visibility and drive sales with our targeted digital campaigns. We combine SEO, social media, and data-driven strategies to grow your audience and brand awareness.</p>
          </div>
          <div class="service-action">
            <a href="/zh/contact/" class="redlink"><span>Learn more</span></a>
          </div>
        </div>
      </div>

      <!-- ç”µå­å•†åŠ¡ç½‘ç«™ -->
      <div class="service">
        <div class="service-title">
          <span class="service-name">ç”µå­å•†åŠ¡ç½‘ç«™</span>
        </div>
        <div class="service-content">
          <div class="service-tags">
            <div class="chips">
              <div class="chip"><a href="/zh/services/e-commerce-websites/">Shopify Stores</a></div>
              <div class="chip"><a href="/zh/services/e-commerce-websites/">WooCommerce</a></div>
              <div class="chip"><a href="/zh/services/e-commerce-websites/">Custom Checkout</a></div>
            </div>
          </div>
          <div class="service-text">
            <p>We build powerful online stores with intuitive shopping experiences, secure payment systems, and scalable solutions that help you sell more effectively.</p>
          </div>
          <div class="service-action">
            <a href="/zh/contact/" class="redlink"><span>Learn more</span></a>
          </div>
        </div>
      </div>

      <!-- WordPressç½‘ç«™ -->
      <div class="service">
        <div class="service-title">
          <span class="service-name">WordPressç½‘ç«™</span>
        </div>
        <div class="service-content">
          <div class="service-tags">
            <div class="chips">
              <div class="chip"><a href="/zh/services/e-commerce-websites/">Custom Themes</a></div>
              <div class="chip"><a href="/zh/services/e-commerce-websites/">æ’ä»¶å¼€å‘</a></div>
              <div class="chip"><a href="/zh/services/e-commerce-websites/">CMS Setup</a></div>
            </div>
          </div>
          <div class="service-text">
            <p>From custom WordPress builds to theme customization, we deliver flexible, easy-to-manage websites tailored to your business needs.</p>
          </div>
          <div class="service-action">
            <a href="/zh/contact/" class="redlink"><span>Learn more</span></a>
          </div>
        </div>
      </div>

      <!-- åº”ç”¨å¼€å‘ -->
      <div class="service">
        <div class="service-title">
          <span class="service-name">åº”ç”¨å¼€å‘</span>
        </div>
        <div class="service-content">
          <div class="service-tags">
            <div class="chips">
              <div class="chip"><a href="/zh/services/app-development/">iOS</a></div>
              <div class="chip"><a href="/zh/services/app-development/">Android</a></div>
              <div class="chip"><a href="/zh/services/app-development/">Cross-Platform</a></div>
              <div class="chip"><a href="/zh/services/app-development/">App Prototyping</a></div>
            </div>
          </div>
          <div class="service-text">
            <p>We design and develop high-performance mobile apps with smooth UI/UX, robust back-end systems, and seamless cross-platform functionality.</p>
          </div>
          <div class="service-action">
            <a href="/zh/contact/" class="redlink"><span>Learn more</span></a>
          </div>
        </div>
      </div>

      <!-- å¹³é¢è®¾è®¡ -->
      <div class="service">
        <div class="service-title">
          <span class="service-name">å¹³é¢è®¾è®¡</span>
        </div>
        <div class="service-content">
          <div class="service-tags">
            <div class="chips">
              <div class="chip"><a href="/zh/services/graphic-design/">Social Media å›¾å½¢</a></div>
              <div class="chip"><a href="/zh/services/logo-design/">æ ‡å¿—è®¾è®¡</a></div>
              <div class="chip"><a href="/zh/services/graphic-design/">Print Materials</a></div>
              <div class="chip"><a href="/zh/services/graphic-design/">Pitch Decks</a></div>
            </div>
          </div>
          <div class="service-text">
            <p>Eye-catching visuals for digital and print. Our team delivers bold, on-brand graphics that engage audiences across platforms.</p>
          </div>
          <div class="service-action">
            <a href="/zh/contact/" class="redlink"><span>Learn more</span></a>
          </div>
        </div>
      </div>

      <!-- åŒ…è£…è®¾è®¡ -->
      <div class="service">
        <div class="service-title">
          <span class="service-name">åŒ…è£…è®¾è®¡</span>
        </div>
        <div class="service-content">
          <div class="service-tags">
            <div class="chips">
              <div class="chip"><a href="/zh/services/packaging-design/">Consumer Goods</a></div>
              <div class="chip"><a href="/zh/services/packaging-design/">Merchandise</a></div>
              <div class="chip"><a href="/zh/services/packaging-design/">Startup Products</a></div>
            </div>
          </div>
          <div class="service-text">
            <p>Stand-out packaging that sells. We combine creativity and production expertise to design packaging that delights customers and elevates your brand.</p>
          </div>
          <div class="service-action">
            <a href="/zh/contact/" class="redlink"><span>Learn more</span></a>
          </div>
        </div>
      </div>

      <!-- å®šåˆ¶å¼€å‘ -->
      <div class="service">
        <div class="service-title">
          <span class="service-name">å®šåˆ¶å¼€å‘</span>
        </div>
        <div class="service-content">
          <div class="service-tags">
            <div class="chips">
              <div class="chip"><a href="/zh/services/custom-web-development/">Bespoke Solutions</a></div>
              <div class="chip"><a href="/zh/services/custom-web-development/">Web Apps</a></div>
              <div class="chip"><a href="/zh/services/custom-web-development/">Integrations</a></div>
            </div>
          </div>
          <div class="service-text">
            <p>Complex functionality? No problem. We build tailor-made web applications and integrations to power unique business workflows.</p>
          </div>
          <div class="service-action">
            <a href="/zh/contact/" class="redlink"><span>Learn more</span></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


						</div>
					</div>
				</div>
				
				<div class="section section__projects">
					<div class="wrapper">
						<div class="inner-wrapper">
							<div class="title title__default js-aos" data-effect="fade-up">
								<h2>We break rules + own <br>
the game, crafting badass <br>
websites &amp; apps on beast mode.</h2>
							</div>
							<div class="cards">

    <!-- Existing Aenfinite Projects -->
    <!-- (Keep all your old cards here as they are) -->
    <!-- ========================================= -->

    <!-- New Portfolio Projects (Converted) -->
    <div class="card js-aos" data-effect="fade-up">
        <div class="card-top">
            <div class="card-media">
                <img class="lazyload" data-src="/wp-content/themes/aenfinite.com/processed/cyclethe6-logo-01.avif" alt="CycleThe6 å“ç‰Œå½¢è±¡" loading="eager" decoding="async" />
                <span>View collection</span>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-info">
                <div class="card-name">CycleThe6 – å“ç‰Œå½¢è±¡ & Logo Collection</div>
                <div class="card-tags">
                    <ul>
                        <li>å“ç‰Œå½¢è±¡</li>
                        <li>æ ‡å¿—è®¾è®¡</li>
                        <li>è¿åŠ¨å“ç‰Œ</li>
                    </ul>
                </div>
            </div>
            <div class="card-action">
                <a href="#">View Project</a>
            </div>
        </div>
    </div>

    <div class="card js-aos" data-effect="fade-up">
        <div class="card-top">
            <div class="card-media">
                <img class="lazyload" data-src="/wp-content/themes/aenfinite.com/processed/muskfume.avif" alt="Muskfume Fragrance å“ç‰Œç­–åˆ’" loading="lazy" decoding="async" />
                <span>View collection</span>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-info">
                <div class="card-name">Muskfume – Luxury Fragrance å“ç‰Œç­–åˆ’</div>
                <div class="card-tags">
                    <ul>
                        <li>å¥¢ä¾ˆå“ç‰Œ</li>
                        <li>ç¾Žå®¹ä¸ŽåŒ–å¦†å“</li>
                        <li>é¦™æ°´å“ç‰Œå½¢è±¡</li>
                    </ul>
                </div>
            </div>
            <div class="card-action">
                <a href="#">View Project</a>
            </div>
        </div>
    </div>

    <div class="card js-aos" data-effect="fade-up">
        <div class="card-top">
            <div class="card-media">
                <img class="lazyload" data-src="/wp-content/themes/aenfinite.com/processed/robophilthumbnail.avif" alt="RoboPhil AI Trading Platform" loading="lazy" decoding="async" />
                <span>æŸ¥çœ‹é¡¹ç›®</span>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-info">
                <div class="card-name">RoboPhil – AI Trading Platform & Technology åˆ›æ–°</div>
                <div class="card-tags">
                    <ul>
                        <li>AIå¹³å°</li>
                        <li>Webå¼€å‘</li>
                        <li>ç§‘æŠ€å“ç‰Œ</li>
                    </ul>
                </div>
            </div>
            <div class="card-action">
                <a href="/zh/work/robophil/">View Project</a>
            </div>
        </div>
    </div>

    <div class="card js-aos" data-effect="fade-up">
        <div class="card-top">
            <div class="card-media">
                <img class="lazyload" data-src="/wp-content/themes/aenfinite.com/processed/blue-vine-marketingthumbnail.avif" alt="Blue Vine è¥é”€å¹³å°" loading="lazy" decoding="async" />
                <span>æŸ¥çœ‹é¡¹ç›®</span>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-info">
                <div class="card-name">Blue Vine Marketing – Professional Business Platform</div>
                <div class="card-tags">
                    <ul>
                        <li>è¥é”€å¹³å°</li>
                        <li>ä¸šåŠ¡å‘å±•</li>
                        <li>ä¸“ä¸šå“ç‰Œ</li>
                    </ul>
                </div>
            </div>
            <div class="card-action">
                <a href="/zh/work/blue-vine-marketing/">View Project</a>
            </div>
        </div>
    </div>

    <div class="card js-aos" data-effect="fade-up">
        <div class="card-top">
            <div class="card-media">
                <img class="lazyload" data-src="/wp-content/themes/aenfinite.com/processed/husnohayathumbnail.avif" alt="HusnOhaya E-commerce Platform" loading="lazy" decoding="async" />
                <span>æŸ¥çœ‹é¡¹ç›®</span>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-info">
                <div class="card-name">HusnOhaya – E-commerce Platform & Shopping Solution</div>
                <div class="card-tags">
                    <ul>
                        <li>ç”µå­å•†åŠ¡å¼€å‘</li>
                        <li>è´­ç‰©å¹³å°</li>
                        <li>ç”¨æˆ·ä½“éªŒ</li>
                    </ul>
                </div>
            </div>
            <div class="card-action">
                <a href="/zh/work/husnohaya/">View Project</a>
            </div>
        </div>
    </div>

    <div class="card js-aos" data-effect="fade-up">
        <div class="card-top">
            <div class="card-media">
                <img class="lazyload" data-src="/wp-content/themes/aenfinite.com/processed/BRAND-01.avif" alt="AlgoPros ç®—æ³•è§£å†³æ–¹æ¡ˆ" loading="lazy" decoding="async" />
                <span>æŸ¥çœ‹é¡¹ç›®</span>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-info">
                <div class="card-name">AlgoPros – ç®—æ³•è§£å†³æ–¹æ¡ˆ & ç§‘æŠ€å“ç‰Œ</div>
                <div class="card-tags">
                    <ul>
                        <li>ç§‘æŠ€å“ç‰Œ</li>
                        <li>ç®—æ³•è§£å†³æ–¹æ¡ˆ</li>
                        <li>åˆåˆ›å“ç‰Œå½¢è±¡</li>
                    </ul>
                </div>
            </div>
            <div class="card-action">
                <a href="/zh/work/algopros/">View Project</a>
            </div>
        </div>
    </div>

    <div class="card js-aos" data-effect="fade-up">
        <div class="card-top">
            <div class="card-media">
                <img class="lazyload" data-src="/wp-content/themes/aenfinite.com/processed/afropopthumbnail.avif" alt="AfroPop Collaboration Platform" loading="lazy" decoding="async" />
                <span>æŸ¥çœ‹é¡¹ç›®</span>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-info">
                <div class="card-name">AfroPop – Collaboration Platform & Social Network</div>
                <div class="card-tags">
                    <ul>
                        <li>ç¤¾äº¤å¹³å°</li>
                        <li>åä½œå·¥å…·</li>
                        <li>åˆ›æ„å“ç‰Œ</li>
                    </ul>
                </div>
            </div>
            <div class="card-action">
                <a href="/zh/work/afropop/">View Project</a>
            </div>
        </div>
    </div>

    <div class="card js-aos" data-effect="fade-up">
        <div class="card-top">
            <div class="card-media">
                <img class="lazyload" data-src="/wp-content/themes/aenfinite.com/processed/khatechthumbnail.avif" alt="KhaTech è¥é”€å¹³å°" loading="lazy" decoding="async" />
                <span>æŸ¥çœ‹é¡¹ç›®</span>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-info">
                <div class="card-name">KhaTech – è¥é”€å¹³å° & SaaS Solution</div>
                <div class="card-tags">
                    <ul>
                        <li>Marketing SaaS</li>
                        <li>å¹³å°å¼€å‘</li>
                        <li>B2B å“ç‰Œç­–åˆ’</li>
                    </ul>
                </div>
            </div>
            <div class="card-action">
                <a href="/zh/work/khatech/">View Project</a>
            </div>
        </div>
    </div>

    <div class="card js-aos" data-effect="fade-up">
        <div class="card-top">
            <div class="card-media">
                <img class="lazyload" data-src="/wp-content/themes/aenfinite.com/processed/amkiservicethumbnail.avif" alt="AM-KI Compliance æœåŠ¡" loading="lazy" decoding="async" />
                <span>æŸ¥çœ‹é¡¹ç›®</span>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-info">
                <div class="card-name">AM-KI – Compliance æœåŠ¡ & ä¼ä¸šå½¢è±¡</div>
                <div class="card-tags">
                    <ul>
                        <li>ä¼ä¸šå½¢è±¡</li>
                        <li>Professional æœåŠ¡</li>
                        <li>Business å“ç‰Œç­–åˆ’</li>
                    </ul>
                </div>
            </div>
            <div class="card-action">
                <a href="/zh/work/amkiservice/">View Project</a>
            </div>
        </div>
    </div>

    <div class="card js-aos" data-effect="fade-up">
        <div class="card-top">
            <div class="card-media">
                <img class="lazyload" data-src="/wp-content/themes/aenfinite.com/processed/mockup-link.avif" alt="Luna Wick åˆ›æ„å“ç‰Œ" loading="lazy" decoding="async" />
                <span>æŸ¥çœ‹é¡¹ç›®</span>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-info">
                <div class="card-name">Luna Wick – åˆ›æ„å“ç‰Œ & Artistic Excellence</div>
                <div class="card-tags">
                    <ul>
                        <li>åˆ›æ„å“ç‰Œ</li>
                        <li>Artistic Design</li>
                        <li>Brand Excellence</li>
                    </ul>
                </div>
            </div>
            <div class="card-action">
                <a href="/zh/work/web-design-&-development/">View Project</a>
            </div>
        </div>
    </div>

    <!-- More Button -->
    <div class="cards-more">
        <a href="/zh/work/">More projects</a>
    </div>
</div>

						</div>

						<div class="active-header js-active-header">
							<div class="header-cross js-cross">
								<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
									<line x1="0" y1="0" x2="100%" y2="100%" vector-effect="non-scaling-stroke" stroke="currentColor" stroke-width="1.5" />
								</svg>
							</div>
							<div class="header-cross js-cross">
								<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
									<line x1="100%" y1="0" x2="0" y2="100%" vector-effect="non-scaling-stroke" stroke="currentColor" stroke-width="1.5" />
								</svg>
							</div>
							<div class="heart-title">
								<div class="heart">
									<svg class="icon" width="100%" height="100%">
										<use xlink:href="#i-heart"></use>
									</svg>
								</div>
								<div class="title title__default">
									<h2><span>Digital trailblazers&nbsp;&mdash;</span>
<div class="citebox js-karaoke">
    <div class="citebox-content js-karaoke-content">
        <span>engineering next-level design and tech from concept to launch.</span>
    </div>
</div>

									</h2>
								</div>
							</div>

							<div class="inner-wrapper">
								<div class="numgrid">
																			<div class="numgrid-item js-aos">
											<div class="num">
												<div class="num-val">
													<div>280+</div>
												</div>
												<div class="num-text">
													<div>
														successful cases <br class="desktop" />
in å“ç‰Œç­–åˆ’, ç½‘é¡µè®¾è®¡ &amp;&nbsp;Apps																											</div>
												</div>
											</div>
										</div>
																			<div class="numgrid-item js-aos">
											<div class="num">
												<div class="num-val">
													<div>9.8</div>
												</div>
												<div class="num-text">
													<div>
														average NPS* score<br class="desktop" />
from our clients																													<div class="num-note">*Net Promoter Score &mdash; willingness to recommend a service from 1-10</div>
																											</div>
												</div>
											</div>
										</div>
																			<div class="numgrid-item js-aos">
											<div class="num">
												<div class="num-val">
													<div>8+</div>
												</div>
												<div class="num-text">
													<div>
														years of innovating <br class="desktop" />
with clients																											</div>
												</div>
											</div>
										</div>
																	</div>

							</div>
						</div>
					</div>
				</div>
				
				
				<div class="marquee js-runner">
    <div class="marquee-line js-runner-content">
        <div class="marquee-line_text">Aenfinite Digital Wizards</div>
        <div class="marquee-line_text">å®šåˆ¶ç½‘ç«™ & Apps</div>
        <div class="marquee-line_text">Bold å“ç‰Œç­–åˆ’ & Design</div>
        <div class="marquee-line_text">Smart è‡ªåŠ¨åŒ– & AI</div>
        <div class="marquee-line_text">3D & Motion Experiences</div>
        <div class="marquee-line_text">Creative + ç§‘æŠ€ Synergy</div>
        <div class="marquee-line_text">Global Clients, Local Roots</div>
        <div class="marquee-line_text">Made-to-Measure Solutions</div>
        <div class="marquee-line_text">Shopify & ç”µå­å•†åŠ¡ Experts</div>
        <div class="marquee-line_text">Next-Level UX/UI Strategy</div>
        <div class="marquee-line_text">Aenfinite  Ideas Into Reality</div>
    </div>
</div>

				
				<div class="section section__clients">
					<div class="wrapper">
						<div class="inner-wrapper">
							<div class="title title__default">
								<h2>Already in Blue</h2>
							</div>
							
							
						</div>
					</div>
				</div>

			</div>

			<div class="footer">
				<div class="wrapper">
					<div class="footer-caption">
						<div class="title title__default">
							<h2>Ready <span class="alt">for your<br class="desktop" /> biggest challenge</span></h2>
						</div>
					</div>
					<div class="footer-form">
						
<div class="wpcf7" id="wpcf7-f1502-o1" lang="en-US" dir="ltr" data-wpcf7-id="1502">
<div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="#" method="post" class="wpcf7-form init" aria-label="è”ç³»æˆ‘ä»¬ form" novalidate="novalidate" data-status="init">
<div style="display: none;">
<input type="hidden" name="_wpcf7" value="1502" />
<input type="hidden" name="_wpcf7_version" value="6.0.6" />
<input type="hidden" name="_wpcf7_locale" value="en_US" />
<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1502-o1" />
<input type="hidden" name="_wpcf7_container_post" value="0" />
<input type="hidden" name="_wpcf7_posted_data_hash" value="" />
<input type="hidden" name="_wpcf7_recaptcha_response" value="" />
</div>
<div class="cell">
	<div class="message-send-true">
		<p>Thanks! We'll be in touch.
		</p>
	</div>
	<p><span class="wpcf7-form-control-wrap" data-name="your-email"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email subscribe-input" aria-required="true" aria-invalid="false" placeholder="Drop us your email and let&#039;s go" value="" type="email" name="your-email" /></span>
	</p>
	<div class="submit">
		<p><em></em><input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Submit" />
		</p>
	</div>
</div>
<div class="hide">
	<p><span class="wpcf7-form-control-wrap" data-name="datas-message"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="datas-message" /></span><span class="wpcf7-form-control-wrap" data-name="times-message"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="times-message" /></span><span class="wpcf7-form-control-wrap" data-name="datac-message"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="datac-message" /></span><span class="wpcf7-form-control-wrap" data-name="timec-message"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="timec-message" /></span><span class="wpcf7-form-control-wrap" data-name="ip"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="ip" /></span><span class="wpcf7-form-control-wrap" data-name="ipdetails"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="ipdetails" /></span><span class="wpcf7-form-control-wrap" data-name="urll"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="urll" /></span><span class="wpcf7-form-control-wrap" data-name="utm_id"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="utm_id" /></span><span class="wpcf7-form-control-wrap" data-name="utm_source"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="utm_source" /></span><span class="wpcf7-form-control-wrap" data-name="utm_medium"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="utm_medium" /></span><span class="wpcf7-form-control-wrap" data-name="utm_campaign"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="utm_campaign" /></span><span class="wpcf7-form-control-wrap" data-name="utm_term"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="utm_term" /></span><span class="wpcf7-form-control-wrap" data-name="utm_content"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="utm_content" /></span><span class="wpcf7-form-control-wrap" data-name="urlback"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="urlback" /></span><span class="wpcf7-form-control-wrap" data-name="linkcontact"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-text" aria-invalid="false" value="" type="text" name="linkcontact" /></span>
	</p>
</div><div class="wpcf7-response-output" aria-hidden="true"></div>
</form>
</div>
					</div>
					<div class="footer-grid">
						<div class="footer-grid_tel">
    <div class="footer-title">Phone</div>
    <div class="footer-text">
        <a href="tel:+13034199782">+1 303.419.9782</a>
    </div>
</div>

						<div class="footer-grid_address">
    <div class="footer-title">åœ°å€</div>
    <div class="footer-text">
        1500 Grant Street<br />
        Denver, CO 80203<br />
        USA
    </div>
						</div>
						<div class="footer-grid_email">
							<div class="footer-title">Email</div>
							<div class="footer-text">
								<a href="mailto:hello@aenfinite.com">hello@aenfinite.com</a>
							</div>
						</div>
						<div class="footer-grid_service">
							<div class="footer-title">Areas of Expertise</div>
<div class="footer-text">
    <ul id="menu-header-services-menu" class="menuss">
        <li class="menu-item"><a href="../services/web-design/">ç½‘é¡µè®¾è®¡</a></li>
        <li class="menu-item"><a href="../services/custom-web-development/">å®šåˆ¶ç½‘ç«™è®¾è®¡</a></li>
        <li class="menu-item"><a href="../services/e-commerce-websites/">ç”µå­å•†åŠ¡ç½‘ç«™</a></li>
        <li class="menu-item"><a href="../services/wordpress-websites/">WordPressç½‘ç«™</a></li>
        <li class="menu-item"><a href="../services/custom-development/">å®šåˆ¶å¼€å‘</a></li>
        <li class="menu-item"><a href="../services/ui-ux-design/">UI/UXè®¾è®¡</a></li>
        <li class="menu-item"><a href="../services/branding/">å“ç‰Œç­–åˆ’ &amp; æ ‡å¿—è®¾è®¡</a></li>
        <li class="menu-item"><a href="../services/graphic-design/">å¹³é¢è®¾è®¡</a></li>
        <li class="menu-item"><a href="../services/packaging-design/">åŒ…è£…è®¾è®¡</a></li>
        <li class="menu-item"><a href="../services/digital-marketing/">æ•°å­—è¥é”€</a></li>
        <li class="menu-item"><a href="../services/app-development/">åº”ç”¨å¼€å‘</a></li>
    </ul>
</div>

						</div>
						<div class="footer-grid_social">
							<div class="footer-title">Follow us</div>
							<div class="footer-text">
								<div class="social">
									<ul>
																			</ul>
								</div>
							</div>
						</div>

						<div class="footer-grid_copyright">
							<p>Copyright &copy;&nbsp;2025 Aenfinite LLC | Based in Denver &amp;&nbsp;Beyond | All rights reserved</p>
						</div>

						<div class="footer-grid_nav" style="display:none!important;">
							<ul>
								<li>
									<a href="#">Privacy policy</a>
								</li>
								<li>
									<a href="#">Cookies</a>
								</li>
								<li>
									<a href="#">Preferences</a>
								</li>
								<li>
									<a href="#">Our Forest</a>
								</li>
							</ul>
						</div>

					</div>
				</div>
			</div>

			<div class="menu js-menu mobile">
				<div class="wrapper">
					<div class="menu-inner">
						<div class="menu-header">
							<div class="topbar">
								<div class="topbar-logo">
									<a href="../">
										<img src="/wp-content/themes/aenfinite.com/images/aenfinite-full.svg" alt="Aenfinite" class="nav-logo nav-logo-default" loading="lazy" decoding="async">
										<img src="/wp-content/themes/aenfinite.com/images/aenfinite-full.svg" alt="Aenfinite" class="nav-logo nav-logo-active" loading="lazy" decoding="async">
									</a>
								</div>
								<div class="menu-close js-menu-toggle"></div>
							</div>
						</div>
						<div class="menu-nav">
							<ul id="menu-header-services-menu-1" class="menuss"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2275"><a href="../services/web-design/">ç½‘é¡µè®¾è®¡</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2276"><a href="../services/branding/">å“ç‰Œç­–åˆ’</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6909"><a href="../services/trade-show-booth-design/">Trade Shows</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2277"><a href="../services/packaging-design/">åŒ…è£…è®¾è®¡</a></li>
</ul>							
						</div>
						<div class="menu-footer">
							<ul>
															</ul>
						</div>
					</div>
				</div>
			</div>

		</div>
		
		<style>
			.hide { display:none!important; }
			.mclients .mclient .slick-slide img {
				transform: scale(0);
				opacity: 0;
				object-fit: contain;
				object-position: center;
				transition-duration: .5s;
				transition-property: opacity, transform;
				margin:0 auto;
			}
		
			.mclients .mclient .slick-slide.slick-active img {
				transform: scale(1);
				opacity: 1;	
			}
		</style>

		<script src="/wp-content/themes/aenfinite.com/js/lazyload.min.js"></script>
		<link rel="stylesheet" href="https://unpkg.com/aos@3.0.0-beta.6/dist/aos.css" />
		<script src="/wp-content/themes/aenfinite.com/js/slick.js"></script>
		<script src="/wp-content/themes/aenfinite.com/static/js/aos.js"></script>
		<script>
			/*! js-cookie v3.0.1 | MIT */
			!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));
			
			$(document).ready(function () {
				
				 document.querySelector('video').play();
				
				function utmget(){
					var self = window.location.toString(); console.log(self);
					var querystring = self.split("?"); console.log(querystring);
					if (querystring.length > 1) {
						var pairs = querystring[1].split("&"); console.log(pairs);
						for (i in pairs) {
							var keyval = pairs[i].split("=");
							console.log(keyval[0]);
							console.log(keyval[1]);
							Cookies.set(keyval[0], keyval[1], { expires: 7, path: '/', domain: '.aenfinite.com' });
						}
					}
					if (Cookies.get('utm_source')) {
						$('input[name="utm_source"]').val(Cookies.get('utm_source'));
					}
					if (Cookies.get('utm_medium')) {
						$('input[name="utm_medium"]').val(Cookies.get('utm_medium'));
					}
					if (Cookies.get('utm_campaign')) {
						$('input[name="utm_campaign"]').val(Cookies.get('utm_campaign'));
					}
					if (Cookies.get('utm_id')) {
						$('input[name="utm_id"]').val(Cookies.get('utm_id'));
					}
					if (Cookies.get('utm_content')) {
						$('input[name="utm_content"]').val(Cookies.get('utm_content'));
					}
					if (Cookies.get('utm_term')) {
						$('input[name="utm_term"]').val(Cookies.get('utm_term'));
					}
					if (Cookies.get('utm_id')) {
						$('input[name="utm_id"]').val(Cookies.get('utm_id'));
					}
					
					$('input[name="ip"]').val($('.ip').text()); console.log('IP: ' + $('.ip').text());
					$('input[name="ipdetails"]').val('https://whatismyipaddress.com/ip/' + $('.ip').text()); 
					$('input[name="urll"]').val($('.url').text()); console.log($('.url').text());
					$('input[name="urlback"]').val($('.urlback').html()); console.log($('.urlback').html());
					
					$('input[name="datas-message"]').val($('.datas').html()); console.log('Data server: ' + $('.datas').html());
					$('input[name="times-message"]').val($('.times').html()); console.log('Time server: ' + $('.times').html());	
					
var currentdate = new Date();
	$('input[name="datac-message"]').val((currentdate.getMonth()+1) + '.' + currentdate.getDate() + '.' + currentdate.getFullYear()); console.log('Data client: ' + currentdate.getDate() + '.' + (currentdate.getMonth()+1) + '.' + currentdate.getFullYear());	
	$('input[name="timec-message"]').val(currentdate.getHours() + '-' + currentdate.getMinutes()); console.log('Time client: ' + currentdate.getHours() + '-' + currentdate.getMinutes());	
					
					history.pushState('', document.title, window.location.pathname);
				}
				setTimeout(function(){ utmget(); }, 2000);
				
				$(".js-aos").each(function (i) {

					var vh = $(window).height();

					if (!$(this).hasClass("aos-animate")) {
						$dataeffect = $(this).attr('data-effect');
						if (typeof $dataeffect === "undefined") {
							$(this).attr("data-aos", true).attr("data-aos-offset", vh / 3).attr("data-aos-once", "true");
						} else {
							$(this).attr("data-aos", $dataeffect).attr("data-aos-offset", vh / 3).attr("data-aos-once", "true");
						}
					}

				});
			
				$('.service-title').on("click", function(){
					$this = $(this);
					$('.service.active').find('.service-content').slideToggle( "333", function() {
						$('.service').removeClass('active');
						$this.closest('.service').addClass('active');
						$this.closest('.service').find('.service-content').slideToggle("333");
					});
					return false;
				});
			
				$(".js-menu-toggle").click(function(e) {
					e.preventDefault();
					if ($(this).parents(".header").length && $(window).scrollTop() > 0) {
						$("html, body").animate({
							scrollTop: 0
						}, 250, function() {
							$(".document").addClass("menu-active");
						});
					} else {
						$(".document").toggleClass("menu-active");

					}

					return;
				});

				$(".js-active-header").each(function(i) {
					var container = $(this),
						cross = container.find(".js-cross"),
						offset = container.offset().top;

					container.mousemove(function(e) {
						cross.css({
							left: e.pageX,
							top: e.pageY - offset
						});
					}).mouseleave(function() {
						cross.removeAttr("style");
					});

				});

				$(".js-runner").each(function(i) {

					var runner = $(this),
						content = runner.find(".js-runner-content"),
						mw = runner.width(),
						rw = content.width(),
						els = content.children(),
						stop = 0;

					if (mw > rw) {

						while (stop != 1) {
							els.each(function(el) {
								$(this).clone().appendTo(content);
							});
							rw = content.width();
							if (mw < rw) {
								stop = 1;
							}

						}
					}

					runner.append(content.clone());

				});
				
				// wpcf7mailsent wpcf7submit
				document.addEventListener( 'wpcf7mailsent', function( event ) {
					$('.message-send-true').addClass('show');
					setTimeout(function() { 
						$('.message-send-true').removeClass('show');
					}, 3000);		
				}, false );
		
				$('.mclient .list-1').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: false,
					arrows: false,
				});
				
				$('.mclient .list-2').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: false,
					arrows: false,
				});
				
				$('.mclient .list-3').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: false,
					arrows: false,
				});
				
				$('.mclient .list-4').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: false,
					arrows: false,
				});
				
				$('.mclient .list-5').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: false,
					arrows: false,
				});

				$('.mclient .list-6').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: false,
					arrows: false,
				});
				
				$('.mclient .list-7').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: false,
					arrows: false,
				});
				
				$('.mclient .list-8').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: false,
					arrows: false,
				});

				function lineSplitter(el) {

					var c = el.find(".js-karaoke-content"),
						t = c.html(),
						p = t.replace(/(<([^>]+)>)/ig, ''),
						vh = $(window).height(),
						//mask = el.find(".js-karaoke-mask"),
						test = $("<div>", {}).css({
							position: "absolute",
							visibility: "hidden",
							height: "auto",
							width: "auto",
							"white-space": "nowrap"
						});

					el.prepend(test);

					//mask.html(null);
					c.html(null);

					var allWords = p.match(/\\S+/g);
					var lines = [];
					var currentLine = "";

					for (var i = 0; i < allWords.length; i++) {
						// Build a new line and check if it is now too large for the container
						var newLine = currentLine + allWords[i] + " ";
						test.html(newLine);
						if (test.width() > el.width()) {
							// If the line is now larger, use the previous line (without the last added word) and reset the current line to just the last word
							lines.push(currentLine.trim());
							
							currentLine = allWords[i] + " ";
						} else {
							// If it's not long enough yet, just keep adding words
							currentLine = newLine;
						}
					}

					lines.push(currentLine.trim());

					for (var i = 0; i < lines.length; i++) {

						var line = $("<span>", {
							html: lines[i] + " "
						}).attr("data-aos", "true").attr("data-aos-offset", 400);
						line.appendTo(c);

					}

					// el.append(mask);
					test.remove();

				}

				$(".js-karaoke").each(function(i) {
					lineSplitter($(this));
				});		
				
				var origTitle = document.title;

				window.addEventListener('focus', function() {
					document.title = origTitle;
				},false);

				window.addEventListener('blur', function() {
					document.title = 'aenfinite.com misses you!';
				},false);
				
				$(function() {
					AOS.init();
				});
				
			});
		</script>
		
		<!-- LinkedIn Insight Tag -->
    <script >
        
    </script>
    <script >
        (function(l) {
            if (!l) {
                window.lintrk = function(a,b) {
                    window.lintrk.q.push([a,b])
                };
                window.lintrk.q=[]
            }
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
        })(window.lintrk);
    </script>
    <noscript>
        <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=6313658&amp;fmt=gif" loading="lazy" decoding="async" />
    </noscript>
    <!-- End LinkedIn Insight Tag --><link rel='stylesheet' id='classic-theme-styles-css' href='/wp-includes/css/classic-themes.mind1c0.css?ver=6.7.2'  media='all' />
<link rel='stylesheet' id='contact-form-7-css' href='/wp-content/plugins/contact-form-7/includes/css/stylesfc7a.css?ver=6.0.6'  media='all' />
<!-- wp-hooks removed -->
<!-- wp-i18n removed -->
<!-- wp-i18n config removed -->
<!-- CF7 SWV JS removed -->
<!-- wpcf7 config removed -->
<!-- CF7 JS removed - using custom-form-handler.js + n8n -->
<script 
  src="https://www.google.com/recaptcha/api.js?render=6LcrLtwrAAAAAFcn1f0NNXjp9v5yqqf-gwQVcLgK" 
  async defer>
</script>
<script>
  grecaptcha.ready(function() {
    grecaptcha.execute('6LcrLtwrAAAAAFcn1f0NNXjp9v5yqqf-gwQVcLgK', {action: 'submit'}).then(function(token) {
      // Put the token into a hidden field for your form
      var recaptchaResponse = document.getElementById('recaptchaResponse');
      if (recaptchaResponse) {
        recaptchaResponse.value = token;
      }
    });
  });
</script><!-- wp-polyfill removed -->
<!-- wpcf7 recaptcha config removed -->
<!-- CF7 recaptcha JS removed -->
	<!-- Cloudflare challenge removed -->	<!-- Universal Button and Checkbox Highlighting Script -->	<script src="/js/button-highlights.js"></script>
	<!-- Email Subscription Form Handler -->
	<script src="/darkmode/email-subscription.js"></script>
		
<div class="sitemap-footer" style="text-align: center; padding: 20px 0 40px;"><a href="/sitemap.xml" style="color: #999; text-decoration: none; font-size: 14px; font-family: sans-serif; transition: color 0.3s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#999'">Sitemap</a></div>
`;

export default function Page() {
  return (
    <>
        <script
          key="schema-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aenfinite.com/#organization",
      "name": "Aenfinite®",
      "url": "https://aenfinite.com/",
      "logo": "https://aenfinite.com/wp-content/uploads/2025/01/aenfinite-logo.png",
      "sameAs": [
        "https://www.facebook.com/aenfinite/",
        "https://twitter.com/aenfinitee",
        "https://www.instagram.com/aenfinite/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://aenfinite.com/#website",
      "url": "https://aenfinite.com/",
      "name": "Aenfinite®",
      "publisher": { "@id": "https://aenfinite.com/#organization" },
      "inLanguage":"zh-CN"
    },
    {
      "@type": "WebPage",
      "@id": "https://aenfinite.com/#webpage",
      "url": "https://aenfinite.com/",
      "name": "Aenfinite® – Global Digital æœºæž„ for ç½‘é¡µè®¾è®¡, å“ç‰Œç­–åˆ’, SEO & AI Solutions",
      "description": "Aenfinite® is a global æ•°å­—æœºæž„ offering creative ç½‘é¡µè®¾è®¡, UI/UX, å“ç‰Œç­–åˆ’, SEO, æ•°å­—è¥é”€, and AI-powered business solutions. Based in Colorado with worldwide clients.",
      "inLanguage":"zh-CN",
      "isPartOf": { "@id": "https://aenfinite.com/#website" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "@id": "https://aenfinite.com/wp-content/uploads/2025/01/aenfinite-darkmode-thumbnail.jpg",
        "url": "https://aenfinite.com/wp-content/uploads/2025/01/aenfinite-darkmode-thumbnail.jpg",
        "width": 1200,
        "height": 630
      }
    }
  ]
}` }}
        />
      <HtmlPage content={pageContent} bodyClass={bodyClass} headStyles={headStyles} overrideCss={overrideCss} />
    </>
  );
}
