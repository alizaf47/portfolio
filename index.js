document.getElementById('submit-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form from actually submitting
    
    // Get form values (optional - you can remove if not needed)
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    
    // Validate form (basic example)
    if (!name || !email || !message) {
        showToast('Please fill all fields', 'error');
        return;
    }
    
    // Simulate form submission (replace with actual form submission code)
    setTimeout(() => {
        showToast('Message sent successfully!');
        
        // Optional: Reset form after submission
        document.querySelector('form').reset();
    }, 1000);
});

// Toast notification function
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    // Add toast to body
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

document.getElementById("btn").addEventListener("click", function () {
  const contactSection = document.getElementById("contactme");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
});


document.querySelectorAll('.btn-project').forEach(button => {
  button.addEventListener('click', function () {
    const pdfPath = this.getAttribute('data-pdf');
    if (pdfPath) {
      window.open(pdfPath, '_blank'); // Opens Google Drive PDF in new tab
    }
  });
});
