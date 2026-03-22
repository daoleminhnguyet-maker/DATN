// Dữ liệu mẫu - ĐỂ TRỐNG
const ordersData = [   { id: 56, code: '#056', status: 'Đã điều xe', statusClass: 'status-assigned', pickupDate: '20/03/2026', pickupTime: '12:00', pickupAddress: '391 Võ Nguyên Giáp, An Phú, Thủ Đức, TP.HCM', deliveryAddress: '2/65 An Dương Vương, Phú Thượng, Tây Hồ, Hà Nội', distance: '650 Km', customer: 'Công ty TNHH Thương Mại Vạn Thắng Đạt', cargoType: 'Thực phẩm đông lạnh', weight: '100 tấn', saleStaff: 'Trương Ngọc Anh Tuấn', orderType: 'Đông lạnh', totalAmount: '31,800,000đ' },
    { id: 55, code: '#055', status: 'Đơn mới', statusClass: 'status-new', pickupDate: '01/03/2026', pickupTime: '11:00', pickupAddress: '18 Phan Đình Phùng, Hải Châu, Đà Nẵng', deliveryAddress: '18 Phan Đình Phùng, Hải Châu, Đà Nẵng', distance: '23 Km', customer: 'Công ty TNHH Marine Functional Việt Nam', cargoType: 'Thiết bị cơ khí', weight: '12 tấn', saleStaff: 'Đoàn Quốc Huy', orderType: 'Hàng chuyến', totalAmount: '4,257,147đ' },
    { id: 54, code: '#054', status: 'Chờ xe', statusClass: 'status-waiting', pickupDate: '10/03/2026', pickupTime: '09:00', pickupAddress: '54 Trường Chinh, Thanh Xuân, Hà Nội', deliveryAddress: '68 Nguyễn Văn Linh, HN', distance: '50 Km', customer: 'Công ty TNHH Portever Shipping Việt Nam', cargoType: 'Hóa chất', weight: '3 tấn', saleStaff: 'Đào Lê Minh Nguyệt', orderType: 'Hàng cẩu', totalAmount: '6,000,000đ' },
    { id: 48, code: '#048', status: 'Đã điều xe', statusClass: 'status-assigned', pickupDate: '10/02/2026', pickupTime: '07:30', pickupAddress: '54 Trường Chinh, Thanh Xuân, Hà Nội', deliveryAddress: '68 Nguyễn Văn Linh, HN', distance: '30 Km', customer: 'Công ty Cổ Phần EZ Cosmetic Việt Nam', cargoType: 'Thép cuộn', weight: '6 tấn', saleStaff: 'Đào Lê Minh Nguyệt', orderType: 'Hàng cẩu', totalAmount: '3,000,000đ' },
    { id: 47, code: '#047', status: 'Chờ xe', statusClass: 'status-waiting', pickupDate: '09/02/2026', pickupTime: '09:00', pickupAddress: 'Vina Cosmo, KCX Tân Thuận, Quận 7', deliveryAddress: '95 Nguyễn Thị Minh Khai, Nha Trang, Khánh Hòa', distance: '150 Km', customer: 'Công Ty TNHH Shirogane Logistics Việt Nam', cargoType: 'Đồ nội thất', weight: '3 tấn', saleStaff: 'Đào Lê Minh Nguyệt', orderType: 'Hàng chuyến', totalAmount: '5,525,000đ' },
    { id: 45, code: '#045', status: 'Hoàn thành', statusClass: 'status-delivering', pickupDate: '07/02/2026', pickupTime: '08:00', pickupAddress: 'Đức Hòa', deliveryAddress: 'Long Thành', distance: '50 Km', customer: 'Cty CP VT Thiết Bị Công Trình Minh Đức', cargoType: 'Cuộn cáp', weight: '15 tấn', saleStaff: 'Trần Lê Thị Hiệp', orderType: 'Hàng cẩu', totalAmount: '6,480,000đ' },
    { id: 43, code: '#043', status: 'Chờ duyệt', statusClass: 'status-waiting', pickupDate: '04/02/2026', pickupTime: '08:00', pickupAddress: 'Q12', deliveryAddress: 'Q9', distance: '22 Km', customer: 'Anh Sinh', cargoType: 'thép', weight: '12 tấn', saleStaff: 'Trương Ngọc Anh Tuấn', orderType: 'Hàng chuyến', totalAmount: '5,057,408đ' },
    { id: 40, code: '#040', status: 'Nhận đơn', statusClass: 'status-assigned', pickupDate: '03/02/2026', pickupTime: '10:30', pickupAddress: '54 Trường Chinh, Thanh Xuân, Hà Nội', deliveryAddress: '95 Nguyễn Thị Minh Khai, Tân Tiến, Nha Trang, Khánh Hòa', distance: '150 Km', customer: 'Công Ty TNHH Shirogane Logistics Việt Nam', cargoType: 'thép', weight: '6 tấn', saleStaff: 'Đào Lê Minh Nguyệt', orderType: 'Hàng chuyến', totalAmount: '6,000,000đ' },
    { id: 33, code: '#033', status: 'Đã điều xe', statusClass: 'status-assigned', pickupDate: '31/01/2026', pickupTime: '08:00', pickupAddress: 'KCN Lê Minh Xuân, Bình Chánh', deliveryAddress: 'KCN Quốc tế Protrade, Bình Dương', distance: '55 Km', customer: 'Công Ty TNHH Điện Cơ Hà Nội', cargoType: 'Máy Motor', weight: '2 tấn', saleStaff: 'Nguyễn Thị Thu Thảo', orderType: 'Hàng cẩu', totalAmount: '3,780,000đ' },
    { id: 32, code: '#032', status: 'Xe dự kiến', statusClass: 'status-assigned', pickupDate: '31/01/2026', pickupTime: '07:00', pickupAddress: 'Intel, Quận 9', deliveryAddress: 'Intel, Quận 9', distance: '...', customer: 'Công ty TNHH FEYANA', cargoType: 'Dụng Cụ', weight: '5 tấn', saleStaff: 'Nguyễn Thị Thu Thảo', orderType: 'Hàng bo', totalAmount: '2,160,000đ' },
];

// Hoặc nếu muốn hiển thị thông báo trống:
// const ordersData = [];

let currentPage = 1;
let rowsPerPage = 10;
let selectedOrders = [];
let currentTab = 'all';
let searchTerm = '';
let typeFilter = '';
let dateFrom = '';
let dateTo = '';

// Helper functions
function filterOrders() {
    let filtered = [...ordersData];
    
    // Filter by tab
    if (currentTab === 'new') {
        filtered = filtered.filter(o => o.status === 'Đơn mới');
    } else if (currentTab === 'waiting') {
        filtered = filtered.filter(o => o.status === 'Chờ xe');
    } else if (currentTab === 'delivering') {
        filtered = filtered.filter(o => o.status === 'Đang vận chuyển');
    } else if (currentTab === 'completed') {
        filtered = filtered.filter(o => o.status === 'Hoàn thành');
    } else if (currentTab === 'cancelled') {
        filtered = filtered.filter(o => o.status === 'Đã hủy');
    }
    
    // Filter by search
    if (searchTerm) {
        filtered = filtered.filter(o => 
            o.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
            o.customer.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Filter by type
    if (typeFilter) {
        filtered = filtered.filter(o => o.orderType === typeFilter);
    }
    
    // Filter by date range
    if (dateFrom) {
        filtered = filtered.filter(o => o.pickupDate >= dateFrom);
    }
    if (dateTo) {
        filtered = filtered.filter(o => o.pickupDate <= dateTo);
    }
    
    return filtered;
}
// Kiểm tra trạng thái đăng nhập - THÊM VÀO ĐẦU FILE
if (!localStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html';
}

function renderTable() {
    const filtered = filterOrders();
    const tbody = document.getElementById('tableBody');
    
    // Hiển thị thông báo nếu không có dữ liệu
    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="13" style="text-align:center; padding:60px 20px;">
                    <div style="font-size:48px; margin-bottom:16px;">📭</div>
                    <div style="font-size:16px; font-weight:500; color:#374151;">Không có dữ liệu</div>
                    <div style="font-size:14px; color:#6b7280; margin-top:8px;">Danh sách đơn hàng đang trống</div>
                </td>
            </tr>
        `;
        
        // Ẩn phân trang khi không có dữ liệu
        document.getElementById('paginationInfo').innerHTML = 'Không có kết quả';
        document.getElementById('pageNumbers').innerHTML = '';
        document.getElementById('prevPage').disabled = true;
        document.getElementById('nextPage').disabled = true;
        return;
    }
    
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filtered.slice(start, end);
    
    tbody.innerHTML = pageData.map(order => {
        //chỉ hiển thị khi là đơn mới
        const isSelectable = order.status === 'Đơn mới';

        return `
        <tr class="${selectedOrders.includes(order.id) ? 'selected' : ''}">
            <td class="checkbox-col">
            ${isSelectable ? `
                <input type="checkbox" class="row-checkbox" data-id="${order.id}" ${selectedOrders.includes(order.id) ? 'checked' : ''}>
            ` : ''}
            </td>
            <td><span style="color:#2563eb; font-weight:500;">${order.code}</span></td>
            <td><span class="status-badge ${order.statusClass}">${order.status}</span></td>
            <td>
                <div>${order.pickupDate}</div>
                <small style="color:#6b7280;">${order.pickupTime}</small>
            </td>
            <td title="${order.pickupAddress}">${order.pickupAddress.length > 30 ? order.pickupAddress.substring(0, 30) + '...' : order.pickupAddress}</td>
            <td title="${order.deliveryAddress}">${order.deliveryAddress.length > 30 ? order.deliveryAddress.substring(0, 30) + '...' : order.deliveryAddress}</td>
            <td class="center">${order.distance}</td>
            <td>
                <div>${order.customer.length > 25 ? order.customer.substring(0, 25) + '...' : order.customer}</div>
                <small class="customer-badge">(Khách mới)</small>
            </td>
            <td>${order.cargoType}</td>
            <td class="center">${order.weight}</td>
            <td>${order.saleStaff}</td>
            <td>${order.orderType}</td>
            <td class="right"><strong>${order.totalAmount}</strong></td>
        </tr>
    `}).join('');
    
    // Re-attach checkbox events( chỉ cho checkbox của đơn mới)
    document.querySelectorAll('.row-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            if (e.target.checked) {
                if (!selectedOrders.includes(id)) selectedOrders.push(id);
            } else {
                selectedOrders = selectedOrders.filter(i => i !== id);
            }
            updateBulkBar();
            renderTable();
        });
    });
    
    updatePaginationInfo(filtered.length);
}

function updatePaginationInfo(total) {
    const totalPages = Math.ceil(total / rowsPerPage);
    const start = (currentPage - 1) * rowsPerPage + 1;
    const end = Math.min(currentPage * rowsPerPage, total);
    
    document.getElementById('paginationInfo').innerHTML = `Đang hiện từ ${start} đến ${end} của ${total} kết quả`;
    
    // Update page numbers
    const pageNumbersDiv = document.getElementById('pageNumbers');
    let pagesHtml = '';
    for (let i = 1; i <= totalPages; i++) {
        pagesHtml += `<button class="page-number ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    pageNumbersDiv.innerHTML = pagesHtml;
    
    document.querySelectorAll('.page-number').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPage = parseInt(btn.dataset.page);
            renderTable();
        });
    });
    
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages || total === 0;
}

function updateBulkBar() {
    const bulkBar = document.getElementById('bulkBar');
    const selectedCount = document.getElementById('selectedCount');
    
    if (selectedOrders.length > 0) {
        bulkBar.style.display = 'flex';
        selectedCount.textContent = selectedOrders.length;
    } else {
        bulkBar.style.display = 'none';
    }
    
    // Update select all checkbox
    const filtered = filterOrders();
    const selectAllCheckbox = document.getElementById('selectAll');
    if (selectAllCheckbox && filtered.length > 0) {
        //chỉ lấy đơn mới
        const visibleIds = filtered.filter(o => o.status === 'Đơn mới').map(o => o.id);
        const allSelected = visibleIds.length > 0 && visibleIds.every(id => selectedOrders.includes(id));
        selectAllCheckbox.checked = allSelected;
    } else if (selectAllCheckbox) {
        selectAllCheckbox.checked = false;
    }
}

// Event listeners
document.getElementById('selectAll')?.addEventListener('change', (e) => {
    const filtered = filterOrders();
    const selectableOrders = filtered.filter(order => order.status === 'Đơn mới');
    if (e.target.checked) {
        selectableOrders.forEach(order => {
            if (!selectedOrders.includes(order.id)) selectedOrders.push(order.id);
        });
    } else {
        const filteredIds = filtered.map(o => o.id);
        selectedOrders = selectedOrders.filter(id => !filteredIds.includes(id));
    }
    updateBulkBar();
    renderTable();
});

document.getElementById('deselectAllBtn')?.addEventListener('click', () => {
    selectedOrders = [];
    updateBulkBar();
    renderTable();
});

document.getElementById('sendDispatchBtn')?.addEventListener('click', () => {
    if (selectedOrders.length > 0) {
        alert(`Đã gửi ${selectedOrders.length} đơn đến điều vận`);
    } else {
        alert('Không có đơn nào được chọn');
    }
});

document.getElementById('resetFilters')?.addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('typeFilter').value = '';
    document.getElementById('dateFrom').value = '';
    document.getElementById('dateTo').value = '';
    searchTerm = '';
    typeFilter = '';
    dateFrom = '';
    dateTo = '';
    currentPage = 1;
    renderTable();
});

document.getElementById('searchInput')?.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    currentPage = 1;
    renderTable();
});

document.getElementById('typeFilter')?.addEventListener('change', (e) => {
    typeFilter = e.target.value;
    currentPage = 1;
    renderTable();
});

document.getElementById('dateFrom')?.addEventListener('change', (e) => {
    dateFrom = e.target.value;
    currentPage = 1;
    renderTable();
});

document.getElementById('dateTo')?.addEventListener('change', (e) => {
    dateTo = e.target.value;
    currentPage = 1;
    renderTable();
});

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentTab = tab.dataset.tab;
        currentPage = 1;
        renderTable();
    });
});

document.getElementById('prevPage')?.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
});

document.getElementById('nextPage')?.addEventListener('click', () => {
    const total = filterOrders().length;
    const totalPages = Math.ceil(total / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
    }
});

// Mobile sidebar
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    });
}

// Initial render
renderTable();