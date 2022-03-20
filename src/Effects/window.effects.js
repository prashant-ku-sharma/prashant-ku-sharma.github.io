(function effects() {
  window.addEventListener("scroll", () => {
    const reveal = document.querySelectorAll(".reveal");

    for (let x = 0; x < reveal.length; x++) {
      let winHeight = window.innerHeight;
      let revealTop = reveal[x].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < winHeight - revealPoint) {
        reveal[x].classList.add("active");
      } else {
        reveal[x].classList.remove("active");
      }
    }
  });

  window.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    // following cursor when the move moves
    let x = e.pageX,
      y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
  });
  
  window.addEventListener("mouseout", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.display = "none";
  });
})();
