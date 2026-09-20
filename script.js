// ========================================
// EFEK HATI
// ========================================

const hugButton =
    document.getElementById(
        "virtual-hug-btn"
    );


const hugCounter =
    document.getElementById(
        "hug-counter"
    );


let hugCount = 247;


hugButton.addEventListener(
    "click",
    function () {

        hugCount++;

        hugCounter.textContent =
            hugCount;


        for (let i = 0; i < 5; i++) {

            const heart =
                document.createElement("div");

            heart.classList.add(
                "floating-heart"
            );

            heart.textContent = "❤️";


            const buttonPosition =
                hugButton.getBoundingClientRect();


            heart.style.left =
                buttonPosition.left +
                Math.random() *
                buttonPosition.width +
                "px";


            heart.style.top =
                buttonPosition.top +
                "px";


            document.body.appendChild(
                heart
            );


            setTimeout(() => {

                heart.remove();

            }, 1500);

        }

    }
);
// ===============================
// MUSIK PERPISAHAN
// ===============================

const audio = document.getElementById("farewell-audio");
const audioButton = document.getElementById("audio-toggle-btn");

audioButton.addEventListener("click", () => {

    if (audio.paused) {

        audio.play();

        audioButton.innerHTML = "⏸ Jeda Lagu";

    } else {

        audio.pause();

        audioButton.innerHTML = "▶ Putar Lagu Perpisahan";

    }

});
// ========================================
// KIRIM PESAN KE WHATSAPP
// ========================================

const farewellForm = document.getElementById("farewell-form");

// GANTI DENGAN NOMOR WHATSAPP KAMU
const nomorWhatsApp = "6282283828364";

farewellForm.addEventListener("submit", function (event) {

    // Mencegah halaman refresh
    event.preventDefault();

    // Mengambil data dari form
    const nama = document.getElementById("author-name").value.trim();
    const pesan = document.getElementById("message-body").value.trim();

    // Cek apakah data sudah diisi
    if (nama === "" || pesan === "") {

        alert("Silakan isi nama dan pesan terlebih dahulu.");

        return;
    }

    // Membuat isi pesan WhatsApp
    const isiPesan =
        `💌 Pesan dari Website Perpisahan

Nama: ${nama}

Pesan:
"${pesan}"

✨ Dikirim melalui website Sampai Jumpa, Teman.`;

    // Mengubah pesan menjadi format URL
    const pesanEncoded = encodeURIComponent(isiPesan);

    // Membuat link WhatsApp
    const linkWhatsApp =
        `https://wa.me/${6282283828364}?text=${pesanEncoded}`;

    // Membuka WhatsApp
    window.open(linkWhatsApp, "_blank");

});


// ========================================
// ANIMASI SAAT SCROLL
// ========================================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;


        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


// Jalankan sekali saat halaman dibuka
revealOnScroll();
