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
      "Form captured. This is our calm baseline.";
  });

  /* Fog activation delay */
  setTimeout(() => {
    document.documentElement.classList.add("fog-active");
  }, 5000);

  /* Random word swap — subtle cognitive slip */
  const altWords = ["Noise", "Blur", "Echo", "Static", "Fog"];

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
