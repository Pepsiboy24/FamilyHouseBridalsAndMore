

const arr = [
    {name: "name", price: 12, img: "./assets/img1.jpg"},
    {name: "name1", price: 12, img: "./assets/img2.jpg"},
    {name: "name2", price: 12, img: "./assets/img3.jpg"},
    {name: "name3", price: 12, img: "./assets/img4.jpg"},
    // {name: "name4", price: 12, img: "../assets/img5.jpg"},
    // {name: "name5", price: 12, img: "../assets/img6.jpg"},
    // {name: "name5", price: 12, img: "../assets/img7.jpg"},
    // {name: "name5", price: 12, img: "../assets/img8.jpg"},
    // {name: "name5", price: 12, img: "../assets/img9.jpg"}
]
const homeTemplate = document.querySelector("[data-homeTemplate]")
const homeCardHolder = document.querySelector("[data-homeProductsHolder]")


productDispaly(arr, homeTemplate, homeCardHolder)

function productDispaly(array, temp, cardH){
    array.forEach((elem) => {
        console.log(elem.name)
        const card = temp.content.cloneNode(true).children[0];
        // const cardTitle = card.querySelector("[data-card-title]")
        // const cardPrice = card.querySelector("[data-card-price]")
        const cardImg = card.querySelector("[data-cardImg]")
        // cardTitle.textContent = elem.name
        // cardPrice.textContent = elem.price
        cardImg.setAttribute("src", elem.img)
        console.log(cardImg)
    
        cardH.append(card)
        // console.log(cardImg)
    })
}