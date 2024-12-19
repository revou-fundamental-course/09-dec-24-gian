console.log("Javascript berhasil tersambung");

let indexSlide = 0;

nextSlide();

// Fungsi untuk memvalidasi
function validateForm() {
    const fullnameInput = document.getElementById("fullname-input").value;
    console.log(fullnameInput);

    //Validasi jika nama user tidak kosong
    if (fullnameInput == "") {
        alert("Username tidak boleh kosong!");
    }else{
        document.getElementById("fullname-result").innerHTML = fullnameInput;
    }

    console.log("validateForm executed");

    const emailInput = document.getElementById("email-input").value;
    console.log(emailInput);

    //Validasi jika email user tidak kosong
    if (emailInput == "") {
        alert("Email tidak boleh kosong!");
    }else{
        document.getElementById("email-result").innerHTML = emailInput;
    }

    console.log("validateForm executed");
}

function nextSlide() {
    showBanner(indexSlide += 1);
}

function showBanner(n) {
    const imageList = document.getElementsByClassName('banner-img');

    console.log(imageList);
    console.log(imageList.length);
    console.log(n);
    if (n > imageList.length - 1) indexSlide = 0;

    // Hide semua banner
    for (let i = 0; i < imageList.length; i++) {
        imageList[i].style.display = "none";
    }

    // Show 1 Banner sesuai Posisi yang diinginkan
    imageList[indexSlide].style.display = "block";
}

// Automate banned slide
setInterval(nextSlide, 3000);