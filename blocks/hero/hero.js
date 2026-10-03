export default function decorate(block) {
  const rows = [...block.children];

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('hero-content');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('hero-image');

  rows.forEach((row) => {
    const cells = [...row.children];

    if (cells.length >= 2) {
      const leftCell = cells[0];
      const rightCell = cells[1];

      if (leftCell.textContent.trim()) {
        contentWrapper.append(leftCell);
      }

      const picture = rightCell.querySelector('picture');

      if (picture) {
        imageWrapper.append(picture);
      }
    }
  });

  block.innerHTML = '';

  block.append(contentWrapper);
  block.append(imageWrapper);

  const heading = contentWrapper.querySelector('h1, h2, h3');

  if (heading) {
    heading.classList.add('hero-title');
  }

  const link = contentWrapper.querySelector('a');

  if (link) {
    link.classList.add('hero-button');
  }
}