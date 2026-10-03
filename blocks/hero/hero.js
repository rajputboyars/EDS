export default function decorate(block) {
  const picture = block.querySelector('picture');
  const heading = block.querySelector('h1, h2, h3');
  const paragraphs = block.querySelectorAll('p');
  const link = block.querySelector('a');

  if (heading) {
    heading.classList.add('hero-title');
  }

  if (paragraphs.length > 0) {
    paragraphs.forEach((paragraph) => {
      paragraph.classList.add('hero-text');
    });
  }

  if (link) {
    link.classList.add('hero-button');
  }

  if (picture) {
    picture.classList.add('hero-image');
  }
}