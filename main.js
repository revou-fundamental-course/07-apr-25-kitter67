//untuk bagian from//
// Mendapatkan data dari formulir
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const dobInput = document.getElementById('dob');
const messageInput = document.getElementById('message');
const messageContainer = document.querySelector('.pesan');

// Menangani pengiriman formulir
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const dob = dobInput.value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const message = messageInput.value;
    const timestamp = new Date().toLocaleString(); // Mendapatkan waktu terkirim

    // Validasi input
    if (name && dob && gender && message) {
        // Menampilkan pesan di dalam elemen dengan class "pesan"
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
            <p><em>Waktu Terkirim:</em> ${timestamp}</p>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Tanggal:</strong> ${dob}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
            <p><strong>Pesan:</strong> ${message}</p>
            
        `;
        messageContainer.appendChild(messageElement);

        // Mengosongkan input setelah pengiriman
        nameInput.value = '';
        dobInput.value = '';
        messageInput.value = '';
        document.querySelector('input[name="gender"]:checked').checked = false;
    } else {
        alert('Silakan isi semua kolom sebelum mengirim.');
    }
});

//pengubahan gambar//
const circles = document.querySelectorAll('.circle');
const imageContainer = document.getElementById('imageContainer');

if (imageContainer) {
  circles.forEach(circle => {
    circle.addEventListener('click', () => {
      const newImage = circle.getAttribute('data-image'); 
      imageContainer.style.backgroundImage = `url('${newImage}')`; 
    });
  });
}

var name = prompt("Siapakah nama Anda?","");
document.getElementById("name").innerHTML = name;
// Mengambil elemen dengan ID "name" dan menampilkan nama pengguna di dalamnya