const heading = document.querySelector(".title");

let offset = 0;

function inc() {
  if (offset >= 0 && offset < 10) {
    offset++;
  } else if (offset > 9 && offset < 100) {
    offset += 10;
  } else if (offset >= 100 && offset < 1000) {
    offset += 100;
  } else {
    return null;
  }

  heading.innerHTML = offset;
}
function dec() {
  if (offset <= 1000 && offset > 100) {
    offset -= 100;
  } else if (offset <= 100 && offset > 10) {
    offset -= 10;
  } else if (offset > 0) {
    offset--;
  }
  heading.innerHTML = offset;
}
