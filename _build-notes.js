
// MODERN CSS BEST / COMMON PRACTICES 2024/2025 ETC


// The fundamentals haven’t changed much—meta viewport tags, media queries, and flexible layouts are still the backbone.
// However, modern trends like clamp(), CSS Grid, and the emergence of container queries add more flexibility and power.


// FONTS AND PADDING

// font-size: clamp(1rem, 2vw, 2rem);
// for dynamic fluid layouts without / with less media queries:

// padding: clamp(10px, 2vw, 20px);
// for padding, margins, and gaps to adapt layouts dynamically:


// FLEXBOX AND GRIDS 

// Flexbox: Remains standard for one-dimensional layouts (e.g., navbars, alignment)
// CSS Grid: Now widely supported and considered the best choice for complex, two-dimensional layouts.

/*

.container {

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1rem;

}

*/

// ENCAPSULATING STYLES FOR RELIABLE RENDERING

// For more complex web apps, framework-specific solutions like styled-components (React) or scoped styles (Vue.js)..
// provide component-level styling, keeping styles encapsulated and reducing global CSS conflicts.


// VIEWPORT AND SCALING

// vw, vh, vmin, vmax: Still invaluable for sizing relative to the viewport.
// svh, lvh, dvh: New units (small, large, dynamic viewport height)..
// address viewport inconsistencies on mobile devices with toolbars or dynamic resizing.

// Modern apps often need components to fill the viewport dynamically. Use:
// height: 100vh; /* Or svh, dvh for mobile consistency */

// Soon to be supported across all major browsers, container queries allow styles to respond to the size of the container,
// not the viewport, making component-level design more modular and reusable.

// Design for smaller screens first (min-width breakpoints), then progressively enhance for larger devices.
// This approach ensures optimal performance on mobile devices.


// PWA / Progressive web apps..
// If you’re building web apps, ensure they’re PWA-compliant:
// Responsive Design remains crucial for PWAs.
// Consider using CSS for offline-first strategies like skeleton screens for loading states.

// OLDER BROWSER SUPPORT

// Modern Tools: Use Chrome DevTools’ “responsive design mode” or tools like BrowserStack for cross-device testing. (obviously)
// PostCSS Autoprefixer: Ensure your CSS supports older browsers where necessary.


// FRAMEWORKS AND RESET(S)

// While pure CSS is still the foundation, many developers leverage modern tools and frameworks:
// Tailwind CSS: Highly popular for utility-first CSS. Developers love it for rapid prototyping and maintainable class-based design.

// Instead of the traditional reset.css, many use “modern CSS resets” or libraries like Normalize.css or Bootstrap Reboot for consistency.


// IMAGES AND DYNAMIC SIZING

// Responsive Images (For Performance)
// Use the <picture> element with srcset for serving device-specific image sizes. Modern browsers handle this efficiently:

/*

<picture>
<source srcset="image-small.jpg" media="(max-width: 600px)">
<img src="image-large.jpg" alt="Example">
</picture>

*/





