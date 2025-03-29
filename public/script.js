function showCat(code) {
    const input = document.getElementById('statusCode');
    const catContainer = document.getElementById('cat-container');
    
    // Si no se proporciona código, usar el del input
    if (!code) {
        code = input.value.trim();
    }

    // Validar que sea un número
    if (!code || isNaN(code)) {
        catContainer.innerHTML = '<p style="color: red; text-align: center;">Por favor, ingresa un número válido</p>';
        return;
    }

    // Mostrar la imagen del gato
    catContainer.innerHTML = `
        <img src="https://http.cat/${code}" 
             alt="HTTP ${code} Cat" 
             onerror="this.src='https://http.cat/404'">
    `;
    
    // Limpiar el input si se usó el botón de ejemplo
    if (input.value === '') {
        input.value = code;
    }
}
