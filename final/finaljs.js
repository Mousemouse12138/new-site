window.addEventListener("DOMContentLoaded", () => {

  const dayText = document.getElementById("dayText");
  const headerArea = document.getElementById("headerArea");
  const poemBox = document.getElementById("poemBox");
  const toggleBtn = document.getElementById("themeToggle");


  const dayData = {
    0: { name: "Sunday",    headerBg: "images/bg-sunday.jpg" },
    1: { name: "Monday",    headerBg: "images/bg-monday.jpg" },
    2: { name: "Tuesday",   headerBg: "images/bg-tuesday.jpg" },
    3: { name: "Wednesday", headerBg: "images/bg-wednesday.jpg" },
    4: { name: "Thursday",  headerBg: "images/bg-thursday.jpg" },
    5: { name: "Friday",    headerBg: "images/bg-friday.jpg" },
    6: { name: "Saturday",  headerBg: "images/bg-saturday.jpg" }
  };

  function updateDayDisplay() {
    if (!dayText || !headerArea) return;

    const today = new Date().getDay();
    const data = dayData[today];

    dayText.textContent = data.name;
    headerArea.style.backgroundImage = `url(${data.headerBg})`;
    headerArea.style.backgroundSize = "cover";
    headerArea.style.backgroundPosition = "center";
  }


  const poemLines = [
    "I heard the echo, from the valley and the heart.",
    "I celebrate myself, and sing myself.",
    "You will always be the summer of freedom.",
    "No coward soul is mine",
    "The roses in the rose-garden which is our and ours only.",
    "No man is an island.",
    "My spirit! Be thou me. Be thou, Spirit fierce.",
    "Take this kiss upon the brow.",
    "That I exist is a perpetual surprise which is life."
  ];

  function showRandomPoem() {
    const index = Math.floor(Math.random() * poemLines.length);
    poemBox.textContent = poemLines[index];
  }

  if (poemBox) {
    poemBox.addEventListener("click", showRandomPoem);
  }


  function applySavedTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark-mode");
      if (toggleBtn) toggleBtn.textContent = "🌛";
    }
  }

  function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "🌛";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌞";
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
  }


  applySavedTheme();
  updateDayDisplay();

});
