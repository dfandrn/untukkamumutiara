const NOMOR_WA_KAMU = "6289526797014"; 
const tanggalMulaiSuka = new Date(2026, 0, 1, 0, 0); // Konfigurasi Tanggal jadian/suka

setInterval(createHeart, 300);
setInterval(updateCountdown, 1000);
setInterval(buatPartikelAura, 400); 

function createHeart() {
    const emojis = ['❤️', '💖', '🌸', '✨', '🎈', '💕'];
    const heart = document.createElement('div');
    heart.classList.add('heart-drop');
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.opacity = Math.random() * 0.6 + 0.4;
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

function buatPartikelAura() {
    const hal3 = document.getElementById('halaman3');
    if (hal3 && window.getComputedStyle(hal3).display === 'flex') {
        const partikel = document.createElement('div');
        partikel.classList.add('partikel-aura');
        
        const size = Math.random() * 8 + 4 + "px";
        partikel.style.width = size;
        partikel.style.height = size;
        partikel.style.left = Math.random() * 100 + "vw";
        partikel.style.animationDuration = Math.random() * 4 + 4 + "s";
        
        if(Math.random() > 0.6) {
            partikel.innerHTML = "✨";
            partikel.style.background = "transparent";
            partikel.style.fontSize = "10px";
        }
        
        hal3.appendChild(partikel);
        setTimeout(() => { partikel.remove(); }, 7000);
    }
}

function mulaiPetualangan(idHalamanTujuan) {
    const lagu = document.getElementById('musikLatar');
    lagu.play().catch(() => { console.log("Musik aktif."); });
    jalankanTransisiLoading('halaman1', idHalamanTujuan);
}

function jalankanTransisiLoading(idHalamanSekarang, idHalamanTujuan) {
    const overlay = document.getElementById('loadingLayerOverlay');
    const bar = document.getElementById('isiBarLoading');
    
    overlay.style.display = 'flex';
    bar.style.width = '0%';
    
    setTimeout(() => { bar.style.width = '100%'; }, 50);

    setTimeout(() => {
        overlay.style.display = 'none';
        document.getElementById(idHalamanSekarang).style.display = 'none';
        
        const tujuan = document.getElementById(idHalamanTujuan);
        tujuan.style.display = 'flex';
        tujuan.scrollIntoView({ behavior: 'smooth' });
    }, 1550);
}

let pengetikanGlow;
function ketikPesan(emot, teksLengkap) {
    const kotakPesan = document.getElementById('pesanRomantis');
    kotakPesan.style.display = 'block';
    kotakPesan.innerHTML = `${emot} <br> <span id="textKetikArea" style="font-size: 0.95rem; font-weight: normal; color:#555; line-height:1.4;"></span>`;
    
    clearInterval(pengetikanGlow);
    let index = 0;
    const targetWadah = document.getElementById('textKetikArea');
    
    pengetikanGlow = setInterval(() => {
        if (index < teksLengkap.length) {
            targetWadah.innerHTML += teksLengkap.charAt(index);
            index++;
        } else {
            clearInterval(pengetikanGlow);
        }
    }, 30); 
}

function updateCountdown() {
    const sekarang = new Date();
    const selisih = sekarang - tanggalMulaiSuka;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);

    const wadahCount = document.getElementById('waktuMemendam');
    if(wadahCount) {
        wadahCount.innerText = `Aku udah suka kamu selama: ${hari} Hari, ${jam} Jam, ${menit} Menit, ${detik} Detik ⌛❤️`;
    }
}

const kataNgeledek = [
    "Gak bisa wlee! 😜",
    "Eits, mau mencet apa hayo? 😝",
    "Tombolnya dikunci khusus buat kamu! 🔒",
    "Yah kesasar tangannya ya? 🤣",
    "Coba lagi sampai tahun depan! 🤪"
];

function hindariTombol() {
    const btnGa = document.getElementById('btnGa');
    const bubble = document.getElementById('bubbleNgeledek');
    const x = Math.random() * (window.innerWidth - btnGa.clientWidth - 40);
    const y = Math.random() * (window.innerHeight - btnGa.clientHeight - 40);
    
    btnGa.style.position = 'fixed';
    btnGa.style.left = x + 'px';
    btnGa.style.top = y + 'px';

    bubble.style.display = 'block';
    bubble.style.position = 'fixed';
    bubble.style.left = (x + btnGa.clientWidth/2 - bubble.clientWidth/2) + 'px';
    bubble.style.top = (y - 40) + 'px';
    bubble.innerText = kataNgeledek[Math.floor(Math.random() * kataNgeledek.length)];
}

function pemicuEfekLove() {
    document.getElementById('bubbleNgeledek').style.display = 'none';
    const overlay = document.getElementById('loveLoadingOverlay');
    overlay.style.opacity = '1';
    overlay.innerHTML = ''; 

    for (let i = 0; i < 60; i++) {
        const titik = document.createElement('div');
        titik.classList.add('love-titik');
        titik.innerHTML = i % 2 === 0 ? "•" : "❤";
        
        const sudut = Math.random() * Math.PI * 2;
        const jarak = Math.random() * 250 + 80; 
        const x = Math.cos(sudut) * jarak + 'px';
        const y = Math.sin(sudut) * jarak + 'px';
        
        titik.style.setProperty('--x', x);
        titik.style.setProperty('--y', y);
        titik.style.animationDelay = (Math.random() * 0.3) + 's';
        overlay.appendChild(titik);
    }

    setTimeout(() => {
        overlay.style.opacity = '0';
        jalankanTransisiLoadingForm();
    }, 2000);
}

function jalankanTransisiLoadingForm() {
    const overlay = document.getElementById('loadingLayerOverlay');
    const bar = document.getElementById('isiBarLoading');
    overlay.style.display = 'flex';
    bar.style.width = '0%';
    
    setTimeout(() => { bar.style.width = '100%'; }, 50);

    setTimeout(() => {
        overlay.style.display = 'none';
        terimaCinta();
    }, 1550);
}

function terimaCinta() {
    const kotakFinal = document.getElementById('kotakFinal');
    
    kotakFinal.innerHTML = `
        <div style="animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
            <div class="wrapper-foto-berputar">
                <div class="jalur-foto-putar">
                    <img src="foto1.jpg" class="foto-bulat-putar" alt="1"><img src="foto2.jpg" class="foto-bulat-putar" alt="2"><img src="foto3.jpg" class="foto-bulat-putar" alt="3"><img src="foto4.jpg" class="foto-bulat-putar" alt="4"><img src="foto5.jpg" class="foto-bulat-putar" alt="5"><img src="foto6.jpg" class="foto-bulat-putar" alt="6">
                    <img src="foto1.jpg" class="foto-bulat-putar" alt="1"><img src="foto2.jpg" class="foto-bulat-putar" alt="2"><img src="foto3.jpg" class="foto-bulat-putar" alt="3"><img src="foto4.jpg" class="foto-bulat-putar" alt="4"><img src="foto5.jpg" class="foto-bulat-putar" alt="5"><img src="foto6.jpg" class="foto-bulat-putar" alt="6">
                </div>
            </div>
            <h1 style="font-size: 1.8rem; margin-bottom:5px;">YEEAYY RESMI! 💖🥳</h1>
            <p style="font-size: 0.9rem; margin-bottom: 15px; font-weight: bold; color: #ff1493;">Isi ini dulu yuk buat dikirim ke WA aku! 👇</p>
            <div class="form-wa">
                <label>Gimana perasaan kamu sekarang? 🥰</label>
                <textarea id="perasaan" rows="2" placeholder="Contoh: Bahagia bangeeet..."></textarea>
                <label>Nanti kita first date ke mana? 🍰🍿</label>
                <input type="text" id="tempatDate" placeholder="Tulis tempat date impian... ">
                <button class="btn-kirim-wa" onclick="kirimKeWhatsApp()">Kirim ke WA Aku! 📲</button>
            </div>
            <div class="text-tambahan">bungaanyaaa sama barangnya nanti yaaaa 🌸🎁</div>
        </div>
    `;
    for(let i=0; i<40; i++) { setTimeout(createHeart, i * 80); }
}

function kirimKeWhatsApp() {
    const perasaan = document.getElementById('perasaan').value.trim();
    const tempatDate = document.getElementById('tempatDate').value.trim();
    if (perasaan === "" || tempatDate === "") {
        alert("Jangan dikosongin dong perasan sama tempat date-nya, isi dulu ya! 😋");
        return;
    }
    const teksPesan = "Halo! ✨ Incaran masa depanmu sudah mengisi form jadian nih:" + "%0A%0A" +
                      "1. Perasaanku saat ini: \"" + perasaan + "\" 🥰" + "%0A" +
                      "2. Tempat date yang aku pengen: \"" + tempatDate + "\" 🗺️" + "%0A%0A" +
                      "Yeayyy sekarang kita pacaran! Jangan lupa jemput aku ya! 💖✨";
    window.location.href = "https://wa.me/" + NOMOR_WA_KAMU + "?text=" + encodeURIComponent(teksPesan);
}
