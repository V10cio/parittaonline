let currentPage = 1; // Start from page 1
const totalPages = document.querySelectorAll('.page').length; // Get the total number of pages

// Function to show a specific page
function showPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    document.getElementById('page' + pageNumber).classList.add('active');
}

// Function to go to the previous page
function prevPage() {
    if (currentPage > 1) { // Prevent going below page 1
        currentPage--;
        showPage(currentPage);
    }
}

// Function to go to the next page
function nextPage() {
    if (currentPage < totalPages) { // Prevent going beyond the last page
        currentPage++;
        showPage(currentPage);
    }
}

// Initialize by showing the first page when the script loads
showPage(currentPage);
