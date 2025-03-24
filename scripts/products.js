import productDispaly from "./cardDisplay.js"


const template = document.querySelector("[data-template]")
const cardHolder = document.querySelector("[data-cardHolder]")
const filterItemsBtn = document.querySelector("[data-FilterItemsBtn]")
const filterList = document.querySelector("[data-filterList]")

const arr = [
    {name: "name", price: 12, img: "../assets/imgs/compressed_img1.jpg"},
    {name: "name1", price: 12, img: "../assets/imgs/compressed_img2.jpg"},
    {name: "name2", price: 12, img: "../assets/imgs/compressed_img3.jpg"},
    {name: "name3", price: 12, img: "../assets/imgs/compressed_img4.jpg"},
    {name: "name4", price: 12, img: "../assets/imgs/compressed_img5.jpg"},
    {name: "name5", price: 12, img: "../assets/imgs/compressed_img6.jpg"},
    {name: "name5", price: 12, img: "../assets/imgs/compressed_img7.jpg"},
    {name: "name5", price: 12, img: "../assets/imgs/compressed_img8.jpg"},
    {name: "name5", price: 12, img: "../assets/imgs/compressed_img1.jpg"}
]
productDispaly(arr, template, cardHolder);


// function productDispaly(array, temp, cardH){
//     array.forEach((elem) => {
//         console.log(elem.name)
//         const card = temp.content.cloneNode(true).children[0];
//         const cardTitle = card.querySelector("[data-card-title]")
//         const cardPrice = card.querySelector("[data-card-price]")
//         const cardImg = card.querySelector("[data-card-img]")
//         cardTitle.textContent = elem.name
//         cardPrice.textContent = elem.price
//         cardImg.setAttribute("src", elem.img)
    
//         cardH.append(card)
//         console.log(cardImg)
//     })
// }


filterItemsBtn.addEventListener("click", () => {
    console.log("Hello")
    filterList.classList.toggle("show")
})

// arr.forEach((elem) => {
//     console.log(elem.name)
//     const card = template.content.cloneNode(true).children[0];
//     const cardTitle = card.querySelector("[data-card-title]")
//     const cardPrice = card.querySelector("[data-card-price]")
//     const cardImg = card.querySelector("[data-card-img]")
//     cardTitle.textContent = elem.name
//     cardPrice.textContent = elem.price
//     cardImg.setAttribute("src", elem.img)

//     cardHolder.append(card)
//     console.log(cardImg)
// })
