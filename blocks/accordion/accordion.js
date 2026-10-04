export default function decorate(block) {
  // block = complete Accordion block DOM
  //
  // Example:
  //
  // <div class="accordion block">
  //   <div>
  //     <div>What is EDS?</div>
  //     <div>Edge Delivery Services is...</div>
  //   </div>
  //
  //   <div>
  //     <div>How does DA.live work?</div>
  //     <div>DA.live is used for...</div>
  //   </div>
  // </div>


  const rows = [...block.children];

  // rows = all accordion items
  //
  // rows[0]
  // = What is EDS? | Edge Delivery Services is...
  //
  // rows[1]
  // = How does DA.live work? | DA.live is used for...


  rows.forEach((row, index) => {
    // Loop through every accordion row.
    //
    // First loop:
    // index = 0
    //
    // Second loop:
    // index = 1


    const cells = [...row.children];

    // Each row should contain 2 cells.
    //
    // cells[0] = question
    // cells[1] = answer


    if (cells.length < 2) return;

    // Safety check.
    //
    // If a row does not contain at least 2 cells,
    // skip that row.


    const questionCell = cells[0];

    // Example:
    //
    // questionCell text =
    // "What is EDS?"


    const answerCell = cells[1];

    // Example:
    //
    // answerCell text =
    // "Edge Delivery Services is..."


    const button = document.createElement('button');

    // Creates:
    //
    // <button></button>


    button.classList.add('accordion-button');

    // Now:
    //
    // <button class="accordion-button"></button>


    const panel = document.createElement('div');

    // Creates:
    //
    // <div></div>


    panel.classList.add('accordion-panel');

    // Now:
    //
    // <div class="accordion-panel"></div>


    const questionId = `accordion-question-${index}`;

    // Example:
    //
    // first row:
    // questionId = accordion-question-0
    //
    // second row:
    // questionId = accordion-question-1


    const panelId = `accordion-panel-${index}`;

    // Example:
    //
    // first row:
    // panelId = accordion-panel-0


    button.id = questionId;

    // Adds id to button.
    //
    // Example:
    //
    // <button
    //   id="accordion-question-0"
    // >
    // </button>


    panel.id = panelId;

    // Adds id to answer panel.
    //
    // Example:
    //
    // <div
    //   id="accordion-panel-0"
    // >
    // </div>


    button.setAttribute('aria-expanded', 'false');

    // Accessibility.
    //
    // aria-expanded tells screen readers
    // whether the accordion item is open.
    //
    // false = closed


    button.setAttribute('aria-controls', panelId);

    // Connect button to its answer panel.
    //
    // Example:
    //
    // aria-controls="accordion-panel-0"


    panel.setAttribute('role', 'region');

    // Tells assistive technology that
    // this div represents a content region.


    panel.setAttribute('aria-labelledby', questionId);

    // Connects the answer panel back
    // to the question button.


    panel.hidden = true;

    // Hide answer initially.
    //
    // DOM:
    //
    // <div hidden>
    //   Answer
    // </div>


    while (questionCell.firstChild) {
      button.append(questionCell.firstChild);
    }

    // Move all question content
    // into the button.
    //
    // Before:
    //
    // questionCell
    // └── What is EDS?
    //
    // After:
    //
    // button
    // └── What is EDS?


    while (answerCell.firstChild) {
      panel.append(answerCell.firstChild);
    }

    // Move answer content into panel.
    //
    // Before:
    //
    // answerCell
    // └── Edge Delivery Services is...
    //
    // After:
    //
    // panel
    // └── Edge Delivery Services is...


    row.textContent = '';

    // Remove old question and answer cells
    // from this row.


    row.classList.add('accordion-item');

    // Current row becomes:
    //
    // <div class="accordion-item">
    // </div>


    row.append(button);

    // Add question button.


    row.append(panel);

    // Add answer panel.
    //
    // Final structure:
    //
    // <div class="accordion-item">
    //
    //   <button class="accordion-button">
    //     What is EDS?
    //   </button>
    //
    //   <div class="accordion-panel">
    //     Edge Delivery Services is...
    //   </div>
    //
    // </div>


    button.addEventListener('click', () => {
      // This code runs whenever user clicks
      // the accordion question.


      const isOpen = button.getAttribute('aria-expanded') === 'true';

      // Read current state.
      //
      // If aria-expanded = "true"
      // isOpen = true
      //
      // If aria-expanded = "false"
      // isOpen = false


      button.setAttribute(
        'aria-expanded',
        String(!isOpen),
      );

      // Toggle state.
      //
      // If closed:
      // false → true
      //
      // If open:
      // true → false


      panel.hidden = isOpen;

      // Important:
      //
      // If it WAS open:
      // isOpen = true
      // panel.hidden = true
      // so it closes.
      //
      // If it WAS closed:
      // isOpen = false
      // panel.hidden = false
      // so it opens.
    });
  });
}