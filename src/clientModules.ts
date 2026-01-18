/**
 * Client-side module to synchronize TOC scroll with main content
 * and hide left sidebar on scroll
 */

let scrollHandler: (() => void) | null = null;
let lastScrollTop = 0;
let accumulatedScroll = 0;
const SCROLL_THRESHOLD = 150; // Minimum scroll distance to trigger hide/show

function setupScrollEffects() {
  // Remove existing handler
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
    scrollHandler = null;
  }

  // Find TOC container
  const tocContainer = document.querySelector(
    ".table-of-contents",
  ) as HTMLElement | null;

  // Find left sidebar
  const leftSidebar = document.querySelector(
    ".theme-doc-sidebar-container",
  ) as HTMLElement | null;

  // Check if TOC needs scroll
  const hasTOCScroll = tocContainer
    ? tocContainer.scrollHeight > tocContainer.clientHeight
    : false;

  // Track if mouse is over sidebar
  let isMouseOverSidebar = false;

  if (leftSidebar) {
    leftSidebar.addEventListener("mouseenter", () => {
      isMouseOverSidebar = true;
    });
    leftSidebar.addEventListener("mouseleave", () => {
      isMouseOverSidebar = false;
    });
  }

  // Create scroll handler
  scrollHandler = () => {
    const windowScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // TOC scroll sync
    if (hasTOCScroll && tocContainer && documentHeight > 0) {
      const scrollRatio = windowScrollTop / documentHeight;
      const tocScrollableHeight =
        tocContainer.scrollHeight - tocContainer.clientHeight;

      if (tocScrollableHeight > 0) {
        tocContainer.scrollTop = scrollRatio * tocScrollableHeight;
      }
    }

    // Left sidebar hide on scroll down (with threshold)
    if (leftSidebar && !isMouseOverSidebar) {
      const scrollDelta = windowScrollTop - lastScrollTop;

      // Accumulate scroll in the same direction
      if (scrollDelta > 0) {
        // Scrolling down
        if (accumulatedScroll < 0) accumulatedScroll = 0;
        accumulatedScroll += scrollDelta;
      } else if (scrollDelta < 0) {
        // Scrolling up
        if (accumulatedScroll > 0) accumulatedScroll = 0;
        accumulatedScroll += scrollDelta;
      }

      // Only trigger after threshold is reached
      if (accumulatedScroll > SCROLL_THRESHOLD && windowScrollTop > 200) {
        leftSidebar.classList.add("sidebar-hidden");
        accumulatedScroll = 0;
      } else if (accumulatedScroll < -SCROLL_THRESHOLD) {
        leftSidebar.classList.remove("sidebar-hidden");
        accumulatedScroll = 0;
      }

      // Always show sidebar when near top
      if (windowScrollTop < 100) {
        leftSidebar.classList.remove("sidebar-hidden");
        accumulatedScroll = 0;
      }
    }

    lastScrollTop = windowScrollTop;
  };

  window.addEventListener("scroll", scrollHandler, { passive: true });

  // Set initial position
  scrollHandler();
}

export function onRouteDidUpdate() {
  // Setup after page transition
  lastScrollTop = 0;
  accumulatedScroll = 0;
  setTimeout(setupScrollEffects, 500);
}
