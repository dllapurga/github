(function () {

  'use strict';
  console.log('reading js');

    const hongkong = document.querySelector(".hongkong");
    const hawaii = document.querySelector(".hawaii");
    const philippines = document.querySelector(".philippines");
    const vietnam = document.querySelector(".vietnam");

    const hongkongModal = document.querySelector("#hongkongModal");
    const hawaiiModal = document.querySelector("#hawaiiModal");
    const philippinesModal = document.querySelector("#philippinesModal");
    const vietnamModal = document.querySelector("#vietnamModal");

    const closes = document.querySelectorAll(".close");
    
    // Open modal
    hongkong.addEventListener("click", function() {
    hongkongModal.classList.add("active");
    });

    hawaii.addEventListener("click", function() {
    hawaiiModal.classList.add("active");
    });

    philippines.addEventListener("click", function() {
    philippinesModal.classList.add("active");
    });

    vietnam.addEventListener("click", function() {
    vietnamModal.classList.add("active");
    });

    // Close when clicking outside
    document.querySelectorAll(".modal").forEach(function(modal) {
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
        modal.classList.remove("active");
        }
    });
    });


}) ();
