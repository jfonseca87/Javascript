const text = document.getElementById("custom-text");
text.value = "sdfsadfasdf asdfasd fasdf sdafasdf";
let currentPosition = 0;

document.getElementById("custom-text").addEventListener("keyup", (e) => {
  currentPosition = e.target.selectionStart;
  console.log(currentPosition);
});

document.getElementById("custom-text").addEventListener("mouseup", (e) => {
  currentPosition = e.target.selectionEnd;
  console.log(currentPosition);
});

function setOptionValue(value) {
  const partOne = text.value.substring(0, currentPosition);
  const partTwo = text.value.substring(currentPosition, text.value.length);
  text.value = `${partOne}${value}${partTwo}`;
}
