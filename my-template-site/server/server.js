// server/server.js

const express = require('express');
const path = require('path');
const app = express();

// Configurar el puerto
const PORT = 5500;

// Configurar la IP
const HOST = '192.168.31.22'; // Reemplaza con tu IP local

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '/public')));

// Ruta para la página principal (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/pages/index.html'));
});

// Ruta para las demás páginas (opcional)
app.get('/general', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/pages/general.html'));
});

// Iniciar el servidor y aceptar conexiones en la IP y puerto especificados
app.listen(PORT, HOST, () => {
    console.log(`Servidor ejecutándose en http://${HOST}:${PORT}`);
});
