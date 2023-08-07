document.addEventListener("DOMContentLoaded", function() {
    const colorOptions = document.querySelectorAll(".color-option");

    colorOptions.forEach(function(option) {
      option.addEventListener("click", function() {
        colorOptions.forEach(function(option) {
          option.classList.remove("selected");
        });
        this.classList.add("selected");
      });
    });
  });