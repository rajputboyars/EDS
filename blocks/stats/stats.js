export default function decorate(block) {
  [...block.children].forEach((row) => {
    const cells = [...row.children];

    if (cells.length >= 2) {
      cells[0].classList.add('stats-number');
      cells[1].classList.add('stats-label');

      row.classList.add('stats-item');
    }
  });
}