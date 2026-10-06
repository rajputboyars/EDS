import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  // block = Footer block created by EDS.
  //
  // Example initially:
  //
  // <div class="footer block">
  // </div>


  const footer = await loadFragment('/footer');

  // Loads the DA.live /footer document.
  //
  // Example authored content:
  //
  // LearnEdge
  // Learn practical web development...
  // Courses
  // About
  // Contact
  // © 2026 LearnEdge


  if (!footer) return;

  // Safety check.
  //
  // If /footer could not load,
  // stop here.


  const footerWrapper = document.createElement('div');

  // Creates:
  //
  // <div></div>


  footerWrapper.classList.add('footer-content');

  // Becomes:
  //
  // <div class="footer-content"></div>


  while (footer.firstElementChild) {
    footerWrapper.append(footer.firstElementChild);
  }

  // Move all loaded footer content
  // into our footer-content wrapper.
  //
  // Before:
  //
  // footer
  // ├── LearnEdge
  // ├── description
  // ├── links
  // └── copyright
  //
  // After:
  //
  // footerWrapper
  // ├── LearnEdge
  // ├── description
  // ├── links
  // └── copyright


  block.textContent = '';

  // Remove any placeholder content
  // from the Footer block.


  block.append(footerWrapper);

  // Final structure:
  //
  // <div class="footer block">
  //
  //   <div class="footer-content">
  //      ...
  //   </div>
  //
  // </div>


  const links = footerWrapper.querySelectorAll('a');

  // Get all authored footer links.
  //
  // Example:
  //
  // links[0] = Courses
  // links[1] = About
  // links[2] = Contact


  links.forEach((link) => {
    link.classList.add('footer-link');
  });

  // Add:
  //
  // class="footer-link"
  //
  // to every link.
}