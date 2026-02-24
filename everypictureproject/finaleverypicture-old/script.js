(function () {

  'use strict';

  const lanterns = document.querySelector("#lanterns");
  const kalo = document.querySelector("#kalo");
  const bambooleft = document.querySelector("#bambooleft");
  const bambooright = document.querySelector("#bambooright");
  const lotus = document.querySelector("#lotus");

  const map = document.querySelector("#worldmap");
  const pulses = document.querySelectorAll(".pulse");

  pulses.forEach(function(pulse) {

    pulse.addEventListener("click", function() {

      const location = pulse.classList[1];

      map.classList.remove("hongkongZoom", "hawaiiZoom", "philippinesZoom", "vietnamZoom");

      if (location === "hongkong") {

      map.classList.add("hongkongZoom");
      document.querySelector("#hongkongModal").classList.add("active");
      lanterns.classList.add("show");

    } else if (location === "hawaii") {

      map.classList.add("hawaiiZoom");
      document.querySelector("#hawaiiModal").classList.add("active");
      kalo.classList.add("show");

    } else if (location === "philippines") {

      map.classList.add("philippinesZoom");
      document.querySelector("#philippinesModal").classList.add("active");
      bambooleft.classList.add("show");
      bambooright.classList.add("show");

    } else if (location === "vietnam") {

      map.classList.add("vietnamZoom");
      document.querySelector("#vietnamModal").classList.add("active");
      lotus.classList.add("show");
    }

    });

  });

  document.querySelectorAll(".modal").forEach(function(modal) {

    modal.addEventListener("click", function(e) {

      if (e.target === modal) {
        modal.classList.remove("active");
        map.classList.remove("hongkongZoom", "hawaiiZoom", "philippinesZoom", "vietnamZoom");
        lanterns.classList.remove("show");
        kalo.classList.remove("show");
        bambooleft.classList.remove("show");
        bambooright.classList.remove("show");
        lotus.classList.remove("show");
      }

    });

  });

})();