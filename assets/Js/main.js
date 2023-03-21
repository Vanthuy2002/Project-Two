//action button
let btnLinks = document.querySelectorAll(".price-link");
btnLinks.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnLinks.forEach((item) => {
      item.classList.remove("action");
    });
    btn.classList.add("action");
  });
});

let person = [
  {
    name: "Peter Patron",
    img: "./assets/img/pexels-olena-neva-1021693.jpg",
    job: "Student of Web Design",
    qoutes: ` Not only does my resume look impressive—filled with the names
    and logos of world-class institutions—but these certificates
    also bring me closer to my career goals by validating the
    skills I've learned`,
  },
  {
    name: "Em Fukuda",
    img: "./assets/img/pexels-photo-415829.webp",
    job: "Student of Japanses",
    qoutes: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique iusto quaerat deserunt assumenda delectus sed suscipit esse? Modi reiciendis pariatur id eveniet quod. Nesciunt voluptatibus blanditiis enim hic, temporibus id?`,
  },
];

let feedback = document.querySelector(".feedback-list");

function renderPerson(arr) {
  let htmls = arr.map((item) => {
    return `<div class="feedback-item">
    <div class="info">
      <img src="${item.img}" alt="avatar" />
      <p class="title">${item.name}</p>
      <p class="desc">${item.job}</p>
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
    <div class="feedback-content">
      <img src="./assets/img/qoutes.svg" alt="" class="blockqoutes" />
      <blockquote>
        ${item.qoutes}
      </blockquote>
    </div>
  </div>`;
  });
  feedback.insertAdjacentHTML("beforeend", htmls.join(""));
}
renderPerson(person);
