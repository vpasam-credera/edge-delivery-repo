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
        anchorElement.classList.add('my-link');
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

  document.querySelector('.tabs a[data-toggle]').on('click', function (e) {
    e.preventDefault(); // prevent navigating
    const selector = document.querySelector(this).data('toggle'); // get corresponding element
    document.querySelector('.tabs-content div').hide();
    document.querySelector(selector).show();
  });

  document.querySelector('.tabs > a:first-child').addClass('active');
  document.querySelector('.tabs a').click(function () {
    if (document.querySelector(this).hasClass('active')) {
      document.querySelector(this).removeClass('active');
    } else {
      document.querySelector('.my-link').removeClass('active');
      document.querySelector(this).addClass('active');
    }
  });
}
