(function () {

  'use strict';

  const map = document.querySelector("#worldmap");
  const pulses = document.querySelectorAll(".pulse");

  pulses.forEach(function(pulse) {

    pulse.addEventListener("click", function() {

      const location = pulse.classList[1];

     
      map.classList.remove("hongkongZoom", "hawaiiZoom", "philippinesZoom", "vietnamZoom");

      switch (location) {

        case "hongkong":
          map.classList.add("hongkongZoom");
          document.querySelector("#hongkongModal").classList.add("active");
          break;

        case "hawaii":
          map.classList.add("hawaiiZoom");
          document.querySelector("#hawaiiModal").classList.add("active");
          break;

        case "philippines":
          map.classList.add("philippinesZoom");
          document.querySelector("#philippinesModal").classList.add("active");
          break;

        case "vietnam":
          map.classList.add("vietnamZoom");
          document.querySelector("#vietnamModal").classList.add("active");
          break;
      }

    });

  });

  document.querySelectorAll(".modal").forEach(function(modal) {

    modal.addEventListener("click", function(e) {

      if (e.target === modal) {
        modal.classList.remove("active");
        map.classList.remove("hongkongZoom", "hawaiiZoom", "philippinesZoom", "vietnamZoom");
      }

    });

  });

})();