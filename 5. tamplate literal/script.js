// tamplate literal 

//* tamplate string
// const nama = 'Renaufal AI';
// const umur = 22;
// console.log(`Halo nama saya ${nama}, umur saya ${umur}`);

//* embeded expresion
// console.log(`${alert('halo')}`);

// const x = 10;
// console.log(`${(x%2 == 0) ? 'genap' : 'ganjil'}`);


//HTML fragment 

// const mhs = {
//     nama: 'renaufal',
//     umur: 22,
//     nim: '409417',
//     email: 'renaufal11@gmail.com'
// };


// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nim}</span>
// </div>`;

// console.log(el);

//* 1. looping

// const mhs = [
//     {
//         nama: 'renaufal',
//         email: 'renaufal11@gmail.com'
//     },
//     {
//         nama: 'yolo',
//         email: 'renaufal11@gmail.com'
//     },
//     {
//         nama: 'gess',
//         email: 'renaufal11@gmail.com'
//     }

// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul class="ul">
//     <li> ${m.nama}</li>
//     <li> ${m.email}</li>
//     </ul>`).join('')}

// </div>`


//* conditional
//ternary
// const mhs = {
//         nama: 'renaufal',
//         umur: 22,
//         nim: '409417',
//     };

// const el = `<div class="mhs">
//     <ul class="ul">
//     <li> ${mhs.nama}</li>
//     <li> ${mhs.umur} ${mhs.email ? `(email : ${mhs.email})` : ``}</li>
//     </ul>

// </div>`

//* nested

// const mhs = {
//             nama: 'renaufal',
//             semester: 5,
//             matkul: [
//                 'rekayasa web',
//                 'analisis metode geofisika',
//                 'pemrogaman geofisika',
//                 'metode seismik'
//             ]
//         };

// function cetakMataKuliah(matkul) {
//     return `
//     <ol class="">
//     ${matkul.map(mk=>`<li class="">${mk}</li>`).join('')}
//     </ol>
//     `;
// }


// const el = `<div class="mhs">
//     <h2>nama :${mhs.nama}</h2>
//     <span class="semester"> Semester : ${mhs.semester}</span>
//     <h4 class="">mata kuliah</h4>
//     ${cetakMataKuliah(mhs.matkul)}
// </div>`;



// document.body.innerHTML = el;



//* tagged tamplates
// const nama = 'renaufal';
// const umur = 22;

// function coba(strings, ...values) {
//     // let result ='';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`; 
//     // });
//     // return result;


//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '' )
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// higlighy

const nama = 'renaufal';
const umur = 22;
const email = 'renaufal@gmail.com'

function highlight(strings, ...values) {

    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '' )
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun. dan email saya adalah ${email}`;
document.body.innerHTML = str;

