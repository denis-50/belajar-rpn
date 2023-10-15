// Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
// nomor 1

function palindrome(kata) {
  // you can only write your code here!
  let kalimat = kata.split("").reverse("").join("");
  if (kata === kalimat) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false

//Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

//note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
//note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa

// nomor 2
function angka(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}
angka(5);

function isPalindrome(num) {
  const numStr = num.toString();
  const reversedStr = numStr.split("").reverse().join("");
  return numStr === reversedStr;
}

function angkaPalindrome(angka) {
  let currentNumber = angka + 1;

  while (true) {
    if (isPalindrome(currentNumber)) {
      return currentNumber;
    }
    currentNumber++;
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

//nomor 3
function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  let jadi_array = kalimat.split(" ");
  let jumlah = jadi_array.length;
  console.log(jumlah);
}
// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5

// nomor 3
function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  let hilang_spasi = kalimat.trim();
  let hitung = kalimat.split(" ");
  return hitung.length;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5

// nnomor 4
function pasanganTerbesar(num) {
  // you can only write your code here!
  const str = num.toString();
  let pasanganBesar = "";
  let terbesar = -1;
  for (let i = 0; i < str.length - 1; i++) {
    const angka_pasangan = str.slice(i, i + 2);
    const ubah_angka_pasangan = parseInt(angka_pasangan);
    if (ubah_angka_pasangan > terbesar) {
      terbesar = ubah_angka_pasangan;
      pasanganBesar = angka_pasangan;
    }
  }
  return pasanganBesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
*/
