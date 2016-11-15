import $ from 'jquery';

export const scrollToElement = section => {
  const foundElement = $(`#${section}`);
  const $body = $('html, body');

  if (foundElement.length === 0 || $body.scrollTop() !== 0) {
    return false;
  }

  $body.animate({
    scrollTop: foundElement.offset().top - 30
  }, 500);
}