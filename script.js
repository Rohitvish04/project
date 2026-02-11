// your code goes here
// mobile menu toggle
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.onclick = () => nav.classList.toggle("show");

function scrollToSection(id){
  document.getElementById(id).scrollIntoView();
}

// form submit
document.getElementById("form").addEventListener("submit",(e)=>{
  e.preventDefault();
  alert("Thank you! Our team will contact you soon.");
});
