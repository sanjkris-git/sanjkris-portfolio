# Sanjay Krishnan - Personal Portfolio

Responsive personal portfolio website built to showcase my academic journey, professional experience in Motorsports Engineering, and personal interests.

Link to Website: sanjkris.com

How It's Made:
Tech used: HTML5, CSS3, Vanilla JavaScript, Google Fonts (Montserrat), FontAwesome

This project is a bespoke, single-page-style personal portfolio built from scratch without relying on heavy frameworks like React or Bootstrap. The design centers around a modern, dark-themed aesthetic (#121212 background) with a fixed left-hand sidebar navigation that elegantly collapses into a top-row flex container on mobile devices.

To bring the page to life, I focused heavily on custom interactivity:
1. Dynamic "About Me" Toggle: I built a custom CSS toggle switch (using the checkbox hack) tied to Vanilla JS. When toggled, it dynamically swaps the DOM's innerHTML and CSS classes to seamlessly transition between my "Professional" bio (Motorsports Engineering, TA work) and "Personal" bio (Badminton Club, street photography).
2. Smooth Page Transitions: Instead of harsh page loads, I implemented custom JavaScript functions (fadeInPage and fadeOutPage) that apply CSS opacity and transform translations to the main content area when navigating between sections.
3. Scroll-Triggered Animations: I utilized the IntersectionObserver API to detect when the "About Me" section enters the viewport, triggering a smooth fade-in effect (.visible class toggle) as the user scrolls down the page.

Optimizations
When building this portfolio, I wanted to ensure the animations felt buttery smooth while maintaining high performance:
1. Intersection Observer over Scroll Event Listeners: Instead of attaching heavy, continuous window.addEventListener('scroll') functions to trigger the "About Me" fade-in, I utilized the IntersectionObserver API. This offloads the calculation to the browser, significantly reducing main-thread blocking and improving rendering performance.
2. GPU-Accelerated Animations: For hover effects and layout shifts (like the profile picture floating effect and the sliding underlines on the nav menu), I explicitly used CSS transform and opacity properties. These properties are hardware-accelerated by the GPU, preventing layout thrashing and painting issues compared to animating margins or padding.
3. Zero-Dependency Architecture: By writing the state management (for the toggle switch) and routing animations entirely in Vanilla JavaScript, I kept the final bundle size incredibly small. There is no external library bloat—just pure HTML, CSS, and JS.
