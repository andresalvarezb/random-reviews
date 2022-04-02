import data from './data.js';

window.onload = () => {
    document.getElementById('footer').addEventListener('click', getQuote);
}

function getQuote(e) {
    if (e.target.id === 'btn') {
        getRandomQuote()
    } else if (e.target.id === 'right-arrow') {
        getNextQuote()
    } else if (e.target.id === 'left-arrow') {
        getPreviewQuote()
    }
}

var i = 0
function getNextQuote() {
    if (i > data.length) {
        i = 0
    }
    console.log(i);
    card(data[i++])
}
function getPreviewQuote() {
    if (i > data.length) {
        i = 0
    }
    if (i < 0) {
        i = data.length - 1
    }
    console.log(i);
    card(data[i--])
}

function getRandomQuote() {
    const index = Math.floor(Math.random() * data.length)
    card(data[index])
}

function card(object) {
    const { quote, author, category, image } = object

    // delete preview card
    if (document.querySelector('.wrapper')) {
        document.querySelector('.wrapper').remove()
    }

    const container = document.querySelector('.card')
    const referenceNode = document.querySelector('#footer')
    const content = document.createElement('div');
    content.innerHTML = `
        <div class="wrapper">
            <figure class="img-container">
            <div class="icon-quote">
            <img src="assets/quote-left.svg" alt="quote icon">
            </div>
            <img class="img-author"
            src=${image}
            alt=${author}>
            <figcaption class="author-container">
            <cite>${author}</cite>
            <p>${category}</p>
            </figcaption>
            </figure>
            <p class="quote">${quote}</p>
        </div>
    `
    container.insertBefore(content, referenceNode)
}