let i = 0;
const allSlides = document.getElementsByClassName("slides");
showSlide(i);

function next() {
  // increasing index
  i = i + 1;
  // check for valid index
  if (i > allSlides.length - 1) {
    i = 0;
  } else if (i < 0) {
    i = allSlides.length - 1;
  }
  showSlide(i);
}
function prev() {
  // decreasing index
  i = i - 1;
  // check for valid index
  if (i > allSlides.length - 1) {
    i = 0;
  } else if (i < 0) {
    i = allSlides.length - 1;
  }
  showSlide(i);
}

function showSlide(index) {
  const allSlides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < allSlides.length; i++) {
    allSlides[i].style.display = "none";
    dots[i].style.backgroundColor = "grey";
  }
  allSlides[index].style.display = "block";
  dots[i].style.backgroundColor = "black";
}

setInterval(() => {
  next();
}, 2000);
