const navList = document.querySelector(".nav-list");
const hamberger = document.querySelector(".hamberger");
const year = new Date().getFullYear();
const footer = document.getElementById("footer");

const emailTo = `gautamshekhar078@gmail.com`;
const senderName = document.getElementById("sender-name");
const phoneNumber = document.getElementById("phone");
const emailSubject = document.getElementById("subject");
const message = document.getElementById("message-area");

const sendBtn = document.getElementById("submit-btn");

hamberger.addEventListener("click", (e) => {
  navList.classList.toggle("active");
  document.querySelector(".fa-bars").classList.toggle("fa-xmark");
});

window.onscroll = () => {
  navList.classList.remove("active");
  document.querySelector(".fa-bars").classList.remove("fa-xmark");
};
const ele = `<p>GKP &copy; ${year}</p>`;

footer.innerHTML = ele;
// Scrolling effect

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  window.open(
    `mailto:${emailTo}?subject=${emailSubject.value}&body= ${'I am ' +senderName.value + ' ' +'phone : '+ phoneNumber.value+ ' ' + message.value}`,
    "_self"
  );
});
