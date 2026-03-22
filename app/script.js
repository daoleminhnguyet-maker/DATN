// Dữ liệu mẫu - ĐỂ TRỐNG
const ordersData = [];

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
    
    tbody.innerHTML = pageData.map(order => `
        <tr class="${selectedOrders.includes(order.id) ? 'selected' : ''}">
            <td class="checkbox-col">
                <input type="checkbox" class="row-checkbox" data-id="${order.id}" ${selectedOrders.includes(order.id) ? 'checked' : ''}>
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
    `).join('');
    
    // Re-attach checkbox events
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
        const visibleIds = filtered.map(o => o.id);
        const allSelected = visibleIds.length > 0 && visibleIds.every(id => selectedOrders.includes(id));
        selectAllCheckbox.checked = allSelected;
    } else if (selectAllCheckbox) {
        selectAllCheckbox.checked = false;
    }
}

// Event listeners
document.getElementById('selectAll')?.addEventListener('change', (e) => {
    const filtered = filterOrders();
    if (e.target.checked) {
        filtered.forEach(order => {
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