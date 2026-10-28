---
tipo: estado
estado: listo-para-revision
creado: 2026-10-28
actualizado: 2026-10-28
tags: [landing, proyecto]
fuentes: [../package.json, ../package-lock.json, ../README.md, ../.gitignore, ../vite.config.ts]
---

# Estado del proyecto

## Proyecto observado

- **Confirmado por los archivos locales:** existe una landing en React 19, TypeScript y Vite; la carpeta de la aplicación y raíz de Git es `escuela-de-impuestos/`.
- **Confirmado por Git al iniciar:** rama local `main`, limpia y alineada con `origin/main`; el remoto configurado es `https://github.com/escueladeimpuestoscolombia-sys/Escuela-de-impuestos.git`.
- **Confirmado por los archivos:** scripts disponibles `npm run dev`, `npm run build`, `npm run preview` y `npm run lint`.
- **Confirmado por el entorno:** Node.js `v24.22.1`, npm `11.19.1` y Git `2.56.0.windows.4` disponibles. Se instalaron las dependencias declaradas, se generó `package-lock.json` y se alineó `esbuild` a `^0.28.2` para cumplir el peer opcional de Vite 8.3.5.
- **Pendiente:** no se encontró el ZIP original de Google AI Studio. La persona usuaria confirmó que no lo tiene por ahora; se trabaja sobre la carpeta extraída disponible.

## Ejecución y publicación

- Vista local iniciada con `npm run dev`: `http://127.0.0.1:3000/`.
- **Compila:** `npm run build` pasó; Vite advierte sobre `__dirname` en `vite.config.ts`, sin impedir el build.
- **Chequeo de TypeScript:** `npm run lint` pasó.
- **Revisión visual pendiente:** el shell no pudo abrir una conexión HTTP local (timeout) y Chrome headless terminó antes de guardar una captura. Por ello no se verificaron escritorio, móvil, navegación ni desbordamientos visualmente.
- **Prueba funcional pendiente:** el formulario, según su código actual, compone un mensaje y abre WhatsApp; no se ha verificado recepción ni se deben enviar datos personales a un canal real.
- **Pendiente:** publicar estos cambios locales en el remoto autorizado y verificar el resultado de `git push`. Tener remoto GitHub configurado no demuestra que el sitio público esté desplegado.

## Alcance y siguiente paso

No se solicitó un cambio concreto de texto o diseño para la landing. Se configurará la memoria y el entorno sobre el proyecto existente sin rehacer el sitio. Ver [[pendientes]] para la primera mejora sugerida y las validaciones de contenido.
