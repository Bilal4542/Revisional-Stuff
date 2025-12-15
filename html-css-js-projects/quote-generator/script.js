let quote = document.querySelector('p')
let btn = document.querySelector('button')

const quotations = [
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you; you have to go out and get it.",
  "Sometimes later becomes never. Do it now.",
  "The key to success is to focus on goals, not obstacles.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Doubt kills more dreams than failure ever will."
];


const quoteHandler = () =>{
    const randomIndex = Math.floor(Math.random() * quotations.length);
    quote.innerHTML = quotations[randomIndex]
}



btn.addEventListener('click', quoteHandler)