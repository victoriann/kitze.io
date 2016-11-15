import $ from 'jquery';

export const scrollToElement = section => {
  const foundElement = $(`#${section}`);
  const $body = $('body');

  if (foundElement.length === 0 || $body.scrollTop() !== 0) {
    return false;
  }

  setTimeout(() => {
    $body.animate({
      scrollTop: foundElement.offset().top - 30
    }, 500);
  }, 500);
}