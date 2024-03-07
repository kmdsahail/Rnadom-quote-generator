const btn = document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
  "Avoid day dreaming about the years to come",
  "The best way to predict the future is to invent it.",
  "Life is short to hate just love it",
  "A Man Dies When People Forget Him!",
  "The Dreams Of Pirates Will Never End!",
  "When You Aim High, You Often Come Across Fights That Just Aren't Worth Fighting.",
  "The One Piece Is Real!",
  "There Is Yet Joy Beyond Your Sorrows.",
  "Most Death Is Unexpected And Unwanted.",
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quote.length);
  output.textContent = quote[random];
});
