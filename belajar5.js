/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
/*
let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function dataHandling(input) {
  return input;
}
for (let i = 1; i <= input.length; i++) {
  if (i === 1) {
    console.log("Nomor id : " + dataHandling(input[0][0]));
    console.log("Nama : " + dataHandling(input[0][1]));
    console.log("TTL : " + dataHandling(input[0][2] + " " + input[0][3]));
    console.log("Hobi : " + dataHandling(input[0][4]));
    console.log("\n");
  } else if (i === 2) {
    console.log("Nomor id : " + dataHandling(input[1][0]));
    console.log("Nama : " + dataHandling(input[1][1]));
    console.log("TTL : " + dataHandling(input[1][2] + " " + input[1][3]));
    console.log("Hobi : " + dataHandling(input[1][4]));
    console.log("\n");
  } else if (i === 3) {
    console.log("Nomor id : " + dataHandling(input[2][0]));
    console.log("Nama : " + dataHandling(input[2][1]));
    console.log("TTL : " + dataHandling(input[2][2] + " " + input[2][3]));
    console.log("Hobi : " + dataHandling(input[2][4]));
    console.log("\n");
  } else if (i === 4) {
    console.log("Nomor id : " + dataHandling(input[3][0]));
    console.log("Nama : " + dataHandling(input[3][1]));
    console.log("TTL : " + dataHandling(input[3][2] + " " + input[3][3]));
    console.log("Hobi : " + dataHandling(input[3][4]));
    console.log("\n");
  }
}
/*

output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
  input.splice(
    0,
    4,
    "0001",
    "Roman Alamsyah Elsharawy",
    "Provinsi Bandar Lampung",
    "21/05/1989",
    "Pria",
    "SMA Internasional Metro"
  );
  input.pop(4);
  console.log(input);

  let bulan = input[3];
  let bulanMei = bulan.split("/");
  if (bulanMei[1] === "05") {
    console.log("Mei");
  }
  console.log(bulanMei[2], bulanMei[0], bulanMei[1]);
  let gabung = bulanMei.join("-");
  console.log(gabung);
  console.log(input[1].slice(0, 15));
}
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
