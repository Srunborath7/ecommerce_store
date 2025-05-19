   function getCurrentHourCambodia() {
        const utc = new Date().getUTCHours();
        const cambodiaHour = (utc + 7) % 24;
        return cambodiaHour;
    }

    function isNightTimeCambodia() {
        const hour = getCurrentHourCambodia();
        return (hour >= 19 || hour < 6); // Night is between 7 PM to 6 AM
    }

    function applyTheme(theme) {
        document.documentElement.classList.remove('light', 'dark');

        if (theme === 'light') {
            document.documentElement.classList.add('light');
        } else if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (theme === 'system') {
            // Apply system logic (based on Cambodia time)
            const night = isNightTimeCambodia();
            document.documentElement.classList.add(night ? 'dark' : 'light');
        }
    }

    function updateThemeSelection() {
        const savedTheme = localStorage.getItem('theme') || 'system';
        const selectedRadio = document.querySelector(`input[name="theme"][value="${savedTheme}"]`);
        if (selectedRadio) {
            selectedRadio.checked = true;
        }
        applyTheme(savedTheme);
    }

    // Event listeners for radio button changes
    document.querySelectorAll('input[name="theme"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const selectedTheme = radio.value;
            localStorage.setItem('theme', selectedTheme);
            applyTheme(selectedTheme);
        });
    });

    // Initialize theme on page load
    document.addEventListener('DOMContentLoaded', updateThemeSelection);