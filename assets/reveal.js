// Subtle scroll reveals + simple count-up. Shared across Jasiri pages.
(function () {
  function init() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(function (e) { e.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var el = en.target;
            var d = el.getAttribute('data-delay');
            if (d) el.style.transitionDelay = d + 'ms';
            el.classList.add('in');
            io.unobserve(el);
          }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
      els.forEach(function (e) { io.observe(e); });
    }

    // count-up for [data-count]
    var nums = document.querySelectorAll('[data-count]');
    if ('IntersectionObserver' in window) {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target, target = parseFloat(el.getAttribute('data-count'));
          var suffix = el.getAttribute('data-suffix') || '';
          var dur = 1100, start = performance.now();
          function tick(now) {
            var p = Math.min(1, (now - start) / dur);
            var e = 1 - Math.pow(1 - p, 3);
            var v = target * e;
            el.textContent = (target % 1 === 0 ? Math.round(v) : v.toFixed(1)) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          io2.unobserve(el);
        });
      }, { threshold: 0.5 });
      nums.forEach(function (n) { io2.observe(n); });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
