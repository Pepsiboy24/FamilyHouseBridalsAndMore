export default function productDispaly(array, temp, cardH){
    array.forEach((elem) => {
        console.log(elem.name)
        const card = temp.content.cloneNode(true).children[0];
        const cardTitle = card.querySelector("[data-card-title]")
        const cardPrice = card.querySelector("[data-card-price]")
        const cardImg = card.querySelector("[data-card-img]")
        cardTitle.textContent = elem.name
        cardPrice.textContent = elem.price
        cardImg.setAttribute("src", elem.img)
    
        cardH.append(card)
        console.log(cardImg)
    })
}