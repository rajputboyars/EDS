export default function decorate(block) {
  const rows = [...block.children];

  // Add class to each row
  rows.forEach((row) => {
    row.classList.add('id-card-row');
  });

  // Employee photo
  const image = block.querySelector('img');

  if (image) {
    image.classList.add('id-card-photo');
  }

  // Employee name
  const name = block.querySelector('h2');

  if (name) {
    name.classList.add('id-card-name');
  }

  // Add a class to the ID card itself
  block.classList.add('id-card');
}