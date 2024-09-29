let imgbox = document.getElementById("img-box")
let qrImage = document.getElementById("qr-image")
let qrText = document.getElementById("qr-text")

function generateQr(){
    if (qrText.value.length > 0){

        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgbox.classList.add("show-img")
    } else{
        qrText.classList.add('error')
        setTimeout(() =>{
            qrText.classList.remove('error')
        },1000)
    }
}