---
tipo: log
estado: vigente
creado: 2026-10-28
actualizado: 2026-10-28
tags: [log, cronologia]
fuentes: [../AGENTS.md, documentos-y-activos.md, estado-del-proyecto.md]
---

# Registro cronológico

## [2026-10-28] configuración inicial | Escuela de Impuestos

- Inventariada la carpeta empresarial y la app existente. `Docs/` contiene dos logos JPEG; la aplicación React + TypeScript + Vite está en `escuela-de-impuestos/`.
- No se encontró ZIP original. La usuaria confirmó que no lo tiene por ahora; se trabaja sobre la carpeta extraída disponible.
- Se inspeccionaron visualmente ambos logos y el icono del sitio. No se copiaron activos ni se modificó el diseño.
- Git inició limpio en `main`, alineado con el remoto GitHub configurado. El archivo local `src/data/certificates.pre-publish.private.local.ts` está ignorado; se excluye.
- Registrados como provisionales los textos de la landing hasta confirmarlos con la empresa. Se documentaron testimonios/fotos pendientes de autorización y el formulario que abre WhatsApp.
- Instalación, build, lint, vista visual y publicación quedan pendientes de resultado al completar esta configuración.

## [2026-10-28] entorno local preparado | Escuela de Impuestos

- La primera instalación detectó incompatibilidad entre `esbuild@^0.25.0` y el peer opcional solicitado por Vite 8.3.5. Se cambió la dependencia directa a `^0.28.2`, y npm instaló 180 paquetes y creó `package-lock.json`.
- `npm run build` terminó correctamente (36 módulos); Vite emitió una advertencia de compatibilidad futura por `__dirname` en `vite.config.ts`. `npm run lint` terminó correctamente.
- Iniciada la vista local en `http://127.0.0.1:3000/`. La lectura HTTP del shell está limitada por permisos de socket; queda pendiente la revisión visual en navegador.
- `git fetch origin` confirmó que `main` no tiene commits adelantados ni atrasados respecto a `origin/main`. Los únicos cambios locales son `package.json`, `package-lock.json`, `AGENTS.md` y `wiki/`; dependencias, `dist/` y el archivo local ignorado de certificados están fuera del staging.
- La publicación autorizada al remoto sigue pendiente.

## [2026-10-28] intento de vista previa | Escuela de Impuestos

- El proceso de Vite continúa iniciado en `http://127.0.0.1:3000/`, pero `Invoke-WebRequest` agotó el tiempo de espera y la captura de Chrome headless terminó antes de producir una imagen. No se declara revisión visual ni funcional.
- El intento no modificó código de la landing. El motivo y la limitación quedaron asentados en [[estado-del-proyecto]].

## [2026-10-28] publicación en GitHub | Escuela de Impuestos

- Commit `0e47a16` (`Configura agente y wiki de la landing`) enviado a `origin/main` tras comprobar que la rama remota estaba al día.
- Git confirmó `HEAD` y `origin/main` iguales, sin cambios pendientes. Se publicaron el agente, la wiki, el archivo de bloqueo y el ajuste de `esbuild`; `Docs/`, dependencias instaladas, `dist/` y el archivo local privado quedaron excluidos.
- El despliegue del sitio público sigue sin comprobarse.

## [2026-10-28] sincronización de estado y wiki | Escuela de Impuestos

- Se envió a `origin/main` el commit `186b3b1`, con el resultado de compilación/lint, el bloqueo de revisión visual y la confirmación del primer envío.
- Verificación posterior de Git: `HEAD` y `origin/main` coincidían; árbol de trabajo limpio. El sitio público aún no se ha verificado.

## [2026-10-28] retirada de contenido sin autorización | Escuela de Impuestos

- Por indicación de la usuaria, se retiró de la landing la sección «Comunidad», incluidos los tres testimonios genéricos y las tres fotografías remotas cuya autenticidad, autorización y procedencia no estaban confirmadas.
- No se añadieron reemplazos. Los logos y el resto de las secciones se conservaron. El inventario marca el contenido anterior como recuperable desde el historial Git, no como material vigente.
- Build, lint, revisión visual, publicación de este cambio y estado del sitio público quedan pendientes de comprobación.
- La nueva compilación terminó correctamente (35 módulos); `npm run lint` también pasó. Sigue pendiente la revisión visual: el acceso local y la captura automatizada no funcionaron.

## [2026-11-05] publicación | Reintento de sincronización
- Se intentó subir main a origin y GitHub confirmó Everything up-to-date; no había cambios de la página pendientes en el remoto.
- El destino es el repositorio GitHub autorizado. No se verificó una URL de hosting ni el despliegue público; la publicación del repositorio no confirma ese despliegue.

## [2026-11-05] vista-local | Inicio de la landing
- Se levantó el servidor de desarrollo con 
pm run dev -- --host 0.0.0.0 en el puerto 3000.
- http://127.0.0.1:3000/ respondió HTTP 200. No implica revisión visual ni prueba funcional del formulario.

## [2026-11-05] fuentes | Revisión del paquete y plan de mejora
- Se inventarió el ZIP adjunto desde Downloads sin modificarlo ni extraerlo; se leyeron los cuatro Markdown externos y se revisaron nombres y encabezados de los archivos anidados. No se ejecutó código ni se instalaron skills porque la petición fue revisar y planificar.
- Se confirmó que el paquete corresponde a Escuela de Impuestos / AP Contadores. Se contrastó el plan recibido con el código de la landing y se creó [[plan-de-mejora]].
- La landing no se modificó. Quedan por confirmar datos comerciales, destinos oficiales, permisos de imágenes y datos para el tratamiento de información.

## [2026-11-05] empresa | Propiedad confirmada y plan actualizado
- La usuaria confirmó que Escuela de Impuestos es propiedad de AP Contadores Públicos Ltda.; se actualizó [[empresa]] y se retiró esa relación de la lista de dudas.
- Se afinó [[plan-de-mejora]] para conservar cinco preguntas sobre oferta, destinos, campos/privacidad, software y contacto/activos. El plan sigue pendiente de esos datos; no se modificó la página.

## [2026-11-05] oferta | Confirmaciones y discrepancias del sistema
- La usuaria confirmó el seminario, horario, valor, descuentos previstos, URLs oficiales, política vigente, titularidad/uso del software AP y WhatsApp. Se actualizaron [[empresa]] y [[plan-de-mejora]].
- Consulta pública sin envío: el sistema de inscripción respondió HTTP 200 y mostró campos para datos personales, descuento y facturación; el portal de certificados también respondió HTTP 200. El formulario de inscripción no muestra un enlace visible a la política.
- Diferencias por resolver antes de publicar: el sistema llama al evento “Blindaje Fiscal 2026 y Planeación Estratégica 2027”, mientras la usuaria lo llama “Cierre Fiscal”; y su 10% es para asistir con otra persona, distinto al 10% para clientes antiguos informado por la usuaria. La página no se modificó.
## [2026-11-05] fuentes | Oferta, sistemas y privacidad confirmados
- La usuaria confirmó horario, valor, descuentos previstos, vigencia de política de datos, uso temporal de AP Contables y WhatsApp oficial; se integraron en [[empresa]] y [[plan-de-mejora]].
- Consulté en modo de solo lectura el formulario de inscripción y el portal de certificados; ambos respondieron HTTP 200. El formulario externo muestra opciones de descuento y el nombre del seminario diferentes a los datos entregados por la usuaria. No se enviaron datos.
- Se registró como pendiente la conciliación del nombre/descuentos y la URL de la política. No se tocó la landing.
## [2026-11-05] landing | Oferta del seminario confirmada
- La usuaria confirmó el nombre “Blindaje Fiscal 2026 y Planeación Estratégica 2027”, la fecha, horario, valor y descuentos. Se añadió una tarjeta destacada al catálogo con enlace al portal oficial y se retiró la mención caducada al ejercicio 2025.
- La usuaria indicó que existe política de datos y compartió su marco normativo, pero no su texto ni URL; queda pendiente revisarla antes de enlazarla.
- Se actualizaron [[empresa]], [[plan-de-mejora]] y [[pendientes]]. No se envió formulario ni se publicaron cambios.
## [2026-11-05] landing | Tarjeta del seminario implementada
- Se añadió la tarjeta de “Blindaje Fiscal 2026 y Planeación Estratégica 2027” con horario, valor, descuentos y enlace de inscripción; se quitó la referencia 2025 de la introducción y se actualizó el copyright a 2026.
- `npm run build` y `npm run lint` pasaron; el servidor local respondió HTTP 200. La tarjeta se revisó visualmente en la vista local de unos 808 px; falta revisión en móvil estrecho y escritorio ancho.
- No se completó el formulario externo ni se enviaron datos. La URL/archivo de la política continúa pendiente.
## [2026-11-05] publicación | Actualización de la landing
- Se subió el commit `b4274c7` a `origin/main`; la rama local quedó sincronizada. Esto confirma la copia en GitHub, no el despliegue en un hosting.
- El servidor de vista previa local respondió HTTP 200; build y lint pasaron. La revisión visual de la tarjeta se hizo en la vista disponible (~808 px); móvil estrecho y escritorio ancho continúan pendientes.
## [2026-11-05] contenido | Aclaración de seminario y política de datos
- La usuaria confirmó que el nombre correcto es “Blindaje Fiscal 2026 y Planeación Estratégica 2027” y que el 10% aplica por asistir con otra persona; reemplaza al descuento para clientes antiguos. El contenido de la landing ya muestra esa información.
- Se precisó el aviso del formulario para referir la Política de Tratamiento de Datos Personales, la Ley 1581 de 2012 y el Decreto 1377 de 2013, de acuerdo con la usuaria. Sigue pendiente el enlace o archivo de la política empresarial.
- El commit `002a3e9` con estos cambios se subió a `origin/main`; la rama quedó sincronizada. La publicación en el hosting no se verificó.
## [2026-11-10] privacidad | Skill y fuentes revisadas
- Se instaló la skill `tratamiento-datos-landing` en el perfil personal de Codex a petición de la usuaria. El ZIP se revisó sin ejecutar código y quedó intacto.
- Se encontró en Descargas la política DOCX de AP Contadores Públicos Ltda.; conserva marcadores para datos identificativos y fecha, declara Valledupar mientras el pie local muestra Bogotá y trae texto genérico sobre datos empresariales. No se trató como política final publicable.
- Se revisó una autorización DOCX que identifica a FRIOCOSTA S.A.S.; se excluyó. El PDF de nombre similar queda sin revisar.
- Inventario local: el formulario recoge nombre, correo, teléfono, ciudad, programa y facturación y prepara un WhatsApp con esos datos; no contiene casilla de autorización ni enlace a la política. El pie dirige el botón de privacidad a la sección institucional. Se actualizaron [[documentos-y-activos]], [[estado-del-proyecto]] y [[pendientes]].
## [2026-11-10] privacidad | Datos iniciales para nuevo borrador
- La usuaria confirmó que no había una política establecida y pidió que el borrador nuevo lleve fecha 10/11/2026. Proporcionó NIT `900.262.374`, domicilio en Manzana 20 casa 19, barrio Casimiro Maestre, Valledupar, y el correo `escuela_impuesto@hotmail.com` para consultas y reclamos.
- Indicó que el alcance debe cubrir todas las actividades de AP Contadores; para la Escuela, los datos se solicitan para certificaciones o inscripciones. Falta precisar tratamientos de otras áreas, dígito de verificación del NIT, cargo responsable y otras prácticas.
- El DOCX previo queda como referencia no vigente; se conserva intacto. Se actualizaron [[empresa]], [[documentos-y-activos]], [[estado-del-proyecto]], [[pendientes]] y [[plan-de-mejora]]. Aún no se redactó la política.
## [2026-11-10] privacidad | Alcance y prácticas confirmadas
- La usuaria confirmó que el NIT se use sin dígito de verificación; el canal de consultas y reclamos es `escuela_impuesto@hotmail.com`; los grupos incluyen clientes, empleados, exempleados y proveedores, además de inscripciones/certificaciones de Escuela.
- La usuaria indicó que no se tratan datos de menores o sensibles, no hay videovigilancia ni envío de publicidad. Quedan pendientes área responsable, sistemas/terceros, conservación, seguridad y umbral de activos para RNBD.
- Se consultó la guía oficial de SIC sobre obligación RNBD: sociedades con activos superiores a 100.000 UVT. Se añadió a [[documentos-y-activos]]; no se evaluó la situación financiera de AP. No se redactó política todavía.
## [2026-11-10] privacidad | Borrador y ajustes locales preparados
- La usuaria confirmó el resumen del borrador, que Secretaría General atenderá las solicitudes, que el plazo informado es de cinco años y que AP no supera 100.000 UVT en activos. El inicio del plazo, sistemas/proveedores, seguridad y procesos detallados siguen pendientes.
- Se prepararon cuatro archivos privados bajo `../Docs/datos-personales/`: política, aviso, formatos de autorización y lista de implementación. No se modificaron originales ni se copiaron al repositorio.
- En la landing local se añadió una página independiente rotulada como borrador, un enlace en el pie y una casilla obligatoria sin marcar; el aviso dice que el mensaje solo se envía si la persona decide enviarlo por WhatsApp.
- Comprobaciones: `npm run build` y `npm run lint` pasaron; `/` y `/politica-de-datos.html` respondieron HTTP 200; inspección visual del formulario confirmó enlace y casilla desmarcada. No se envió información personal y no se probó recepción real. El build muestra una advertencia no fatal de Vite sobre `__dirname`.
- Los cambios permanecen locales y no se subieron a GitHub: quedan marcadores, validación legal y aprobación empresarial antes de publicar.
## [2026-11-18] identidad | Logo ampliado y marca simplificada
- Se amplió el logo del encabezado y del pie de página; se retiró el texto visible “Escuela de Impuestos” contiguo a ambos símbolos y se quitaron las menciones “V2” del encabezado y del copyright.
- `npm run build` y `npm run lint` pasaron. Se comprobó visualmente la cabecera móvil y el pie en la vista local `http://127.0.0.1:3001/`; el número V2 ya no aparece en los lugares indicados. El build mantiene la advertencia no fatal preexistente de Vite sobre `__dirname`.
- Los cambios quedaron locales; no se publicaron ni se subieron a GitHub.
## [2026-11-18] marca | Logo más visible y acceso a la revista
- A petición de la usuaria, se creó un activo vectorial aislado del símbolo blanco a partir de la identidad original y se amplió su presentación en encabezado y pie; se conserva la ausencia del nombre junto al logo y de “V2”.
- Se confirmó la página de Panorama Tributario como revista en línea de Escuela de Impuestos y se añadió el enlace externo al menú de escritorio, menú móvil y pie: `https://www.panoramatributario.com/`.
- `npm run build` y `npm run lint` pasaron. Revisión visual local: el símbolo blanco del logo se distingue con claridad en móvil; el menú móvil incluye “Revista Panorama Tributario”; el pie también incluye el enlace. No se abrió el enlace desde la landing, pero su destino fue consultado en modo de solo lectura.
- Los cambios permanecen locales; no se publicaron ni se subieron a GitHub.
