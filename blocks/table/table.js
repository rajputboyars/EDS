export default function decorate(block) {
  const rows = [...block.children];

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  rows.forEach((row, rowIndex) => {
    const tr = document.createElement('tr');
    const cells = [...row.children];

    cells.forEach((cell) => {
      const element = document.createElement(rowIndex === 0 ? 'th' : 'td');

      while (cell.firstChild) {
        element.append(cell.firstChild);
      }

      tr.append(element);
    });

    if (rowIndex === 0) {
      thead.append(tr);
    } else {
      tbody.append(tr);
    }
  });

  table.append(thead);
  table.append(tbody);

  block.textContent = '';
  block.append(table);
}