// Function
// harus ada return 
// return -> console.log()
// paramater = arguments

// // Standar Function
// function addName(firstname, lastname) {
//     console.log(firstname, lastname)
// }

// addName('Fikri',  'gobles')

// // function digabung pada variabel
// const fullname = function fullname(firstname, lastname) {
//     console.log(firstname, lastname)
// }

// fullname('Fikri', 'Ramdani')

// // Menggunakan Keyword New
// const namapanjang = new Function(
//     "firstname", 
//     "lastname", 
//     "console.log(firstname, lastname)"
// )

// namapanjang('Fikri', 'Godbles')

// // Arrow Function
// const sum = (x, y) => {
//     console.log(x+y)
// }

// sum(5, 5)

/* 
TUGAS BESAR
1. MEMBUAT PERHITUNGAN MATEMATIKA
    - LUAS LINGKARAN
    - LUAS SEGITIGA
    - LUAS PERSEGI PANJANG
    - LUAS JAJARGENJANG
2. MENGHITUNG TOTAL GAJI YANG DI DAPAT DALAM SATU BULAN
DENGAN INPUT MINIMAL:
    - NAMA KARYAWAN
    - GAJI PERHARI
    - JUMLAH HARI MASUK KERJA
*/

// 1. MEMBUAT PERHITUNGAN MATEMATIKA
// LUAS LINGKARAN
const luaslingkaran = (r) => {
    return Math.PI * (r ** 2)
}

console.log("luas lingkaran =", luaslingkaran(7).toFixed(2))

// LUAS SEGITIGA
function luasSegitiga(alas, tinggi) {
    console.log("luas Segitaga = ", 0.5 * alas * tinggi)
}

luasSegitiga(10, 20)

// LUAS PERSEGI PANJANG
const luasPersigiPanjang = (panjang, lebar) => {
    return panjang * lebar
}

console.log("Luas Persegi Panjang = ", luasPersigiPanjang(10, 10))

// LUAS JAJARGENJANG
const luasJajarGenjang = (alas , tinggi) => {
    return alas * tinggi
}

console.log("Luas Jajar Genjang = ", luasJajarGenjang(10, 8))


// 2. MENGHITUNG TOTAL GAJI YANG DI DAPAT DALAM SATU BULAN
// DENGAN INPUT MINIMAL:
//     - NAMA KARYAWAN
//     - GAJI PERHARI
//     - JUMLAH HARI MASUK KERJA

function totalgaji(nama, gaji, masuk) {
    const total = gaji * masuk
    console.log(`Total gaji ${nama} = Rp${total}`)
}

totalgaji('Fikri', 10000, 20)