// app.js
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const templateName = urlParams.get('template');
    if (templateName) {
        loadTemplate(templateName);
    }
});

function loadTemplate(templateName) {
    fetch(`../templates/${templateName}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('template-editor').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la plantilla:', error));
}

function saveTemplate() {
    const templateContent = document.getElementById('template-editor').innerHTML;
    console.log("Tarjeta guardada:", templateContent);
    alert("Tarjeta guardada correctamente.");
}
