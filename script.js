function HexConv(decimal) {
  decimal = Math.floor(decimal);
  let rem;
  let Hexa = "";
  while (decimal > 0) {
    rem = decimal % 16;
    decimal = Math.floor(decimal / 16);
    if (rem == 10) Hexa = "A" + Hexa;
    else if (rem == 11) Hexa = "B" + Hexa;
    else if (rem == 12) Hexa = "C" + Hexa;
    else if (rem == 13) Hexa = "D" + Hexa;
    else if (rem == 14) Hexa = "E" + Hexa;
    else if (rem == 15) Hexa = "F" + Hexa;
    else Hexa = rem + Hexa;
  }
  return Hexa;
}
function RanNum() {
  let ran = Math.random() * 255;
  return ran;
}
let newcolor = "";
let colour = document.querySelector(".color-box");
let copy = document.querySelector(".btncopy");
let generate = document.querySelector(".btngen");
let hexget = document.querySelector(".color-box");
generate.addEventListener("click", function () {
  newcolor = `#${HexConv(RanNum())}${HexConv(RanNum())}${HexConv(RanNum())}`;
  colour.style.backgroundColor = newcolor;
});
copy.addEventListener("click", function () {
  if (!newcolor) {
    alert("Please generate code first");
    return;
  }

  navigator.clipboard
    .writeText(newcolor)
    .then(() => {
      alert("Hex Code is Copied Successfully");
    })
    .catch(() => {
      alert("!!! Failed to copy the hex code");
    });
});

hexget.addEventListener("mouseenter", function () {
  let hexcode = document.createElement("div");
  hexcode.className = "hexcode";
  let phexcode = document.createElement("p");
  phexcode.textContent = newcolor;
  hexcode.appendChild(phexcode);
  hexget.appendChild(hexcode);
});
hexget.addEventListener("mouseleave", function () {
  const parent = document.querySelector(".color-box");
  const child = parent.querySelector(".hexcode");

  if (child) {
    parent.removeChild(child);
  }
});

const nightToggle = document.querySelector(".night-mode");

nightToggle.addEventListener("click", () => {
  nightToggle.classList.toggle("active");
  document.body.classList.toggle("dark");
});
