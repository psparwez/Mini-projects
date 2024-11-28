const emojis = [
  "😘",
  "😊",
  "😂",
  "😍",
  "🤩",
  "😎",
  "😜",
  "😁",
  "😆",
  "😉",
  "😋",
  "😇",
  "🥰",
  "😀",
  "🤗",
  "😄",
  "🙂",
  "😌",
  "😅",
  "😏",
  "😬",
  "🥳",
  "😻",
  "😸",
  "🙌",
  "🎉",
  "🎊",
  "🌟",
  "🔥",
  "💫",
  "👍",
  "👌",
  "👏",
  "🙏",
  "🤝",
  "🌹",
  "💐",
  "🌈",
  "🎈",
  "🎁",
  "🎀",
  "🍀",
  "🌺",
  "👨‍🍳",
  "🍔",
  "🍟",
  "🧑‍🦱",
  "🥹",
  "👳",
  "🤢",
];

const btn = document.querySelector(".emoji_btn");

function emojiSwitcher() {
  return (btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]);
}

btn.addEventListener("mouseover", () => emojiSwitcher());
btn.addEventListener("click", () => emojiSwitcher());
