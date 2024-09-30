// Mendapatkan elemen modal
var modal = document.getElementById("loginModal");

// Mendapatkan tombol login
var btn = document.getElementById("openLogin");

// Mendapatkan tombol close
var span = document.getElementById("closeLogin");

// Ketika tombol login diklik, tampilkan modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// Ketika tombol close diklik, tutup modal
span.onclick = function() {
    modal.style.display = "none";
}

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
