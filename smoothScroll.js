/**
 * 平滑滚动
 *
 * @example https://codesandbox.io/s/pinghuagundong-forked-mv4wb
 * @param {{scrollTop?: Element; scrollTop?: number; duration?: number}}
 */
function smoothScroll({
  el = document.documentElement,
  scrollTop = 0,
  duration = 250,
}) {
  const speed = ((scrollTop - el.scrollTop) / duration) * 16.7;
  const isTop = scrollTop < el.scrollTop;
  let loop;
  try {
    loop = requestAnimationFrame.bind(null, scroll);
  } catch {
    loop = setTimeout.bind(null, scroll, 16.7);
  }
  function scroll() {
    if (isTop ? scrollTop < el.scrollTop : scrollTop > el.scrollTop) {
      el.scrollTop += speed;
      loop();
    }
  }
  scroll();
}

module.exports = smoothScroll;
