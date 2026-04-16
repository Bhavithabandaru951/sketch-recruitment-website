document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: e.target[0].value,
      password: e.target[1].value
    })
  });

  const data = await response.json();

  if (data.success) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
});
