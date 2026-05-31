let products = JSON.parse(localStorage.getItem('sysProducts')) || [
    { id: '1', name: 'Thép Cuộn Phi 6 Hòa Phát', price: 17900000, category: 'thep', unit: 'Tấn', inStock: true, img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500' },
    { id: '2', name: 'Cát Vàng Xây Tô', price: 260000, category: 'catda', unit: 'm³', inStock: true, img: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=500' }
];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function showToast(text) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = text;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.reduce((acc, i) => acc + i.qty, 0);
}

// Logic Auth & Admin
function openAuthModal() { document.getElementById('auth-modal').classList.add('active'); }
function closeAuthModal() { document.getElementById('auth-modal').classList.remove('active'); }

function handleAuth(e) {
    e.preventDefault();
    const user = document.getElementById('login-user').value;
    localStorage.setItem('currentUser', user);
    location.reload();
}

// Khởi chạy khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    const user = localStorage.getItem('currentUser');
    if(user) {
        document.getElementById('user-status-area').innerHTML = `<i class="fas fa-user"></i> ${user}`;
        if(user === 'admin') document.getElementById('admin-link-btn').style.display = 'inline-flex';
    }
});
