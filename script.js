document.addEventListener("DOMContentLoaded", () => {
    const elementosRevelar = document.querySelectorAll(".reveal");

    // Configura o observador para detectar quando cada seção entra na tela
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("ativo");
            }
        });
    }, {
        threshold: 0.2 // Dispara a animação quando 20% do cartão estiver visível
    });

    elementosRevelar.forEach((elemento) => {
        observador.observe(elemento);
    });
});