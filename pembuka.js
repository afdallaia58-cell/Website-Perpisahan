// ==========================================
// HALAMAN PEMBUKA
// ==========================================

const openButton =
    document.getElementById("openStory");


openButton.addEventListener(
    "click",
    function () {

        // Tambahkan efek keluar
        document.body.classList.add("exit");


        // Tunggu animasi selesai
        setTimeout(function () {

            window.location.href =
                "Tampilan.html";

        }, 900);

    }
);