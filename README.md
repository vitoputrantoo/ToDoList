# To-Do App

Aplikasi To-Do ini adalah aplikasi web sederhana yang memungkinkan pengguna untuk mengelola tugas mereka dengan mudah. Pengguna dapat menambahkan, menghapus, dan menandai tugas sebagai selesai atau belum selesai. Aplikasi ini juga mendukung mode gelap untuk kenyamanan visual.

## Fitur Utama
- **Pengelolaan Tugas**: Pengguna dapat menambahkan, menghapus, dan menandai tugas sebagai selesai.
- **Kategori Tugas**: Tugas dapat dikelompokkan ke dalam kategori seperti Personal, Work, Shopping, Coding, dan Health.
- **Mode Gelap**: Pengguna dapat beralih antara mode terang dan gelap untuk kenyamanan visual.
- **Penghitungan Tugas**: Menampilkan jumlah total tugas yang ada di semua kategori.

## Struktur Proyek
- `index.html`: File HTML yang berisi struktur dasar dan referensi ke file CSS dan JavaScript.
- `styles.css`: File CSS yang berisi semua gaya untuk aplikasi To-Do.
- `script.js`: File JavaScript yang berisi logika dan interaksi untuk aplikasi To-Do.

## Penjelasan Kode JavaScript

### 1. Deklarasi Variabel
```javascript
const todoContainer = document.getElementById('todo');
const todoTitle = document.getElementById('todo-title');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('new-task');
const totalTasks = document.getElementById('total-tasks');
let currentCategory = '';

Fungsi: Mengambil elemen-elemen dari DOM yang akan digunakan dalam aplikasi.
Konsep: Menggunakan document.getElementById untuk mengakses elemen berdasarkan ID-nya.

2. Struktur Data untuk Tugas
javascript
Run
Copy code
const todos = {
  'Personal': [],
  'Work': [],
  'Shopping': [],
  'Coding': [],
  'Health': []
};
Fungsi: Menyimpan tugas dalam objek yang dikelompokkan berdasarkan kategori.
Konsep: Menggunakan objek JavaScript untuk mengelompokkan data dengan kunci kategori dan nilai array tugas.
3. Fungsi openTodo(category)
javascript
Run
Copy code
function openTodo(category) {
  currentCategory = category;
  todoTitle.textContent = category + ' To-Do';
  document.querySelector('.section-list').style.display = 'none';
  todoContainer.classList.add('active');
  renderTasks();
}
Fungsi: Membuka kategori tugas yang dipilih dan menampilkan daftar tugas untuk kategori tersebut.
Konsep: Mengubah konten dan gaya elemen DOM berdasarkan interaksi pengguna.
4. Fungsi goBack()
javascript
Run
Copy code
function goBack() {
  todoContainer.classList.remove('active');
  document.querySelector('.section-list').style.display = 'flex';
  taskInput.value = '';
}
Fungsi: Kembali ke tampilan daftar kategori tugas dan mengosongkan input tugas.
Konsep: Menggunakan manipulasi kelas CSS untuk mengubah tampilan elemen.
5. Event Listener untuk Input Tugas
javascript
Run
Copy code
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && taskInput.value.trim() !== '') {
    todos[currentCategory].push({
      text: taskInput.value.trim(),
      done: false
    });
    taskInput.value = '';
    renderTasks();
    updateCounts();
  }
});
Fungsi: Menambahkan tugas baru ke kategori saat pengguna menekan tombol Enter.
Konsep: Menggunakan event listener untuk mendeteksi input dari pengguna dan memanipulasi data berdasarkan input tersebut.
6. Fungsi renderTasks()
javascript
Run
Copy code
function renderTasks() {
  taskList.innerHTML = '';
  todos[currentCategory].forEach((task, index) => {
    const li = document.createElement('li');
    // ... (kode untuk membuat elemen tugas)
  });
}
Fungsi: Menghasilkan dan menampilkan daftar tugas berdasarkan kategori yang dipilih.
Konsep: Menggunakan DOM manipulation untuk membuat elemen baru dan menambahkannya ke dalam daftar.
7. Fungsi updateCounts()
javascript
Run
Copy code
function updateCounts() {
  let total = 0;
  Object.entries(todos).forEach(([category, taskArray]) => {
    document.getElementById('count-' + category).textContent = `${taskArray.length} Tasks`;
    total += taskArray.length;

  });
  totalTasks.textContent = `Today you have ${total} tasks`;
}
Fungsi: Menghitung dan memperbarui jumlah tugas di setiap kategori serta total tugas.
Konsep: Menggunakan iterasi untuk mengakses dan memperbarui elemen DOM berdasarkan data yang ada dalam objek todos.
8. Fungsi toggleDarkMode()
javascript
Run
Copy code
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('dark-mode-btn');
  btn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
}
Fungsi: Mengubah tema aplikasi antara mode terang dan gelap.
Konsep: Menggunakan classList.toggle() untuk menambah atau menghapus kelas CSS yang mengubah gaya elemen. Juga, menggunakan operator ternary untuk mengubah teks tombol berdasarkan status mode saat ini.
9. Inisialisasi Penghitungan Tugas
javascript
Run
Copy code
updateCounts();
Fungsi: Memanggil fungsi updateCounts() saat aplikasi dimuat untuk memastikan bahwa jumlah tugas ditampilkan dengan benar.
Konsep: Memastikan bahwa data yang ditampilkan kepada pengguna selalu akurat dan terkini.
Cara Menjalankan Aplikasi
Clone Repository: Clone repositori ini ke komputer Anda.
Buka File index.html: Buka file index.html di browser pilihan Anda.
Interaksi dengan Aplikasi: Anda dapat menambahkan tugas, menghapus tugas, menandai tugas sebagai selesai, dan beralih antara mode terang dan gelap.
