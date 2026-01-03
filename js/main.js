// Select elements
const track = document.querySelector('.gameplay-track');
const prevBtn = document.querySelector('.scroll-btn.prev');
const nextBtn = document.querySelector('.scroll-btn.next');

// Amount to scroll per click (width of one card + gap)
const scrollAmount = document.querySelector('.gameplay-card').offsetWidth + 40; // 40px gap

// Previous button
prevBtn.addEventListener('click', () => {
  track.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

// Next button
nextBtn.addEventListener('click', () => {
  track.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});
