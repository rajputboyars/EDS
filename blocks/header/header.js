import { loadFragment } from '../../scripts/aem.js';

export default async function decorate(block) {
  // block = the Header block that EDS created.
  //
  // Initially it may look roughly like:
  //
  // <div class="header block">
  // </div>
  //
  // The actual navigation content is NOT written
  // directly inside this block.
  //
  // We are going to load it from the /nav document.


  const nav = await loadFragment('/nav');

  // loadFragment('/nav')
  // loads the content authored in our DA.live "nav" document.
  //
  // Example nav content:
  //
  // LearnEdge
  // Home
  // Learning Paths
  // Courses
  // FAQ
  // Start Learning
  //
  //
  // "await" is needed because loading another document
  // takes some time.
  //
  // nav will contain the loaded DOM content.


  if (!nav) return;

  // Safety check.
  //
  // If /nav could not be loaded,
  // stop the function instead of causing errors.


  const navWrapper = document.createElement('nav');

  // Create semantic navigation:
  //
  // <nav></nav>


  navWrapper.classList.add('header-nav');

  // Now:
  //
  // <nav class="header-nav"></nav>


  while (nav.firstElementChild) {
    navWrapper.append(nav.firstElementChild);
  }

  // Move all loaded nav content
  // into our new <nav> element.
  //
  // Before:
  //
  // nav
  // ├── LearnEdge
  // ├── Home
  // ├── Courses
  // └── ...
  //
  // After:
  //
  // navWrapper
  // ├── LearnEdge
  // ├── Home
  // ├── Courses
  // └── ...


  block.textContent = '';

  // Clear anything currently inside the Header block.


  block.append(navWrapper);

  // Final basic structure:
  //
  // <div class="header block">
  //
  //   <nav class="header-nav">
  //     ...
  //   </nav>
  //
  // </div>

const toggleButton = document.createElement('button');

// Creates:
// <button></button>


toggleButton.classList.add('nav-toggle');

// Becomes:
// <button class="nav-toggle"></button>


toggleButton.setAttribute('aria-label', 'Open navigation');

// Gives screen readers a useful description.


toggleButton.setAttribute('aria-expanded', 'false');

// Initially:
// menu is closed.


toggleButton.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
`;

// Creates the three hamburger lines:
//
// ☰


block.prepend(toggleButton);

// Put button before the nav.
//
// Header becomes:
//
// header
// ├── nav-toggle
// └── header-nav


toggleButton.addEventListener('click', () => {
  // Run whenever hamburger is clicked.


  const isOpen = block.classList.contains('nav-open');

  // If block currently has:
  //
  // class="header block nav-open"
  //
  // then:
  // isOpen = true
  //
  // otherwise:
  // isOpen = false


  block.classList.toggle('nav-open');

  // Adds nav-open if missing.
  // Removes nav-open if already present.


  toggleButton.setAttribute(
    'aria-expanded',
    String(!isOpen),
  );

  // Closed → true
  // Open   → false
});

  const links = navWrapper.querySelectorAll('a');

  // Get every navigation link.
  //
  // Example:
  //
  // links[0] = Home
  // links[1] = Learning Paths
  // links[2] = Courses
  // links[3] = FAQ
  // links[4] = Start Learning


  links.forEach((link) => {
    link.classList.add('header-link');
  });

  // Add:
  //
  // class="header-link"
  //
  // to every navigation link.
}