let qrLink = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let qrImg = document.querySelector("image");
const image = document.querySelector(".image");
let child = document.querySelector(".child");
let container = document.querySelector(".container");
let img = document.createElement("img");
let des = document.createElement("p");
let download = document.createElement("button");

input.focus();

input.addEventListener("keypress",(e) => {
    if (e.key == "Enter") {
        getQr();
    }
});

btn.addEventListener("click",() => {
    getQr();
});

download.addEventListener("click", async () => {
    const responce =await fetch(img.src);
    const blob = await responce.blob();
    const dl = document.createElement("a");
    dl.href = URL.createObjectURL(blob);
    dl.download = `qr.jpeg`;
    dl.click();
});

function getQr() {
    let inputToQr = input.value;
    if (inputToQr == '') {
        alert("Enter text First..")
    }
    image.innerHTML = '';
    qrLink = qrLink + inputToQr;
    download.innerHTML = '<i class="fa-solid fa-download"></i>'
    download.classList.add("btn","small");
    des.classList.add("des");
    des.innerText = inputToQr;
    img.setAttribute("src", qrLink);
    console.log(qrLink);
    image.appendChild(img);
    image.appendChild(des);
    container.appendChild(download);
    input.value = "";
    qrLink = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
}

