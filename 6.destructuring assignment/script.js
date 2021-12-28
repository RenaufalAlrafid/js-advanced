// destructung variables / assignment


//! destructing array 

// const perkenalan = ['halo' , 'nama', 'saya' , 'renaufal'];

// const [satu,dua,tiga,empat] = perkenalan;

// const [satu,,,empat] = perkenalan; //skip item
// console.log(empat);

//* swap item
// let a = 1;
// let b = 2;

// [a,b] = [b,a];

//* return value pada function

// function coba() {
//     return[1,2];
// }

// const [a,b] = coba();

//* rest parameter

// const[a,...velues] = [1,2,3];



//! desturccturing untuk Object

// const mhs = {
//     nama:'renaufal',
//     umur : 22
// }

// const {nama,umur} = mhs;

//* assignment tanpa declrasi

// ({nama,umur} )= {nama:'renaufal', umur : 22};

//* assign ke variabel baru

// const mhs = {
//     nama:'renaufal',
//     umur : 22
// }

// const {nama: n,umur: u} = mhs;

//* default value

// const mhs = {
//     nama:'renaufal',
//     umur : 22,
//     email : 'email'
// }

// const {nama,umur, email = 'email'} = mhs;

// console.log(email);

//* gabung default dengan ganti variable

// const mhs = {
//         nama:'renaufal',
//         umur : 22,
//         email : 'email'
//     }

// const {nama,umur, email: a = 'email'} = mhs;
    
// console.log(a);

//* rest parameter

// const mhs = {
//         nama:'renaufal',
//         umur : 22,
//         email : 'email'
//     }

// const {nama,...value} = mhs;
    
// console.log(value);

//* field pada object, setelah dikirm sebagai paramaeter


const mhs = {
        id: 123,
        nama:'renaufal',
        umur : 22,
        email : 'email'
    }

function getIdMhs({id}) {
    return id;
}

console.log(getIdMhs(mhs));