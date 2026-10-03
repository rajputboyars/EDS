export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');

    while (row.firstElementChild) {
      li.append(row.firstElementChild);
    }

    [...li.children].forEach((cell) => {
      if (cell.querySelector('picture')) {
        cell.classList.add('cards-card-image');
      } else {
        cell.classList.add('cards-card-body');
      }
    });

    ul.append(li);
  });

  block.textContent = '';
  block.append(ul);
}