const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// Ruta para servir el HTML con el botón de descarga
app.get('/', (req, res) => {
  res.send(`
    <button onclick="downloadFile()">Descargar Archivo</button>
    <script>
      function downloadFile() {
        window.location.href = '/download';
      }
    </script>
  `);
});

// Ruta para descargar el archivo
app.get('/download', (req, res) => {
  const filePath = 'C:\Users\hp\Documents\repos\Curso-Fullstack-dev-Felix-Delgado/archivo_prueba.txt'; // Ruta local del archivo
  const fileName = 'archivo_prueba.txt'; // Nombre del archivo que se descargará

  // Verificar si el archivo existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send('El archivo no se encuentra disponible para descargar.');
      return;
    }

    // Configurar cabeceras de la respuesta para forzar la descarga del archivo
    res.setHeader('Content-disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-type', 'text/plain');

    // Crear un stream de lectura del archivo y enviarlo como respuesta
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
