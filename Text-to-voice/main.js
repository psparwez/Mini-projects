function speakText() {
  let text = document.querySelector("textarea").value;
  if ("speechSynthesis" in window) {
    let utterance = new window.SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Text-to-speech not supported in your browser.");
  }
}
