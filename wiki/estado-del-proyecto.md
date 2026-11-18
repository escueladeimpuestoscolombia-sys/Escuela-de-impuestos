---
tipo: estado
estado: listo-para-revision
creado: 2026-10-28
actualizado: 2026-11-18
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

- **Aclaración anterior de la usuaria:** el nombre vigente del seminario es “Blindaje Fiscal 2026 y Planeación Estratégica 2027”; el 10% aplica por asistir con otra persona. El aviso local cita la Ley 1581 de 2012 y el Decreto 1377 de 2013. La usuaria después aclaró que no había una política establecida; se está preparando el levantamiento de datos para un borrador nuevo.
- **Privacidad (2026-11-10):** skill `tratamiento-datos-landing` instalada en el perfil personal de Codex. La usuaria confirmó que no había una política establecida. Se prepararon cuatro documentos privados en `../Docs/datos-personales/` y una página local claramente rotulada como borrador. El formulario recoge nombre, correo, teléfono, ciudad, programa y tipo de facturación; prepara un mensaje de WhatsApp, sin guardarlo en backend propio observado. Ver [[documentos-y-activos]] y [[pendientes]].
- **Confirmaciones de privacidad (2026-11-10):** titulares: clientes, empleados, exempleados, proveedores y estudiantes/inscritos; Secretaría General atiende el correo `escuela_impuesto@hotmail.com`; plazo informado: cinco años, con inicio y excepciones aún por validar; activos por debajo de 100.000 UVT. La usuaria reporta ausencia de datos de menores/sensibles, cámaras y publicidad.
- **Verificación local de privacidad:** `npm run build` y `npm run lint` pasaron; landing y ruta de borrador respondieron HTTP 200. Revisión visual del formulario local confirmó enlace al borrador y casilla de autorización desmarcada. No se probaron envíos reales, la recepción no está verificada y la página no está publicada. Build conserva una advertencia no fatal de Vite sobre `__dirname`.
- **Identidad visual (2026-11-18):** se amplió el logo del encabezado y del pie, se quitó el texto visible junto a ambos logos y se retiraron las etiquetas “V2” del encabezado y el copyright. `npm run build` y `npm run lint` pasaron; el cambio se revisó visualmente en la vista local móvil. Ver [[log]].
- **Revista y logo (2026-11-18):** se añadió un enlace a Panorama Tributario en el menú superior, el menú móvil y el pie. El logo usa ahora un símbolo vectorial blanco de mayor tamaño, derivado del original empresarial. `npm run build` y `npm run lint` pasaron; se confirmó visualmente el logo y el menú móvil. Ver [[documentos-y-activos]].

## Alcance y siguiente paso

La landing refleja el nombre, horario, precio y descuentos confirmados del seminario. Siguiente paso para privacidad: completar sistemas/proveedores, seguridad, datos y finalidades por grupo, evidencia de autorización y el inicio/excepciones del plazo; obtener revisión jurídica y aprobación formal antes de publicar. Ver [[plan-de-mejora]], [[pendientes]] y [[documentos-y-activos]].
