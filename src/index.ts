import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import paginaRoutes from './routes/routes.js';

// Obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para servir archivos estáticos desde plantillaGoogle
app.use(express.static(path.join(__dirname, '..', 'plantillaGoogle')));
app.use(express.static(path.join(__dirname, '..', 'plantillaGoogle/thumbnails')));
//Parser extended para que entienda la lista de objetos del formulario
app.set('query parser', 'extended');
// Rutas principales
app.use('/', paginaRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 8080;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Endpoint de búsqueda: http://localhost:${PORT}/searchCustom?term=TU_BUSQUEDA&deviceType=desktop`);
});

// ============================================
// FUNCIÓN DE PRUEBA (COMENTADA)
// ============================================
// import { searchCustom } from './controllers/controller.js';
// async function testSearchCustom() {
//   console.log(' Probando searchCustom...');
//   const mockReq = {
//     query: {
//       term: 'hola',
//       deviceType: 'desktop'
//     }
//   } as any;
//   const mockRes = {
//     json: (data: any) => {
//       console.log('Respuesta de searchCustom:', JSON.stringify(data, null, 2));
//       return mockRes;
//     },
//     status: (code: number) => {
//       console.log(`  Status code: ${code}`);
//       return mockRes;
//     }
//   } as any;
//   try {
//     await searchCustom(mockReq, mockRes);
//     console.log(' Prueba completada exitosamente');
//   } catch (error) {
//     console.error(' Error en la prueba:', error);
//   }
// }
// testSearchCustom();
