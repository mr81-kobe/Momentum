const quotes=[{
quote: "Friends come and go But banners hang forever",
author: "BlackMamba",
},
{
quote: "Love me or hate me",
author: "BlackMamba",
},
{
quote: "Winning doesn't always mean being first. Winning means you're doing better than you've ever done before.",
author: "BlackMamba",
},
{
quote: "If you fail to prepare, you've prepared to fail.",
author: "BlackMamba",
},
{
quote: "There is no I in TEAM but there is M, E pass me mutherfucker!!",
author: "BlackMamba",
},
{
quote: "It's all about the journey, not the outcome.",
author: "BlackMamba",
},
{
    quote: "Failure I can live with. Not trying is what I can't handle! ",
    author: "BlackMamba",
},
{
    quote: "Never put an age limit on your dreams.",
    author: "BlackMamba",
}

] 

const quote= document.querySelector("#quotes span:first-child");
const author= document.querySelector("#quotes span:last-child");
const todayquotes=quotes[Math.floor(Math.random()*quotes.length)];
//console.log(randome);
//console.log(quotes[randome].quote); 

function setQuote(){

quote.innerText=todayquotes.quote;

author.innerText=todayquotes.author;

}
setQuote();

