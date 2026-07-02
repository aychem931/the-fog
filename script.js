document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };

    console.log("Form data:", data);

    successMessage.style.display = "block";
    successMessage.textContent =
      "Please fill out required information.";
  });

  /* Fog activation delay */
  setTimeout(() => {
    document.documentElement.classList.add("fog-active");
  }, 5000);

  /* Random word swap — subtle cognitive slip */
 const altWords = [
  "Noise",
  "Lost",
  "Static",
  "Why",
  "Mistake",
  "Forget",
  "Almost",
  "Maybe",
  "Unclear"
];
/* Delayed typing effect */
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  let buffer = "";

  input.addEventListener("keydown", (e) => {
    // Prevent immediate typing
    e.preventDefault();

    // Add the character to a buffer
    if (e.key.length === 1) {
      buffer += e.key;
    } else if (e.key === "Backspace") {
      buffer = buffer.slice(0, -1);
    }

    // Apply the buffer after a delay
    setTimeout(() => {
      input.value = buffer;
    }, 120); // 120ms delay — subtle, but noticeable
  });
});
  function randomSwap() {
    const elements = document.querySelectorAll(".swap-word");
    elements.forEach(el => {
      if (Math.random() < 0.15) { // 15% chance each cycle
        const newWord = altWords[Math.floor(Math.random() * altWords.length)];
        el.textContent = newWord;
      }
    });
  }

  setInterval(randomSwap, 2000); // every 2 seconds
});
