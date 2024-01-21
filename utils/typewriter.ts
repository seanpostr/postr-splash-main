var i = 0;
var j = 0;
var txt = "The Future Is Marketing"; /* The text */
const CONTENT = "Content,";
const JTR = "Join The Revolution.";
var speed = 75; /* The speed/duration of the effect in milliseconds */
var part = 0;
var nextPart = 2;

export function typeWriter() {
  switch (part) {
    case 0:
      setTimeout(typeWriter, 1500);
      part = 1;
      break;
    case 1:
      (document.getElementById("first") as any).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);

      if (i == txt.length) {
        setTimeout(typeWriter, 1000);
        part = nextPart;
        nextPart = 3;
      }
      break;
    case 2:
      part = nextPart;
      break;
    case 3:
      (document.getElementById("first") as any).innerHTML = (
        document.getElementById("first") as any
      ).innerHTML.slice(0, -1);
      i--;
      setTimeout(typeWriter, speed);

      if (i == 14) {
        setTimeout(typeWriter, 1000);
        part = 2;
        nextPart = 4;
      }
      break;
    case 4:
      (document.getElementById("first") as any).innerHTML += CONTENT.charAt(j);
      j++;
      setTimeout(typeWriter, speed);

      if (j == CONTENT.length) {
        setTimeout(typeWriter, 1000);
        j = 0;
        part = 2;
        nextPart = 5;
        (document.getElementById("first") as any).classList.remove("typed");
        (document.getElementById("second") as any).classList.add("typed");
      }
      break;
    case 5:
      (document.getElementById("second") as any).innerHTML += JTR.charAt(j);
      j++;
      setTimeout(typeWriter, speed);

      if (j == JTR.length) {
        setTimeout(typeWriter, 1000);
        j = 0;
        part = 6;
        (document.getElementById("second") as any).classList.remove("typed");
      }
      break;
    case 6:
      (document.getElementById("third") as any).setAttribute(
        "style",
        "opacity: " + j + "%"
      );
      (document.getElementById("fourth") as any).setAttribute(
        "style",
        "opacity: " + j + "%"
      );
      j = j + 5;
      setTimeout(typeWriter, 150);

      if (j == 100) {
        part = 7;
      }
      break;
  }
}
