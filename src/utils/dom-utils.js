import $ from 'jquery';
const $body = $('html, body');

export const scrollToSection = (section) => {
  const foundElement = $(`#${section}`);
  if (foundElement.length === 0 || $body.scrollTop() !== 0) {
    return false;
  }
  $body.animate({
    scrollTop: foundElement.offset().top - 30
  }, 500);
}

export const scrollBodyToTop = () => {
  $body.scrollTop(0);
}