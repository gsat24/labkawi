// Persistence Helpers
const DB_KEY = 'lab_kawi_db';

// Data Store
const db = {
  user: [
    {nama:'Admin', id:'admin', password:'admin', role:'admin', kontak:'admin@labkawi.id'},
    {nama:'Ahmad Subarjo', id:'ahmad', password:'ahmad', role:'operator', kontak:'ahmad@labkawi.id'},
    {nama:'Siska Putri', id:'siska', password:'siska', role:'kasir', kontak:'siska@labkawi.id'},
    {nama:'Bambang Pamungkas', id:'bambang', password:'bambang', role:'operator', kontak:'bambang@labkawi.id'}
  ],
  pasien: [
    {nama:'Andi Herlambang', id:'3201234567890001', dob:'1990-01-01', kontak:'08123456789', gender:'Laki-laki', email:'andi@example.com', photo:'https://i.pravatar.cc/150?u=andi'},
    {nama:'Budi Santoso', id:'3201234567890002', dob:'1985-05-12', kontak:'081222333444', gender:'Laki-laki', email:'budi@example.com', photo:'https://i.pravatar.cc/150?u=budi'},
    {nama:'Siti Aminah', id:'3201234567890003', dob:'1995-10-20', kontak:'081333444555', gender:'Perempuan', email:'siti@example.com', photo:'https://i.pravatar.cc/150?u=siti'},
    {nama:'Dewi Lestari', id:'3201234567890004', dob:'1992-03-15', kontak:'081444555666', gender:'Perempuan', email:'dewi@example.com', photo:'https://i.pravatar.cc/150?u=dewi'},
    {nama:'Eko Prasetyo', id:'3201234567890005', dob:'1988-07-22', kontak:'081555666777', gender:'Laki-laki', email:'eko@example.com', photo:'https://i.pravatar.cc/150?u=eko'},
    {nama:'Farida Hasan', id:'3201234567890006', dob:'1998-11-30', kontak:'081666777888', gender:'Perempuan', email:'farida@example.com', photo:'https://i.pravatar.cc/150?u=farida'},
    {nama:'Guntur Wibowo', id:'3201234567890007', dob:'1980-09-05', kontak:'081777888999', gender:'Laki-laki', email:'guntur@example.com', photo:'https://i.pravatar.cc/150?u=guntur'},
    {nama:'Hany Ramadhani', id:'3201234567890008', dob:'1993-01-25', kontak:'081888999000', gender:'Perempuan', email:'hany@example.com', photo:'https://i.pravatar.cc/150?u=hany'},
    {nama:'Indra Kusuma', id:'3201234567890009', dob:'1987-12-10', kontak:'081999000111', gender:'Laki-laki', email:'indra@example.com', photo:'https://i.pravatar.cc/150?u=indra'},
    {nama:'Joko Susilo', id:'3201234567890010', dob:'1975-06-18', kontak:'081000111222', gender:'Laki-laki', email:'joko@example.com', photo:'https://i.pravatar.cc/150?u=joko'}
  ],
  dokter: [
    {nama:'Dr. Budi Setiawan', id:'DR-001', kontak:'08123456701'},
    {nama:'Dr. Sarah Wijaya', id:'DR-002', kontak:'08123456702'},
    {nama:'Dr. Anton Nugroho', id:'DR-003', kontak:'08123456703'},
    {nama:'Dr. Linda Permata', id:'DR-004', kontak:'08123456704'}
  ],
  analis: [
    {nama:'Dewi Sartika', id:'AN-01'},
    {nama:'Rudi Hartono', id:'AN-02'},
    {nama:'Maya Indah', id:'AN-03'},
    {nama:'Hendra Wijaya', id:'AN-04'}
  ],
  kasir: [
    {nama:'Sari Puspita', id:'KS-01'},
    {nama:'Ani Rahayu', id:'KS-02'},
    {nama:'Dedi Kurniawan', id:'KS-03'}
  ],
  pemeriksaan: [
      {id: 1, nama:'Darah Lengkap', harga: 125000, item_ids: [101, 102, 103, 104, 105, 106], sort_order: 1},
      {id: 2, nama:'Imuno Serologi', harga: 250000, item_ids: [201, 202], sort_order: 3},
      {id: 3, nama:'Gula Darah', harga: 35000, item_ids: [301], sort_order: 4},
      {id: 4, nama:'Fungsi Ginjal', harga: 85000, item_ids: [401, 402], sort_order: 5},
      {id: 5, nama:'Hematologi Rutin', harga: 75000, item_ids: [101, 102, 105], sort_order: 2}
    ],
  item: [
    {id: 101, kode: 'HB', nama:'Hemoglobin', loinc:'718-7', normal:'12-16', satuan:'g/dL'},
    {id: 102, kode: 'LEU', nama:'Leukosit', loinc:'6690-2', normal:'4.0-10.0', satuan:'10^3/uL'},
    {id: 103, kode: 'LED', nama:'LED', loinc:'4537-7', normal:'< 15', satuan:'mm/jam'},
    {id: 104, kode: 'HMT', nama:'Hematokrit', loinc:'4544-3', normal:'37-47', satuan:'%'},
    {id: 105, kode: 'TRO', nama:'Trombosit', loinc:'777-3', normal:'150-450', satuan:'10^3/uL'},
    {id: 106, kode: 'ERI', nama:'Eritrosit', loinc:'2857-1', normal:'4.2-5.4', satuan:'juta/uL'},
    {id: 201, kode: 'HBSAG', nama:'HBs Ag (ELISA)', loinc:'5195-3', normal:'Non Reaktif', satuan:''},
    {id: 202, kode: 'HCV', nama:'Anti HCV (CLIA)', loinc:'13955-0', normal:'Non Reaktif', satuan:''},
    {id: 301, kode: 'GDP', nama:'Gula Darah Puasa', loinc:'1558-6', normal:'< 100', satuan:'mg/dL'},
    {id: 401, kode: 'URE', nama:'Ureum', loinc:'3094-0', normal:'15-45', satuan:'mg/dL'},
    {id: 402, kode: 'KRE', nama:'Kreatinin', loinc:'2160-0', normal:'0.6-1.1', satuan:'mg/dL'},
    {id: 501, kode: 'SGOT', nama:'SGOT', loinc:'', normal:'< 35', satuan:'U/L'},
    {id: 502, kode: 'SGPT', nama:'SGPT', loinc:'', normal:'< 41', satuan:'U/L'},
    {id: 601, kode: 'AU', nama:'Asam Urat', loinc:'', normal:'3.4-7.0', satuan:'mg/dL'}
  ],
  'laporan-item': [
    {nama:'Panel Hematologi', kode:'P-HEM'},
    {nama:'Panel Fungsi Hati', kode:'P-LFT'},
    {nama:'Panel Fungsi Ginjal', kode:'P-RFT'},
    {nama:'Panel Lemak', kode:'P-LIPID'},
    {nama:'Panel Diabetes', kode:'P-DIAB'}
  ],
  harga: [
    {item:'Darah Lengkap', harga:125000, status:'Aktif'},
    {item:'Imuno Serologi', harga:250000, status:'Aktif'},
    {item:'Gula Darah', harga:35000, status:'Aktif'},
    {item:'Fungsi Ginjal', harga:85000, status:'Aktif'}
  ],
  diagnosa: [
    {kode:'A00', nama:'Cholera'},
    {kode:'A01', nama:'Typhoid and paratyphoid fevers'}
  ],
  invoices: [
    {
      id: 'INV-20260108-001',
      tgl: '2026-01-08',
      pasien: 'Andi Herlambang',
      dokter: 'Dr. Budi Setiawan',
      items: [{id: 1, nama: 'Darah Lengkap', harga: 125000}],
      total: 125000,
      status: 'Lunas',
      isPrivate: false
    },
    {
      id: 'INV-20260108-002',
      tgl: '2026-01-08',
      pasien: 'Budi Santoso',
      dokter: 'Dr. Sarah Wijaya',
      items: [{id: 2, nama: 'Imuno Serologi', harga: 250000}],
      total: 250000,
      status: 'Belum Bayar',
      isPrivate: false
    },
    {
      id: 'INV-20260108-003',
      tgl: '2026-01-08',
      pasien: 'Siti Aminah',
      dokter: 'Dr. Anton Nugroho',
      items: [
        {id: 3, nama: 'Gula Darah', harga: 35000},
        {id: 4, nama: 'Fungsi Ginjal', harga: 85000}
      ],
      total: 120000,
      status: 'Lunas',
      isPrivate: false
    }
  ],
  pembayaran: [
    {invoiceId: 'INV-20260108-001', metode: 'Tunai', jumlah: 125000, tgl: '2026-01-08'},
    {invoiceId: 'INV-20260108-003', metode: 'QRIS', jumlah: 120000, tgl: '2026-01-08'}
  ],
  hutang: [
    {id: 'HUT-001', tgl: '2026-01-10', supplier: 'PT. Medika Jaya', item: 'Reagen Hematologi', total: 5000000, status: 'Belum Bayar'},
    {id: 'HUT-002', tgl: '2026-01-11', supplier: 'CV. Lab Sejahtera', item: 'Tabung Vakum', total: 1200000, status: 'Lunas'}
  ],
  hasil_lab: [
    {
      invoiceId: 'INV-20260108-001',
      createdAt: '2026-01-08T10:00:00Z',
      results: {
        '101': {value: '14.5', keterangan: 'Normal'},
        '102': {value: '7.2', keterangan: ''},
        '103': {value: '10', keterangan: ''},
        '104': {value: '42', keterangan: ''},
        '105': {value: '250', keterangan: ''},
        '106': {value: '4.8', keterangan: ''}
      }
    },
    {
      invoiceId: 'INV-20260108-003',
      createdAt: '2026-01-08T11:30:00Z',
      results: {
        '301': {value: '115', keterangan: 'Puasa 10 jam'},
        '401': {value: '30', keterangan: ''},
        '402': {value: '0.9', keterangan: ''}
      }
    }
  ],
  mutasi_kas: [
    {tgl: '2026-01-10', dari: 'Kas Kecil', ke: 'Bank Mandiri', jumlah: 2000000, keterangan: 'Setoran harian'}
  ],
  logistik_pemakaian: [
    {tgl: '2026-01-11', bahan: 'Reagen Hematologi', jumlah: 1, satuan: 'Botol', user: 'ahmad'}
  ],
  logistik_habis: [
    {tgl: '2026-01-12', bahan: 'Tabung EDTA 3ml', status: 'Segera Order', user: 'bambang'}
  ],
  transaksi_lain: [
    {tgl: '2026-01-11', keterangan: 'Biaya Kebersihan', jumlah: 50000, tipe: 'Keluar'}
  ],
  transaksi_kas: [
    {tgl: '2026-01-12', keterangan: 'Saldo Awal', jumlah: 500000, tipe: 'Masuk'}
  ],
  roles: [
    { id: 'admin', nama: 'Administrator', permissions: ['dashboard', 'user', 'rbac', 'master-personalia', 'master-laboratorium', 'pos', 'pembayaran', 'koreksi-transaksi', 'laporan-pusat', 'analis-lab', 'radiologi', 'medical-report', 'logistik-pemakaian', 'logistik-habis', 'logistik-koreksi', 'transaksi-kas', 'transaksi-lain', 'mutasi-kas', 'integrasi'] },
    { id: 'operator', nama: 'Operator Lab', permissions: ['dashboard', 'analis-lab', 'radiologi', 'medical-report', 'logistik-pemakaian', 'logistik-habis', 'laporan-pusat'] },
    { id: 'kasir', nama: 'Kasir', permissions: ['dashboard', 'pos', 'pembayaran', 'koreksi-transaksi', 'laporan-pusat', 'transaksi-kas', 'transaksi-lain', 'mutasi-kas'] }
  ]
};

const crudSchemas = {
  user: {head:['Nama','User ID','Role','Kontak'], fields:[{k:'nama',t:'text',l:'Nama'},{k:'id',t:'text',l:'User ID'},{k:'role',t:'select',l:'Role',opt:[]},{k:'kontak',t:'text',l:'Kontak'}]},
  pasien: {head:['Nama','Identitas','Kontak','Email'], fields:[{k:'nama',t:'text',l:'Nama'},{k:'id',t:'text',l:'Identitas'},{k:'dob',t:'date',l:'Tanggal Lahir'},{k:'kontak',t:'text',l:'Kontak'},{k:'email',t:'text',l:'Email'}]},
  dokter: {head:['Nama','Identitas','Kontak'], fields:[{k:'nama',t:'text',l:'Nama'},{k:'id',t:'text',l:'Identitas'},{k:'kontak',t:'text',l:'Kontak'}]},
  analis: {head:['Nama','Kode'], fields:[{k:'nama',t:'text',l:'Nama'},{k:'id',t:'text',l:'Kode'}]},
  kasir: {head:['Nama','Kode'], fields:[{k:'nama',t:'text',l:'Nama'},{k:'id',t:'text',l:'Kode'}]},
  diagnosa: {head:['Kode','Nama Diagnosa'], fields:[{k:'kode',t:'text',l:'Kode'},{k:'nama',t:'text',l:'Nama Diagnosa'}]},
  item: {head:['Kode','Nama','Nilai Normal','Satuan','Kelas'], fields:[{k:'kode',t:'text',l:'Kode Lokal'},{k:'nama',t:'text',l:'Nama Pemeriksaan'},{k:'normal',t:'text',l:'Nilai Normal'},{k:'satuan',t:'text',l:'Satuan'},{k:'kelas',t:'number',l:'Kelas Urutan'}]},
  'laporan-item': {head:['Nama','Kode'], fields:[{k:'nama',t:'text',l:'Nama Laporan'},{k:'kode',t:'text',l:'Kode'}]},
  harga: {head:['Item','Harga','Status'], fields:[{k:'item',t:'text',l:'Item'},{k:'harga',t:'number',l:'Harga'},{k:'status',t:'select',l:'Status',opt:['Aktif','Non-aktif']}]},
};

// Capture initial codes for migration
const initialItemCodes = db.item.map(i => ({ id: i.id, nama: i.nama, kode: i.kode }));

function saveDB() {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
  updateDashboardStats();
}

function loadDB() {
  const saved = localStorage.getItem(DB_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // Merge saved data with initial db structure to ensure all keys exist
      Object.keys(parsed).forEach(key => {
        db[key] = parsed[key];
      });
      
      // Migration: Ensure all users have a role and password
      if (db.user) {
        db.user.forEach(u => {
          if (!u.role) {
            u.role = u.id === 'admin' ? 'admin' : 'operator';
          }
          if (!u.password) {
            u.password = u.id; // Default password is the same as ID if missing
          }
        });
      }
      
      // Migration: Ensure all items have a code
      if (db.item) {
        let changed = false;
        db.item.forEach(item => {
          if (!item.kode || item.kode === '-') {
            const initialItem = initialItemCodes.find(ii => ii.id === item.id || ii.nama === item.nama);
            if (initialItem && initialItem.kode) {
              item.kode = initialItem.kode;
            } else {
              item.kode = (item.nama || 'ITEM').substring(0, 3).toUpperCase();
            }
            changed = true;
          }
        });
        if (changed) saveDB();
      }
    } catch (e) {
      console.error('Error loading DB:', e);
    }
  }
}

function updateDashboardStats() {
  const totalInv = db.invoices.length;
  const totalPasien = db.pasien.length;
  const totalHasil = db.hasil_lab.length;
  const totalPending = totalInv - totalHasil;
  const totalIncome = db.invoices.reduce((sum, inv) => sum + (inv.status === 'Lunas' ? inv.total : 0), 0);
  
  const completionRate = totalInv > 0 ? Math.round((totalHasil / totalInv) * 100) : 0;
  const targetIncome = 50000000; // Mock target 50jt
  const incomeAchievement = Math.round((totalIncome / targetIncome) * 100);

  // Update DOM
  const elInv = document.getElementById('stat-total-inv');
  const elPasien = document.getElementById('stat-total-pasien');
  const elHasil = document.getElementById('stat-total-hasil');
  const elIncome = document.getElementById('stat-total-income');
  
  if (elInv) elInv.textContent = totalInv.toLocaleString();
  if (elPasien) elPasien.textContent = totalPasien.toLocaleString();
  if (elHasil) elHasil.textContent = totalHasil.toLocaleString();
  if (elIncome) elIncome.textContent = `Rp ${totalIncome.toLocaleString('id-ID')}`;

  const elHasilTrend = document.getElementById('stat-hasil-trend');
  if (elHasilTrend) {
    elHasilTrend.textContent = `${totalPending} Menunggu`;
    elHasilTrend.className = totalPending > 0 ? 'trend-badge orange' : 'trend-badge green';
  }
  
  const elIncomeTrend = document.getElementById('stat-income-trend');
  if (elIncomeTrend) elIncomeTrend.textContent = `${incomeAchievement}%`;

  // Update Recent Registrations Table if we are on dashboard
  if (window.location.hash === '' || window.location.hash === '#dashboard') {
    renderRecentRegistrations();
  }
}

function renderRecentRegistrations() {
  const body = document.querySelector('#dashboard table tbody');
  if (!body) return;
  
  // Get last 5 invoices
  const recentInvoices = [...db.invoices].reverse().slice(0, 5);
  
  body.innerHTML = recentInvoices.map(inv => {
    const pasien = db.pasien.find(p => p.nama === inv.pasien);
    const hasResult = db.hasil_lab.some(h => h.invoiceId === inv.id);
    const statusClass = inv.status === 'Lunas' ? 'green' : 'blue';
    
    return `
      <tr>
        <td>
          <div class="patient-info">
            <div class="patient-avatar ${statusClass}">${inv.pasien.substring(0,2).toUpperCase()}</div>
            <div>
              <div class="patient-name">${inv.pasien}</div>
              <div class="patient-id">ID: ${pasien?.id || '-'}</div>
            </div>
          </div>
        </td>
        <td><span class="test-category">${inv.items[0]?.nama || 'Pemeriksaan'}</span></td>
        <td>
          <div class="datetime-date">${inv.tgl}</div>
        </td>
        <td><span class="status-badge ${statusClass}">${inv.status}</span></td>
        <td>
          <div class="flex gap-1">
            <button class="btn ghost tiny" onclick="openLabInput('${inv.id}')">${hasResult ? 'Edit' : 'Input'}</button>
            ${hasResult ? `<button class="btn tiny ghost" onclick="previewLabResult('${inv.id}')">Preview</button>` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function renderCrud(sub) {
  const schema = crudSchemas[sub];
  if (!schema) return;

  const title = document.getElementById('crud-title');
  const head = document.getElementById('crud-head-new');
  const body = document.getElementById('crud-body-new');
  const createBtn = document.getElementById('crud-create');

  if (title) title.textContent = `Manajemen Data ${sub.charAt(0).toUpperCase() + sub.slice(1)}`;
  
  if (head) {
    head.innerHTML = `<tr>${schema.head.map(h => `<th>${h}</th>`).join('')}<th>Aksi</th></tr>`;
  }

  if (body) {
    const data = db[sub] || [];
    if (data.length === 0) {
      body.innerHTML = `<tr><td colspan="${schema.head.length + 1}" class="text-center p-4">Tidak ada data</td></tr>`;
    } else {
      body.innerHTML = data.map((item, index) => {
        // Safe stringify for sub and index
        const subStr = String(sub);
        const idxNum = Number(index);
        return `
          <tr>
            ${schema.fields.map(f => {
              let val = item[f.k] || '-';
              if (f.k === 'role' && sub === 'user') {
                const role = db.roles.find(r => r.id === val);
                if (role) val = `<span class="badge ghost tiny">${role.nama}</span>`;
              }
              return `<td>${val}</td>`;
            }).join('')}
            <td>
              <button class="btn tiny ghost" onclick="event.preventDefault(); editRow('${subStr}', ${idxNum})">Edit</button>
              <button class="btn tiny danger" onclick="event.preventDefault(); deleteRow('${subStr}', ${idxNum})">Hapus</button>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  if (createBtn) {
    createBtn.onclick = (e) => {
      e.preventDefault();
      console.log('Create clicked for sub:', sub);
      window.showCrudModal(sub);
    };
  }
}

  window.showCrudModal = function(sub, index = null) {
    const schema = crudSchemas[sub];
    const isEdit = index !== null;
    const item = isEdit ? db[sub][index] : {};
    
    // Dynamic option population for roles
    if (sub === 'user') {
      const roleField = schema.fields.find(f => f.k === 'role');
      if (roleField) {
        roleField.opt = db.roles.map(r => r.id);
      }
    }
    
    const content = `
      <div class="flex-column gap-4">
        ${schema.fields.map(f => `
          <div class="form-group">
            <label>${f.l}${['kode','id','nama','item'].includes(f.k) ? ' <span class="text-danger">*</span>' : ''}</label>
            ${f.t === 'select' ? `
              <select id="m-crud-${f.k}" class="input">
                ${f.opt.map(o => `<option value="${o}" ${item[f.k] === o ? 'selected' : ''}>${o}</option>`).join('')}
              </select>
            ` : `
              <input type="${f.t}" id="m-crud-${f.k}" class="input" value="${item[f.k] || ''}" ${isEdit && f.k === 'id' ? 'readonly disabled' : ''}>
            `}
          </div>
        `).join('')}
      </div>
    `;
  
    openModal(isEdit ? `Edit ${sub}` : `Tambah ${sub}`, content, () => {
      const newData = {};
      let isValid = true;
      let missingField = '';

      schema.fields.forEach(f => {
        const val = document.getElementById(`m-crud-${f.k}`).value;
        if (['kode','id','nama','item'].includes(f.k) && !val) {
          isValid = false;
          missingField = f.l;
        }
        newData[f.k] = val;
      });

      if (!isValid) {
        alert(`${missingField} harus diisi!`);
        return false;
      }
  
      if (isEdit) {
        db[sub][index] = { ...db[sub][index], ...newData };
      } else {
        db[sub].push(newData);
      }
  
      saveDB();
      renderCrud(sub);
      return true;
    });
  }

  function editRow(sub, index) {
    console.log('Editing row:', { sub, index });
    showCrudModal(sub, index);
  }
  
  function deleteRow(sub, index) {
    console.log('Deleting row:', { sub, index });
    if (confirm(`Yakin ingin menghapus data ini?`)) {
      db[sub].splice(index, 1);
      saveDB();
      renderCrud(sub);
    }
  }

function renderPasienList() {
  const body = document.getElementById('pasien-list-body');
  if (!body) return;
  body.innerHTML = db.pasien.map(p => `
    <tr>
      <td>
        <div class="flex items-center gap-3">
          <img src="${p.photo}" class="avatar" alt="">
          <div>
            <div class="font-bold">${p.nama}</div>
            <div class="tiny text-muted">${p.id}</div>
          </div>
        </div>
      </td>
      <td>${p.dob}</td>
      <td>${p.gender}</td>
      <td>${p.kontak}</td>
      <td>${p.email || '-'}</td>
      <td>
        <button class="btn tiny ghost" onclick="event.preventDefault(); editPasien('${p.id}')">Edit</button>
        <button class="btn tiny danger" onclick="event.preventDefault(); deletePasien('${p.id}')">Hapus</button>
      </td>
    </tr>
  `).join('');
}

  function editPasien(id) {
    const p = db.pasien.find(x => x.id === id);
    if (!p) return;
    
    const content = `
      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label>NIK / Pasien ID <span class="text-danger">*</span></label>
          <input type="text" id="m-pasien-id" class="input" value="${p.id}" readonly disabled>
        </div>
        <div class="form-group">
          <label>Nama Lengkap <span class="text-danger">*</span></label>
          <input type="text" id="m-pasien-nama" class="input" value="${p.nama}">
        </div>
        <div class="form-group">
          <label>Tanggal Lahir</label>
          <input type="date" id="m-pasien-dob" class="input" value="${p.dob}">
        </div>
        <div class="form-group">
          <label>Jenis Kelamin</label>
          <select id="m-pasien-gender" class="input">
            <option value="Laki-laki" ${p.gender === 'Laki-laki' ? 'selected' : ''}>Laki-laki</option>
            <option value="Perempuan" ${p.gender === 'Perempuan' ? 'selected' : ''}>Perempuan</option>
          </select>
        </div>
        <div class="form-group">
          <label>Kontak (WA/HP)</label>
          <input type="text" id="m-pasien-kontak" class="input" value="${p.kontak}">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" id="m-pasien-email" class="input" value="${p.email || ''}">
        </div>
      </div>
    `;
    
    openModal('Edit Data Pasien', content, () => {
      const nama = document.getElementById('m-pasien-nama').value;
      if (!nama) return alert('Nama harus diisi!');
      
      p.nama = nama;
      p.dob = document.getElementById('m-pasien-dob').value;
      p.gender = document.getElementById('m-pasien-gender').value;
      p.kontak = document.getElementById('m-pasien-kontak').value;
      p.email = document.getElementById('m-pasien-email').value;
      saveDB();
      renderPasienList();
      return true;
    });
  }

  function deletePasien(id) {
    if (confirm('Yakin ingin menghapus data pasien ini?')) {
      db.pasien = db.pasien.filter(p => p.id !== id);
      saveDB();
      renderPasienList();
    }
  }

  // Logistics & Cash History Rendering
  window.renderLogistikPemakaian = function() {
    const body = document.getElementById('logistik-pemakaian-body');
    if (!body) return;
    const data = db.logistik_pemakaian || [];
    body.innerHTML = data.length === 0 ? '<tr><td colspan="5" class="text-center p-4">Belum ada riwayat pemakaian.</td></tr>' :
      data.map((item, idx) => `
        <tr>
          <td>${item.tgl}</td>
          <td class="font-bold">${item.bahan}</td>
          <td>${item.jumlah} ${item.satuan || ''}</td>
          <td><span class="badge ghost tiny">${item.user}</span></td>
          <td class="text-right">
            <button class="btn tiny ghost danger" onclick="deleteLogistik('pemakaian', ${idx})">Hapus</button>
          </td>
        </tr>
      `).join('');
  };

  window.renderLogistikHabis = function() {
    const body = document.getElementById('logistik-habis-body');
    if (!body) return;
    const data = db.logistik_habis || [];
    body.innerHTML = data.length === 0 ? '<tr><td colspan="5" class="text-center p-4">Semua bahan tersedia.</td></tr>' :
      data.map((item, idx) => `
        <tr>
          <td>${item.tgl}</td>
          <td class="font-bold">${item.bahan}</td>
          <td><span class="status-badge ${item.status === 'Habis' ? 'danger' : 'orange'}">${item.status}</span></td>
          <td><span class="badge ghost tiny">${item.user}</span></td>
          <td class="text-right">
            <button class="btn tiny ghost danger" onclick="deleteLogistik('habis', ${idx})">Hapus</button>
          </td>
        </tr>
      `).join('');
  };

  window.renderTransaksiKas = function() {
    const body = document.getElementById('transaksi-kas-body');
    if (!body) return;
    const data = db.transaksi_kas || [];
    body.innerHTML = data.length === 0 ? '<tr><td colspan="5" class="text-center p-4">Belum ada transaksi kas.</td></tr>' :
      data.map((item, idx) => `
        <tr>
          <td>${item.tgl}</td>
          <td>${item.keterangan}</td>
          <td><span class="status-badge ${item.tipe === 'Masuk' ? 'green' : 'danger'}">${item.tipe}</span></td>
          <td class="text-right font-bold">Rp ${item.jumlah.toLocaleString('id-ID')}</td>
          <td class="text-right">
            <button class="btn tiny ghost danger" onclick="deleteKas('utama', ${idx})">Hapus</button>
          </td>
        </tr>
      `).join('');
  };

  window.renderTransaksiKasLain = function() {
    const body = document.getElementById('transaksi-lain-body');
    if (!body) return;
    const data = db.transaksi_lain || [];
    body.innerHTML = data.length === 0 ? '<tr><td colspan="5" class="text-center p-4">Belum ada transaksi kas lain-lain.</td></tr>' :
      data.map((item, idx) => `
        <tr>
          <td>${item.tgl}</td>
          <td>${item.keterangan}</td>
          <td><span class="status-badge ${item.tipe === 'Masuk' ? 'green' : 'danger'}">${item.tipe}</span></td>
          <td class="text-right font-bold">Rp ${item.jumlah.toLocaleString('id-ID')}</td>
          <td class="text-right">
            <button class="btn tiny ghost danger" onclick="deleteKas('lain', ${idx})">Hapus</button>
          </td>
        </tr>
      `).join('');
  };

  window.renderMutasiKas = function() {
    const body = document.getElementById('mutasi-kas-body');
    if (!body) return;
    const data = db.mutasi_kas || [];
    body.innerHTML = data.length === 0 ? '<tr><td colspan="6" class="text-center p-4">Belum ada riwayat mutasi kas.</td></tr>' :
      data.map((item, idx) => `
        <tr>
          <td>${item.tgl}</td>
          <td>${item.dari}</td>
          <td>${item.ke}</td>
          <td class="text-right font-bold">Rp ${item.jumlah.toLocaleString('id-ID')}</td>
          <td><span class="tiny text-muted">${item.keterangan || '-'}</span></td>
          <td class="text-right">
            <button class="btn tiny ghost danger" onclick="deleteMutasiKas(${idx})">Hapus</button>
          </td>
        </tr>
      `).join('');
  };

  window.deleteMutasiKas = function(idx) {
    if (!confirm('Hapus riwayat mutasi kas ini?')) return;
    db.mutasi_kas.splice(idx, 1);
    saveDB();
    renderMutasiKas();
  };

  window.showAddMutasiModal = function() {
    const content = `
      <div class="flex-column gap-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label>Dari Akun/Kas <span class="text-danger">*</span></label>
            <input type="text" id="m-mut-dari" class="input" placeholder="Contoh: Kas Kecil">
          </div>
          <div class="form-group">
            <label>Ke Akun/Kas <span class="text-danger">*</span></label>
            <input type="text" id="m-mut-ke" class="input" placeholder="Contoh: Bank Mandiri">
          </div>
        </div>
        <div class="form-group">
          <label>Jumlah (Rp) <span class="text-danger">*</span></label>
          <input type="number" id="m-mut-jumlah" class="input" placeholder="0">
        </div>
        <div class="form-group">
          <label>Keterangan</label>
          <input type="text" id="m-mut-ket" class="input" placeholder="Contoh: Setoran harian">
        </div>
        <div class="form-group">
          <label>Tanggal</label>
          <input type="date" id="m-mut-tgl" class="input" value="${new Date().toISOString().split('T')[0]}">
        </div>
      </div>
    `;
    openModal('Catat Mutasi Kas', content, () => {
      const dari = document.getElementById('m-mut-dari').value;
      const ke = document.getElementById('m-mut-ke').value;
      const jumlah = document.getElementById('m-mut-jumlah').value;
      if (!dari || !ke || !jumlah) return alert('Dari, Ke, dan Jumlah harus diisi!');
      
      db.mutasi_kas.unshift({
        tgl: document.getElementById('m-mut-tgl').value,
        dari: dari,
        ke: ke,
        jumlah: parseInt(jumlah),
        keterangan: document.getElementById('m-mut-ket').value
      });
      saveDB();
      renderMutasiKas();
      return true;
    });
  };

  // Delete Helpers
  window.deleteLogistik = function(type, idx) {
    if (!confirm('Hapus data logistik ini?')) return;
    if (type === 'pemakaian') db.logistik_pemakaian.splice(idx, 1);
    else db.logistik_habis.splice(idx, 1);
    saveDB();
    if (type === 'pemakaian') renderLogistikPemakaian();
    else renderLogistikHabis();
  };

  window.deleteKas = function(type, idx) {
    if (!confirm('Hapus transaksi kas ini?')) return;
    if (type === 'utama') db.transaksi_kas.splice(idx, 1);
    else db.transaksi_lain.splice(idx, 1);
    saveDB();
    if (type === 'utama') renderTransaksiKas();
    else renderTransaksiKasLain();
  };

  // Modals for New Records
  window.showAddPemakaianModal = function() {
    const content = `
      <div class="flex-column gap-4">
        <div class="form-group">
          <label>Nama Bahan <span class="text-danger">*</span></label>
          <input type="text" id="m-log-bahan" class="input" placeholder="Contoh: Reagen Hematologi">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label>Jumlah <span class="text-danger">*</span></label>
            <input type="number" id="m-log-jumlah" class="input" value="1">
          </div>
          <div class="form-group">
            <label>Satuan</label>
            <input type="text" id="m-log-satuan" class="input" placeholder="Contoh: Botol, Box, pcs">
          </div>
        </div>
        <div class="form-group">
          <label>Tanggal Pemakaian</label>
          <input type="date" id="m-log-tgl" class="input" value="${new Date().toISOString().split('T')[0]}">
        </div>
      </div>
    `;
    openModal('Catat Pemakaian Bahan', content, () => {
      const bahan = document.getElementById('m-log-bahan').value;
      const jumlah = document.getElementById('m-log-jumlah').value;
      if (!bahan || !jumlah) return alert('Nama bahan dan jumlah harus diisi!');
      
      db.logistik_pemakaian.unshift({
        tgl: document.getElementById('m-log-tgl').value,
        bahan: bahan,
        jumlah: jumlah,
        satuan: document.getElementById('m-log-satuan').value,
        user: 'admin' // Mock user
      });
      saveDB();
      renderLogistikPemakaian();
      return true;
    });
  };

  window.showAddHabisModal = function() {
    const content = `
      <div class="flex-column gap-4">
        <div class="form-group">
          <label>Nama Bahan yang Habis <span class="text-danger">*</span></label>
          <input type="text" id="m-habis-bahan" class="input" placeholder="Contoh: Tabung EDTA 3ml">
        </div>
        <div class="form-group">
          <label>Status</label>
          <select id="m-habis-status" class="input">
            <option value="Habis">Habis (Stok Kosong)</option>
            <option value="Segera Order">Segera Order (Stok Menipis)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Tanggal Lapor</label>
          <input type="date" id="m-habis-tgl" class="input" value="${new Date().toISOString().split('T')[0]}">
        </div>
      </div>
    `;
    openModal('Catat Bahan Habis', content, () => {
      const bahan = document.getElementById('m-habis-bahan').value;
      if (!bahan) return alert('Nama bahan harus diisi!');
      
      db.logistik_habis.unshift({
        tgl: document.getElementById('m-habis-tgl').value,
        bahan: bahan,
        status: document.getElementById('m-habis-status').value,
        user: 'admin' // Mock user
      });
      saveDB();
      renderLogistikHabis();
      return true;
    });
  };

  window.showAddKasModal = function() {
    const content = `
      <div class="flex-column gap-4">
        <div class="form-group">
          <label>Keterangan Transaksi <span class="text-danger">*</span></label>
          <input type="text" id="m-kas-ket" class="input" placeholder="Contoh: Saldo Awal, Pengisian Kas">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label>Tipe</label>
            <select id="m-kas-tipe" class="input">
              <option value="Masuk">Kas Masuk</option>
              <option value="Keluar">Kas Keluar</option>
            </select>
          </div>
          <div class="form-group">
            <label>Jumlah (Rp) <span class="text-danger">*</span></label>
            <input type="number" id="m-kas-jumlah" class="input" placeholder="0">
          </div>
        </div>
        <div class="form-group">
          <label>Tanggal</label>
          <input type="date" id="m-kas-tgl" class="input" value="${new Date().toISOString().split('T')[0]}">
        </div>
      </div>
    `;
    openModal('Catat Transaksi Kas', content, () => {
      const ket = document.getElementById('m-kas-ket').value;
      const jumlah = document.getElementById('m-kas-jumlah').value;
      if (!ket || !jumlah) return alert('Keterangan dan jumlah harus diisi!');
      
      db.transaksi_kas.unshift({
        tgl: document.getElementById('m-kas-tgl').value,
        keterangan: ket,
        tipe: document.getElementById('m-kas-tipe').value,
        jumlah: parseInt(jumlah)
      });
      saveDB();
      renderTransaksiKas();
      return true;
    });
  };

  window.showAddKasLainModal = function() {
    const content = `
      <div class="flex-column gap-4">
        <div class="form-group">
          <label>Keterangan <span class="text-danger">*</span></label>
          <input type="text" id="m-lain-ket" class="input" placeholder="Contoh: Biaya Listrik, Kebersihan">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label>Tipe</label>
            <select id="m-lain-tipe" class="input">
              <option value="Keluar">Biaya/Pengeluaran</option>
              <option value="Masuk">Pendapatan Lain</option>
            </select>
          </div>
          <div class="form-group">
            <label>Jumlah (Rp) <span class="text-danger">*</span></label>
            <input type="number" id="m-lain-jumlah" class="input" placeholder="0">
          </div>
        </div>
        <div class="form-group">
          <label>Tanggal</label>
          <input type="date" id="m-lain-tgl" class="input" value="${new Date().toISOString().split('T')[0]}">
        </div>
      </div>
    `;
    openModal('Catat Kas Lain-lain', content, () => {
      const ket = document.getElementById('m-lain-ket').value;
      const jumlah = document.getElementById('m-lain-jumlah').value;
      if (!ket || !jumlah) return alert('Keterangan dan jumlah harus diisi!');
      
      db.transaksi_lain.unshift({
        tgl: document.getElementById('m-lain-tgl').value,
        keterangan: ket,
        tipe: document.getElementById('m-lain-tipe').value,
        jumlah: parseInt(jumlah)
      });
      saveDB();
      renderTransaksiKasLain();
      return true;
    });
  };

  function renderDiagnosaList() {
    const body = document.getElementById('diagnosa-list-body');
    if (!body) return;
    body.innerHTML = (db.diagnosa || []).map(d => `
      <tr>
        <td class="font-bold">${d.kode}</td>
        <td>${d.nama}</td>
        <td>
          <button class="btn tiny ghost" onclick="event.preventDefault(); editDiagnosa('${d.kode}')">Edit</button>
          <button class="btn tiny danger" onclick="event.preventDefault(); deleteDiagnosa('${d.kode}')">Hapus</button>
        </td>
      </tr>
    `).join('');
  }

  function showAddDiagnosaModal() {
    console.log('Showing Add Diagnosa Modal');
    const content = `
      <div class="flex-column gap-4">
        <div class="form-group">
          <label>Kode ICD-10 <span class="text-danger">*</span></label>
          <input type="text" id="m-diag-kode" class="input" placeholder="A00">
        </div>
        <div class="form-group">
          <label>Nama Diagnosa / Penyakit <span class="text-danger">*</span></label>
          <input type="text" id="m-diag-nama" class="input" placeholder="Cholera">
        </div>
      </div>
    `;
    openModal('Tambah Diagnosa Baru', content, () => {
      const kode = document.getElementById('m-diag-kode').value;
      const nama = document.getElementById('m-diag-nama').value;
      if (!kode || !nama) return alert('Kode dan Nama harus diisi!');
      db.diagnosa.push({ kode, nama });
      saveDB();
      renderDiagnosaList();
      return true;
    });
  }

  function editDiagnosa(kode) {
    const d = db.diagnosa.find(x => x.kode === kode);
    if (!d) return;
    const content = `
      <div class="flex-column gap-4">
        <div class="form-group">
          <label>Kode ICD-10 <span class="text-danger">*</span></label>
          <input type="text" id="m-diag-kode" class="input" value="${d.kode}" readonly disabled>
        </div>
        <div class="form-group">
          <label>Nama Diagnosa / Penyakit <span class="text-danger">*</span></label>
          <input type="text" id="m-diag-nama" class="input" value="${d.nama}">
        </div>
      </div>
    `;
    openModal('Edit Diagnosa', content, () => {
      const nama = document.getElementById('m-diag-nama').value;
      if (!nama) return alert('Nama harus diisi!');
      d.nama = nama;
      saveDB();
      renderDiagnosaList();
      return true;
    });
  }

  function deleteDiagnosa(kode) {
    if (confirm('Yakin ingin menghapus diagnosa ini?')) {
      db.diagnosa = db.diagnosa.filter(x => x.kode !== kode);
      saveDB();
      renderDiagnosaList();
    }
  }

  function renderHargaList() {
    const body = document.getElementById('harga-list-body');
    if (!body) return;
    body.innerHTML = (db.harga || []).map(h => `
      <tr>
        <td class="font-bold">${h.item}</td>
        <td>Rp ${parseInt(h.harga).toLocaleString('id-ID')}</td>
        <td><span class="status-badge ${h.status === 'Aktif' ? 'green' : 'gray'}">${h.status}</span></td>
        <td>
          <button class="btn tiny ghost" onclick="event.preventDefault(); editHarga('${h.item}')">Edit</button>
          <button class="btn tiny danger" onclick="event.preventDefault(); deleteHarga('${h.item}')">Hapus</button>
        </td>
      </tr>
    `).join('');
  }

  function showAddHargaModal() {
    console.log('Showing Add Harga Modal');
    const content = `
      <div class="flex-column gap-4">
        <div class="form-group">
          <label>Item / Layanan <span class="text-danger">*</span></label>
          <input type="text" id="m-harga-item" class="input">
        </div>
        <div class="form-group">
          <label>Harga (Rp) <span class="text-danger">*</span></label>
          <input type="number" id="m-harga-val" class="input">
        </div>
        <div class="form-group">
          <label>Status</label>
          <select id="m-harga-status" class="input">
            <option value="Aktif">Aktif</option>
            <option value="Non-aktif">Non-aktif</option>
          </select>
        </div>
      </div>
    `;
    openModal('Tambah Harga Baru', content, () => {
      const item = document.getElementById('m-harga-item').value;
      const harga = document.getElementById('m-harga-val').value;
      if (!item || !harga) return alert('Item dan Harga harus diisi!');
      db.harga.push({ item, harga: parseInt(harga), status: document.getElementById('m-harga-status').value });
      saveDB();
      renderHargaList();
      return true;
    });
  }

  function editHarga(item) {
    const h = db.harga.find(x => x.item === item);
    if (!h) return;
    const content = `
      <div class="flex-column gap-4">
        <div class="form-group">
          <label>Item / Layanan <span class="text-danger">*</span></label>
          <input type="text" id="m-harga-item" class="input" value="${h.item}" readonly disabled>
        </div>
        <div class="form-group">
          <label>Harga (Rp) <span class="text-danger">*</span></label>
          <input type="number" id="m-harga-val" class="input" value="${h.harga}">
        </div>
        <div class="form-group">
          <label>Status</label>
          <select id="m-harga-status" class="input">
            <option value="Aktif" ${h.status === 'Aktif' ? 'selected' : ''}>Aktif</option>
            <option value="Non-aktif" ${h.status === 'Non-aktif' ? 'selected' : ''}>Non-aktif</option>
          </select>
        </div>
      </div>
    `;
    openModal('Edit Harga', content, () => {
      const harga = document.getElementById('m-harga-val').value;
      if (!harga) return alert('Harga harus diisi!');
      h.harga = parseInt(harga);
      h.status = document.getElementById('m-harga-status').value;
      saveDB();
      renderHargaList();
      return true;
    });
  }

  function deleteHarga(item) {
    if (confirm('Yakin ingin menghapus data harga ini?')) {
      db.harga = db.harga.filter(x => x.item !== item);
      saveDB();
      renderHargaList();
    }
  }

  function renderPemeriksaanList() {
    const body = document.getElementById('pemeriksaan-list-body');
    if (!body) return;
    body.innerHTML = db.pemeriksaan.map(p => {
      const itemNames = (p.item_ids || []).map(id => {
        const item = db.item.find(i => i.id == id);
        return item ? `<span class="badge ghost tiny">${item.nama}</span>` : '';
      }).join(' ');
      
      return `
        <tr>
          <td class="text-center"><span class="badge ghost tiny">${p.sort_order || '-'}</span></td>
          <td class="font-bold">${p.nama}</td>
          <td>Rp ${parseInt(p.harga).toLocaleString('id-ID')}</td>
          <td>
            <div class="flex flex-wrap gap-1">
              ${itemNames || '<span class="text-muted italic">Tidak ada item</span>'}
            </div>
          </td>
          <td>
            <button class="btn tiny ghost" onclick="event.preventDefault(); editPemeriksaan('${p.id}')">Edit</button>
            <button class="btn tiny danger" onclick="event.preventDefault(); deletePemeriksaan('${p.id}')">Hapus</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // Fungsi Filtering Item Hasil di Modal
  window.filterModalItems = function(query) {
    const items = document.querySelectorAll('.modal-item-checkbox');
    const q = query.toLowerCase();
    items.forEach(el => {
      const name = el.getAttribute('data-name').toLowerCase();
      el.style.display = name.includes(q) ? 'flex' : 'none';
    });
  };

  function showAddPemeriksaanModal() {
    console.log('Showing Add Pemeriksaan Modal');
    const itemOptions = db.item.map(i => `
      <label class="modal-item-checkbox flex items-center gap-2 tiny p-2 border rounded hover-bg-light" data-name="${i.nama}" style="cursor: pointer; min-width: 140px;">
        <input type="checkbox" name="m-p-items" value="${i.id}"> 
        <span>${i.nama}</span>
      </label>
    `).join('');

    const content = `
      <div class="flex-column gap-4">
        <div class="form-group">
          <label>Nama Tindakan / Layanan <span class="text-danger">*</span></label>
          <input type="text" id="m-p-nama" class="input" placeholder="Contoh: Hematologi Lengkap">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label>Harga Dasar (Rp) <span class="text-danger">*</span></label>
            <input type="number" id="m-p-harga" class="input" placeholder="0">
          </div>
          <div class="form-group">
            <label>Urutan Tampilan</label>
            <input type="number" id="m-p-sort" class="input" value="${db.pemeriksaan.length + 1}">
          </div>
        </div>
        <div class="form-group">
          <label class="flex justify-between items-center">
            <span>Item Hasil yang Terkait</span>
            <span class="tiny text-muted">${db.item.length} item tersedia</span>
          </label>
          <div class="relative mt-2">
            <input type="text" class="input tiny mb-2" placeholder="Cari item hasil..." oninput="filterModalItems(this.value)" style="padding-left: 32px;">
            <svg class="absolute left-3 top-2 text-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <div class="flex flex-wrap gap-2 mt-1 p-3 border rounded bg-light" style="max-height: 200px; overflow-y: auto; align-content: flex-start;">
            ${itemOptions}
          </div>
          <small class="text-muted mt-1 display-block">Pilih item hasil yang akan muncul di input hasil laboratorium untuk tindakan ini.</small>
        </div>
      </div>
    `;
    openModal('Tambah Tindakan Baru', content, () => {
      const nama = document.getElementById('m-p-nama').value;
      const harga = document.getElementById('m-p-harga').value;
      if (!nama || !harga) return alert('Nama dan Harga harus diisi!');
      
      const itemIds = Array.from(document.querySelectorAll('input[name="m-p-items"]:checked')).map(cb => cb.value);
      const newId = Date.now();
      
      db.pemeriksaan.push({
        id: newId,
        nama,
        harga: parseInt(harga),
        sort_order: parseInt(document.getElementById('m-p-sort').value),
        item_ids: itemIds
      });
      saveDB();
      renderPemeriksaanList();
      return true;
    });
  }

  function editPemeriksaan(id) {
    const p = db.pemeriksaan.find(x => x.id == id);
    if (!p) return;
    
    const itemOptions = db.item.map(i => {
      const checked = (p.item_ids || []).includes(i.id) || (p.item_ids || []).includes(String(i.id)) ? 'checked' : '';
      return `
        <label class="modal-item-checkbox flex items-center gap-2 tiny p-2 border rounded hover-bg-light" data-name="${i.nama}" style="cursor: pointer; min-width: 140px;">
          <input type="checkbox" name="m-p-items" value="${i.id}" ${checked}> 
          <span>${i.nama}</span>
        </label>
      `;
    }).join('');
    
    const content = `
      <div class="flex-column gap-4">
        <div class="form-group">
          <label>Nama Tindakan / Layanan <span class="text-danger">*</span></label>
          <input type="text" id="m-p-nama" class="input" value="${p.nama}">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label>Harga Dasar (Rp) <span class="text-danger">*</span></label>
            <input type="number" id="m-p-harga" class="input" value="${p.harga}">
          </div>
          <div class="form-group">
            <label>Urutan Tampilan</label>
            <input type="number" id="m-p-sort" class="input" value="${p.sort_order || 999}">
          </div>
        </div>
        <div class="form-group">
          <label class="flex justify-between items-center">
            <span>Item Hasil yang Terkait</span>
            <span class="tiny text-muted">${db.item.length} item tersedia</span>
          </label>
          <div class="relative mt-2">
            <input type="text" class="input tiny mb-2" placeholder="Cari item hasil..." oninput="filterModalItems(this.value)" style="padding-left: 32px;">
            <svg class="absolute left-3 top-2 text-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <div class="flex flex-wrap gap-2 mt-1 p-3 border rounded bg-light" style="max-height: 200px; overflow-y: auto; align-content: flex-start;">
            ${itemOptions}
          </div>
          <small class="text-muted mt-1 display-block">Pilih item hasil yang akan muncul di input hasil laboratorium untuk tindakan ini.</small>
        </div>
      </div>
    `;
    openModal('Edit Tindakan', content, () => {
      const nama = document.getElementById('m-p-nama').value;
      const harga = document.getElementById('m-p-harga').value;
      if (!nama || !harga) return alert('Nama dan Harga harus diisi!');
      
      p.nama = nama;
      p.harga = parseInt(harga);
      p.sort_order = parseInt(document.getElementById('m-p-sort').value);
      p.item_ids = Array.from(document.querySelectorAll('input[name="m-p-items"]:checked')).map(cb => cb.value);
      saveDB();
      renderPemeriksaanList();
      return true;
    });
  }

  function deletePemeriksaan(id) {
    if (confirm('Yakin ingin menghapus tindakan ini?')) {
      db.pemeriksaan = db.pemeriksaan.filter(x => x.id != id);
      saveDB();
      renderPemeriksaanList();
    }
  }

  // LOINC Mapping Database & Functions
  const LOINC_DATABASE = [
    { code: '718-7', name: 'Hemoglobin [Mass/volume] in Blood', component: 'Hemoglobin' },
    { code: '6690-2', name: 'Leukocytes [#/volume] in Blood by Automated count', component: 'Leukocytes' },
    { code: '4537-7', name: 'Erythrocyte sedimentation rate', component: 'LED' },
    { code: '4544-3', name: 'Hematocrit [Volume Fraction] of Blood', component: 'Hematokrit' },
    { code: '777-3', name: 'Platelets [#/volume] in Blood', component: 'Trombosit' },
    { code: '2857-1', name: 'Erythrocytes [#/volume] in Blood', component: 'Eritrosit' },
    { code: '5195-3', name: 'Hepatitis B virus surface Ag', component: 'HBsAg' },
    { code: '2276-4', name: 'Ferritin [Mass/volume] in Serum or Plasma', component: 'Ferritin' },
    { code: '2093-3', name: 'Cholesterol [Mass/volume] in Serum or Plasma', component: 'Cholesterol' },
    { code: '2345-7', name: 'Glucose [Mass/volume] in Serum or Plasma', component: 'Gula Darah' },
    { code: '1920-8', name: 'AST (SGOT)', component: 'SGOT' },
    { code: '1742-6', name: 'ALT (SGPT)', component: 'SGPT' },
    { code: '2160-0', name: 'Creatinine [Mass/volume] in Serum or Plasma', component: 'Kreatinin' },
    { code: '3094-0', name: 'Urea nitrogen [Mass/volume] in Serum or Plasma', component: 'Ureum' },
    { code: '30522-7', name: 'C reactive protein (High sensitivity)', component: 'CRP' }
  ];

  window.toggleLoincMapping = function() {
    const container = document.getElementById('loinc-mapping-area');
    const isVisible = container.style.display !== 'none';
    container.style.display = isVisible ? 'none' : 'block';
    
    if (!isVisible) {
      const currentName = document.getElementById('m-i-nama').value;
      const searchInput = document.getElementById('loinc-search-input');
      searchInput.value = currentName;
      searchLoinc(currentName);
      searchInput.focus();
    }
  };

  window.searchLoinc = function(query) {
    const resultsContainer = document.getElementById('loinc-results');
    if (!query || query.length < 2) {
      resultsContainer.innerHTML = '<div class="p-4 text-center text-muted italic">Ketik minimal 2 karakter untuk mencari...</div>';
      return;
    }

    const q = query.toLowerCase();
    const matches = LOINC_DATABASE.filter(l => 
      l.name.toLowerCase().includes(q) || 
      l.code.toLowerCase().includes(q) || 
      l.component.toLowerCase().includes(q)
    );

    if (matches.length > 0) {
      resultsContainer.innerHTML = matches.map(l => `
        <div class="p-3 border-b hover-bg-light pointer" onclick="selectLoinc('${l.code}')">
          <div class="flex justify-between items-center">
            <span class="font-bold text-accent">${l.code}</span>
            <span class="tiny badge ghost">${l.component}</span>
          </div>
          <div class="tiny text-muted mt-1">${l.name}</div>
        </div>
      `).join('');
    } else {
      resultsContainer.innerHTML = '<div class="p-4 text-center text-muted">Tidak ada kode LOINC yang cocok.</div>';
    }
  };

  window.selectLoinc = function(code) {
    document.getElementById('m-i-loinc').value = code;
    document.getElementById('loinc-mapping-area').style.display = 'none';
  };

  function renderItemList() {
    const body = document.getElementById('item-list-body');
    if (!body) return;
    body.innerHTML = db.item.map(i => {
      const usedIn = db.pemeriksaan
        .filter(p => (p.item_ids || []).includes(i.id) || (p.item_ids || []).includes(String(i.id)))
        .map(p => p.nama)
        .join(', ');
        
      return `
        <tr>
          <td><span class="font-bold text-accent">${i.kode || '-'}</span></td>
          <td class="font-bold">${i.nama}</td>
          <td><span class="status-badge ghost">${i.normal || '-'}</span></td>
          <td><span class="tiny text-muted">${i.satuan || '-'}</span></td>
          <td>
            ${i.loinc ? `<code>${i.loinc}</code>` : `
              <button class="btn tiny ghost text-accent" onclick="event.preventDefault(); editItem('${i.id}'); setTimeout(() => toggleLoincMapping(), 100)" style="border: 1px dashed var(--accent);">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                Mapping Loinc
              </button>
            `}
          </td>
          <td><span class="tiny text-muted">${usedIn || 'Belum digunakan'}</span></td>
          <td>
            <button class="btn tiny ghost" onclick="event.preventDefault(); editItem('${i.id}')">Edit</button>
            <button class="btn tiny danger" onclick="event.preventDefault(); deleteItem('${i.id}')">Hapus</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  function showAddItemModal() {
    console.log('Showing Add Item Modal');
    const content = `
      <div class="flex-column gap-4">
        <div class="form-group">
          <label>Kode <span class="text-danger">*</span></label>
          <input type="text" id="m-i-kode" class="input" placeholder="e.g. HB01">
        </div>
        <div class="form-group">
          <label>Nama Item Hasil (Analyzer Parameter) <span class="text-danger">*</span></label>
          <input type="text" id="m-i-nama" class="input" placeholder="e.g. Hemoglobin">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label>Nilai Normal</label>
            <input type="text" id="m-i-normal" class="input" placeholder="e.g. 12-16">
          </div>
          <div class="form-group">
            <label>Satuan</label>
            <input type="text" id="m-i-satuan" class="input" placeholder="e.g. g/dL">
          </div>
        </div>
        <div class="form-group">
          <label class="flex justify-between items-center">
            <span>Kode LOINC (Optional)</span>
            <button class="btn tiny ghost" onclick="toggleLoincMapping()" type="button">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              Mapping LOINC
            </button>
          </label>
          <input type="text" id="m-i-loinc" class="input" placeholder="e.g. 718-7">
          
          <!-- LOINC Mapping Area (Hidden by default) -->
          <div id="loinc-mapping-area" class="mt-2 border rounded p-3 bg-light shadow-sm" style="display: none;">
            <div class="flex items-center gap-2 mb-2">
              <input type="text" id="loinc-search-input" class="input tiny" placeholder="Cari LOINC..." oninput="searchLoinc(this.value)">
              <button class="btn tiny ghost" onclick="toggleLoincMapping()">&times;</button>
            </div>
            <div id="loinc-results" class="bg-white border rounded" style="max-height: 150px; overflow-y: auto;">
              <!-- Search results will appear here -->
            </div>
            <div class="tiny text-muted mt-2 italic">Klik pada kode LOINC untuk memilih.</div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label>Kelas / Kategori</label>
            <input type="number" id="m-i-kelas" class="input" value="1">
          </div>
        </div>
      </div>
    `;
    openModal('Tambah Item Hasil Baru', content, () => {
      const nama = document.getElementById('m-i-nama').value;
      const kode = document.getElementById('m-i-kode').value;
      if (!kode || !nama) return alert('Kode dan Nama harus diisi!');
      
      const newId = Date.now();
      db.item.push({
        id: newId,
        kode: kode,
        nama,
        normal: document.getElementById('m-i-normal').value,
        satuan: document.getElementById('m-i-satuan').value,
        loinc: document.getElementById('m-i-loinc').value,
        kelas: parseInt(document.getElementById('m-i-kelas').value)
      });
      saveDB();
      renderItemList();
      return true;
    });
  }

  function editItem(id) {
    const i = db.item.find(x => x.id == id);
    if (!i) return;
    
    const content = `
      <div class="flex-column gap-4">
        <div class="form-group">
          <label>Kode <span class="text-danger">*</span></label>
          <input type="text" id="m-i-kode" class="input" value="${i.kode || ''}">
        </div>
        <div class="form-group">
          <label>Nama Item Hasil <span class="text-danger">*</span></label>
          <input type="text" id="m-i-nama" class="input" value="${i.nama}">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label>Nilai Normal</label>
            <input type="text" id="m-i-normal" class="input" value="${i.normal || ''}">
          </div>
          <div class="form-group">
            <label>Satuan</label>
            <input type="text" id="m-i-satuan" class="input" value="${i.satuan || ''}">
          </div>
        </div>
        <div class="form-group">
          <label class="flex justify-between items-center">
            <span>Kode LOINC</span>
            <button class="btn tiny ghost" onclick="toggleLoincMapping()" type="button">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              Mapping LOINC
            </button>
          </label>
          <input type="text" id="m-i-loinc" class="input" value="${i.loinc || ''}">
          
          <!-- LOINC Mapping Area (Hidden by default) -->
          <div id="loinc-mapping-area" class="mt-2 border rounded p-3 bg-light shadow-sm" style="display: none;">
            <div class="flex items-center gap-2 mb-2">
              <input type="text" id="loinc-search-input" class="input tiny" placeholder="Cari LOINC..." oninput="searchLoinc(this.value)">
              <button class="btn tiny ghost" onclick="toggleLoincMapping()">&times;</button>
            </div>
            <div id="loinc-results" class="bg-white border rounded" style="max-height: 150px; overflow-y: auto;">
              <!-- Search results will appear here -->
            </div>
            <div class="tiny text-muted mt-2 italic">Klik pada kode LOINC untuk memilih.</div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label>Kelas / Kategori</label>
            <input type="number" id="m-i-kelas" class="input" value="${i.kelas || 1}">
          </div>
        </div>
      </div>
    `;
    openModal('Edit Item Hasil', content, () => {
      const nama = document.getElementById('m-i-nama').value;
      const kode = document.getElementById('m-i-kode').value;
      if (!kode || !nama) return alert('Kode dan Nama harus diisi!');
      i.nama = nama;
      i.kode = kode;
      i.normal = document.getElementById('m-i-normal').value;
      i.satuan = document.getElementById('m-i-satuan').value;
      i.loinc = document.getElementById('m-i-loinc').value;
      i.kelas = parseInt(document.getElementById('m-i-kelas').value);
      saveDB();
      renderItemList();
      return true;
    });
  }

  function deleteItem(id) {
    if (confirm('Yakin ingin menghapus item ini? Menghapus item akan melepaskan ikatannya dari semua tindakan.')) {
      db.item = db.item.filter(x => x.id != id);
      db.pemeriksaan.forEach(p => {
        p.item_ids = (p.item_ids || []).filter(itemId => itemId != id);
      });
      saveDB();
      renderItemList();
    }
  }

  // Authentication Logic
  let currentUser = JSON.parse(localStorage.getItem('lab_kawi_user')) || null;

  function initAuth() {
    const loginPage = document.getElementById('login-page');
    const mainApp = document.getElementById('main-app');
    const loginForm = document.getElementById('login-form');

    if (currentUser) {
      loginPage.style.display = 'none';
      mainApp.style.display = 'grid';
      document.body.classList.remove('auth-loading');
      applyUserSession(currentUser);
    } else {
      loginPage.style.display = 'flex';
      mainApp.style.display = 'none';
      document.body.className = 'theme-light auth-loading';
    }

    if (loginForm) {
      loginForm.onsubmit = (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById('login-username').value.toLowerCase();
        const password = document.getElementById('login-password').value;
        const errorMsg = document.getElementById('login-error');

        const user = db.user.find(u => u.id.toLowerCase() === usernameInput && u.password === password);
        if (user) {
          currentUser = user;
          localStorage.setItem('lab_kawi_user', JSON.stringify(user));
          errorMsg.style.display = 'none';
          initAuth();
          location.hash = '#dashboard';
        } else {
          errorMsg.style.display = 'block';
        }
      };
    }
  }

  function applyUserSession(user) {
    // Update body class for RBAC
    document.body.className = `theme-light role-${user.role}`;
    
    // Update Sidebar/Header Profile
    const nameEl = document.getElementById('current-user-name');
    const roleEl = document.getElementById('current-user-role');
    const avatarEl = document.getElementById('current-user-avatar');
    
    if (nameEl) nameEl.textContent = user.nama;
    if (roleEl) roleEl.textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
    if (avatarEl) avatarEl.src = `https://i.pravatar.cc/100?u=${user.id}`;
    
    // Toggle POS Shortcut
    const posShortcut = document.getElementById('pos-shortcut');
    if (posShortcut) {
      posShortcut.style.display = checkPermission('pos') ? 'flex' : 'none';
    }

    route();
  }

  window.logout = function() {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
      currentUser = null;
      localStorage.removeItem('lab_kawi_user');
      initAuth();
    }
  };

  function checkPermission(featureId) {
    if (!currentUser) return false;
    if (currentUser.role === 'admin') return true;
    
    const role = db.roles.find(r => r.id === currentUser.role);
    if (!role) return false;
    return role.permissions.includes(featureId);
  }

const views = Array.from(document.querySelectorAll('.view'));

function route() {
  const hash = location.hash || '#dashboard';
  const [id, sub] = hash.slice(1).split(':');
  const target = views.find(v => v.id === id);
  
  // RBAC Protection
  if (target) {
    let featureId = target.getAttribute('data-feature') || id;
    
    // Custom mapping for sub-routes
    if (id === 'crud' && sub) {
      if (['pasien', 'dokter', 'analis', 'kasir'].includes(sub)) {
        featureId = 'master-personalia';
      } else {
        featureId = sub;
      }
    }
    
    // Mapping for direct master views
    if (['pasien', 'pemeriksaan', 'item-pemeriksaan', 'diagnosa', 'daftar-harga'].includes(id)) {
      featureId = ['pasien'].includes(id) ? 'master-personalia' : 'master-laboratorium';
    }

    if (!checkPermission(featureId)) {
      console.warn(`Access denied to ${featureId}`);
      location.hash = '#dashboard';
      return;
    }
  }

  // Switch View
  views.forEach(v => {
    v.classList.toggle('is-active', v.id === id);
  });
  
  // Specific Handlers
  if (id === 'crud') renderCrud(sub || 'pasien');
  if (id === 'pasien') renderPasienList();
  if (id === 'pemeriksaan') renderPemeriksaanList();
  if (id === 'item-pemeriksaan') renderItemList();
  if (id === 'diagnosa') renderDiagnosaList();
  if (id === 'daftar-harga') renderHargaList();
  if (id === 'analis-lab') renderProsesLab();
  if (id === 'pembayaran') renderPiutang();
  if (id === 'rbac') renderRbacRoles();
  if (id === 'logistik-pemakaian') renderLogistikPemakaian();
  if (id === 'logistik-habis') renderLogistikHabis();
  if (id === 'transaksi-kas') renderTransaksiKas();
  if (id === 'transaksi-lain') renderTransaksiKasLain();
  if (id === 'mutasi-kas') renderMutasiKas();
  if (id === 'pos') {
    switchPosTab('new-invoice');
  }
  
  updateCrumbs(id, sub);
  updateSidebarActive(hash);
}

function updateSidebarActive(hash) {
  const [baseHash] = hash.split(':');
  
  document.querySelectorAll('.sidebar-item').forEach(a => {
    const href = a.getAttribute('href');
    const [baseHref] = href.split(':');
    
    // Check if active
    const isActive = href === hash || (baseHref === baseHash && baseHref !== '#dashboard' && baseHref !== '#crud');
    a.classList.toggle('is-active', isActive);
    
    // RBAC state
    const featureId = a.getAttribute('data-feature') || baseHref.slice(1);
    const isAllowed = checkPermission(featureId);
    
    a.classList.toggle('disabled', !isAllowed);
    a.setAttribute('aria-disabled', !isAllowed);
    
    // Hide if not allowed (optional, but better UX)
    // a.style.display = isAllowed ? '' : 'none';

    if (isActive && isAllowed) {
      const parentItems = a.closest('.sidebar-items');
      if (parentItems) {
        parentItems.classList.add('open');
        const heading = parentItems.previousElementSibling;
        if (heading && heading.classList.contains('sidebar-heading')) {
          heading.setAttribute('aria-expanded', 'true');
        }
      }
    }
  });

  // Handle heading visibility based on allowed children
  document.querySelectorAll('.sidebar-heading').forEach(heading => {
    const sectionItems = heading.nextElementSibling;
    if (sectionItems && sectionItems.classList.contains('sidebar-items')) {
      const allowedChildren = Array.from(sectionItems.querySelectorAll('.sidebar-item')).filter(item => !item.classList.contains('disabled'));
      heading.classList.toggle('disabled', allowedChildren.length === 0);
    }
  });
}

function updateCrumbs(id, sub) {
  const map = {
    dashboard: ['Dashboard'],
    'master-personalia': ['Master Data', 'Personalia'],
    'master-laboratorium': ['Master Data', 'Laboratorium'],
    rbac: ['User Management','RBAC'],
    crud: crudCrumbs(sub),
    pasien: ['Master Data','Data Pasien'],
    pemeriksaan: ['Master Data','Tindakan / Layanan'],
    'item-pemeriksaan': ['Master Data','Master Item Pemeriksaan'],
    diagnosa: ['Master Data','Master Diagnosa'],
    'rekap-pemeriksaan': ['Master Data','Laporan Item Pemeriksaan'],
    'daftar-harga': ['Master Data','Daftar Harga'],
    pos: ['Administrasi','Transaksi (POS)'],
    pembayaran: ['Administrasi','Pembayaran'],
    'koreksi-transaksi': ['Administrasi','Koreksi'],
    'laporan-pusat': ['Administrasi','Laporan & Rekap'],
    'laporan-pos': ['Administrasi','Laporan Kasir'],
    'rekap-pasien': ['Administrasi','Rekap Pasien'],
    'rekap-dokter': ['Administrasi','Rekap Dokter'],
    'rekap-pemeriksaan': ['Administrasi','Rekap Tindakan'],
    'rekap-abnormal': ['Administrasi','Hasil Abnormal'],
    'analis-lab': ['Proses Lab','Hasil Analisa'],
    radiologi: ['Proses Lab','Radiologi'],
    'medical-report': ['Proses Lab','Medical Report'],
    'logistik-pemakaian': ['Logistik','Pemakaian Bahan'],
    'logistik-habis': ['Logistik','Bahan Habis'],
    'logistik-koreksi': ['Logistik','Koreksi Logistik'],
    'transaksi-lain': ['Transaksi Kas','Kas Lain-lain'],
    'mutasi-kas': ['Transaksi Kas','Mutasi Kas'],
    integrasi: ['Utilitas','SATUSEHAT'],
  };

  function subLabel(s){
    const labels = {user:'User', pasien:'Data Pasien', dokter:'Data Dokter', analis:'Analis Medik', kasir:'Master Kasir'};
    return labels[s] || 'Data Pasien';
  }

  function crudCrumbs(s){
    if (s==='user') return ['User Management','User'];
    return ['Master Data', subLabel(s)];
  }

  const crumbs = map[id] || ['Dashboard'];
  const cmod = document.getElementById('crumb-module');
  const csub = document.getElementById('crumb-sub');
  const csep = document.querySelector('.breadcrumb-separator');

  if (crumbs.length === 1) {
    cmod.textContent = crumbs[0];
    csub.textContent = '';
    if(csep) csep.style.display = 'none';
  } else {
    cmod.textContent = crumbs[0];
    csub.textContent = crumbs[crumbs.length - 1];
    if(csep) csep.style.display = 'inline';
  }
}

function toggleNikFallback(el) {
  const searchInput = document.getElementById('pos-patient-search');
  if (el.checked) {
    searchInput.placeholder = "Ketik nama pasien umum...";
    // Optionally disable strict NIK search or change behavior
  } else {
    searchInput.placeholder = "Cari Pasien...";
  }
}

// Helper for switching views via hash
  window.showView = function(viewId) {
    location.hash = '#' + viewId;
  };

  // POS Tab Switching
  window.switchPosTab = function(tabId) {
    document.querySelectorAll('.pos-tab-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.pos-view').forEach(el => el.classList.remove('active'));
    
    const targetTab = Array.from(document.querySelectorAll('.pos-tab-item')).find(el => 
      el.getAttribute('onclick').includes(tabId)
    );
    if (targetTab) targetTab.classList.add('active');
    
    const targetView = document.getElementById(`view-${tabId}`);
    if (targetView) targetView.classList.add('active');
    
    if (tabId === 'invoice-history') {
      renderInvoiceHistory();
    }
  };

  window.renderInvoiceHistory = function(query = '') {
    const body = document.getElementById('pos-history-body');
    if (!body) return;
    
    const q = query.toLowerCase();
    let filtered = [...(db.invoices || [])];
    
    if (q) {
      filtered = filtered.filter(inv => 
        inv.id.toLowerCase().includes(q) || 
        inv.pasien.toLowerCase().includes(q)
      );
    }

    // Sort: Unpaid first, then date desc, then ID desc
     filtered.sort((a, b) => {
       if (a.status === 'Belum Bayar' && b.status !== 'Belum Bayar') return -1;
       if (a.status !== 'Belum Bayar' && b.status === 'Belum Bayar') return 1;
       if (b.tgl !== a.tgl) return new Date(b.tgl) - new Date(a.tgl);
       return b.id.localeCompare(a.id);
     });
    
    if (filtered.length === 0) {
      body.innerHTML = '<tr><td colspan="7" class="text-center p-4">Tidak ada data invoice.</td></tr>';
      return;
    }
    
    body.innerHTML = filtered.map(inv => `
      <tr>
        <td>${inv.tgl}</td>
        <td class="font-bold">${inv.id}</td>
        <td>${inv.pasien}</td>
        <td>${inv.dokter || '-'}</td>
        <td class="font-bold text-right">Rp ${inv.total.toLocaleString('id-ID')}</td>
        <td>
          <span class="status-badge ${inv.status === 'Lunas' ? 'green' : (inv.status === 'Batal' ? 'gray' : 'danger')}">
            ${inv.status}
          </span>
        </td>
        <td class="text-right">
          <div class="flex gap-1 justify-end">
            <button class="btn tiny ghost" onclick="printInvoice('${inv.id}')">Print</button>
            ${inv.status === 'Belum Bayar' ? `<button class="btn tiny primary" onclick="location.hash='#pembayaran'; renderPiutang();">Bayar</button>` : ''}
            <button class="btn tiny ghost danger" onclick="deleteInvoice('${inv.id}')">Hapus</button>
          </div>
        </td>
      </tr>
    `).join('');
  };

  window.printInvoice = function(id) {
    alert('Fungsi print untuk invoice ' + id + ' akan segera hadir.');
  };

  window.deleteInvoice = function(id) {
    if (!confirm(`Hapus invoice ${id}? Tindakan ini tidak dapat dibatalkan.`)) return;
    db.invoices = db.invoices.filter(x => x.id !== id);
    saveDB();
    if (typeof renderInvoiceHistory === 'function') renderInvoiceHistory();
    if (typeof renderPiutang === 'function') renderPiutang();
  };

  function searchPatients(query) {
  const resultsContainer = document.getElementById('patient-search-results');
  if (!query) {
    resultsContainer.style.display = 'none';
    return;
  }

  const queryLower = query.toLowerCase();
  const matches = db.pasien.filter(p => 
    p.nama.toLowerCase().includes(queryLower) || 
    p.id.toLowerCase().includes(queryLower)
  );

  if (matches.length > 0) {
    resultsContainer.innerHTML = matches.map(p => `
      <div class="search-item" onclick="selectPatient('${p.id}')">
        <div class="flex items-center gap-3">
          <img src="${p.photo}" class="avatar tiny" alt="">
          <div class="flex-column">
            <span class="font-bold">${p.nama}</span>
            <span class="tiny text-muted">${p.id}</span>
          </div>
        </div>
      </div>
    `).join('');
    resultsContainer.style.display = 'block';
  } else {
    resultsContainer.innerHTML = '<div class="search-item">Pasien tidak ditemukan</div>';
    resultsContainer.style.display = 'block';
  }
}

function selectPatient(id) {
  const p = db.pasien.find(x => x.id === id);
  if (!p) return;

  document.getElementById('pos-patient-search').value = p.nama;
  document.getElementById('patient-search-results').style.display = 'none';
  
  // Update Patient Detail Card
  document.getElementById('det-nama').textContent = p.nama;
  document.getElementById('det-status').textContent = 'Pasien Terdaftar';
  document.getElementById('det-nik').textContent = p.id;
  document.getElementById('patient-photo').src = p.photo;
  
  const age = calculateAge(p.dob);
  document.getElementById('det-umur-jk').textContent = `${age} Thn / ${p.gender === 'Laki-laki' ? 'L' : 'P'}`;
  
  // Update Invoice Summary
  document.getElementById('inv-billed-name').textContent = p.nama;
  document.getElementById('inv-billed-addr').textContent = p.kontak;
}

function searchDoctors(query) {
  const resultsContainer = document.getElementById('doctor-search-results');
  if (!query) {
    resultsContainer.style.display = 'none';
    return;
  }

  const queryLower = query.toLowerCase();
  const matches = (db.dokter || []).filter(d => 
    d.nama.toLowerCase().includes(queryLower) || 
    (d.id && d.id.toLowerCase().includes(queryLower))
  );

  if (matches.length > 0) {
    resultsContainer.innerHTML = matches.map(d => `
      <div class="search-item" onclick="selectDoctor('${d.id}')">
        <div class="flex items-center gap-3">
          <div class="avatar tiny flex items-center justify-center bg-blue-100 text-blue-600 font-bold">
            ${d.nama.substring(0,1).toUpperCase()}
          </div>
          <div class="flex-column">
            <span class="font-bold">${d.nama}</span>
            <span class="tiny text-muted">${d.id || '-'}</span>
          </div>
        </div>
      </div>
    `).join('');
    resultsContainer.style.display = 'block';
  } else {
    resultsContainer.innerHTML = '<div class="search-item">Dokter tidak ditemukan</div>';
    resultsContainer.style.display = 'block';
  }
}

function selectDoctor(id) {
  const d = db.dokter.find(x => x.id === id);
  if (!d) return;

  document.getElementById('pos-rekanan').value = d.nama;
  document.getElementById('doctor-search-results').style.display = 'none';
}

function resetPatientDetail() {
  document.getElementById('det-nama').textContent = 'Pilih Pasien';
  document.getElementById('det-status').textContent = 'Belum ada pasien terpilih';
  document.getElementById('det-nik').textContent = '-';
  document.getElementById('det-umur-jk').textContent = '-';
  document.getElementById('patient-photo').src = 'https://ui-avatars.com/api/?name=P&background=f0f4ff&color=0066FF';
  document.getElementById('inv-billed-name').textContent = 'Pilih Pasien';
  document.getElementById('inv-billed-addr').textContent = '-';
}

function calculateAge(dob) {
  if (!dob) return '-';
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// POS Logic
let selectedItems = [];
let crudEditing = null;

function getAvailableTests() {
  return db.pemeriksaan.map(p => ({
    id: String(p.id),
    name: p.nama,
    price: p.harga,
    type: 'tindakan',
    sort_order: p.sort_order || 999,
    items: (p.item_ids || []).map(id => {
      const item = db.item.find(i => String(i.id) === String(id));
      return item ? item.nama : 'Unknown';
    })
  }));
}

function getAllItems() {
  return db.item.map(i => ({
    ...i,
    usedIn: db.pemeriksaan.filter(p => p.item_ids && p.item_ids.some(id => String(id) === String(i.id)))
  }));
}

function searchTestItems(query) {
  const resultsContainer = document.getElementById('test-search-results');
  if (!query) {
    resultsContainer.style.display = 'none';
    return;
  }

  const queryLower = query.toLowerCase();
  const availableTests = getAvailableTests();
  const allItems = getAllItems();
  
  // Search for Tindakan/Package names
  const matchTindakan = availableTests.filter(t => t.name.toLowerCase().includes(queryLower));
  
  // Search for Item names and find their corresponding Tindakan
  const matchItems = allItems.filter(i => i.nama.toLowerCase().includes(queryLower));
  const relatedTindakan = [];
  matchItems.forEach(item => {
    item.usedIn.forEach(p => {
      if (!relatedTindakan.find(t => t.id === p.id) && !matchTindakan.find(t => t.id === p.id)) {
        const at = availableTests.find(at => at.id === p.id);
        if (at) relatedTindakan.push(at);
      }
    });
  });

  const allMatches = [...matchTindakan, ...relatedTindakan];
  
  if (allMatches.length > 0) {
    resultsContainer.innerHTML = allMatches.map(t => `
      <div class="search-item p-3 border-bottom hover-bg-light" onclick="addTestItem('${t.id}')" style="cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 12px;">
        <div class="flex-column" style="flex: 1;">
          <div class="font-bold" style="font-size: 14px; color: var(--text);">${t.name} <span class="badge blue tiny" style="background: var(--accent-light); color: var(--accent); padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-left: 4px;">Tindakan</span></div>
          <div class="tiny text-muted" style="font-size: 11px; margin-top: 2px;">Terdiri dari: ${t.items.join(', ')}</div>
        </div>
        <div class="price font-bold" style="color: var(--accent); white-space: nowrap;">Rp ${t.price.toLocaleString('id-ID')}</div>
      </div>
    `).join('');
    resultsContainer.style.display = 'block';
  } else {
    resultsContainer.innerHTML = '<div class="search-item">Tidak ditemukan</div>';
    resultsContainer.style.display = 'block';
  }
}

function addTestItem(id) {
  const availableTests = getAvailableTests();
  const test = availableTests.find(t => t.id === id);
  if (test && !selectedItems.find(item => item.id === id)) {
    selectedItems.push(test);
    // Sort selectedItems by sort_order
    selectedItems.sort((a, b) => a.sort_order - b.sort_order);
    renderSelectedItems();
    updatePosTotal();
  }
  document.getElementById('pos-test-search').value = '';
  document.getElementById('test-search-results').style.display = 'none';
}

function removeTestItem(id) {
  selectedItems = selectedItems.filter(item => item.id !== id);
  renderSelectedItems();
  updatePosTotal();
}

function renderSelectedItems() {
  const body = document.getElementById('pos-items-body');
  if (!body) return;
  if (selectedItems.length === 0) {
    body.innerHTML = '<tr><td colspan="2" class="maglo-empty"><p>Belum ada tindakan dipilih</p></td></tr>';
    return;
  }

  body.innerHTML = selectedItems.map(item => `
    <tr>
      <td>
        <div class="maglo-item-name" style="align-items: flex-start;">
          <div class="flex-column" style="width: 100%;">
            <span class="font-bold" style="font-size: 16px;">${item.name}</span>
            <ul style="margin: 8px 0 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 4px;">
              ${item.items.map(subItem => `
                <li style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--muted);">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="color: var(--success);"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  ${subItem}
                </li>
              `).join('')}
            </ul>
            <button class="btn-remove-maglo" onclick="removeTestItem('${item.id}')" style="margin-top: 12px; align-self: flex-start;">Remove</button>
          </div>
        </div>
      </td>
      <td class="text-right" style="vertical-align: top; padding-top: 12px; font-weight: 700;">Rp ${item.price.toLocaleString('id-ID')}</td>
    </tr>
  `).join('');
}

function updatePosTotal() {
  const subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const spetEl = document.getElementById('pos-spet');
  const diskonValEl = document.getElementById('pos-diskon-val');
  const diskonTypeEl = document.getElementById('pos-diskon-type');
  
  if (!spetEl || !diskonValEl || !diskonTypeEl) return;

  const spet = parseFloat(spetEl.value) || 0;
  const diskonVal = parseFloat(diskonValEl.value) || 0;
  const diskonType = diskonTypeEl.value;
  
  const subtotalDisplay = document.getElementById('pos-subtotal');
  const totalDisplay = document.getElementById('pos-total');
  const spetDisplay = document.getElementById('pos-spet-display');
  const diskonDisplay = document.getElementById('pos-discount-display');
  
  if (subtotalDisplay) subtotalDisplay.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
  if (spetDisplay) spetDisplay.textContent = spet > 0 ? `Rp ${spet.toLocaleString('id-ID')}` : 'Add';
  
  let total = subtotal + spet;
  let discText = 'Add';
  if (diskonVal > 0) {
    if (diskonType === 'percent') {
      const amount = total * (diskonVal / 100);
      total = total - amount;
      discText = `-${diskonVal}% (Rp ${Math.round(amount).toLocaleString('id-ID')})`;
    } else {
      total = total - diskonVal;
      discText = `-Rp ${diskonVal.toLocaleString('id-ID')}`;
    }
  }
  
  if (diskonDisplay) diskonDisplay.textContent = discText;
  if (totalDisplay) totalDisplay.textContent = `Rp ${Math.max(0, total).toLocaleString('id-ID')}`;
}

function openModal(title, content, onSave) {
  console.log('Opening modal:', title);
  const container = document.getElementById('modal-container');
  const titleEl = document.getElementById('modal-title');
  const bodyEl = document.getElementById('modal-body');
  const saveBtn = document.getElementById('modal-save-btn');

  if (!container || !titleEl || !bodyEl || !saveBtn) {
    console.error('Modal elements missing!', { container, titleEl, bodyEl, saveBtn });
    return;
  }

  titleEl.textContent = title;
  bodyEl.innerHTML = content;
  container.style.display = 'flex';
  
  saveBtn.onclick = () => {
    console.log('Save clicked');
    if (onSave()) closeModal();
  };
}

function closeModal() {
  console.log('Closing modal');
  const container = document.getElementById('modal-container');
  if (container) container.style.display = 'none';
}

  // Fungsi Simulasi Tarik Data Satu Sehat
  window.checkSatuSehat = async function() {
    const nikInput = document.getElementById('m-pasien-id');
    const nik = nikInput.value;
    const btn = document.getElementById('btn-cek-satusehat');
    const loading = document.getElementById('cek-loading');

    if (!nik || nik.length < 16) {
      alert('Mohon masukkan 16 digit NIK yang valid.');
      return;
    }

    // UI Loading State
    btn.disabled = true;
    btn.style.opacity = '0.7';
    loading.style.display = 'block';

    try {
      // Simulasi delay API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulasi Data dari Satu Sehat
      const mockData = {
        '1234567890123456': { nama: 'Budi Santoso', dob: '1985-05-20', gender: 'Laki-laki', kontak: '081234567890' },
        '3201234567890001': { nama: 'Siti Aminah', dob: '1992-11-12', gender: 'Perempuan', kontak: '085712345678' },
        '3171012345670002': { nama: 'Joko Widodo', dob: '1961-06-21', gender: 'Laki-laki', kontak: '081111111111' }
      };

      const result = mockData[nik];

      if (result) {
        document.getElementById('m-pasien-nama').value = result.nama;
        document.getElementById('m-pasien-dob').value = result.dob;
        document.getElementById('m-pasien-gender').value = result.gender;
        document.getElementById('m-pasien-kontak').value = result.kontak;
        // Efek visual sukses
        nikInput.style.borderColor = 'var(--success)';
        setTimeout(() => nikInput.style.borderColor = '', 3000);
      } else {
        const names = ['Ahmad Fauzi', 'Larasati Putri', 'Rudi Hermawan', 'Dewi Lestari'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        
        document.getElementById('m-pasien-nama').value = randomName;
        document.getElementById('m-pasien-dob').value = '1990-01-01';
        document.getElementById('m-pasien-gender').value = Math.random() > 0.5 ? 'Laki-laki' : 'Perempuan';
        document.getElementById('m-pasien-kontak').value = '08' + Math.floor(Math.random() * 1000000000);
      }
    } catch (error) {
      console.error('Error fetching Satu Sehat data:', error);
      alert('Gagal mengambil data dari Satu Sehat. Silakan isi manual.');
    } finally {
      btn.disabled = false;
      btn.style.opacity = '1';
      loading.style.display = 'none';
    }
  };

function showAddPatientModal() {
  console.log('Showing Add Patient Modal');
  const content = `
    <div class="grid grid-cols-2 gap-4">
      <div class="form-group col-span-2">
        <label>NIK / Pasien ID <span class="text-danger">*</span></label>
        <div style="display: flex; gap: 8px; align-items: stretch;">
          <div style="flex: 1; position: relative;">
            <input type="text" id="m-pasien-id" class="input" placeholder="Masukkan NIK 16 digit" oninput="if(this.value.length === 16) checkSatuSehat()" style="padding-right: 40px;">
            <div id="cek-loading" style="display: none; position: absolute; right: 12px; top: 50%; transform: translateY(-50%);">
              <div class="spinner-tiny"></div>
            </div>
          </div>
          <button type="button" class="btn primary" onclick="checkSatuSehat()" id="btn-cek-satusehat" style="white-space: nowrap; border-radius: 12px; padding: 0 20px; display: flex; align-items: center; gap: 8px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span id="cek-text">Cek Satu Sehat</span>
          </button>
        </div>
        <small class="text-muted" style="margin-top: 4px; display: block;">Masukkan NIK untuk tarik data otomatis dari Satu Sehat</small>
      </div>
      <div class="form-group">
        <label>Nama Lengkap <span class="text-danger">*</span></label>
        <input type="text" id="m-pasien-nama" class="input">
      </div>
      <div class="form-group">
        <label>Tanggal Lahir</label>
        <input type="date" id="m-pasien-dob" class="input">
      </div>
      <div class="form-group">
        <label>Jenis Kelamin</label>
        <select id="m-pasien-gender" class="input">
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>
      <div class="form-group">
        <label>Kontak (WA/HP)</label>
        <input type="text" id="m-pasien-kontak" class="input">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" id="m-pasien-email" class="input">
      </div>
    </div>
  `;
  
  openModal('Tambah Pasien Baru', content, () => {
    const id = document.getElementById('m-pasien-id').value;
    const nama = document.getElementById('m-pasien-nama').value;
    if (!id || !nama) return alert('ID dan Nama harus diisi!');
    
    db.pasien.push({
      id, nama,
      dob: document.getElementById('m-pasien-dob').value,
      gender: document.getElementById('m-pasien-gender').value,
      kontak: document.getElementById('m-pasien-kontak').value,
      email: document.getElementById('m-pasien-email').value,
      photo: `https://i.pravatar.cc/150?u=${id}`
    });
    
    saveDB();
    if (window.location.hash === '#crud:pasien') renderCrud('pasien');
    if (window.location.hash === '#pasien') renderPasienList();
    return true;
  });
}

function generateInvoiceId() {
  const rand = Math.floor(100000 + Math.random() * 900000);
  const id = 'MGL' + rand;
  const display = document.getElementById('invoice-id-display');
  const summary = document.getElementById('inv-num-summary');
  if (display) display.textContent = id;
  if (summary) summary.textContent = id;
}

function setCurrentDate() {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const tglInput = document.getElementById('pos-tgl');
  const summaryDate = document.getElementById('inv-date-summary');
  
  if (tglInput) tglInput.value = dateStr;
  
  if (summaryDate) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    summaryDate.textContent = now.toLocaleDateString('en-GB', options);
  }
}

function resetPosForm() {
  document.getElementById('pos-patient-search').value = '';
  document.getElementById('pos-rekanan').value = '';
  document.getElementById('pos-catatan').value = '';
  document.getElementById('pos-privasi').checked = false;
  document.getElementById('pos-spet').value = 0;
  document.getElementById('pos-diskon-val').value = 0;
  resetPatientDetail();
  selectedItems = [];
  renderSelectedItems();
  updatePosTotal();
  generateInvoiceId();
  setCurrentDate();
}

function processInvoice() {
    const patientName = document.getElementById('pos-patient-search').value;
    if (!patientName) {
      alert('Pilih pasien terlebih dahulu!');
      return;
    }
    if (selectedItems.length === 0) {
      alert('Pilih minimal satu tindakan!');
      return;
    }

    const invoiceId = document.getElementById('inv-num-summary').textContent;
    const totalStr = document.getElementById('pos-total').textContent.replace('Rp ', '').replace(/\./g, '');
    const total = parseInt(totalStr);
    const dokter = document.getElementById('pos-rekanan').value || 'Tanpa Rekanan';
    const tgl = document.getElementById('pos-tgl').value;
    const isPrivate = document.getElementById('pos-privasi').checked;
    
    const newInvoice = {
      id: invoiceId,
      tgl: tgl,
      pasien: patientName,
      dokter: dokter,
      items: JSON.parse(JSON.stringify(selectedItems)),
      total: total,
      status: 'Belum Bayar',
      isPrivate: isPrivate
    };
    
    db.invoices.push(newInvoice);
    saveDB();
    
    // Refresh views
    if (typeof renderInvoiceHistory === 'function') renderInvoiceHistory();
    if (typeof renderPiutang === 'function') renderPiutang();
    
    let msg = `Invoice ${invoiceId} Berhasil Disimpan!\nTotal: Rp ${total.toLocaleString('id-ID')}`;
    if (isPrivate) {
      msg += '\nMode Privasi: Data disimpan lokal saja.';
    } else {
      msg += '\nData disinkronkan dengan SATUSEHAT.';
    }
    alert(msg);
    
    resetPosForm();
  }

  // Finance Logic
  window.switchFinanceTab = function(tab) {
    document.querySelectorAll('.finance-view').forEach(v => v.style.display = 'none');
    document.querySelectorAll('#pembayaran .pos-tab-item').forEach(t => t.classList.remove('active'));
    
    document.getElementById('view-' + tab).style.display = 'block';
    document.getElementById('tab-' + tab).classList.add('active');
    
    if (tab === 'piutang') renderPiutang();
    else if (tab === 'hutang') renderHutang();
  };

  window.renderPiutang = function() {
    const body = document.getElementById('piutang-list-table');
    if (!body) return;
    
    const search = (document.getElementById('search-piutang')?.value || '').toLowerCase();
    const filter = document.getElementById('filter-piutang')?.value || 'Belum Bayar';
    
    let invoices = [...db.invoices];
    
    // Filter status
    if (filter !== 'Semua') {
      invoices = invoices.filter(inv => inv.status === filter);
    }
    
    // Filter search
    if (search) {
      invoices = invoices.filter(inv => 
        inv.id.toLowerCase().includes(search) || 
        inv.pasien.toLowerCase().includes(search)
      );
    }
    
    // Sort: Unpaid on top, then by date desc, then ID desc
    invoices.sort((a, b) => {
      if (a.status === 'Belum Bayar' && b.status !== 'Belum Bayar') return -1;
      if (a.status !== 'Belum Bayar' && b.status === 'Belum Bayar') return 1;
      if (b.tgl !== a.tgl) return new Date(b.tgl) - new Date(a.tgl);
      return b.id.localeCompare(a.id);
    });
    
    if (invoices.length === 0) {
      body.innerHTML = '<tr><td colspan="7" class="text-center p-4 text-muted">Tidak ada data piutang ditemukan</td></tr>';
      return;
    }
    
    body.innerHTML = invoices.map(inv => {
      let badgeClass = 'danger';
      if (inv.status === 'Lunas') badgeClass = 'green';
      if (inv.status === 'Batal') badgeClass = 'gray';
      
      return `
        <tr>
          <td>${inv.tgl}</td>
          <td class="font-bold">${inv.id}</td>
          <td>${inv.pasien}</td>
          <td>${inv.dokter || '-'}</td>
          <td class="text-right font-mono">Rp ${inv.total.toLocaleString('id-ID')}</td>
          <td><span class="status-badge ${badgeClass}">${inv.status}</span></td>
          <td class="text-right">
            <div class="flex gap-1 justify-end">
              ${inv.status === 'Belum Bayar' ? `
                <button class="btn primary tiny" onclick="payInvoice('${inv.id}')">Bayar</button>
                <button class="btn danger tiny" onclick="cancelInvoice('${inv.id}')">Batal</button>
              ` : `
                <button class="btn ghost tiny" onclick="viewInvoiceDetail('${inv.id}')">Detail</button>
              `}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  };

  window.renderHutang = function() {
    const body = document.getElementById('hutang-list-table');
    if (!body) return;
    
    const search = (document.getElementById('search-hutang')?.value || '').toLowerCase();
    const filter = document.getElementById('filter-hutang')?.value || 'Belum Bayar';
    
    let hutang = [...(db.hutang || [])];
    
    if (filter !== 'Semua') {
      hutang = hutang.filter(h => h.status === filter);
    }
    
    if (search) {
      hutang = hutang.filter(h => 
        h.supplier.toLowerCase().includes(search) || 
        h.item.toLowerCase().includes(search) ||
        h.id.toLowerCase().includes(search)
      );
    }
    
    hutang.sort((a, b) => {
      if (a.status === 'Belum Bayar' && b.status !== 'Belum Bayar') return -1;
      if (a.status !== 'Belum Bayar' && b.status === 'Belum Bayar') return 1;
      return new Date(b.tgl) - new Date(a.tgl);
    });
    
    if (hutang.length === 0) {
      body.innerHTML = '<tr><td colspan="7" class="text-center p-4 text-muted">Tidak ada data hutang ditemukan</td></tr>';
      return;
    }
    
    body.innerHTML = hutang.map(h => `
      <tr>
        <td>${h.tgl}</td>
        <td class="tiny text-muted">${h.id}</td>
        <td class="font-bold">${h.supplier}</td>
        <td>${h.item}</td>
        <td class="text-right font-mono">Rp ${h.total.toLocaleString('id-ID')}</td>
        <td><span class="status-badge ${h.status === 'Lunas' ? 'green' : 'danger'}">${h.status}</span></td>
        <td class="text-right">
          ${h.status === 'Belum Bayar' ? `
            <button class="btn primary tiny" onclick="payHutang('${h.id}')">Bayar</button>
          ` : '-'}
        </td>
      </tr>
    `).join('');
  };

  window.viewInvoiceDetail = function(invId) {
    const inv = db.invoices.find(x => x.id === invId);
    if (!inv) return;
    
    const itemsHtml = inv.items.map(it => `
      <div class="flex justify-between py-1 border-b border-dashed">
        <span>${it.nama}</span>
        <span class="font-mono text-sm">Rp ${it.harga.toLocaleString('id-ID')}</span>
      </div>
    `).join('');
    
    const content = `
      <div class="p-2">
        <div class="flex justify-between mb-4 pb-2 border-b">
          <div>
            <div class="tiny text-muted uppercase">Pasien</div>
            <div class="font-bold">${inv.pasien}</div>
          </div>
          <div class="text-right">
            <div class="tiny text-muted uppercase">No. Invoice</div>
            <div class="font-bold">${inv.id}</div>
          </div>
        </div>
        
        <div class="mb-4">
          <div class="tiny text-muted uppercase mb-2">Item Pemeriksaan</div>
          ${itemsHtml}
        </div>
        
        <div class="flex justify-between font-bold text-lg pt-2">
          <span>Total</span>
          <span class="text-blue-600">Rp ${inv.total.toLocaleString('id-ID')}</span>
        </div>
        
        <div class="mt-4 pt-4 border-t">
          <div class="tiny text-muted uppercase">Status</div>
          <div class="status-badge ${inv.status === 'Lunas' ? 'green' : 'danger'} mt-1 inline-block">${inv.status}</div>
        </div>
      </div>
    `;
    
    openModal('Detail Invoice', content, null);
  };

  window.payInvoice = function(invId) {
    const inv = db.invoices.find(x => x.id === invId);
    if (!inv) return;
    
    const itemsHtml = inv.items.map(it => `
      <div class="flex justify-between text-xs py-1 border-b border-dashed">
        <span>${it.nama}</span>
        <span>Rp ${it.harga.toLocaleString('id-ID')}</span>
      </div>
    `).join('');
    
    const content = `
      <div class="p-2">
        <div class="bg-gray-50 p-3 rounded mb-4">
          <div class="flex justify-between mb-2">
            <span class="font-bold">${inv.pasien}</span>
            <span class="tiny text-muted">${inv.id}</span>
          </div>
          <div class="mb-2 max-h-32 overflow-y-auto">
            ${itemsHtml}
          </div>
          <div class="flex justify-between font-bold border-t pt-1">
            <span>Total</span>
            <span>Rp ${inv.total.toLocaleString('id-ID')}</span>
          </div>
        </div>

        <div class="form-group mb-3">
          <label class="block mb-1 font-bold text-sm">Metode Pembayaran</label>
          <select id="m-pay-metode" class="input full">
            <option value="Tunai">Tunai</option>
            <option value="Transfer">Transfer</option>
            <option value="QRIS">QRIS</option>
          </select>
        </div>
        <div class="form-group">
          <label class="block mb-1 font-bold text-sm">Jumlah Bayar</label>
          <input type="number" id="m-pay-jumlah" class="input full font-bold text-lg" value="${inv.total}">
        </div>
      </div>
    `;
    
    openModal('Proses Pembayaran', content, () => {
      const metode = document.getElementById('m-pay-metode').value;
      const jumlah = parseInt(document.getElementById('m-pay-jumlah').value);
      
      db.pembayaran.push({
        invoiceId: invId,
        metode: metode,
        jumlah: jumlah,
        tgl: new Date().toISOString().split('T')[0]
      });
      
      inv.status = 'Lunas';
      saveDB();
      renderPiutang();
      // Also refresh POS history if user came from there
      if (typeof renderInvoiceHistory === 'function') renderInvoiceHistory();
      return true;
    });
  };

  window.cancelInvoice = function(invId) {
    const inv = db.invoices.find(x => x.id === invId);
    if (!inv) return;
    
    if (confirm(`Apakah Anda yakin ingin membatalkan invoice ${invId}?`)) {
      inv.status = 'Batal';
      saveDB();
      if (typeof renderPiutang === 'function') renderPiutang();
      if (typeof renderInvoiceHistory === 'function') renderInvoiceHistory();
    }
  };

  window.payHutang = function(hId) {
    const h = db.hutang.find(x => x.id === hId);
    if (!h) return;
    
    if (confirm(`Catat pelunasan hutang senilai Rp ${h.total.toLocaleString('id-ID')} ke ${h.supplier}?`)) {
      h.status = 'Lunas';
      saveDB();
      renderHutang();
    }
  };

  window.showAddHutangModal = function() {
    const content = `
      <div class="flex-column gap-3">
        <div class="form-group">
          <label>Supplier <span class="text-danger">*</span></label>
          <input type="text" id="m-h-supplier" class="input full" placeholder="Nama Supplier">
        </div>
        <div class="form-group">
          <label>Item / Keterangan <span class="text-danger">*</span></label>
          <input type="text" id="m-h-item" class="input full" placeholder="e.g. Pembelian Alat">
        </div>
        <div class="form-group">
          <label>Total Hutang <span class="text-danger">*</span></label>
          <input type="number" id="m-h-total" class="input full" placeholder="0">
        </div>
        <div class="form-group">
          <label>Tanggal</label>
          <input type="date" id="m-h-tgl" class="input full" value="${new Date().toISOString().split('T')[0]}">
        </div>
      </div>
    `;
    
    openModal('Tambah Hutang Baru', content, () => {
      const supplier = document.getElementById('m-h-supplier').value;
      const item = document.getElementById('m-h-item').value;
      const total = parseInt(document.getElementById('m-h-total').value);
      const tgl = document.getElementById('m-h-tgl').value;
      
      if (!supplier || !item || !total) return alert('Mohon isi semua field wajib!');
      
      const id = 'HUT-' + Date.now().toString().slice(-6);
      db.hutang.push({ id, tgl, supplier, item, total, status: 'Belum Bayar' });
      saveDB();
      renderHutang();
      return true;
    });
  };

  function renderProsesLab() {
    const body = document.getElementById('lab-invoice-list');
    if (!body) return;
    
    const query = (document.getElementById('lab-search-inv')?.value || '').toLowerCase();
    
    const filteredInvoices = db.invoices.filter(inv => 
      inv.id.toLowerCase().includes(query) || 
      inv.pasien.toLowerCase().includes(query)
    );
    
    if (filteredInvoices.length === 0) {
      body.innerHTML = '<tr><td colspan="6" class="text-center p-4">Tidak ada invoice ditemukan</td></tr>';
      return;
    }
    
    body.innerHTML = filteredInvoices.map(inv => {
      const hasResult = db.hasil_lab.some(h => h.invoiceId === inv.id);
      const statusBadge = hasResult ? '<span class="status-badge green">Sudah Input</span>' : '<span class="status-badge blue">Menunggu</span>';
      
      return `
        <tr>
          <td class="font-bold">${inv.id}</td>
          <td>${inv.tgl}</td>
          <td>${inv.pasien}</td>
          <td>${inv.dokter}</td>
          <td>${statusBadge}</td>
          <td>
            <div class="flex gap-1">
              <button class="btn tiny primary" onclick="openLabInput('${inv.id}')">${hasResult ? 'Edit' : 'Input'}</button>
              ${hasResult ? `<button class="btn tiny ghost" onclick="previewLabResult('${inv.id}')">Preview</button>` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  function openLabInput(invId) {
    const inv = db.invoices.find(x => x.id === invId);
    if (!inv) return;
    
    const existingResults = db.hasil_lab.find(h => h.invoiceId === invId)?.results || {};
    
    let rows = [];
    inv.items.forEach(tindakan => {
      const masterTindakan = db.pemeriksaan.find(p => String(p.id) === String(tindakan.id));
      if (masterTindakan && masterTindakan.item_ids) {
        masterTindakan.item_ids.forEach(itemId => {
          const item = db.item.find(i => String(i.id) === String(itemId));
          if (item) {
            const val = existingResults[itemId]?.value || '';
            const ket = existingResults[itemId]?.keterangan || '';
            rows.push(`
              <tr>
                <td>
                  <div class="font-bold">${item.nama}</div>
                  <div class="tiny text-muted">${masterTindakan.nama}</div>
                </td>
                <td>
                  <input type="text" class="input lab-val-input" data-item-id="${item.id}" value="${val}" oninput="validateNormalRange(this, '${item.normal}')">
                </td>
                <td>${item.satuan || '-'}</td>
                <td class="tiny"><code>${item.normal || '-'}</code></td>
                <td>
                  <input type="text" class="input lab-ket-input" data-item-id="${item.id}" value="${ket}">
                </td>
              </tr>
            `);
          }
        });
      }
    });
    
    const content = `
      <div id="lab-input-modal-content">
        <div class="patient-summary-mini mb-4 p-3 border rounded bg-light">
          <div class="flex justify-between items-center">
            <span class="font-bold text-lg">${inv.pasien}</span>
            <span class="tiny text-muted" id="lab-inv-id">${invId}</span>
          </div>
          <div class="tiny text-muted mt-1">Dokter: ${inv.dokter}</div>
        </div>
        
        <div class="table-container" style="max-height: 400px; overflow-y: auto;">
          <table class="table">
            <thead>
              <tr>
                <th>Pemeriksaan</th>
                <th>Hasil</th>
                <th>Satuan</th>
                <th>Nilai Normal</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody id="lab-items-body">
              ${rows.join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    openModal(`Input Hasil: ${invId}`, content, () => {
      return saveLabResults();
    });
  }

  function checkAbnormal(value, normalRange) {
    if (!normalRange || !value) return false;
    const val = parseFloat(value);
    if (isNaN(val)) return false;

    if (normalRange.includes('-')) {
      const parts = normalRange.split('-');
      const min = parseFloat(parts[0].trim());
      const max = parseFloat(parts[1].trim());
      return val < min || val > max;
    } else if (normalRange.startsWith('<')) {
      const max = parseFloat(normalRange.replace('<', '').trim());
      return val >= max;
    } else if (normalRange.startsWith('>')) {
      const min = parseFloat(normalRange.replace('>', '').trim());
      return val <= min;
    }
    return false;
  }

  function validateNormalRange(input, normalRange) {
    const isAbnormal = checkAbnormal(input.value, normalRange);
    
    if (isAbnormal) {
      input.style.border = '2px solid var(--danger)';
      input.style.color = 'var(--danger)';
      input.style.fontWeight = 'bold';
    } else {
      input.style.border = '';
      input.style.color = '';
      input.style.fontWeight = '';
    }
  }

  function saveLabResults() {
    const invId = document.getElementById('lab-inv-id').textContent;
    const valInputs = document.querySelectorAll('.lab-val-input');
    const ketInputs = document.querySelectorAll('.lab-ket-input');
    
    if (valInputs.length === 0) return false;

    const results = {};
    valInputs.forEach(input => {
      const itemId = input.dataset.itemId;
      results[itemId] = {
        value: input.value,
        keterangan: Array.from(ketInputs).find(ki => ki.dataset.itemId === itemId)?.value || ''
      };
    });
    
    const existingIdx = db.hasil_lab.findIndex(h => h.invoiceId === invId);
    if (existingIdx >= 0) {
      db.hasil_lab[existingIdx].results = results;
      db.hasil_lab[existingIdx].updatedAt = new Date().toISOString();
    } else {
      db.hasil_lab.push({
        invoiceId: invId,
        results: results,
        createdAt: new Date().toISOString()
      });
    }
    
    saveDB();
    alert('Hasil Lab berhasil disimpan!');
    renderProsesLab();
    return true;
  }

  function previewLabResult(invId) {
    const inv = db.invoices.find(x => x.id === invId);
    const labData = db.hasil_lab.find(h => h.invoiceId === invId);
    const pasien = db.pasien.find(p => p.nama === inv.pasien);
    
    if (!inv || !labData) return alert('Data tidak ditemukan');

    let resultHtml = `
      <div id="print-area" class="lab-report p-4" style="background: white; min-height: 297mm;">
        <!-- Header -->
        <div class="report-header flex justify-between items-center mb-6 pb-4 border-b-2" style="border-color: #1e40af;">
          <div class="flex items-center gap-4">
            <div class="flex items-center justify-center font-bold text-white" style="background: #1e40af; width: 64px; height: 64px; border-radius: 12px; font-size: 32px;">K</div>
            <div>
              <h1 class="mb-1" style="color: #1e40af; margin: 0; font-size: 24px; letter-spacing: 1px;">LAB KAWI 31</h1>
              <p class="tiny text-muted" style="margin: 0; line-height: 1.4;">Jl. Kawi No. 31, Jakarta Selatan<br>Telp: (021) 1234567 | www.labkawi.id</p>
            </div>
          </div>
          <div class="text-right">
            <h2 class="mb-1" style="color: #1e40af; margin: 0; font-size: 18px;">HASIL LABORATORIUM</h2>
            <p class="tiny text-muted" style="margin: 0;">No. Invoice: <span class="font-bold" style="color: #0f172a;">${invId}</span></p>
            <p class="tiny text-muted" style="margin: 0;">Tgl. Cetak: ${new Date().toLocaleDateString('id-ID')}</p>
          </div>
        </div>

        <!-- Patient Info -->
        <div class="patient-info-grid grid grid-cols-2 gap-x-8 gap-y-3 mb-8 p-4 bg-light rounded-lg border">
          <div class="flex justify-between border-b pb-1">
            <span class="tiny text-muted">Nama Pasien</span>
            <span class="font-bold">${inv.pasien}</span>
          </div>
          <div class="flex justify-between border-b pb-1">
            <span class="tiny text-muted">Tanggal Periksa</span>
            <span class="font-bold">${inv.tgl}</span>
          </div>
          <div class="flex justify-between border-b pb-1">
            <span class="tiny text-muted">ID Pasien</span>
            <span class="font-bold">${pasien?.id || '-'}</span>
          </div>
          <div class="flex justify-between border-b pb-1">
            <span class="tiny text-muted">Dokter Pengirim</span>
            <span class="font-bold">${inv.dokter}</span>
          </div>
          <div class="flex justify-between border-b pb-1">
            <span class="tiny text-muted">Umur / JK</span>
            <span class="font-bold">${pasien ? calculateAge(pasien.dob) + ' Thn / ' + (pasien.gender === 'Laki-laki' ? 'L' : 'P') : '-'}</span>
          </div>
          <div class="flex justify-between border-b pb-1">
            <span class="tiny text-muted">Status</span>
            <span class="font-bold text-success">Selesai</span>
          </div>
        </div>

        <!-- Results Table -->
        <table class="w-full mb-8" style="border-collapse: collapse;">
          <thead>
            <tr style="background: #1e40af; color: white;">
              <th class="text-left p-3 border" style="border-color: #1e40af;">PEMERIKSAAN</th>
              <th class="text-center p-3 border" style="border-color: #1e40af;">HASIL</th>
              <th class="text-center p-3 border" style="border-color: #1e40af;">SATUAN</th>
              <th class="text-center p-3 border" style="border-color: #1e40af;">NILAI NORMAL</th>
              <th class="text-left p-3 border" style="border-color: #1e40af;">KETERANGAN</th>
            </tr>
          </thead>
          <tbody>
    `;

    inv.items.forEach(pemeriksaan => {
      const items = db.item.filter(it => 
        (db.pemeriksaan.find(p => p.id == pemeriksaan.id)?.item_ids || []).includes(it.id) ||
        (db.pemeriksaan.find(p => p.id == pemeriksaan.id)?.item_ids || []).includes(String(it.id))
      );

      resultHtml += `
        <tr class="bg-light-blue">
          <td colspan="5" class="font-bold p-2 border" style="color: #1e40af;">${pemeriksaan.name || pemeriksaan.nama}</td>
        </tr>
      `;

      items.forEach(it => {
        const res = labData.results[it.id] || {value: '-', keterangan: ''};
        const isAbnormal = checkAbnormal(res.value, it.normal);
        
        resultHtml += `
          <tr>
            <td class="p-2 pl-6 border">${it.nama}</td>
            <td class="text-center p-2 border ${isAbnormal ? 'text-danger font-bold' : ''}" style="font-size: 16px;">${res.value}</td>
            <td class="text-center p-2 border tiny text-muted">${it.satuan}</td>
            <td class="text-center p-2 border tiny text-muted">${it.normal}</td>
            <td class="p-2 border tiny">${res.keterangan || (isAbnormal ? '<span class="text-danger font-bold">ABNORMAL</span>' : 'Normal')}</td>
          </tr>
        `;
      });
    });

    resultHtml += `
          </tbody>
        </table>

        <!-- Footer -->
        <div class="report-footer flex justify-between mt-12">
          <div class="text-center">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://labkawi.id/verify/${invId}" alt="QR" class="border p-1 rounded-lg" style="width: 100px; height: 100px;">
            <p class="tiny text-muted mt-2">Scan untuk verifikasi<br>keaslian dokumen</p>
          </div>
          <div class="flex gap-12">
            <div class="text-center" style="min-width: 150px;">
              <p class="tiny mb-8 text-muted">Dicetak oleh,</p>
              <div style="height: 60px;"></div>
              <div class="font-bold border-t pt-2">${document.querySelector('.user-name')?.textContent || 'Petugas Lab'}</div>
              <p class="tiny text-muted">Admin Lab</p>
            </div>
            <div class="text-center" style="min-width: 150px;">
              <p class="tiny mb-8 text-muted">Penanggung Jawab,</p>
              <div style="height: 60px;"></div>
              <div class="font-bold border-t pt-2">dr. Sp.PK</div>
              <p class="tiny text-muted">Dokter Patologi Klinik</p>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-4 border-t border-dashed text-center tiny text-muted">
          <p>Terima kasih atas kepercayaan Anda pada Lab Kawi 31. Hasil laboratorium ini adalah dokumen rahasia.</p>
        </div>
      </div>

      <div class="flex gap-2 mt-6 justify-end no-print">
        <button class="btn btn-primary" onclick="printLabResult()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:8px"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"/></svg>
          Print Report
        </button>
        <button class="btn ghost" onclick="sendWhatsAppResult('${invId}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:8px"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          Share via WA
        </button>
        <button class="btn ghost" onclick="sendEmailResult('${invId}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:8px"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Send Email
        </button>
      </div>
    `;

    openModal('Preview Hasil Laboratorium', resultHtml);
    document.getElementById('modal-save-btn').style.display = 'none';
  }

  function printLabResult() {
    const printContents = document.getElementById('print-area').innerHTML;
    const originalContents = document.body.innerHTML;
    
    // Simple print logic
    window.print();
  }

  function sendWhatsAppResult(invId) {
    const inv = db.invoices.find(x => x.id === invId);
    const pasien = db.pasien.find(p => p.nama === inv.pasien);
    if (!pasien?.kontak) return alert('Nomor kontak tidak ditemukan');
    
    const text = `Halo ${inv.pasien}, Hasil laboratorium Anda dengan No. Invoice ${invId} sudah selesai. Silakan cek di tautan berikut: https://labkawi.id/result/${invId}`;
    const url = `https://wa.me/${pasien.kontak.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  function sendEmailResult(invId) {
    const inv = db.invoices.find(x => x.id === invId);
    const pasien = db.pasien.find(p => p.nama === inv.pasien);
    if (!pasien?.email) return alert('Alamat email tidak ditemukan');
    
    const subject = `Hasil Laboratorium - ${invId}`;
    const body = `Halo ${inv.pasien},\n\nHasil laboratorium Anda dengan No. Invoice ${invId} sudah selesai.\n\nTerima kasih.`;
    const mailto = `mailto:${pasien.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

// Sidebar Interaction
document.querySelectorAll('.sidebar-heading').forEach(btn => {
  btn.addEventListener('click', () => {
    const items = btn.nextElementSibling;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    
    // Auto-collapse other menus
    if (!isExpanded) {
      document.querySelectorAll('.sidebar-heading').forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherItems = otherBtn.nextElementSibling;
          if (otherItems) otherItems.classList.remove('open');
        }
      });
    }

    btn.setAttribute('aria-expanded', !isExpanded);
    if (items) items.classList.toggle('open', !isExpanded);
    
    // Save State
    const states = {};
    document.querySelectorAll('.sidebar-heading').forEach(b => {
      states[b.dataset.section] = b.getAttribute('aria-expanded') === 'true';
    });
    localStorage.setItem('sidebar_state', JSON.stringify(states));
  });
});

  // LAPORAN LOGIC
  window.renderLaporanKasir = function() {
    const start = document.getElementById('lap-kasir-start').value;
    const end = document.getElementById('lap-kasir-end').value;
    const body = document.getElementById('lap-kasir-body');
    
    let invoices = db.invoices;
    if (start) invoices = invoices.filter(inv => inv.tgl >= start);
    if (end) invoices = invoices.filter(inv => inv.tgl <= end);
    
    let totalIncome = 0;
    body.innerHTML = invoices.map(inv => {
      totalIncome += inv.total;
      return `
        <tr>
          <td>${inv.tgl}</td>
          <td class="font-bold">${inv.id}</td>
          <td>${inv.pasien}</td>
          <td><span class="status-badge ghost">${inv.paymentMethod || 'Tunai'}</span></td>
          <td class="text-right font-bold">Rp ${inv.total.toLocaleString('id-ID')}</td>
        </tr>
      `;
    }).join('');
    
    document.getElementById('lap-kasir-total').textContent = `Rp ${totalIncome.toLocaleString('id-ID')}`;
    document.getElementById('lap-kasir-count').textContent = invoices.length;
    document.getElementById('lap-kasir-avg').textContent = invoices.length > 0 ? 
      `Rp ${Math.round(totalIncome / invoices.length).toLocaleString('id-ID')}` : 'Rp 0';
  };

  window.renderRekapPasien = function() {
    const query = document.getElementById('lap-pasien-search').value.toLowerCase();
    const body = document.getElementById('lap-pasien-body');
    const info = document.getElementById('lap-pasien-info');
    const nameDisplay = document.getElementById('lap-pasien-name-display');
    
    if (!query) {
      alert('Masukkan nama atau ID pasien');
      return;
    }
    
    const patientInvoices = db.invoices.filter(inv => 
      inv.pasien.toLowerCase().includes(query) || 
      (inv.patientId && inv.patientId.toLowerCase().includes(query))
    );
    
    if (patientInvoices.length === 0) {
      body.innerHTML = '<tr><td colspan="5" class="text-center p-4">Tidak ada riwayat untuk pasien ini</td></tr>';
      info.style.display = 'none';
      return;
    }
    
    info.style.display = 'block';
    nameDisplay.textContent = patientInvoices[0].pasien;
    
    body.innerHTML = patientInvoices.map(inv => {
      const tindakanList = inv.items.map(it => it.name).join(', ');
      const hasResult = db.hasil_lab.some(h => h.invoiceId === inv.id);
      return `
        <tr>
          <td>${inv.tgl}</td>
          <td class="font-bold">${inv.id}</td>
          <td class="tiny">${tindakanList}</td>
          <td class="text-right">Rp ${inv.total.toLocaleString('id-ID')}</td>
          <td>${hasResult ? '<span class="status-badge green">Selesai</span>' : '<span class="status-badge blue">Proses</span>'}</td>
        </tr>
      `;
    }).join('');
  };

  window.renderRekapDokter = function() {
    const doctorName = document.getElementById('lap-dokter-select').value;
    const start = document.getElementById('lap-dokter-start').value;
    const end = document.getElementById('lap-dokter-end').value;
    const body = document.getElementById('lap-dokter-body');
    
    let invoices = db.invoices.filter(inv => inv.dokter && inv.dokter !== 'Atas Permintaan Sendiri');
    
    if (doctorName) invoices = invoices.filter(inv => inv.dokter === doctorName);
    if (start) invoices = invoices.filter(inv => inv.tgl >= start);
    if (end) invoices = invoices.filter(inv => inv.tgl <= end);
    
    let totalReferral = 0;
    body.innerHTML = invoices.map(inv => {
      totalReferral += inv.total;
      return `
        <tr>
          <td>${inv.tgl}</td>
          <td class="font-bold">${inv.id}</td>
          <td>${inv.pasien}</td>
          <td>${inv.dokter}</td>
          <td class="text-right font-bold">Rp ${inv.total.toLocaleString('id-ID')}</td>
        </tr>
      `;
    }).join('');
    
    document.getElementById('lap-dokter-count').textContent = invoices.length;
    document.getElementById('lap-dokter-total').textContent = `Rp ${totalReferral.toLocaleString('id-ID')}`;
  };

  window.renderRekapTindakan = function() {
    const start = document.getElementById('lap-tindakan-start').value;
    const end = document.getElementById('lap-tindakan-end').value;
    const body = document.getElementById('lap-tindakan-body');
    
    let invoices = db.invoices;
    if (start) invoices = invoices.filter(inv => inv.tgl >= start);
    if (end) invoices = invoices.filter(inv => inv.tgl <= end);
    
    const stats = {};
    invoices.forEach(inv => {
      inv.items.forEach(it => {
        if (!stats[it.name]) stats[it.name] = { count: 0, income: 0 };
        stats[it.name].count++;
        // Proportionate income calculation (simplified: total invoice / number of items)
        stats[it.name].income += (inv.total / inv.items.length);
      });
    });
    
    const sorted = Object.entries(stats).sort((a,b) => b[1].count - a[1].count);
    
    body.innerHTML = sorted.map(([name, data]) => `
      <tr>
        <td class="font-bold">${name}</td>
        <td class="text-center">${data.count}</td>
        <td class="text-right font-bold text-green-600">Rp ${Math.round(data.income).toLocaleString('id-ID')}</td>
      </tr>
    `).join('');
  };

  window.renderRekapAbnormal = function() {
    const start = document.getElementById('lap-abnormal-start').value;
    const end = document.getElementById('lap-abnormal-end').value;
    const body = document.getElementById('lap-abnormal-body');
    
    let invoicesInPeriod = db.invoices;
    if (start) invoicesInPeriod = invoicesInPeriod.filter(inv => inv.tgl >= start);
    if (end) invoicesInPeriod = invoicesInPeriod.filter(inv => inv.tgl <= end);
    
    const validInvIds = invoicesInPeriod.map(inv => inv.id);
    let results = db.hasil_lab.filter(h => validInvIds.includes(h.invoiceId));
    
    let rows = [];
    results.forEach(res => {
      const inv = db.invoices.find(i => i.id === res.invoiceId);
      Object.entries(res.results).forEach(([itemId, data]) => {
        if (data.flag && data.flag !== 'Normal') {
          const itemMaster = db.item.find(i => String(i.id) === String(itemId));
          rows.push(`
            <tr>
              <td>${inv ? inv.tgl : '-'}</td>
              <td>${inv ? inv.pasien : '-'}</td>
              <td class="tiny">${itemMaster ? itemMaster.nama : 'Unknown'}</td>
              <td>${itemMaster ? itemMaster.nama : itemId}</td>
              <td><span class="status-badge danger">${data.value}</span></td>
              <td class="tiny text-muted">${data.normalRange || '-'}</td>
            </tr>
          `);
        }
      });
    });
    
    body.innerHTML = rows.length > 0 ? rows.join('') : '<tr><td colspan="6" class="text-center p-4">Tidak ada hasil abnormal ditemukan</td></tr>';
  };

  window.printReport = function(sectionId, title) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Create a temporary print window
    const printWindow = window.open('', '_blank');
    const content = section.innerHTML;
    
    // Get styles
    const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
      .map(s => s.outerHTML)
      .join('\n');

    printWindow.document.write(`
      <html>
        <head>
          <title>Print ${title}</title>
          ${styles}
          <style>
            body { padding: 20px; background: white !important; }
            .card { border: none !important; box-shadow: none !important; }
            .card-header, .btn, .input, select { display: none !important; }
            .table-container { overflow: visible !important; }
            .table { width: 100% !important; border-collapse: collapse !important; }
            .table th, .table td { border: 1px solid #eee !important; padding: 10px !important; }
            @media print {
              @page { margin: 1cm; }
              .no-print { display: none !important; }
            }
            .print-header { margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 10px; }
            .print-title { font-size: 24px; font-weight: bold; margin: 0; }
            .print-meta { font-size: 12px; color: #666; margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="print-header">
            <h1 class="print-title">LAB KAWI - ${title.toUpperCase()}</h1>
            <div class="print-meta">Dicetak pada: ${new Date().toLocaleString('id-ID')}</div>
          </div>
          ${content}
          <script>
            setTimeout(() => {
              window.print();
              window.close();
            }, 500);
          <\/script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // Populate Doctor Select in Report
  function populateDoctorReportSelect() {
    const select = document.getElementById('lap-dokter-select');
    if (!select) return;
    const doctors = [...new Set(db.invoices.map(inv => inv.dokter).filter(d => d && d !== 'Atas Permintaan Sendiri'))];
    select.innerHTML = '<option value="">Semua Dokter</option>' + 
      doctors.map(d => `<option value="${d}">${d}</option>`).join('');
  }

// Initialization
window.addEventListener('DOMContentLoaded', () => {
  loadDB();
  initAuth();
  populateDoctorReportSelect();
  
  // Set default periods to current month
  const now = new Date();
  const monthStr = now.toISOString().substring(0, 7);
  const dateStr = now.toISOString().substring(0, 10);
  
  if (document.getElementById('lap-kasir-start')) document.getElementById('lap-kasir-start').value = dateStr;
  if (document.getElementById('lap-kasir-end')) document.getElementById('lap-kasir-end').value = dateStr;
  if (document.getElementById('lap-abnormal-start')) document.getElementById('lap-abnormal-start').value = monthStr + '-01';
  if (document.getElementById('lap-abnormal-end')) document.getElementById('lap-abnormal-end').value = dateStr;
  if (document.getElementById('lap-dokter-start')) document.getElementById('lap-dokter-start').value = monthStr + '-01';
  if (document.getElementById('lap-dokter-end')) document.getElementById('lap-dokter-end').value = dateStr;
  if (document.getElementById('lap-tindakan-start')) document.getElementById('lap-tindakan-start').value = monthStr + '-01';
  if (document.getElementById('lap-tindakan-end')) document.getElementById('lap-tindakan-end').value = dateStr;

  // Initial renders
  renderLaporanKasir();
  renderRekapAbnormal();
  renderRekapDokter();
  renderRekapTindakan();
  
  // Restore Sidebar State
  const states = JSON.parse(localStorage.getItem('sidebar_state') || '{}');
  document.querySelectorAll('.sidebar-heading').forEach(btn => {
    const section = btn.dataset.section;
    if (states[section]) {
      btn.setAttribute('aria-expanded', 'true');
      const items = btn.nextElementSibling;
      if (items) items.classList.add('open');
    }
  });

  route();
  renderSelectedItems();
  updatePosTotal();
  generateInvoiceId();
  setCurrentDate();
  updateDashboardStats();

  // Close search results when clicking outside
  document.addEventListener('click', (e) => {
    const containers = [
      { input: 'pos-patient-search', results: 'patient-search-results' },
      { input: 'pos-test-search', results: 'test-search-results' },
      { input: 'pos-rekanan', results: 'doctor-search-results' }
    ];

    containers.forEach(c => {
      const input = document.getElementById(c.input);
      const results = document.getElementById(c.results);
      if (input && results && !input.contains(e.target) && !results.contains(e.target)) {
        results.style.display = 'none';
      }
    });
  });
});

window.addEventListener('hashchange', route);

// SATUSEHAT Mock Logic
const btnLookup = document.getElementById('btn-ssp-lookup');
if (btnLookup) {
  btnLookup.onclick = () => {
    const sspStatus = document.getElementById('ssp-status');
    sspStatus.textContent = 'Looking up...';
    setTimeout(() => {
      document.getElementById('pasien-nama').value = 'John Doe';
      document.getElementById('pasien-dob').value = '1985-05-15';
      sspStatus.textContent = 'Data found';
    }, 1000);
  };
}
  // --- RBAC Logic ---
  let selectedRoleId = null;

  const appFeatures = [
    { id: 'dashboard', label: 'Dashboard', group: 'Umum' },
    { id: 'user', label: 'Manajemen Pengguna', group: 'User' },
    { id: 'rbac', label: 'Hak Akses (RBAC)', group: 'User' },
    { id: 'master-personalia', label: 'Data Master Personalia', group: 'Master' },
    { id: 'master-laboratorium', label: 'Data Master Laboratorium', group: 'Master' },
    { id: 'pos', label: 'Transaksi (POS)', group: 'Administrasi' },
    { id: 'pembayaran', label: 'Pembayaran', group: 'Administrasi' },
    { id: 'koreksi-transaksi', label: 'Koreksi Transaksi', group: 'Administrasi' },
    { id: 'laporan-pusat', label: 'Laporan & Rekap', group: 'Administrasi' },
    { id: 'analis-lab', label: 'Hasil Analisa Lab', group: 'Proses Lab' },
    { id: 'radiologi', label: 'Radiologi', group: 'Proses Lab' },
    { id: 'medical-report', label: 'Medical Report', group: 'Proses Lab' },
    { id: 'logistik-pemakaian', label: 'Pemakaian Bahan', group: 'Logistik' },
    { id: 'logistik-habis', label: 'Bahan Habis', group: 'Logistik' },
    { id: 'logistik-koreksi', label: 'Koreksi Logistik', group: 'Logistik' },
    { id: 'transaksi-kas', label: 'Kas Utama', group: 'Transaksi Kas' },
    { id: 'transaksi-lain', label: 'Kas Lain-lain', group: 'Transaksi Kas' },
    { id: 'mutasi-kas', label: 'Mutasi Kas', group: 'Transaksi Kas' },
    { id: 'integrasi', label: 'Integrasi SATUSEHAT', group: 'Utilitas' }
  ];

  function renderRbacRoles() {
    const table = document.getElementById('rbac-role-list-table');
    if (!table) return;
    
    table.innerHTML = db.roles.map(role => {
      const permissionCount = role.permissions.length;
      const firstThree = role.permissions.slice(0, 3).map(p => {
        const feat = appFeatures.find(f => f.id === p);
        return feat ? feat.label : '';
      }).filter(Boolean).join(', ');

      return `
        <tr>
          <td class="font-bold">
            <div class="text-sm">${role.nama}</div>
            <div class="tiny text-muted font-normal">${role.id === 'admin' ? 'Akses Sistem Penuh' : 'Akses Terbatas'}</div>
          </td>
          <td>
            <div class="flex items-center gap-2">
              <span class="badge primary small">${permissionCount} Fitur</span>
              <span class="text-xs text-muted truncate max-w-[300px]" title="${role.permissions.map(p => appFeatures.find(f => f.id === p)?.label).join(', ')}">
                ${firstThree}${permissionCount > 3 ? '...' : ''}
              </span>
            </div>
          </td>
          <td class="text-right">
            <div class="flex justify-end gap-2">
              <button class="btn small ghost flex items-center gap-2" onclick="selectRole('${role.id}')" title="Atur Hak Akses">
                <svg width="14" height="14"><use href="#i-edit"/></svg>
                <span>Atur Izin</span>
              </button>
              ${role.id !== 'admin' ? `
                <button class="btn small ghost danger flex items-center gap-2" onclick="deleteRole('${role.id}')" title="Hapus Role">
                  <svg width="14" height="14"><use href="#i-trash"/></svg>
                  <span>Hapus</span>
                </button>
              ` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  window.selectRole = function(roleId) {
    selectedRoleId = roleId;
    const role = db.roles.find(r => r.id === roleId);
    if (!role) return;

    // Group features
    const groups = {};
    appFeatures.forEach(f => {
      if (!groups[f.group]) groups[f.group] = [];
      groups[f.group].push(f);
    });

    const content = `
      <div class="p-2">
        <p class="text-sm text-muted mb-6">Centang fitur yang dapat diakses oleh role <strong>${role.nama}</strong>.</p>
        <div class="grid grid-cols-2 gap-x-8 gap-y-6" id="modal-rbac-features">
          ${Object.entries(groups).map(([groupName, features]) => `
            <div class="col-span-1">
              <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">${groupName}</h4>
              <div class="flex flex-col gap-3">
                ${features.map(f => `
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" value="${f.id}" class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                           ${role.permissions.includes(f.id) ? 'checked' : ''} 
                           ${role.id === 'admin' ? 'disabled checked' : ''}>
                    <span class="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">${f.label}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        ${role.id === 'admin' ? '<p class="tiny italic text-warning mt-4">* Role Admin memiliki akses penuh secara default dan tidak dapat diubah.</p>' : ''}
      </div>
    `;

    openModal(`Atur Hak Akses: ${role.nama}`, content, () => {
      if (role.id === 'admin') return true;
      
      const checkboxes = document.querySelectorAll('#modal-rbac-features input[type="checkbox"]:checked');
      const newPermissions = Array.from(checkboxes).map(cb => cb.value);
      
      const roleIndex = db.roles.findIndex(r => r.id === selectedRoleId);
      if (roleIndex !== -1) {
        db.roles[roleIndex].permissions = newPermissions;
        saveDB();
        renderRbacRoles();
      }
      return true;
    });
  };

  window.deleteRole = function(roleId) {
    if (roleId === 'admin') return alert('Role Admin tidak dapat dihapus.');
    if (confirm('Yakin ingin menghapus role ini? Pengguna dengan role ini mungkin kehilangan akses.')) {
      db.roles = db.roles.filter(r => r.id !== roleId);
      saveDB();
      renderRbacRoles();
    }
  };

  window.showAddRoleModal = function() {
    const name = prompt('Masukkan nama role baru:');
    if (name) {
      const id = name.toLowerCase().replace(/\s+/g, '-');
      if (db.roles.find(r => r.id === id)) {
        alert('Role dengan nama tersebut sudah ada.');
        return;
      }
      db.roles.push({ id, nama: name, permissions: ['dashboard'] });
      saveDB();
      renderRbacRoles();
      selectRole(id);
    }
  };

  window.toggleRoleSwitcher = function() {
    const el = document.getElementById('role-switcher');
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
    if (el.style.display === 'block') {
      renderUserProfileDropdown();
    }
  };

  function renderUserProfileDropdown() {
    const list = document.getElementById('role-switcher-list');
    if (!currentUser) return;
    
    list.innerHTML = `
      <div class="profile-dropdown-header">
        <div class="profile-dropdown-avatar">
          <img src="https://i.pravatar.cc/100?u=${currentUser.id}" alt="${currentUser.nama}">
        </div>
        <div class="profile-dropdown-name">${currentUser.nama}</div>
        <div class="profile-dropdown-email">${currentUser.kontak}</div>
        <div class="profile-dropdown-role">
          ${currentUser.role}
        </div>
      </div>
      <div class="profile-dropdown-body">
        <a href="javascript:void(0)" onclick="logout()" class="profile-dropdown-item danger">
          <svg width="18" height="18"><use href="#i-logout"/></svg>
          <span>Keluar Aplikasi</span>
        </a>
      </div>
    `;
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const profile = document.querySelector('.user-profile');
    const switcher = document.getElementById('role-switcher');
    if (profile && !profile.contains(e.target) && switcher) {
      switcher.style.display = 'none';
    }
  });

  // Initialize RBAC UI if needed
  if (typeof renderRbacRoles === 'function') {
    renderRbacRoles();
  }
