/******************************************
 *****************************************/

/***
 * `quotes` array
 ***/
// Reference the quotes I got it from https://www.keepinspiring.me/famous-quotes/
// http://www.abrahamlincolnonline.org/lincoln/speeches/quotes.htm
var quotes = [
    {
        quote: 'The journey of a thousand miles begin with one step',
        source: 'Lao Tzu'
    },
    {
        quote: 'That which does not kill us makes us stronger',
        source: 'Friedrich Nietzsche'
    },
    {
        quote: 'Life is what happens when you\'re busy making other plans',
        source: 'John Lennon'
    },
    {
        quote: 'You are ambitious, which, within reasonable bounds, does good rather than harm',
        source: 'Abraham Lincoln',
        citation: 'Letter to Joseph Hooker'
    },
    {
        quote: 'Towering genius distains a beaten path. It seeks regions hitherto unexplored',
        source: 'Abraham Lincoln',
        year: 1838
    }
]


/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
    let randNumber = Math.floor(Math.random() * quotes.length)
    console.log(randNumber)
    return quotes[randNumber]
}

/***
 * `printQuote` function
 ***/
function printQuote() {
    let randomQuote = getRandomQuote()
    let quoteBox = document.getElementById('quote-box')
    // if the object has citation or year the variable will receive the html in respect to it, otherwise
    // it will assign an empty string to it
    let citation = 'citation' in randomQuote ? `<span class="citation">${randomQuote.citation}</span>` : ''
    let year = 'year' in randomQuote ? `<span class="year">${randomQuote.year}</span>` : ''
    // quoteBox is receiving the html already formatted
    quoteBox.innerHTML = `<p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}${citation}${year}</p>`

    console.log(`${randomQuote.quote} ${randomQuote.source}`)
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

 ***/

let btn = document.getElementById('load-quote')
btn.addEventListener('click', printQuote)