# Te Lo Dije

Servidor web que responde a peticiones GET y devuelve páginas HTML con una mezcla de resultados de búsqueda reales (de Google) y resultados falsos personalizados.

## Tecnologías

- Node.js
- Express
- TypeScript
- Google Custom Search API

## Instalación

```bash
npm install
```

## Configuración

Crear un archivo `.env` con las siguientes variables:

```
GOOGLE_API_KEY=tu_api_key_de_google
GOOGLE_SEARCH_ENGINE_ID=tu_search_engine_id
PORT=3000
```

## Uso



### Endpoint de búsqueda

**URL:** `GET /searchCustom`

**Parámetros de consulta:**
- `term` (requerido): Término de búsqueda
- `deviceType` (requerido): Tipo de dispositivo (`desktop` o `mobile`)
- `result[n][title]`: Título del resultado falso n
- `result[n][desc]`: Descripción del resultado falso n
- `result[n][link]`: URL del resultado falso n
- `result[n][img]`: Tipo de imagen del resultado falso n (`newspaper` o `wiki`)

Donde `n` es un índice que comienza en 0. Se pueden incluir tantos resultados falsos como se desee.

### Ejemplo de petición

```
GET http://localhost:3000/searchCustom?term=javascript&deviceType=desktop&result[0][title]=Resultado%20Falso%201&result[0][desc]=Esta%20es%20una%20descripcion%20falsa&result[0][link]=https://ejemplo.com&result[0][img]=newspaper&result[1][title]=Resultado%20Falso%202&result[1][desc]=Otra%20descripcion%20falsa&result[1][link]=https://otro.com&result[1][img]=newspaper
```

### Respuesta

El servidor devuelve una página HTML completa que combina:
- Los resultados falsos proporcionados en los parámetros
- Resultados reales obtenidos de la API de Google Custom Search

