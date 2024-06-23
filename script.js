let home=document.querySelector("#HomeBtn");
let about=document.querySelector("#AboutBtn");
let service=document.querySelector("#ServicesBtn");
let portfolio=document.querySelector("#PortfolioBtn");
let contact=document.querySelector("#ContactBtn");
let home_tgt=document.querySelector("#Information");
let about_tgt=document.querySelector("#About");
let service_tgt=document.querySelector("#Services");
let portfolio_tgt=document.querySelector("#projects");
let contact_tgt=document.querySelector("#Contact");
home.addEventListener("click",()=>{
    home_tgt.scrollIntoView({
        behavior: 'smooth'
    });
});
about.addEventListener("click",()=>{
    about_tgt.scrollIntoView({
        behavior: 'smooth'
    });
});
service.addEventListener("click",()=>{
    service_tgt.scrollIntoView({
        behavior: 'smooth'
    });
});
portfolio.addEventListener("click",()=>{
    portfolio_tgt.scrollIntoView({
        behavior: 'smooth'
    });
});
contact.addEventListener("click",()=>{
    contact_tgt.scrollIntoView({
        behavior: 'smooth'
    });
});