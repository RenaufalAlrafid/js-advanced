//* Execution Context, Hoisting & Scope

// pertama hoisting dulu dibikin variable global window
// kedua di execution dengan membaca semua dulu lalu dicari ada variable gak


console.log(sayHello());

var nama = 'sandhika';
var umur = 23;


function sayHello(){
    console.log(`halo ${nama} umur ${umur}`);
}