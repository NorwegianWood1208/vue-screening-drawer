(function (window, document) {

  function resize(){
    var ww = window.innerWidth;
    if (ww > window.screen.width) {
      window.requestAnimationFrame(resize);
    }
    else {
      if (ww > 750) ww = 750;
      // 下面代码按照比例为100px = 1rem，此处一定要同pxToRem的转换比例
      document.documentElement.style.fontSize = ww * 100 / 750 + 'px';
    }
  }

  if (document.readyState !== 'loading') {
    resize();
  } else {
    document.addEventListener('DOMContentLoaded', resize);
  }

  window.addEventListener('resize', resize);

})(window, document);
