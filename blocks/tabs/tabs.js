export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    let count = 1;
    [...row.children].forEach((col) => {
      if (count === 1) {
        const divElement = col.closest('div');
        const anchorElement = document.createElement('a');
        anchorElement.href = '#';
        anchorElement.classList.add('myLink');
        anchorElement.appendChild(divElement.cloneNode(true));
        divElement.parentNode.replaceChild(anchorElement, divElement);
      }
      if (count === 2) {
        const divElement = col.closest('div');
        if (divElement && divElement.children.length === 1) {
          // picture is only content in column
          divElement.classList.add('tabs-content');
        }
      }
      count += 1;
    });
  });
}
