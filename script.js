// Simple JavaScript for header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
                header.style.padding = '15px 0';
            } else {
                header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
                header.style.padding = '20px 0';
            }
        });
   