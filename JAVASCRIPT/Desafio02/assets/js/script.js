const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

// Função que alterna entre os temas claro e escuro
function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light");
    } else {
        rootHtml.setAttribute("data-theme", "dark");
    }

    // Alterna os ícones do botão de tema
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

// Evento para alternar o tema
toggleTheme.addEventListener("click", changeTheme);

// Função do acordeão para abrir/fechar itens
accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains("active");

        if (isActive) {
        accordionItem.classList.remove("active");
        } else {
        accordionItem.classList.add("active");
        }
    });
});

// Destaque no link ativo do menu principal
menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

// Toggle menu mobile
const toggleMobileMenu = document.getElementById("toggleMobileMenu");
const mobileNav = document.querySelector(".nav--mobile");

toggleMobileMenu.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});
