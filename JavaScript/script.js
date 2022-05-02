const navList = document.querySelector('.nav-list');
const hamberger = document.querySelector(".hamberger");
const year = new Date().getFullYear()
const footer = document.getElementById('footer')


hamberger.addEventListener('click',(e) => {
    navList.classList.toggle('active');
    document.querySelector('.fa-bars').classList.toggle('fa-xmark')
});

window.onscroll = () => {
    navList.classList.remove('active');
    document.querySelector('.fa-bars').classList.remove('fa-xmark')
}
const ele = `<p>GKP &copy; ${year}</p>`;

footer.innerHTML=ele
// Scrolling effect

