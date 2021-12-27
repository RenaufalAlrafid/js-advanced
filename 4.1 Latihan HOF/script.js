// ambil semua elemen video

const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih yang js lanjutan
const lanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'));

// ambil durasi

// ubah ke integer , ubah menjadi detik

// jumlahkan semua detik


// ubah formatnya jadi jam menit detik

// simpan didom