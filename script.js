// Data default stok barang (akan dimuat jika localStorage kosong)
const defaultStokBarang = [
    // Sembako
    { kategori: "Sembako", nama: "Beras", harga: 15000, stok: 100 },
    { kategori: "Sembako", nama: "Gula Pasir", harga: 12000, stok: 100 },
    { kategori: "Sembako", nama: "Minyak Goreng", harga: 18000, stok: 100 },
    { kategori: "Sembako", nama: "Tepung Terigu", harga: 10000, stok: 100 },
    { kategori: "Sembako", nama: "Telur", harga: 25000, stok: 100 },
    { kategori: "Sembako", nama: "Daging Ayam", harga: 35000, stok: 100 },
    { kategori: "Sembako", nama: "Daging Sapi", harga: 80000, stok: 100 },
    { kategori: "Sembako", nama: "Susu", harga: 15000, stok: 100 },
    { kategori: "Sembako", nama: "Garam", harga: 5000, stok: 100 },
    { kategori: "Sembako", nama: "Bawang Merah", harga: 20000, stok: 100 },
    { kategori: "Sembako", nama: "Bawang Putih", harga: 25000, stok: 100 },
    
    // Bahan Makanan Tambahan
    { kategori: "Bahan Makanan Tambahan", nama: "Mi Instan", harga: 3000, stok: 100 },
    { kategori: "Bahan Makanan Tambahan", nama: "Kecap", harga: 8000, stok: 100 },
    { kategori: "Bahan Makanan Tambahan", nama: "Saus", harga: 10000, stok: 100 },
    { kategori: "Bahan Makanan Tambahan", nama: "Sambal", harga: 7000, stok: 100 },
    { kategori: "Bahan Makanan Tambahan", nama: "Margarin", harga: 12000, stok: 100 },
    { kategori: "Bahan Makanan Tambahan", nama: "Santan Kemasan", harga: 5000, stok: 100 },
    { kategori: "Bahan Makanan Tambahan", nama: "Kaldu Bubuk", harga: 6000, stok: 100 },
    { kategori: "Bahan Makanan Tambahan", nama: "Bumbu Instan", harga: 4000, stok: 100 },
    
    // Minuman
    { kategori: "Minuman", nama: "Air Mineral", harga: 3000, stok: 100 },
    { kategori: "Minuman", nama: "Teh", harga: 5000, stok: 100 },
    { kategori: "Minuman", nama: "Kopi", harga: 8000, stok: 100 },
    { kategori: "Minuman", nama: "Susu Kemasan", harga: 10000, stok: 100 },
    { kategori: "Minuman", nama: "Minuman Serbuk", harga: 6000, stok: 100 },
    { kategori: "Minuman", nama: "Minuman Bersoda", harga: 7000, stok: 100 },
    
    // Kebutuhan Mandi dan Kebersihan
    { kategori: "Kebutuhan Mandi dan Kebersihan", nama: "Sabun Mandi", harga: 8000, stok: 100 },
    { kategori: "Kebutuhan Mandi dan Kebersihan", nama: "Sampo", harga: 15000, stok: 100 },
    { kategori: "Kebutuhan Mandi dan Kebersihan", nama: "Pasta Gigi", harga: 10000, stok: 100 },
    { kategori: "Kebutuhan Mandi dan Kebersihan", nama: "Sikat Gigi", harga: 5000, stok: 100 },
    { kategori: "Kebutuhan Mandi dan Kebersihan", nama: "Tisu", harga: 12000, stok: 100 },
    { kategori: "Kebutuhan Mandi dan Kebersihan", nama: "Deodoran", harga: 20000, stok: 100 },
    { kategori: "Kebutuhan Mandi dan Kebersihan", nama: "Pembalut", harga: 25000, stok: 100 },
    
    // Kebutuhan Rumah Tangga
    { kategori: "Kebutuhan Rumah Tangga", nama: "Deterjen", harga: 15000, stok: 100 },
    { kategori: "Kebutuhan Rumah Tangga", nama: "Pewangi Pakaian", harga: 10000, stok: 100 },
    { kategori: "Kebutuhan Rumah Tangga", nama: "Sabun Cuci Piring", harga: 8000, stok: 100 },
    { kategori: "Kebutuhan Rumah Tangga", nama: "Pembersih Lantai", harga: 12000, stok: 100 },
    { kategori: "Kebutuhan Rumah Tangga", nama: "Pembersih Kamar Mandi", harga: 15000, stok: 100 },
    { kategori: "Kebutuhan Rumah Tangga", nama: "Spons", harga: 3000, stok: 100 },
    { kategori: "Kebutuhan Rumah Tangga", nama: "Kantong Sampah", harga: 5000, stok: 100 },
    
    // Kebutuhan Bayi dan Anak
    { kategori: "Kebutuhan Bayi dan Anak", nama: "Popok Bayi", harga: 40000, stok: 100 },
    { kategori: "Kebutuhan Bayi dan Anak", nama: "Susu Bayi", harga: 50000, stok: 100 },
    { kategori: "Kebutuhan Bayi dan Anak", nama: "Makanan Bayi", harga: 30000, stok: 100 },
    { kategori: "Kebutuhan Bayi dan Anak", nama: "Tisu Basah", harga: 15000, stok: 100 },
    { kategori: "Kebutuhan Bayi dan Anak", nama: "Minyak Telon", harga: 20000, stok: 100 },
    
    // Jajanan dan Snack
    { kategori: "Jajanan dan Snack", nama: "Biskuit", harga: 8000, stok: 100 },
    { kategori: "Jajanan dan Snack", nama: "Wafer", harga: 6000, stok: 100 },
    { kategori: "Jajanan dan Snack", nama: "Permen", harga: 2000, stok: 100 },
    { kategori: "Jajanan dan Snack", nama: "Cokelat", harga: 10000, stok: 100 },
    { kategori: "Jajanan dan Snack", nama: "Keripik", harga: 7000, stok: 100 },
    { kategori: "Jajanan dan Snack", nama: "Snack Kemasan", harga: 5000, stok: 100 },
    
    // Kebutuhan Lainnya
    { kategori: "Kebutuhan Lainnya", nama: "Pulsa", harga: 10000, stok: 100 },
    { kategori: "Kebutuhan Lainnya", nama: "Paket Data", harga: 25000, stok: 100 },
    { kategori: "Kebutuhan Lainnya", nama: "Rokok", harga: 20000, stok: 100 },
    { kategori: "Kebutuhan Lainnya", nama: "Korek Api", harga: 3000, stok: 100 },
    { kategori: "Kebutuhan Lainnya", nama: "Vitamin", harga: 15000, stok: 100 },
    { kategori: "Kebutuhan Lainnya", nama: "Minyak Kayu Putih", harga: 12000, stok: 100 }
];

// Muat stok dari localStorage atau default
let stokBarang = JSON.parse(localStorage.getItem('stokBarang')) || defaultStokBarang;
if (!localStorage.getItem('stokBarang')) {
    localStorage.setItem('stokBarang', JSON.stringify(defaultStokBarang));
}

let keranjang = [];
let hutangPelanggan = JSON.parse(localStorage.getItem('hutangPelanggan')) || [];

// Fungsi untuk menampilkan section
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    if (sectionId === 'stok') updateDaftarBarang();
    if (sectionId === 'penjualan') updateDaftarBarangPenjualan();
    if (sectionId === 'hutang') updateDaftarHutang();
}

// Kelola Stok
document.getElementById('stokForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const kategori = document.getElementById('kategori').value;
    const nama = document.getElementById('namaBarang').value;
    const harga = parseFloat(document.getElementById('harga').value);
    const stok = parseInt(document.getElementById('stok').value);
    stokBarang.push({ kategori, nama, harga, stok });
    localStorage.setItem('stokBarang', JSON.stringify(stokBarang));
    updateDaftarBarang();
    this.reset();
});

function updateDaftarBarang() {
    const container = document.getElementById('daftarBarang');
    container.innerHTML = '';
    
    // Kelompokkan barang berdasarkan kategori
    const groupedBarang = {};
    stokBarang.forEach((item, index) => {
        if (!groupedBarang[item.kategori]) {
            groupedBarang[item.kategori] = [];
        }
        groupedBarang[item.kategori].push({ ...item, index });
    });
    
    // Tampilkan per kategori
    for (const kategori in groupedBarang) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'kategori-group';
        
        const heading = document.createElement('h4');
        heading.className = 'kategori-heading';
        heading.textContent = kategori;
        groupDiv.appendChild(heading);
        
        const ul = document.createElement('ul');
        ul.className = 'kategori-list';
        
        groupedBarang[kategori].forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nama} - Harga: Rp${item.harga} - Stok: ${item.stok}`;
            const btnKurangi = document.createElement('button');
            btnKurangi.textContent = 'Kurangi Stok';
            btnKurangi.onclick = () => kurangiStok(item.index);
            li.appendChild(btnKurangi);
            ul.appendChild(li);
        });
        
        groupDiv.appendChild(ul);
        container.appendChild(groupDiv);
    }
}

function kurangiStok(index) {
    const qty = prompt('Jumlah yang dikurangi:');
    if (qty && qty > 0) {
        stokBarang[index].stok -= parseInt(qty);
        localStorage.setItem('stokBarang', JSON.stringify(stokBarang));
        updateDaftarBarang();
    }
}

// Penjualan
function updateDaftarBarangPenjualan() {
    const container = document.getElementById('daftarBarangPenjualan');
    container.innerHTML = '';
    
    // Kelompokkan barang berdasarkan kategori
    const groupedBarang = {};
    stokBarang.forEach((item, index) => {
        if (!groupedBarang[item.kategori]) {
            groupedBarang[item.kategori] = [];
        }
        groupedBarang[item.kategori].push({ ...item, index });
    });
    
    // Tampilkan per kategori
    for (const kategori in groupedBarang) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'kategori-group';
        
        const heading = document.createElement('h4');
        heading.className = 'kategori-heading';
        heading.textContent = kategori;
        groupDiv.appendChild(heading);
        
        const ul = document.createElement('ul');
        ul.className = 'kategori-list';
        
        groupedBarang[kategori].forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nama} - Rp${item.harga} (Stok: ${item.stok})`;
            const btnTambah = document.createElement('button');
            btnTambah.textContent = 'Tambah ke Keranjang';
            btnTambah.onclick = () => tambahKeKeranjang(item.index);
            li.appendChild(btnTambah);
            ul.appendChild(li);
        });
        
        groupDiv.appendChild(ul);
        container.appendChild(groupDiv);
    }
    
    updateKeranjang();
}

function tambahKeKeranjang(index) {
    const qty = prompt('Jumlah:');
    if (qty && qty > 0 && qty <= stokBarang[index].stok) {
        keranjang.push({ ...stokBarang[index], qty: parseInt(qty) });
        updateKeranjang();
    } else {
        alert('Stok tidak cukup!');
    }
}

function updateKeranjang() {
    const list = document.getElementById('listKeranjang');
    list.innerHTML = '';
    let total = 0;
    keranjang.forEach((item, idx) => {
        const li = document.createElement('li');
        li.textContent = `${item.nama} x${item.qty} - Rp${item.harga * item.qty}`;
        total += item.harga * item.qty;
        const btnHapus = document.createElement('button');
        btnHapus.textContent = 'Hapus';
        btnHapus.onclick = () => keranjang.splice(idx, 1) && updateKeranjang();
        li.appendChild(btnHapus);
        list.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}

function prosesPembayaran() {
    const metode = prompt('Metode pembayaran: tunai atau kredit?');
    if (metode === 'kredit') {
        const nama = prompt('Nama pelanggan:');
        hutangPelanggan.push({ nama, jumlah: parseFloat(document.getElementById('total').textContent) });
        localStorage.setItem('hutangPelanggan', JSON.stringify(hutangPelanggan));
    }
    // Kurangi stok
    keranjang.forEach(item => {
        const idx = stokBarang.findIndex(b => b.nama === item.nama);
        if (idx !== -1) stokBarang[idx].stok -= item.qty;
    });
    localStorage.setItem('stokBarang', JSON.stringify(stokBarang));
    keranjang = [];
    updateKeranjang();
    updateDaftarBarangPenjualan();
    alert('Pembayaran berhasil!');
}

// Hutang
document.getElementById('hutangForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('namaPelanggan').value;
    const jumlah = parseFloat(document.getElementById('jumlahHutang').value);
    hutangPelanggan.push({ nama, jumlah });
    localStorage.setItem('hutangPelanggan', JSON.stringify(hutangPelanggan));
    updateDaftarHutang();
    this.reset();
});

function updateDaftarHutang() {
    const list = document.getElementById('daftarHutang');
    list.innerHTML = '';
    hutangPelanggan.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nama} - Hutang: Rp${item.jumlah}`;
        const btnBayar = document.createElement('button');
        btnBayar.textContent = 'Bayar Hutang';
        btnBayar.onclick = () => bayarHutang(index);
        li.appendChild(btnBayar);
        list.appendChild(li);
    });
}

function bayarHutang(index) {
    const bayar = prompt('Jumlah pembayaran:');
    if (bayar && bayar >= 0) {
        hutangPelanggan[index].jumlah -= parseFloat(bayar);
        if (hutangPelanggan[index].jumlah <= 0) hutangPelanggan.splice(index, 1);
        localStorage.setItem('hutangPelanggan', JSON.stringify(hutangPelanggan));
        updateDaftarHutang();
    }
}

// Inisialisasi
showSection('stok');