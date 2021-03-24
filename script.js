
let quote = ["And now that you don't have to be perfect, you can be good.", 
"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.",
"We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out.",
"Life is never fair, and perhaps it is a good thing for most of us that it is not.",
"Don't cry because it's over. Smile because it happened.",
"Everything is hard before it is easy.",
"We are all broken, that's how the light gets in.",
"I want to taste and glory in each day, and never be afraid to experience pain."]
let author = ["―John Steinbeck", "—J.K. Rowling", "Ray Bradbury", "—Oscar Wilde", " —Dr. Seuss", "—Johann Wolfgang von Goethe",
" —Ernest Hemingway", "—Sylvia Plath", ]


document.getElementById('generate').addEventListener('click', generator)
function generator() {
    let randomNumber = parseInt(Math.random()*quote.length);
    document.getElementById('quote').innerHTML = quote[randomNumber];
    document.getElementById('author').innerHTML = author[randomNumber];
}