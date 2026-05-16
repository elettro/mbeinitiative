(function(){
  var holder = document.querySelector('[data-global-nav]');
  if (!holder) return;

  var base = holder.getAttribute('data-base-path') || '';

  holder.innerHTML = '\
<div class="top-strip">\
  <div class="top-strip-inner">\
    <span class="top-strip-tagline">California Bar Review Prep. Your Success is our Success.</span>\
    <div class="top-strip-contact">\
      <a href="tel:3103389582">Call: 310-338-9582</a>\
      <a href="mailto:performancetestworkshop@gmail.com">performancetestworkshop@gmail.com</a>\
      <a class="top-strip-cta" href="mailto:performancetestworkshop@gmail.com">Sign Up</a>\
    </div>\
  </div>\
</div>\
<nav class="nav">\
  <div class="nav-inner">\
    <a class="brand" href="https://mbeinitiative.com/">MBE <span>Initiative</span></a>\
    <div class="nav-links">\
      <a href="https://mbeinitiative.com/#mbe">MBE Strategy</a>\
      <a href="https://mbeinitiative.com/mbe-regimen-sequence">MBE Regimen Sequence</a>\
      <a href="https://mbeinitiative.com/daily-study-breakdown/index.html">Daily Planner</a>\
      <a href="https://mbeinitiative.com/15-mbe-practice-tips/index.html">15 MBE Practice Tips</a>\
      <a href="https://mbeinitiative.com/#performance-test">Performance Test</a>\
      <a href="https://mbeinitiative.com/mbememo">MBE Memo</a>\
    </div>\
  </div>\
</nav>';
})();
