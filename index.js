//BENNI sezione earn script che modifica l'immagine al passaggio del mouse
//IMPORTANTE! scaricare le immagini delle card e inserirle dentro la directory ./assets
//i percorsi degli assets vanno posti dentro gli array in ordine, in quanto la funzione associa
//le immagini con indici uguali
const imageHover = document.querySelectorAll(".card-image-earn")

const dataImageEarn = [
    "assets/earn-farm.webp",
    "assets/earn-fixed-staking.webp",
    "assets/earn-liquidity-staking.webp",
    "assets/earn-pools.webp"
]
const dataImageOutEarn = [
    "assets/earn-farm-purple.webp",
    "assets/earn-fixed-staking-purple.webp",
    "assets/earn-liquidity-staking-purple.webp",
    "assets/earn-pools-purple.webp"
]
//itero la node list e il suo indice
imageHover.forEach((image, index) => {
    //associo un mouseover all'elemento i-esimo 
    image.addEventListener("mouseover", () => {
        //associa l'elemento dell'array alla src dell'immagine
        // image.classList.add("fade-out")
        image.src = dataImageEarn[index]
        // setTimeout(() => {
        //     image.classList.remove("fade-out")
        // }, 300);
    })
    image.addEventListener("mouseout", () => {
        //torna all'elemento precedente
        image.src = dataImageOutEarn[index]
    })
})


//script monetina
// const img = document.querySelector(".img-monetina")
// let n = 0

// function monetina() {
//     img.src = `https://assets.pancakeswap.finance/web/landing/cake-token-sequence/${n}.png`
//     n++
//     if (n == 200) {
//         clearInterval(intervalID)
//     }
// }
// const intervalID = setInterval(monetina, 100)
const canvasMonetina = document.querySelector('.myCanvas');
const ctx = canvasMonetina.getContext('2d');
let n = 0;
canvasMonetina.width = 1200
canvasMonetina.height = 1200
function monetina() {
    const imgCanvaMonetina = new Image()
    imgCanvaMonetina.onload = function () {
        ctx.clearRect(0, 0, canvasMonetina.width, canvasMonetina.height)
        ctx.drawImage(imgCanvaMonetina, 0, 0, canvasMonetina.width, canvasMonetina.height)
    }
    imgCanvaMonetina.src = `https://assets.pancakeswap.finance/web/landing/cake-token-sequence/${n}.png`
    n++
    if (n >= 200) {
        clearInterval(intervalID)
    }
}

    const intervalID = setInterval(monetina, 100)


