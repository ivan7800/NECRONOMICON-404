# Seguridad — NECRONOMICON 404

## Modelo de seguridad

NECRONOMICON 404 es una aplicación web estática sin backend, sin cuentas de usuario y sin envío de datos propios a servidores de la aplicación. La persistencia se limita a `localStorage` del navegador.

## Endurecimiento incluido

- Política CSP mediante metaetiqueta para limitar scripts a origen propio.
- `referrer` en modo `no-referrer`.
- Sin `eval`, `Function` dinámico ni dependencias JavaScript externas.
- Notas de usuario renderizadas con APIs DOM seguras, no con `innerHTML`.
- Búsqueda global con resaltado seguro mediante nodos de texto y `<mark>`.
- Service Worker limitado a peticiones `GET` y assets locales/cacheables.

## Límites conocidos

- La CSP por metaetiqueta es útil en GitHub Pages, pero una cabecera HTTP real sería más fuerte si se aloja en servidor propio.
- `localStorage` no debe usarse para secretos ni información sensible.
- Las fuentes de Google Fonts implican una petición externa cuando hay conexión. Si se quiere una edición 100% offline/privada, hay que sustituirlas por fuentes locales o usar solo fallbacks del sistema.
