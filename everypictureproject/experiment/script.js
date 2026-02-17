(function () {

  'use strict';
  console.log('reading js');

  const topImg = document.querySelector('.img-top');

  topImg.addEventListener('mouseenter', function() {
    topImg.classList.add('fade');
  });

  topImg.addEventListener('mouseleave', function() {
    topImg.classList.remove('fade');
  });

})();