export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const cells = [...row.children];

    cells.forEach((cell) => {
      cell.classList.add('columns-column');
    });
  });
}