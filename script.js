// =======================
// FILE: script.js
// =======================

// Animation scroll
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('show');
    }
  })
})

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.onclick = ()=> nav.classList.toggle('active');

// Bouton top
const btn = document.getElementById('topBtn');
window.onscroll = ()=>{
  btn.style.display = window.scrollY>200 ? 'block':'none';
}
btn.onclick = ()=> window.scrollTo({top:0,behavior:'smooth'});

// Lien actif
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let fromTop = window.scrollY+100;
  links.forEach(link=>{
    let section = document.querySelector(link.getAttribute('href'));
    if(section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      link.style.color='white';
    } else {
      link.style.color='gray';
    }
  })
});
