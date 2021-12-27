const angka = [-1,8,9,1,4,-5,-4,3,2,9];


//filter

// const newAngka = angka.filter((a) => a >= 3);


// map

// const newAngka2 = angka.map(a => a * 2); 


// reduce

// const newAngka3 = angka.reduce((accumulator, currentValue) => accumulator + currentValue);

// method chaining

const Hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc,cv) => acc + cv);