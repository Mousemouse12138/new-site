
const quoteButton = document.getElementById('quoteButton');
const quoteBox = document.getElementById('headerQuote');

const dayBox = document.getElementById('dayBox');
const dayText = document.getElementById('dayText');
const dayImage = document.getElementById('dayImage');

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

const headings = document.querySelectorAll('main h2, main h3');

const vertigoNotes = [
  'Vertigo uses complementary colours to show tension between desire and illusion.',
  'Scottie’s fear of heights shapes the whole visual language of Vertigo.',
  'Green often marks Judy/Madeleine as a constructed fantasy in Vertigo.',
  'Red backgrounds highlight Scottie’s desire and control.',
  'Vertigo links love, obsession, and control through its colour design.'
];


function showVertigoNote() {
  if (!quoteBox) return;
  const index = Math.floor(Math.random() * vertigoNotes.length);
  quoteBox.textContent = vertigoNotes[index];
}



function addHeadingHover(event) {
  event.target.classList.add('heading-hover');
}

function removeHeadingHover(event) {
  event.target.classList.remove('heading-hover');
}


function updateDayBox() {
  if (!dayBox || !dayText || !dayImage) return;

  const today = new Date();
  const day = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  let label = '';
  let imageSrc = '';
  let imageAlt = '';

  if (day === 0) {
    label = 'Sunday';
    imageSrc = 'images/day-sunday.jpg';
    imageAlt = 'Vertigo still for Sunday';
  } else if (day === 1) {
    label = 'Monday';
    imageSrc = 'images/day-monday.jpg';
    imageAlt = 'Vertigo still for Monday';
  } else if (day === 2) {
    label = 'Tuesday';
    imageSrc = 'images/day-tuesday.jpg';
    imageAlt = 'Vertigo still for Tuesday';
  } else if (day === 3) {
    label = 'Wednesday';
    imageSrc = 'images/day-wednesday.jpg';
    imageAlt = 'Vertigo still for Wednesday';
  } else if (day === 4) {
    label = 'Thursday';
    imageSrc = 'images/day-thursday.jpg';
    imageAlt = 'Vertigo still for Thursday';
  } else if (day === 5) {
    label = 'Friday';
    imageSrc = 'images/day-friday.jpg';
    imageAlt = 'Vertigo still for Friday';
  } else if (day === 6) {
    label = 'Saturday';
    imageSrc = 'images/day-saturday.jpg';
    imageAlt = 'Vertigo still for Saturday';
  }

  dayText.textContent = label;
  dayImage.src = imageSrc;
  dayImage.alt = imageAlt;
}


if (quoteButton) {
  quoteButton.addEventListener('click', showVertigoNote);
}

if (headings && headings.length > 0) {
  headings.forEach((heading) => {
    heading.addEventListener('mouseenter', addHeadingHover);
    heading.addEventListener('mouseleave', removeHeadingHover);
  });
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}


updateDayBox();
