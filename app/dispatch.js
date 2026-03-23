// ========== DỮ LIỆU MẪU ==========
const ordersData = [
    { id: 485, status: 'waiting', statusText: 'Chờ xe', statusIcon: 'fa-clock', date: '26/12/2025', time: '20:31', pickup: '18 Phan Đình Phùng, Hải Châu, Đà Nẵng', delivery: 'Số 12 Nguyễn Văn Cừ, Long Biên, Hà Nội', distance: 121, customer: 'Doanh nghiệp Theta Solutions', customerType: 'Khách mới', cargo: 'Vật liệu xây dựng', weight: '5 tấn', dispatcher: 'Lê Thị Xuân', type: 'Hàng bo', typeClass: 'bo' },
    { id: 483, status: 'waiting', statusText: 'Chờ xe', statusIcon: 'fa-clock', date: '02/01/2026', time: '16:21', pickup: '28 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh', delivery: '54 Trường Chinh, Thanh Xuân, Hà Nội', distance: 146, customer: 'Phan Thị Hồng', customerType: 'Khách mới', cargo: 'Hàng may mặc', weight: '4 tấn', dispatcher: 'Nguyễn Thanh Tùng', type: 'Hàng bo', typeClass: 'bo' },
    { id: 457, status: 'waiting', statusText: 'Chờ xe', statusIcon: 'fa-clock', date: '15/01/2026', time: '04:10', pickup: '66 Nguyễn Văn Linh, Nam Từ Liêm, Hà Nội', delivery: '28 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh', distance: 244, customer: 'Công ty TNHH Lambda', customerType: 'Khách mới', cargo: 'Thép cuộn', weight: '6 tấn', dispatcher: 'Lê Thị Xuân', type: 'Đông lạnh', typeClass: 'donglanh' },
    { id: 450, status: 'waiting', statusText: 'Chờ xe', statusIcon: 'fa-clock', date: '26/12/2025', time: '19:38', pickup: '25 Lê Duẩn, Quận 1, TP. Hồ Chí Minh', delivery: '25 Lê Duẩn, Quận 1, TP. Hồ Chí Minh', distance: 68, customer: 'Công ty ABC', customerType: 'Khách mới', cargo: 'Hóa chất', weight: '15 tấn', dispatcher: 'Phạm Thanh Hải', type: 'Hàng logistics', typeClass: 'logistics' },
    { id: 433, status: 'recovery', statusText: 'ĐV thu hồi', statusIcon: 'fa-undo-alt', date: '14/01/2026', time: '17:57', pickup: '25 Lê Duẩn, Quận 1, TP. Hồ Chí Minh', delivery: 'Số 12 Nguyễn Văn Cừ, Long Biên, Hà Nội', distance: 196, customer: 'Công ty TNHH Lambda', customerType: 'Khách mới', cargo: 'Hàng may mặc', weight: '2 tấn', dispatcher: 'Nguyễn Thành Danh', type: 'Hàng chuyến', typeClass: 'chuyen' },
    { id: 430, status: 'recovery', statusText: 'ĐV thu hồi', statusIcon: 'fa-undo-alt', date: '21/12/2025', time: '16:16', pickup: '54 Trường Chinh, Thanh Xuân, Hà Nội', delivery: 'Số 12 Nguyễn Văn Cừ, Long Biên, Hà Nội', distance: 208, customer: 'Tập đoàn Sigma', customerType: 'Khách mới', cargo: 'Hàng may mặc', weight: '4 tấn', dispatcher: 'Nguyễn Thành Danh', type: 'Hàng logistics', typeClass: 'logistics' },
    { id: 428, status: 'resend', statusText: 'TX gửi lại', statusIcon: 'fa-reply', date: '31/12/2025', time: '22:57', pickup: '18 Phan Đình Phùng, Hải Châu, Đà Nẵng', delivery: 'Số 3 Phạm Văn Đồng, Sơn Trà, Đà Nẵng', distance: 161, customer: 'Công ty TNHH Lambda', customerType: 'Khách mới', cargo: 'Thiết bị cơ khí', weight: '5 tấn', dispatcher: 'Đỗ Thị Lan', type: 'Hàng chuyến', typeClass: 'chuyen' },
    { id: 425, status: 'resend', statusText: 'TX gửi lại', statusIcon: 'fa-reply', date: '29/12/2025', time: '04:44', pickup: '28 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh', delivery: '66 Nguyễn Văn Linh, Nam Từ Liêm, Hà Nội', distance: 235, customer: 'Vũ Minh Đức', customerType: 'Khách mới', cargo: 'Thép cuộn', weight: '14 tấn', dispatcher: 'Nguyễn Thành Danh', type: 'Hàng logistics', typeClass: 'logistics' },
    { id: 396, status: 'recovery', statusText: 'ĐV thu hồi', statusIcon: 'fa-undo-alt', date: '07/01/2026', time: '00:12', pickup: '28 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh', delivery: '28 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh', distance: 178, customer: 'Tập đoàn MNO', customerType: 'Khách mới', cargo: 'Hóa chất', weight: '14 tấn', dispatcher: 'Nguyễn Thanh Tùng', type: 'Hàng cẩu', typeClass: 'cau' },
    { id: 380, status: 'recovery', statusText: 'ĐV thu hồi', statusIcon: 'fa-undo-alt', date: '15/01/2026', time: '08:27', pickup: '102 Cách Mạng Tháng 8, Quận 10, TP. Hồ Chí Minh', delivery: '18 Phan Đình Phùng, Hải Châu, Đà Nẵng', distance: 170, customer: 'Doanh nghiệp GHI', customerType: 'Khách mới', cargo: 'Thiết bị cơ khí', weight: '10 tấn', dispatcher: 'Nguyễn Thanh Tùng', type: 'Hàng bo', typeClass: 'bo' },
    { id: 363, status: 'recovery', statusText: 'ĐV thu hồi', statusIcon: 'fa-undo-alt', date: '31/12/2025', time: '03:13', pickup: '66 Nguyễn Văn Linh, Nam Từ Liêm, Hà Nội', delivery: 'Số 3 Phạm Văn Đồng, Sơn Trà, Đà Nẵng', distance: 119, customer: 'Tập đoàn Beta', customerType: 'Khách mới', cargo: 'Thực phẩm khô', weight: '8 tấn', dispatcher: 'Nguyễn Thành Danh', type: 'Đông lạnh', typeClass: 'donglanh' },
    { id: 342, status: 'waiting', statusText: 'Chờ xe', statusIcon: 'fa-clock', date: '23/12/2025', time: '22:03', pickup: '66 Nguyễn Văn Linh, Nam Từ Liêm, Hà Nội', delivery: '54 Trường Chinh, Thanh Xuân, Hà Nội', distance: 148, customer: 'Doanh nghiệp Gamma', customerType: 'Khách mới', cargo: 'Đồ điện tử', weight: '4 tấn', dispatcher: 'Ngô Đức Tích', type: 'Đông lạnh', typeClass: 'donglanh' },
    { id: 328, status: 'waiting', statusText: 'Chờ xe', statusIcon: 'fa-clock', date: '21/12/2025', time: '13:06', pickup: '08 Trần Phú, Ba Đình, Hà Nội', delivery: '28 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh', distance: 198, customer: 'Công ty TNHH Zeta', customerType: 'Khách mới', cargo: 'Thép cuộn', weight: '11 tấn', dispatcher: 'Nguyễn Thành Danh', type: 'Hàng cẩu', typeClass: 'cau' },
    { id: 321, status: 'waiting', statusText: 'Chờ xe', statusIcon: 'fa-clock', date: '03/01/2026', time: '22:54', pickup: '102 Cách Mạng Tháng 8, Quận 10, TP. Hồ Chí Minh', delivery: '102 Cách Mạng Tháng 8, Quận 10, TP. Hồ Chí Minh', distance: 88, customer: 'Công ty CP Omega', customerType: 'Khách mới', cargo: 'Thực phẩm khô', weight: '6 tấn', dispatcher: 'Lê Thị Xuân', type: 'Hàng chuyến', typeClass: 'chuyen' },
    { id: 317, status: 'waiting', statusText: 'Chờ xe', statusIcon: 'fa-clock', date: '31/12/2025', time: '16:23', pickup: '54 Trường Chinh, Thanh Xuân, Hà Nội', delivery: '18 Phan Đình Phùng, Hải Châu, Đà Nẵng', distance: 140, customer: 'Công ty DEF', customerType: 'Khách mới', cargo: 'Hàng may mặc', weight: '12 tấn', dispatcher: 'Trịnh Công Sơn', type: 'Hàng cẩu', typeClass: 'cau' }
];

// ========== BIẾN TOÀN CỤC ==========
let currentTab = 'all';
let currentPage = 1;
let perPage = 15;
let searchKeyword = '';
let dateFrom = '';
let dateTo = '';
let filteredData = [...ordersData];
let selectedOrders = new Set();

// ========== HÀM XỬ LÝ ==========

// Lấy class cho trạng thái
function getStatusClass(status) {
    const map = {
        'waiting': 'status-waiting',
        'recovery': 'status-recovery',
        'resend': 'status-resend'
    };
    return map[status] || 'status-waiting';
}

// Lọc dữ liệu
function filterData() {
    let result = [...ordersData];
    
    if (currentTab !== 'all') {
        result = result.filter(order => order.typeClass === currentTab);
    }
    
    if (searchKeyword) {
        const keyword = searchKeyword.toLowerCase();
        result = result.filter(order => 
            order.id.toString().includes(keyword) ||
            order.customer.toLowerCase().includes(keyword) ||
            order.dispatcher.toLowerCase().includes(keyword)
        );
    }
    
    if (dateFrom) {
        result = result.filter(order => {
            const [d, m, y] = order.date.split('/');
            const orderDate = `${y}-${m}-${d}`;
            return orderDate >= dateFrom;
        });
    }
    
    if (dateTo) {
        result = result.filter(order => {
            const [d, m, y] = order.date.split('/');
            const orderDate = `${y}-${m}-${d}`;
            return orderDate <= dateTo;
        });
    }
    
    filteredData = result;
    return result;
}

// Render bảng
function renderTable() {
    console.log('Đang render bảng...'); // Kiểm tra xem hàm có chạy không
    
    const filtered = filterData();
    const total = filtered.length;
    const totalPages = Math.ceil(total / perPage);
    const start = (currentPage - 1) * perPage;
    const end = Math.min(start + perPage, total);
    const pageData = filtered.slice(start, end);
    const tbody = document.getElementById('tableBody');
    
    if (!tbody) {
        console.error('Không tìm thấy element tableBody');
        return;
    }
    
    // Cập nhật thông tin
    const recordsInfo = document.getElementById('recordsInfo');
    const paginationInfo = document.getElementById('paginationInfo');
    
    if (recordsInfo) {
        recordsInfo.textContent = `Hiển thị ${total === 0 ? 0 : start + 1} - ${end} của ${total} kết quả`;
    }
    if (paginationInfo) {
        paginationInfo.textContent = `Tổng số: ${total} đơn hàng`;
    }
    
    // Cập nhật số lượng đã chọn
    const selectedCountSpan = document.getElementById('selectedCount');
    const bulkBar = document.getElementById('bulkBar');
    if (selectedCountSpan) selectedCountSpan.textContent = selectedOrders.size;
    if (bulkBar) bulkBar.style.display = selectedOrders.size > 0 ? 'flex' : 'none';
    
    if (pageData.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="13" style="text-align: center; padding: 48px;">
                    📭 Không có dữ liệu
                </td>
            </tr>
        `;
        renderPagination();
        return;
    }
    
    tbody.innerHTML = pageData.map(order => `
        <tr data-id="${order.id}">
            <td class="checkbox-col">
                <input type="checkbox" class="order-checkbox" value="${order.id}" ${selectedOrders.has(order.id) ? 'checked' : ''}>
            </td>
            <td><a href="#" class="order-link" data-id="${order.id}" style="color: #2563eb; text-decoration: none;">#${order.id}</a></td>
            <td><span class="status-badge ${getStatusClass(order.status)}">${order.statusIcon ? `<i class="fas ${order.statusIcon}"></i>` : ''} ${order.statusText}</span></td>
            <td><div>${order.date}</div><div style="font-size: 11px; color: #6b7280;">${order.time}</div></td>
            <td style="max-width: 200px; white-space: normal;">${order.pickup}</td>
            <td style="max-width: 200px; white-space: normal;">${order.delivery}</td>
            <td class="center">${order.distance} km</td>
            <td><div>${order.customer}</div><div style="font-size: 11px; color: #10b981;">${order.customerType}</div></td>
            <td>${order.cargo}</td>
            <td class="center">${order.weight}</td>
            <td>${order.dispatcher}</td>
            <td><span style="padding: 4px 8px; background: #f3f4f6; border-radius: 12px; font-size: 12px;">${order.type}</span></td>
            <td class="center"><button class="assign-btn" data-id="${order.id}">🚛 Điều xe</button></td>
        </tr>
    `).join('');
    
    // Gán sự kiện cho checkbox
    document.querySelectorAll('.order-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const id = parseInt(e.target.value);
            if (e.target.checked) {
                selectedOrders.add(id);
            } else {
                selectedOrders.delete(id);
            }
            const selectedCountSpan = document.getElementById('selectedCount');
            const bulkBar = document.getElementById('bulkBar');
            if (selectedCountSpan) selectedCountSpan.textContent = selectedOrders.size;
            if (bulkBar) bulkBar.style.display = selectedOrders.size > 0 ? 'flex' : 'none';
            updateSelectAllCheckbox();
        });
    });
    
    // Gán sự kiện cho nút điều xe
    document.querySelectorAll('.assign-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            openAssignModal(id);
        });
    });
    
    // Gán sự kiện cho link xem chi tiết
    document.querySelectorAll('.order-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(link.dataset.id);
            showToast(`Đang xem chi tiết đơn hàng #${id}`, 'info');
        });
    });
    
    renderPagination();
}

// Cập nhật checkbox chọn tất cả
function updateSelectAllCheckbox() {
    const selectAll = document.getElementById('selectAll');
    if (!selectAll) return;
    
    const allCheckboxes = document.querySelectorAll('.order-checkbox');
    const checkedCount = document.querySelectorAll('.order-checkbox:checked').length;
    
    if (allCheckboxes.length === 0) {
        selectAll.checked = false;
        selectAll.indeterminate = false;
    } else if (checkedCount === 0) {
        selectAll.checked = false;
        selectAll.indeterminate = false;
    } else if (checkedCount === allCheckboxes.length) {
        selectAll.checked = true;
        selectAll.indeterminate = false;
    } else {
        selectAll.checked = false;
        selectAll.indeterminate = true;
    }
}

// Render phân trang
function renderPagination() {
    const total = filteredData.length;
    const totalPages = Math.ceil(total / perPage);
    const pageNumbersDiv = document.getElementById('pageNumbers');
    
    if (!pageNumbersDiv) return;
    
    if (totalPages <= 1) {
        pageNumbersDiv.innerHTML = '';
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        return;
    }
    
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;
    
    let html = '';
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        html += `<button class="page-number" data-page="1">1</button>`;
        if (startPage > 2) html += `<span style="padding: 0 4px;">...</span>`;
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += `<button class="page-number ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) html += `<span style="padding: 0 4px;">...</span>`;
        html += `<button class="page-number" data-page="${totalPages}">${totalPages}</button>`;
    }
    
    pageNumbersDiv.innerHTML = html;
    
    document.querySelectorAll('.page-number').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPage = parseInt(btn.dataset.page);
            renderTable();
        });
    });
}

// Mở modal điều xe
let currentAssignOrderId = null;

function openAssignModal(orderId) {
    currentAssignOrderId = orderId;
    const order = ordersData.find(o => o.id === orderId);
    const modalOrderId = document.getElementById('modalOrderId');
    if (modalOrderId) modalOrderId.textContent = `#${orderId} - ${order.customer}`;
    
    const driverSelect = document.getElementById('driverSelect');
    const assignNote = document.getElementById('assignNote');
    if (driverSelect) driverSelect.value = '';
    if (assignNote) assignNote.value = '';
    
    const modal = document.getElementById('assignModal');
    if (modal) modal.classList.add('active');
}

function closeAssignModal() {
    const modal = document.getElementById('assignModal');
    if (modal) modal.classList.remove('active');
    currentAssignOrderId = null;
}

function confirmAssign() {
    const driverSelect = document.getElementById('driverSelect');
    const driver = driverSelect ? driverSelect.value : '';
    const note = document.getElementById('assignNote') ? document.getElementById('assignNote').value : '';
    
    if (!driver) {
        showToast('Vui lòng chọn tài xế', 'error');
        return;
    }
    
    showToast(`Đã điều xe cho đơn hàng #${currentAssignOrderId} thành công!`, 'success');
    closeAssignModal();
}

// Hiển thị thông báo
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    
    if (type === 'success') {
        toast.style.borderLeftColor = '#10b981';
    } else if (type === 'error') {
        toast.style.borderLeftColor = '#ef4444';
    } else {
        toast.style.borderLeftColor = '#3b82f6';
    }
    
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Đặt lại bộ lọc
function resetFilters() {
    searchKeyword = '';
    dateFrom = '';
    dateTo = '';
    currentPage = 1;
    
    const searchInput = document.getElementById('searchInput');
    const dateFromInput = document.getElementById('dateFrom');
    const dateToInput = document.getElementById('dateTo');
    
    if (searchInput) searchInput.value = '';
    if (dateFromInput) dateFromInput.value = '';
    if (dateToInput) dateToInput.value = '';
    
    filterData();
    renderTable();
}

// Toggle sidebar mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('show');
}

// Toggle user dropdown
function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) dropdown.classList.toggle('show');
}

// Đóng dropdown khi click ra ngoài
document.addEventListener('click', function(e) {
    const userMenu = document.getElementById('userMenu');
    const dropdown = document.getElementById('userDropdown');
    
    if (userMenu && dropdown && !userMenu.contains(e.target) && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});

// Chuyển đổi vai trò
function changeRole(role) {
    showToast(`Chuyển sang vai trò: ${role}`, 'info');
}

// Đăng xuất
function logout() {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        showToast('Đăng xuất thành công!', 'success');
    }
}

// ========== KHỞI TẠO SỰ KIỆN ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM đã sẵn sàng, bắt đầu render...');
    
    // KIỂM TRA PHẦN TỬ TỒN TẠI
    console.log('tableBody:', document.getElementById('tableBody'));
    console.log('recordsInfo:', document.getElementById('recordsInfo'));
    console.log('paginationInfo:', document.getElementById('paginationInfo'));
    
    // Render dữ liệu ngay lập tức
    renderTable();
    
    // Sự kiện cho các nút
    const menuToggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('overlay');
    const userMenu = document.getElementById('userMenu');
    
    if (menuToggle) menuToggle.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);
    if (userMenu) userMenu.addEventListener('click', toggleUserDropdown);
    
    // Tự động lọc khi nhập liệu
    const searchInput = document.getElementById('searchInput');
    const dateFromInput = document.getElementById('dateFrom');
    const dateToInput = document.getElementById('dateTo');
    const resetBtn = document.getElementById('resetFilters');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchKeyword = e.target.value;
            currentPage = 1;
            filterData();
            renderTable();
        });
    }
    
    if (dateFromInput) {
        dateFromInput.addEventListener('change', (e) => {
            dateFrom = e.target.value;
            currentPage = 1;
            filterData();
            renderTable();
        });
    }
    
    if (dateToInput) {
        dateToInput.addEventListener('change', (e) => {
            dateTo = e.target.value;
            currentPage = 1;
            filterData();
            renderTable();
        });
    }
    
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);
    
    // Sự kiện phân trang
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    
    if (prevPage) {
        prevPage.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderTable();
            }
        });
    }
    
    if (nextPage) {
        nextPage.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredData.length / perPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderTable();
            }
        });
    }
    
    // Sự kiện chọn tất cả
    const selectAll = document.getElementById('selectAll');
    if (selectAll) {
        selectAll.addEventListener('change', (e) => {
            const checkboxes = document.querySelectorAll('.order-checkbox');
            if (e.target.checked) {
                checkboxes.forEach(cb => {
                    cb.checked = true;
                    selectedOrders.add(parseInt(cb.value));
                });
            } else {
                checkboxes.forEach(cb => {
                    cb.checked = false;
                    selectedOrders.delete(parseInt(cb.value));
                });
            }
            const selectedCountSpan = document.getElementById('selectedCount');
            const bulkBar = document.getElementById('bulkBar');
            if (selectedCountSpan) selectedCountSpan.textContent = selectedOrders.size;
            if (bulkBar) bulkBar.style.display = selectedOrders.size > 0 ? 'flex' : 'none';
        });
    }
    
    // Sự kiện bỏ chọn tất cả
    const deselectAllBtn = document.getElementById('deselectAllBtn');
    if (deselectAllBtn) {
        deselectAllBtn.addEventListener('click', () => {
            if (selectAll) selectAll.checked = false;
            document.querySelectorAll('.order-checkbox').forEach(cb => {
                cb.checked = false;
                selectedOrders.delete(parseInt(cb.value));
            });
            const selectedCountSpan = document.getElementById('selectedCount');
            const bulkBar = document.getElementById('bulkBar');
            if (selectedCountSpan) selectedCountSpan.textContent = 0;
            if (bulkBar) bulkBar.style.display = 'none';
        });
    }
    
    // Sự kiện điều xe hàng loạt
    const assignDriverBtn = document.getElementById('assignDriverBtn');
    if (assignDriverBtn) {
        assignDriverBtn.addEventListener('click', () => {
            if (selectedOrders.size === 0) {
                showToast('Vui lòng chọn đơn hàng cần điều xe', 'error');
                return;
            }
            showToast(`Đang điều xe cho ${selectedOrders.size} đơn hàng...`, 'success');
        });
    }
    
    // Tab events
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentTab = tab.dataset.tab;
            currentPage = 1;
            selectedOrders.clear();
            filterData();
            renderTable();
        });
    });
    
    // Modal events
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelModalBtn = document.getElementById('cancelModalBtn');
    const confirmAssignBtn = document.getElementById('confirmAssignBtn');
    const assignModal = document.getElementById('assignModal');
    
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeAssignModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeAssignModal);
    if (confirmAssignBtn) confirmAssignBtn.addEventListener('click', confirmAssign);
    if (assignModal) {
        assignModal.addEventListener('click', (e) => {
            if (e.target === assignModal) closeAssignModal();
        });
    }
    
    // Role change events
    const changeRoleBtn = document.getElementById('changeRoleBtn');
    const roleList = document.getElementById('roleList');
    
    if (changeRoleBtn) {
        changeRoleBtn.addEventListener('click', () => {
            if (roleList) {
                roleList.style.display = roleList.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
    
    document.querySelectorAll('.role-item').forEach(item => {
        item.addEventListener('click', () => {
            const role = item.dataset.role;
            changeRole(role);
        });
    });
    
    const logoutBtn = document.getElementById('logoutBtn');
    const profileBtn = document.getElementById('profileBtn');
    
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            showToast('Đang chuyển đến trang hồ sơ...', 'info');
        });
    }
});