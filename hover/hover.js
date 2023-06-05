const btn = document.querySelector(".hover-btn");

btn.addEventListener("mouseover", function() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const randomX = Math.floor(Math.random() * (screenWidth - btn.offsetWidth));
  const randomY = Math.floor(Math.random() * (screenHeight - btn.offsetHeight));

  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
});
