import "./style.scss";

const products = [
  { weight: "100 г", article: "01306", price: "326,40 ₽", old: "349,20 ₽" },
  { weight: "500 г", article: "01307", price: "1 432 ₽", old: "1 646 ₽" },
  { weight: "1000 г", article: "01308", price: "2 064 ₽", old: "2 592 ₽" },
  { weight: "5000 г", article: "01309", price: "6 320 ₽", old: "8 710 ₽" }
];

const packs = document.querySelector("#packs");
const article = document.querySelector("#article");
const price = document.querySelector("#price");
const oldPrice = document.querySelector("#old-price");

function renderPacks() {
  packs.innerHTML = products.map((item, index) => `
    <button class="pack ${index === 0 ? "pack--active" : ""}" data-index="${index}">
      ${item.weight}
    </button>
  `).join("");
}

function selectPack(index) {
  const product = products[index];

  document.querySelectorAll(".pack")
    .forEach((item, i) => item.classList.toggle("pack--active", i === index));

  article.textContent = product.article;
  price.textContent = product.price;
  oldPrice.textContent = product.old;
}

renderPacks();
selectPack(0);

packs.addEventListener("click", event => {
  const button = event.target.closest(".pack");

  if (!button) return;

  selectPack(Number(button.dataset.index));
});