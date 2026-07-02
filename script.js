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
      "Form captured. This is our calm baseline. 🌿";
  });

  /* Delay fog activation */
  setTimeout(() => {
    document.documentElement.classList.add("fog-active");
  }, 5000); // 5 seconds
});
