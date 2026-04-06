// Collaborations section

const collabolators = [
  { name: "Dhevv Label", img: "assets/icon/dhevv.png" },
  { name: "Lafern Collective", img: "assets/icon/lafern.jpeg" },
  { name: "Vousa Official", img: "assets/icon/vousa.png" },
];

const collab = document.getElementById("collab");

collabolators.forEach((collabolator, index) => {
  collab.innerHTML += `
     <div class="box-collab text-center ${index === 2 ? "box-vousa" : ""}">
          <img src="${collabolator.img}" alt="">
          <h5 class="fw-semibold mt-4">${collabolator.name}</h5>
        </div>
    `;
});

// Detail products
const products = [
  {
    name: "Fashion",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nostrum quo? Nam, eveniet iure obcaecati voluptate ducimus illum minima! Voluptatum.",
    img: "assets/products/dhevv-product.png",
  },
  {
    name: "Fashion",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nostrum quo? Nam, eveniet iure obcaecati voluptate ducimus illum minima! Voluptatum.",
    img: "assets/products/lafern-product.png",
  },
  {
    name: "Fashion",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, nostrum quo? Nam, eveniet iure obcaecati voluptate ducimus illum minima! Voluptatum.",
    img: "assets/products/dhevv-product.png",
  },
];

const detail = document.getElementById("detail");

products.forEach((product) => {
  detail.innerHTML += `
    <div class="box">
        <img src="${product.img}" alt="">
        <div class="desc">
            <h2>${product.name}</h2>
            <p>${product.desc}</p>
        </div>
    </div>
    `;
});
