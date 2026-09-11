export default function decorate(block) {
  block.classList.add('id-card');

  const rows = [...block.children];

  rows.forEach((row) => {
    row.classList.add('id-card-row');

    const cells = [...row.children];

    if (cells.length < 2) return;

    const label = cells[0].textContent.trim().toLowerCase();

    if (label === 'photo') {
      const image = cells[1].querySelector('img');

      if (image) {
        image.classList.add('id-card-photo');
      }
    }

    if (label === 'name') {
      cells[1].classList.add('id-card-name');
    }

    if (label === 'designation') {
      cells[1].classList.add('id-card-designation');
    }

    if (label === 'employee id') {
      cells[1].classList.add('id-card-employee-id');
    }

    if (label === 'department') {
      cells[1].classList.add('id-card-department');
    }
  });
}