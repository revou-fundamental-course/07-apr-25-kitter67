// Ambil elemen form & input
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const dobInput = document.getElementById('dob');
const messageInput = document.getElementById('message');
const messageContainer = document.querySelector('.pesan');

// Validasi real-time
[nameInput, dobInput, messageInput].forEach(input => {
    input.addEventListener("input", () => {
        input.style.border = input.value.trim() === "" ? "2px solid red" : "2px solid green";
    });
});

// Avatar random untuk komentar
const avatars = ["🧑", "👩", "👨‍🦱", "👩‍🎓", "👨‍🚀", "🐱", "🐻"];
const randomAvatar = () => avatars[Math.floor(Math.random() * avatars.length)];

// Kirim komentar
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const dob = dobInput.value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const message = messageInput.value.trim();
    const timestamp = new Date().toLocaleString();

    if (name && dob && gender && message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
            <p>${randomAvatar()} <em>(${timestamp})</em></p>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Tanggal:</strong> ${dob}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
            <p><strong>Pesan:</strong> ${message}</p>
        `;
        messageContainer.appendChild(messageElement);

        nameInput.value = '';
        dobInput.value = '';
        messageInput.value = '';
        const checked = document.querySelector('input[name="gender"]:checked');
        if (checked) checked.checked = false;
    } else {
        alert('Silakan isi semua kolom sebelum mengirim.');
    }
});

// Ganti gambar dari circle
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

// Toggle dark mode
//const toggleBtn = document.getElementById('toggleDark');
//if (toggleBtn) {
//    toggleBtn.addEventListener("click", () => {
//        document.documentElement.classList.toggle("dark");
//        localStorage.setItem("dark-mode", document.documentElement.classList.contains("dark"));
//    });
//}

// Animasi scroll section
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.9;
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < trigger) {
            sec.classList.add("visible");
        }
    });
});


