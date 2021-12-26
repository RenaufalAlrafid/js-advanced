// cara membuat object pada java script

//* object literal (untuk satu object/ tidak efektif untuk object banyak )

let mahasiswa1 = {
    nama: 'Renaufal',
    energi : 10,
    makan: function(porsi){
        this.energi= this.energi + porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`)
    }
}
let mahasiswa2 = {
    nama: 'Alrafid',
    energi : 20,
    makan: function(porsi){
        this.energi= this.energi + porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`)
    }
};


//* function declaration ()

function mahasiswa(nama,energi){
    let mahasiswa = {};
        mahasiswa.nama = nama;
        mahasiswa.energi = energi;

        mahasiswa.makan = function(porsi){
            this.energi += porsi;
            console.log(`Halo ${this.nama}, Selamat Makan`)
        };

        mahasiswa.main = function(jam){
            this.energi -= jam;
        }
        
    return mahasiswa;
}

// let renaufal = mahasiswa('Renaufal' , 10);
// let doddy = mahasiswa('doddy', 20);

//* constractor function
function mahasiswa(nama,energi){
        this.nama = nama;
        this.energi = energi;

        this.makan = function(porsi){
            this.energi += porsi;
            console.log(`Halo ${this.nama}, Selamat Makan`)
        };

        this.main = function(jam){
            this.energi -= jam;
        }
}


// let renaufal = new mahasiswa('Renaufal' , 10);
// let doddy = new mahasiswa('doddy', 20);


//* object.create()

const methodMahsiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`);
    },

    main: function(jam){
        this.energi -= jam;
    }
}

function mahasiswa(nama,energi){
    let mahasiswa = Object.create(methodMahsiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

let renaufal = mahasiswa('Renaufal' , 10);
let doddy = mahasiswa('doddy', 20);