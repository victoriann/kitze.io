import $ from 'jquery';
const $body = $('html, body');
import sizes from 'styles/sizes';

export const scrollToSection = (section) => {
  const foundElement = $(`#${section}`);
  if (foundElement.length === 0 || $body.scrollTop() !== 0) {
    return false;
  }
  $body.animate({
    scrollTop: foundElement.offset().top - 30 - sizes.header.height
  }, 500);
}

export const scrollBodyToTop = () => {
  $body.scrollTop(0);
}