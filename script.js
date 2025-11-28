document.addEventListener("DOMContentLoaded", loadAbsensi);

const form = document.getElementById("absenForm");
const tabel = document.getElementById("tabelAbsensi");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const status = document.getElementById("status").value;
    const tanggal = new Date().toLocaleString("id-ID");

    const data = { nama, status, tanggal };

    let absensi = JSON.parse(localStorage.getItem("absensi")) || [];
    absensi.push(data);
    localStorage.setItem("absensi", JSON.stringify(absensi));

    form.reset();
    loadAbsensi();
});

function loadAbsensi() {
    tabel.innerHTML = "";
    const absensi = JSON.parse(localStorage.getItem("absensi")) || [];

    absensi.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.nama}</td>
            <td>${item.status}</td>
            <td>${item.tanggal}</td>
        `;
        tabel.appendChild(row);
    });
}
