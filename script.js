const key = "f973d71224c74f4096dd57859f70ca0d";
const url = "https://newsapi.org/v2/everything?q=";


window.addEventListener("load", () => getNews("India"));

async function getNews(query) {
    try {
        const news = await fetch(`${url}${query}&sortBy=publishedAt&apiKey=${key}`);
        const data = await news.json();
        bindData(data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

function bindData(articles) {
    const cardsContainer = document.querySelector(".cards-container");
    const cardsTemplate = document.querySelector("#template");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;

        const cardClone = document.importNode(cardsTemplate.content, true);
        // console.log(article.urlToImage);
        cardClone.querySelector("#card-header").href=article.title;
        cardClone.querySelector("#card-header img").src = article.urlToImage;
        cardClone.querySelector("#title").innerHTML = article.title;
        cardClone.querySelector("#source").innerHTML = article.source.name;
        cardClone.querySelector("#desc").innerHTML = article.description;

        cardsContainer.appendChild(cardClone);
        console.log("Card appended successfully");
    });
}

document.addEventListener("DOMContentLoaded",()=>{
    const cricket = document.querySelector("nav .index ul li #cricket");
    const finance = document.querySelector("nav .index ul li #finance");
    const tech = document.querySelector("nav .index ul li #tech");
    const button = document.querySelector(".search button");
    const input = document.querySelector(".search input");

    cricket.addEventListener("click",(event)=>{
        event.preventDefault();
        getNews("cricket");
    });
    finance.addEventListener("click",(event)=>{
        event.preventDefault();
        getNews(finance)
    });
    tech.addEventListener("click",(event)=>{
        event.preventDefault();
        getNews("technology");
    });

    button.addEventListener("click",()=>{
        if (input.value=="")return;
        getNews(input.value);
        input.innerHTML="";
    });

});

let typingHeading = document.querySelector("#typing-heading #content h1");
const text ="VISCOUS... NEWS...";
let index=0;
function type(){
    if (index<text.length){
        typingHeading.innerHTML+=text[index];
        index++;
        setTimeout(type,100);
    }else{
        setTimeout(()=>{
            typingHeading.innerHTML = "";
            index=0;
            type();
        },500)
    }
}
type();


