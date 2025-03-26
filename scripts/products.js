import productDispaly from "./cardDisplay.js"



const template = document.querySelector("[data-template]")
const cardHolder = document.querySelector("[data-cardHolder]")
const filterItemsBtn = document.querySelector("[data-FilterItemsBtn]")
const filterList = document.querySelector("[data-filterList]")
const filterItem = document.querySelectorAll("[data-filterItem]")

for (let i = 0; i < filterItem.length; i++) {
    const element = filterItem[i];
    const p = element.querySelector("p")
    element.addEventListener("click", () => {
        produce.forEach(product => {
            // const isVissible = product.name.includes(value)
            const isVissible = product.productType.toLowerCase() == p.textContent.toLowerCase()
            console.log(isVissible)            
            // product.element.classList.add("hide", !isVissible)
            if(isVissible){
                product.element.style.display = "flex"
            }else{
                if(p.textContent == "All"){
                    product.element.style.display = "flex"
                }else{
                    product.element.style.display = "none"
                }
            }
            // console.log(product.element)
        })
    })
    
}

const arr = [
    {name: "name", price: 12, img: "../assets/imgs/compressed_img1.jpg", type: "Skin"},
    {name: "name1", price: 12, img: "../assets/imgs/compressed_img2.jpg", type: "Hair"},
    {name: "name2", price: 12, img: "../assets/imgs/compressed_img3.jpg", type: "Bridals"},
    {name: "name3", price: 12, img: "../assets/imgs/compressed_img4.jpg", type: "Make up"},
    {name: "name4", price: 12, img: "../assets/imgs/compressed_img5.jpg", type: "skin"},
    {name: "name5", price: 12, img: "../assets/imgs/compressed_img6.jpg", type: "skin"},
    {name: "name5", price: 12, img: "../assets/imgs/compressed_img7.jpg", type: "Hair"},
    {name: "name5", price: 12, img: "../assets/imgs/compressed_img8.jpg", type: "Bridal"},
    {name: "name5", price: 12, img: "../assets/imgs/compressed_img1.jpg", type: "Hair"}
]
let produce = []
produce = arr.map(elem => {
    const card = template.content.cloneNode(true).children[0];
    const cardTitle = card.querySelector("[data-card-title]")
    const cardPrice = card.querySelector("[data-card-price]")
    const cardImg = card.querySelector("[data-card-img]")
    cardTitle.textContent = elem.name
    cardPrice.textContent = elem.price
    cardImg.setAttribute("src", elem.img)

    cardHolder.append(card)
    return {productType: elem.type, element: card};
    // console.log(card)
})

// productDispaly(arr, template, cardHolder);


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
