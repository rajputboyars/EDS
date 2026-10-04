export default function decorate(block) {
  const rows = [...block.children];

  const tabsNav = document.createElement('div');
  tabsNav.classList.add('tabs-nav');

  const tabsContent = document.createElement('div');
  tabsContent.classList.add('tabs-content');

  rows.forEach((row, index) => {
    const cells = [...row.children];

    if (cells.length < 2) return;

    const label = cells[0].textContent.trim();
    const content = cells[1];

    const button = document.createElement('button');
    button.textContent = label;
    button.classList.add('tabs-button');

    const panel = document.createElement('div');
    panel.classList.add('tabs-panel');

    panel.append(content);

    if (index === 0) {
      button.classList.add('active');
      panel.classList.add('active');
    }

    button.addEventListener('click', () => {
      const buttons = tabsNav.querySelectorAll('.tabs-button');
      const panels = tabsContent.querySelectorAll('.tabs-panel');

      buttons.forEach((tabButton) => {
        tabButton.classList.remove('active');
      });

      panels.forEach((tabPanel) => {
        tabPanel.classList.remove('active');
      });

      button.classList.add('active');
      panel.classList.add('active');
    });

    tabsNav.append(button);
    tabsContent.append(panel);
  });

  block.textContent = '';

  block.append(tabsNav);
  block.append(tabsContent);
}