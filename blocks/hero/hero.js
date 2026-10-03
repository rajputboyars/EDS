export default function decorate(block) {
  const rows = [...block.children];

  const content = document.createElement('div');
  content.classList.add('hero-content');

  rows.forEach((row) => {
    content.append(row);
  });

  block.append(content);

  const heading = block.querySelector('h1, h2, h3');

  if (heading) {
    heading.classList.add('hero-title');
  }

  const link = block.querySelector('a');

  if (link) {
    link.classList.add('hero-button');
  }
}