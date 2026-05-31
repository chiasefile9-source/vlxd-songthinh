// Khởi tạo dữ liệu mẫu nếu chưa có
if (!localStorage.getItem('sysProducts')) {
    localStorage.setItem('sysProducts', JSON.stringify([
        { id: '1', name: 'Thép Cuộn Phi 6 Hòa Phát', price: 17900000, category: 'thep', unit: 'Tấn', inStock: true },
        { id: '2', name: 'Cát Vàng Xây Tô', price: 260000, category: 'catda', unit: 'm³', inStock: true }
    ]));
}

let products = JSON.parse(localStorage.getItem('sysProducts'));
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;
    container.innerHTML = products.map(p => `
        <div class="product-card">
            <h4>${p.name}</h4>
            <p>${p.price.toLocaleString()}đ / ${p.unit}</p>
            <button class="btn-primary" onclick="addToCart('${p.id}')">Thêm vào giỏ</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const p = products.find(i => i.id === id);
    cart.push({ ...p, qty: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm: ' + p.name);
}

document.addEventListener('DOMContentLoaded', renderProducts);
