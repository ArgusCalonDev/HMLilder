// === DOM ===
const codeInput = document.getElementById('code-input');
const codeOutput = document.getElementById('output');

// === FUNCTIONS ===
function updateOutput() {
    const code = codeInput.value;
    
    // Gunakan srcdoc untuk iframe atau buat iframe baru
    codeOutput.innerHTML = ''; // Kosongkan dulu
    
    // Buat iframe untuk preview yang terisolasi
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '500px';
    iframe.style.border = '1px solid #ccc';
    
    // Set HTML ke iframe
    iframe.srcdoc = code;
    
    codeOutput.appendChild(iframe);
}

// === EVENT LISTENERS ===
codeInput.addEventListener('input', updateOutput);

// Event listener untuk perubahan ukuran
codeInput.addEventListener('input', updateOutput);

// Initial output update
updateOutput();

// Tambahkan juga event listener untuk resize (opsional)
window.addEventListener('resize', updateOutput);