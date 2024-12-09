let currentSlideIndex = 0;
const slides = document.querySelectorAll('.news-slide');
const dots = document.querySelectorAll('.dot-news');

function showSlide(index) {
  // Menyembunyikan semua slide dan menghapus kelas 'active' dari semua dot-news
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  currentSlideIndex = index;
}

// Menampilkan slide pertama saat halaman pertama kali dimuat
showSlide(currentSlideIndex);

// Fungsi untuk pindah ke slide berikutnya
function nextSlide() {
  let newIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(newIndex);
}

// Fungsi untuk menampilkan slide berdasarkan klik dot
function currentSlide(index) {
  showSlide(index - 1); // Mengurangi 1 karena index dot dimulai dari 1 di HTML
}

// Interval otomatis untuk bergeser ke slide berikutnya setiap 3 detik
setInterval(nextSlide, 1000);
