// Lấy các phần tử DOM
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');
const togglePassword = document.getElementById('togglePassword');

// Hiển thị/ẩn mật khẩu
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

// Kiểm tra nếu đã lưu thông tin đăng nhập
window.addEventListener('DOMContentLoaded', () => {
    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    
    if (rememberMe && savedUsername && savedPassword) {
        usernameInput.value = savedUsername;
        passwordInput.value = savedPassword;
        rememberCheckbox.checked = true;
    }
});

// Xử lý đăng nhập
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Kiểm tra tài khoản demo
    // Bạn có thể thay đổi logic kiểm tra này theo nhu cầu
    if (username === 'admin' && password === '123456') {
        // Lưu thông tin nếu chọn "Ghi nhớ"
        if (rememberCheckbox.checked) {
            localStorage.setItem('savedUsername', username);
            localStorage.setItem('savedPassword', password);
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('savedUsername');
            localStorage.removeItem('savedPassword');
            localStorage.setItem('rememberMe', 'false');
        }
        
        // Lưu trạng thái đăng nhập
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', 'Đào Lê Minh Nguyệt');
        localStorage.setItem('userRole', 'Admin');
        
        // Chuyển hướng đến trang chính
        window.location.href = 'index.html';
    } else {
        // Hiển thị thông báo lỗi
        showError('Tài khoản hoặc mật khẩu không đúng!');
    }
});

// Hiển thị thông báo lỗi
function showError(message) {
    // Xóa thông báo cũ nếu có
    const oldError = document.querySelector('.error-message');
    if (oldError) {
        oldError.remove();
    }
    
    // Tạo thông báo mới
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        background: #fee2e2;
        color: #dc2626;
        padding: 10px;
        border-radius: 8px;
        font-size: 14px;
        text-align: center;
        margin-bottom: 16px;
    `;
    
    // Chèn vào form
    const loginForm = document.getElementById('loginForm');
    loginForm.insertBefore(errorDiv, loginForm.firstChild);
    
    // Tự động xóa sau 3 giây
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Thêm hiệu ứng enter để đăng nhập
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        loginForm.dispatchEvent(new Event('submit'));
    }
});