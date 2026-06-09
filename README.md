# NECRONOMICON 404
### Grimorio Interactivo de Horror Cósmico

> *«La emoción más antigua y más intensa de la humanidad es el miedo, y el miedo más antiguo y más intenso es el miedo a lo desconocido.»*
> — H.P. Lovecraft, El Horror Sobrenatural en Literatura (1927, dominio público)

---

**⚠ AVISO LEGAL**
Todo el contenido ficticio del grimorio (entidades, ritos, símbolos, lugares, textos del Copista Ciego) es **obra original**. Los textos históricos de referencia proceden de obras en **dominio público** debidamente atribuidas. No se reproduce ningún contenido protegido por derechos de autor.

---

## Descripción

NECRONOMICON 404 es una aplicación web estática de referencia sobre el horror cósmico: parte grimorio interactivo de ficción original, parte enciclopedia del género con contenido real y verificable. Sin backend, sin frameworks, sin dependencias de build. Se abre directamente en el navegador y funciona offline como PWA.

---

## Secciones

| Sección | Contenido |
|---|---|
| **Portada** | Grimorio con sigilo animado, acceso al interior |
| **Índice** | 8 capítulos de ficción original |
| **Capítulo** | Lector con sidebar, favoritos, notas marginales, exportación TXT |
| **Glosario** | 12 entidades, lugares, símbolos y ritos ficticios con fichas completas |
| **Biblioteca** | 8 conceptos del género + 6 textos reales en dominio público con fuentes |
| **Autores** | 8 maestros del horror cósmico: biografías, obras, influencias, estado de copyright |
| **Cronología** | 25 entradas de 1764 a 2019, historia completa del género |
| **Generadores** | Nombres prohibidos + fragmentos apócrifos procedurales |
| **Bestiario** | 5 criaturas del Vacío con sigilos SVG y estadísticas |
| **Archivo** | Búsqueda global en todo el contenido + documentos clasificados |

---

## Funcionalidades técnicas

- Favoritos persistentes en `localStorage`
- Modo oscuro / modo pergamino con persistencia
- Notas marginales desbloqueables (botones †)
- Búsqueda global con highlight de términos
- Copiar cualquier fragmento al portapapeles
- Exportar capítulos y fragmentos como `.txt`
- Texto redactado interactivo (`.redacted`)
- Easter eggs: Código Konami, sigilo de portada, triple clic en logo
- PWA instalable, funciona offline tras primera visita
- Ruido analógico animado en canvas
- Compatible con teclado (Tab + Enter en todos los elementos interactivos)

---

## Stack

- HTML5 semántico + ARIA
- CSS3 puro (custom properties, grid, animaciones)
- JavaScript ES6+ vanilla — cero dependencias
- Web APIs: Canvas, Clipboard, localStorage, Service Worker, Blob
- Tipografías: IM Fell English · Crimson Pro · Courier Prime (Google Fonts)

---

## Instalación local

```bash
git clone https://github.com/TU_USUARIO/necronomicon404.git
cd necronomicon404

# Opción A — abrir directamente (sin PWA offline)
open index.html

# Opción B — servidor local (con PWA, recomendado)
npx serve .
# o
python3 -m http.server 8080
# luego abre http://localhost:8080
```

---

## Publicar en GitHub Pages

```bash
# 1. Crear repo en GitHub (nombre: necronomicon404)

# 2. Subir el proyecto
git init
git add .
git commit -m "feat: NECRONOMICON 404 v1.0"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/necronomicon404.git
git push -u origin main

# 3. Activar GitHub Pages
# Settings → Pages → Source: Deploy from branch → main / (root) → Save

# URL resultante: https://TU_USUARIO.github.io/necronomicon404/
```

El archivo `.nojekyll` en la raíz del proyecto evita que GitHub Pages procese el sitio con Jekyll, lo que podría ignorar archivos o rutas. Es necesario y ya está incluido.

---

## Estructura del proyecto

```
necronomicon404/
├── index.html        # Estructura HTML completa (todas las secciones)
├── style.css         # Sistema de diseño, tokens, responsive
├── app.js            # Datos, lógica, renderizado, interactividad
├── sw.js             # Service Worker v3 — cache + offline
├── manifest.json     # PWA manifest con iconos SVG reales
├── icon-192.svg      # Icono PWA 192×192
├── icon-512.svg      # Icono PWA 512×512
├── .nojekyll         # Necesario para GitHub Pages
├── .gitignore        # Excluye .DS_Store y archivos temporales
├── README.md         # Este archivo
└── LICENSE           # MIT
```

---

## Autores del género incluidos

Todos en **dominio público** en la mayoría de jurisdicciones:

H.P. Lovecraft · Arthur Machen · Algernon Blackwood · William Hope Hodgson · M.R. James · Ambrose Bierce · Robert W. Chambers · Lord Dunsany

---

## Easter eggs

Hay al menos tres secretos en la aplicación. Pistas:

- Un código de videojuego clásico de los 80 desbloquea un fragmento de nivel Sigma
- El sigilo de la portada responde a la insistencia (intenta 5 veces)
- El logo de la navegación tiene memoria a corto plazo
- La consola del navegador tiene un mensaje

---

## Roadmap

- [ ] Modo lector de página con animación de paso de hoja
- [ ] Mapa procedural de los Umbrales en SVG/Canvas
- [ ] Sección de relatos completos en dominio público (con texto íntegro)
- [ ] Sistema de notas propias del usuario (anotaciones en los márgenes)
- [ ] Versión en inglés
- [ ] Audio ambient con Web Audio API
- [ ] Generador de portadas de grimorio (SVG procedural)

---

## Licencia

MIT — ver `LICENSE`.

El contenido literario original (textos del grimorio, entidades, ritos) es obra del autor del repositorio bajo los mismos términos. Los textos históricos de referencia son de dominio público y están debidamente atribuidos en la aplicación.

---

*El grimorio no garantiza que lo que encuentres en él no te haya encontrado antes a ti.*
