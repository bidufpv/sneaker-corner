// console.log("hello this is js") 
const wrapper = document.querySelector(".sliderwrapper")
const pd = document.querySelector(".product")
function getrandomcolor(){
    let a1 = Math.ceil(0+Math.random()*255)
    let b1 = Math.ceil(0+Math.random()*255)
    let c1 = Math.ceil(0+Math.random()*255)
    return `rgb(${a1}, ${b1}, ${c1})`
}
console.log(getrandomcolor());
// console.log(wrapper)
// wrapper.style.transform = "translate(-100vw)"
const menuitems = document.querySelectorAll(".menuitems")
console.log(menuitems)

const products = [
    {
        id: 1,
        title: "Air Force",
        price: "Rs 10,999",
        colors:[
            {
                code: "black",
                img: "air.png"
            },
            {
                code: "rgb(6, 17, 79)",
                img: "air2.png"
            },
        ],
       
    },
    {
        id:2,
        title: "Air Jordan",
        price: "Rs 20,999",

        colors:[
            {
                code: "white",
                img: "jordan.png"
            },
            {       
                code: "teal",
                img: "jordan2.png"
            },
        ],
        

    },
    {
        id:3,
        title: "Air Blazer",
        price: "Rs 15,999",

        colors:[
            {
                code:"white",
                img: "blazer.png",
            },
            {
                code: "green",
                img:"blazer2.png",
            },
        ],
    },
    {
        id:4,
        title: "Air Crater",
        price: "Rs 11,999",
        colors:[
            {
                code:"black",
                img:"crater.png",
            },
            {
                code:"white",
                img:"crater2.png",
            },
        ],
    },
    {
        id:5,
        title: "Air Hippie",
        price: "Rs 13,999",
        colors:[
            {
                code:"lavender",
                img:"hippie.png",
            },
            {
                code:"black",
                img:"hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0];
const currentproductImg = document.querySelector(".productImg")
const currentproducttitle = document.querySelector(".producttitle")
const currentproductprice = document.querySelector(".productprice")
const currentproductColors = document.querySelectorAll(".color") 
const currentproductsizes = document.querySelectorAll(".size")
const currentproductparagraph = document.querySelectorAll(".paragraph")
menuitems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        // console.log("you clicked!"+ index)
        // for changing the current slide
        wrapper.style.transform= `translateX(${-100*index}vw)`
        pd.style.backgroundColor= "getrandomcolor()"
        // for changing the choosen product
        choosenProduct = products[index]
        // for changing the texts of currentproduct
        currentproducttitle.textContent = choosenProduct.title
        // for changing the price of currentproduct
        currentproductparagraph.textContent = choosenProduct.paragraph
        currentproductprice.textContent= choosenProduct.price
        // for changing the product image
        // currentproductdescription.textContent = choosenProduct.pd1
        // console.log(currentproductdescription)
        currentproductImg.src = choosenProduct.colors[0].img 
        console.log(currentproductImg) 
        
        //for assigning new colors

        currentproductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code
            console.log(index)
        })
    })
}) 

currentproductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
         currentproductImg.src = choosenProduct.colors[index].img

    })
})

currentproductsizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        currentproductsizes.forEach((size)=>{
            size.style.backgroundColor = "transparent"
        size.style.color = "white"
        })
        size.style.backgroundColor = "black"
        size.style.color = "greenyellow"
    })
})

const paybtn = document.querySelector(".paybtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

paybtn.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});






// const wrapper = document.querySelector(".sliderwrapper")
