// Search bar for large screen sizes
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
searchIcon.addEventListener('click', () => {
    searchInput.style.width = searchInput.style.width === '0px' ? '200px' : '0px';
});

// interactivity for header link 
const header_links = document.querySelectorAll('.header-link');

header_links.forEach(haeder_link => {
    haeder_link.addEventListener('click', () => {
        header_links.forEach(l => {
            l.classList.remove('active');
        })
        haeder_link.classList.add('active');
    });
})

