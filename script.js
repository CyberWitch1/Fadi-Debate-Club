//Nav scroll js

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('nav-scroll', window.scrollY>0)
})



