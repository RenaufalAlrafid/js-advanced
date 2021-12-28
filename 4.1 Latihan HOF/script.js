// ambil semua elemen video

const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih yang js lanjutan
const lanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi
.map(item=> item.dataset.duration)

// ubah ke integer , ubah menjadi detik
.map(waktu =>{
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0]* 60) + parts[1];
})

// jumlahkan semua detik
.reduce((total, detik)=> total + detik);

// ubah formatnya jadi jam menit detik

const jam = Math.floor(lanjut / 3600);
const menit = Math.floor((lanjut - (jam*3600)) /60 );
const detik = lanjut - (jam*3600) - (menit*60);


// simpan didom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pVideo = document.querySelector('.jumlah-video');
pVideo.textContent = `${jmlVideo} video`;


console.log(detik);