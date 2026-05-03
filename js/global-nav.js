(function(){
  var holder = document.querySelector('[data-global-nav]');
  if (!holder) return;

  var base = holder.getAttribute('data-base-path') || '/mbeinitiative';

  holder.innerHTML = '\
<nav class="nav">\
  <div class="nav-inner">\
    <a class="brand" href="' + base + '/">MBE <span>Initiative</span></a>\
    <div class="nav-links">\
      <a href="' + base + '/#mbe">MBE Strategy</a>\
      <a href="' + base + '/mbe-regimen-sequence">MBE Regimen Sequence</a>\
      <a href="' + base + '/daily-study-breakdown/index.html">Daily Planner</a>\
      <a href="' + base + '/#performance-test">Performance Test</a>\
      <a href="' + base + '/mbememo">MBE Memo</a>\
    </div>\
  </div>\
</nav>';
})();
