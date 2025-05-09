// script.js
const products = [
  { id: 1, name: 'Product A', price: 20 },
  { id: 2, name: 'Product B', price: 30 },
  { id: 3, name: 'Product C', price: 40 }
];

function loadProducts() {
  const list = document.getElementById('product-list');
  if (!list) return;

  list.innerHTML = products.map(p => `
    <div class="product">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join('');
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart!');
}

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  const total = document.getElementById('total');
  if (!container) return;

  container.innerHTML = cart.map(p => `<p>${p.name} - $${p.price}</p>`).join('');
  const sum = cart.reduce((acc, item) => acc + item.price, 0);
  total.textContent = `Total: $${sum}`;
}

window.onload = () => {
  loadProducts();
  loadCart();
};
