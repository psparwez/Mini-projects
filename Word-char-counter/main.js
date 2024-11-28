let text = document.querySelector("textarea");

text.addEventListener("input", function () {
  let val = this.value;
  let lenght = val.length;
  let word = (document.getElementById("word").innerText = lenght);
  val = val.trim();
  let char = val.split(" ");

  let cleanChar = char.filter(function (el) {
    return el != "";
  });

  document.getElementById("char").innerText = cleanChar.length;
});
