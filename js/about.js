// tentang kami / About us

document.getElementById(
  "about_paragraf"
).innerHTML = `Semua berawal dari 3 pelajar yang memiliki satu impian sederhana, menciptakan sesuatu yang bermakna. Dari ruangan kecil yang penuh ide, kopi dingin yang tak pernah habis dan malam - malam panjang tanpa tidur, lahirlah sebuah gagasan sebuah toko online yang bukan sekedar tempat berbelanja, melainkan wujud dari semangat, keberanian dan mimpi, terciptalah <span class="fananda">Fananda</span>.Toko online ataupun bisnis digital, <span class="fananda">Fananda</span> menyajikan kelezatan yang tak terlupakan. <span class="fw-bold"></span>`;

const picts = [
  { img: "assets/images/startup.jpg" },
  { img: "assets/images/startup-2.jpg" },
];

const carousel = document.getElementById("carousel");

picts.forEach((pict, index) => {
  carousel.innerHTML += `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${pict.img}" alt="about-img.jpg">
    </div>
    `;
});
