document.addEventListener("DOMContentLoaded", () => {
    // Selecting buttons and sections
    const foodBtn = document.querySelector('a[href="#food-donation"]');
    const moneyBtn = document.querySelector('a[href="#money-donation"]');
    const foodSection = document.getElementById("food-donation");
    const moneySection = document.getElementById("money-donation");

    // Helper to animate hiding/showing
    const showSection = (sectionToShow, sectionToHide) => {
        if (!sectionToShow) return;

        if (sectionToHide) {
            sectionToHide.style.display = "none";
            sectionToHide.classList.remove('visible');
        }

        sectionToShow.style.display = "block";

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                sectionToShow.classList.add('visible');
                const y = sectionToShow.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: "smooth" });
            });
        });
    };

    // Ensuring all elements exist
    if (foodBtn && moneyBtn && foodSection && moneySection) {
        foodBtn.addEventListener("click", (e) => {
            e.preventDefault();
            showSection(foodSection, moneySection);
        });

        moneyBtn.addEventListener("click", (e) => {
            e.preventDefault();
            showSection(moneySection, foodSection);
        });

        const forms = document.querySelectorAll('.donation-form form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your generous donation!');
                form.reset();
            });
        });
    } else {
        console.warn("Donation interactive elements not found on this page.");
    }
});
