const reviews = [
    {
        quote: "Very Very Good",
        author: "HELIO probably"
    },
    {
        quote: "Phenomenal",
        author: "AJ Styles"
    },
    {
        quote: "I am just here to find darling promit <3",
        author: "Bryonna"
    }
]

let index = 0

const quoteDOM = document.querySelector(".quote")
const authorDOM = document.querySelector(".author")

quoteDOM.textContent = reviews[0].quote
authorDOM.textContent = `----${reviews[0].author}`

document.querySelector(".nextButton").addEventListener("click", function() {
    if(index != reviews.length - 1) {
        index++;
        quoteDOM.textContent = reviews[index].quote
        authorDOM.textContent = `----${reviews[index].author}`
    }
})

document.querySelector(".prevButton").addEventListener("click", function() {
    if(index != 0) {
        index--;
        quoteDOM.textContent = reviews[index].quote
        authorDOM.textContent = `----${reviews[index].author}`
    }
})