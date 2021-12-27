//* arrow function (gak punya this)

// const tampilNama = (nama) => {return `halo, ${nama}`;}
// console.log(tampilNama("renaufal"));


// const tampilNama = (nama,waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama("Renaufal", "Siang"));

// const tampilNama = nama => `halo, ${nama}`;
// console.log(tampilNama("renaufal"));

// const tampilNama = () => 'Hello World';

// let mahasiswa = ["Renaufal" , "Yolo", "gess"];

// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// })

// console.log(jumlahHuruf);


// let jumlahHuruf = mahasiswa.map(nama => nama.length)

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}));

// console.table(jumlahHuruf);


//* this pada arrow function

// constractor function


// const mahasiswa = function(){
//     this.nama = 'Renaufal';
//     this.umur = 22;
//     this.sayHello = function(){
//         console.log(`Halo Nama Saya ${this.nama} dan umur saya ${this.umur}`);
//     }
// }

// const Renaufal = new mahasiswa();

// arrow function
// const mahasiswa = function(){
//     this.nama = 'Renaufal';
//     this.umur = 22;
//     this.sayHello = () => {
//         console.log(`Halo Nama Saya ${this.nama} dan umur saya ${this.umur}`);
//     }
// }

// const Renaufal = new mahasiswa();



// object literal 

// const mhs1 ={
//     nama: "renauufa",
//     umur: 22,
//     sayHello: () => {
//         console.log(`Halo Nama Saya ${mhs1.nama} dan umur saya ${mhs1.umur}`);
//     }
// }



// const mahasiswa = function(){
//     this.nama = 'Renaufal';
//     this.umur = 22;
//     this.sayHello = function(){
//         console.log(`Halo Nama Saya ${this.nama} dan umur saya ${this.umur}`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     },500);
// }

// const Renaufal = new mahasiswa();


// study kasus


const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';
    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(()=>{
        this.classList.toggle(dua);
    },600)
});
