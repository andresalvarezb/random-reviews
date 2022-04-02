import data from './data.js';

window.onload = () => {
    document.getElementById('footer').addEventListener('click', getQuote);
}

let index = 0;
function getQuote(e) {
    if (e.target.id === 'btn') {
        getRandomQuote()
    } else if (e.target.id === 'right-arrow') {
        if (index > data.length) { index = 0 }
        card(data[index++])
    } else if (e.target.id === 'left-arrow') {
        if (index > data.length) { index = 0 }
        if (index < 0) { index = data.length - 1 }
        card(data[index--])
    }
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
                <img class="img-author" src=${image} alt=${author}>
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