import productDispaly from "./cardDisplay.js" 
const homeTemplate = document.querySelector("[data-homeTemplate]")
const homeCardHolder = document.querySelector("[data-homeProductsHolder]")
const testimonialTemplate = document.querySelector("[data-testimonialCarTemp]")
const testimonialHolder = document.querySelector("[data-testimonialCardHolder]")

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

const testimonialContent = [
    {testimonial: "The Product was great, easy buying", name: "Someone", job: "Masage", img: "./assets/img1.jpg"},
    {testimonial: "The Product was great, easy buying", name: "Someone", job: "Masage", img: "./assets/img1.jpg"},
    {testimonial: "The Product was great, easy buying", name: "Someone", job: "Masage", img: "./assets/img1.jpg"},
    {testimonial: "The Product was great, easy buying", name: "Someone", job: "Masage", img: "./assets/img1.jpg"},
]

productDispaly(arr, homeTemplate, homeCardHolder)
Testimonials(testimonialContent, testimonialTemplate, testimonialHolder)


function Testimonials(array, temp, cardH){
    array.forEach((elem) => {
        const card = temp.content.cloneNode(true).children[0];
        console.log(card)
        const testimonial = card.querySelector("[data-testimonial]")
        console.log(testimonial)
        const name = card.querySelector("[data-name]")
        const job = card.querySelector("[data-job]")
        const image = card.querySelector("[data-img]")
        testimonial.textContent = elem.testimonial
        name.textContent = elem.name
        job.textContent = elem.job
        image.setAttribute("src", elem.img)
    
        cardH.append(card)
        // console.log(cardImg)
    })
}