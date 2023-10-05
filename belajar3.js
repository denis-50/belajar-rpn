// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!",
// yang kemudian akan ditampilkan di console.

//bikin fungsinya disini

let string = "Halo Function!";
function shoutOut(string) {
  return string;
}
console.log(shoutOut(string));

// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari
// dua parameter yang dikirim.

//bikin fungsinya disini

let num1 = 1;
let num2 = 2;
let hasilPerkalian = num1 * num2;

function calculateMultiply(num1, num2) {
  return hasilPerkalian;
}
console.log(calculateMultiply(1, 2));

// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi
// satu kalimat berikut:
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";
let fullSentence = name + " " + age + " " + address + " " + hobby;

function processSentence(fullSentence) {
  return fullSentence;
}
console.log(
  processSentence(
    "nama saya " +
      name +
      ", " +
      "umur saya " +
      age +
      ", " +
      "alamat saya di " +
      address +
      ", " +
      "dan saya punya hobby yaitu " +
      hobby +
      "!"
  )
); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
