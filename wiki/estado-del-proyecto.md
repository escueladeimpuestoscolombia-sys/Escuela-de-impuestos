---
tipo: estado
estado: listo-para-revision
creado: 2026-10-28
actualizado: 2026-11-05
tags: [landing, proyecto]
fuentes: [../package.json, ../package-lock.json, ../README.md, ../.gitignore, ../vite.config.ts, plan-de-mejora.md]
---

# Estado del proyecto

## Proyecto observado

- **Confirmado por los archivos locales:** existe una landing en React 19, TypeScript y Vite; la carpeta de la aplicación y raíz de Git es `escuela-de-impuestos/`.
- **Confirmado por Git al iniciar:** rama local `main`, limpia y alineada con `origin/main`; el remoto configurado es `https://github.com/escueladeimpuestoscolombia-sys/Escuela-de-impuestos.git`.
- **Confirmado por los archivos:** scripts disponibles `npm run dev`, `npm run build`, `npm run preview` y `npm run lint`.
- **Confirmado por el entorno:** Node.js `v24.22.1`, npm `11.19.1` y Git `2.56.0.windows.4` disponibles. Se instalaron las dependencias declaradas, se generó `package-lock.json` y se alineó `esbuild` a `^0.28.2` para cumplir el peer opcional de Vite 8.3.5.
- **Pendiente:** no se encontró el ZIP original de Google AI Studio. La persona usuaria confirmó que no lo tiene por ahora; se trabaja sobre la carpeta extraída disponible.

## Ejecución y publicación

- Vista local iniciada con `npm run dev`: `http://127.0.0.1:3000/`. El 5 de noviembre de 2026 se levantó de nuevo en esta sesión y respondió HTTP 200.
- **Compila:** `npm run build` pasó; Vite advierte sobre `__dirname` en `vite.config.ts`, sin impedir el build.
- **Chequeo de TypeScript:** `npm run lint` pasó.
- **Cambio reciente:** retirada la sección «Comunidad» y su referencia interna porque sus testimonios y fotos no tenían autorización confirmada; no se añadieron reemplazos.
- Tras el cambio: `npm run build` pasó con 35 módulos transformados y `npm run lint` pasó. Persiste solo la advertencia de Vite sobre `__dirname`.
- **Revisión visual parcial:** la tarjeta del seminario se inspeccionó en la vista local a unos 808 px de ancho. Falta revisarla en un móvil estrecho y escritorio ancho.
- **Prueba funcional pendiente:** el formulario, según su código actual, compone un mensaje y abre WhatsApp; no se ha verificado recepción ni se deben enviar datos personales a un canal real.
- **Repositorio sincronizado:** el 5 de noviembre de 2026 el commit `002a3e9` se subió a `origin/main`; `main` quedó alineada con GitHub. La publicación en un hosting público sigue sin verificarse.
- **Pendiente:** confirmar el despliegue del sitio público. Publicar código en GitHub no demuestra que la página esté desplegada.

- **Plan y alcance:** [[plan-de-mejora]]. La tarjeta del seminario se implementó y subió a GitHub; no se enviaron datos de inscripción. Falta la URL/documento de la política y la revisión visual móvil.
- **Estado de los archivos:** código y wiki sincronizados con `origin/main`. La vista de hosting no está verificada.

- **Última aclaración de la usuaria:** el nombre vigente es “Blindaje Fiscal 2026 y Planeación Estratégica 2027”; el descuento del 10% es para asistir con otra persona y reemplaza el de clientes antiguos. El texto del aviso de datos se precisó con la Ley 1581 de 2012 y el Decreto 1377 de 2013. Falta recibir URL o archivo de la política para enlazarla.

## Alcance y siguiente paso

La landing refleja el nombre, horario, precio y descuentos confirmados del seminario. Siguiente paso: compartir el enlace o archivo de la Política de Tratamiento de Datos Personales para revisarla y enlazarla; después, hacer revisión visual en móvil y escritorio. Ver [[plan-de-mejora]] y [[pendientes]].
