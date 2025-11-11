import { Request, Response } from 'express';
import { generateSearchPage, fakeResultItem } from '../services/searchService.js';

function isFakeResultItem(obj: any): obj is fakeResultItem {
  return (
    typeof obj === 'object' && 
    obj !== null &&          
    typeof obj.title === 'string' && 
    typeof obj.desc === 'string' &&
    typeof obj.link === 'string' &&
    typeof obj.img === 'string'
  );
}
//Comprueba el tipo del array y de cada elemetno de adentro
export function isFakeResultItemArray(arr: any): arr is fakeResultItem[] {
  return (
    Array.isArray(arr) &&     
    arr.every(isFakeResultItem)  
  );
}

export const searchCustom = async (req: Request, res: Response): Promise<void> => {
  try {
    // 1. EXTRAER parámetros del request
    const rawResult = req.query.result;
    const searchTerm = req.query.term as string;
    const deviceType = req.query.deviceType as string;
    
    // 2. VALIDAR parámetro 'result'
    if (!isFakeResultItemArray(rawResult)) {
      res.status(400).json({ 
        error: "El parámetro 'result' debe ser un array de objetos {title, desc, link, img}." 
      });
      return;
    }
    
    // 3. VALIDAR parámetro 'searchTerm'
    if (!searchTerm) {
      res.status(400).json({ error: 'Parámetro term requerido' });
      return;
    }
    
    // 4. DELEGAR toda la lógica al service
    const finalHTML = await generateSearchPage(searchTerm, deviceType, rawResult);
    
    // 5. ENVIAR respuesta
    res.send(finalHTML);

  } catch (error) {
    console.error('Error en búsqueda custom:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
