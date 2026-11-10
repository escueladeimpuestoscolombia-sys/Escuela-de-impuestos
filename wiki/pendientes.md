---
tipo: pendientes
estado: abierto
creado: 2026-10-28
actualizado: 2026-11-10
tags: [pendientes, validacion]
fuentes: [documentos-y-activos.md, empresa.md, estado-del-proyecto.md, plan-de-mejora.md, ../src/components/EnrollmentForm.tsx, ../src/components/CertificateModal.tsx]
---

# Pendientes

## Material y validación empresarial

- **Pendiente:** no está el ZIP original de Google AI Studio. La usuaria confirmó que no lo tiene; colocarlo aquí si aparece para conservarlo y compararlo sin sobrescribir la carpeta extraída.
- **Pendiente:** validar el resto de la oferta, horas, modalidad, acreditación/certificación y resultados con fuentes empresariales; la tarjeta del seminario activo ya está actualizada en local.
- **Pendiente si se solicita reintroducirla:** conseguir testimonios aprobados por sus autores y fotografías con derechos de uso confirmados para la sección Comunidad, que se retiró de la versión actual.
- **Pendiente:** revisar expresiones como “acreditación”, “certificación”, “verificada”, “inscripción generada con éxito”, “actualización en tiempo real” y las afirmaciones de cumplimiento legal antes de presentarlas como hechos.
- **Pendiente:** enlazar el botón principal de certificados al portal oficial; mientras tanto, el modal local sigue siendo una demostración ficticia.

## Aclaraciones que bloquean el plan

- **Confirmado por la usuaria (2026-11-10):** no había política establecida. El DOCX de Descargas se conserva como referencia sin modificar ni publicar. Fecha solicitada para el nuevo borrador: `10/11/2026`. NIT proporcionado: `900.262.374`; domicilio: Manzana 20 casa 19, barrio Casimiro Maestre, Valledupar; correo para consultas/reclamos: `escuela_impuesto@hotmail.com`.
- **Confirmado por la usuaria:** la política abarca todas las actividades de AP Contadores. Los titulares empresariales indicados son clientes, empleados, exempleados y proveedores; para la Escuela, los datos se solicitan para certificaciones o inscripciones. Plazo informado: cinco años; falta precisar sistemas, finalidades/datos por grupo y desde qué fecha se cuenta.
- **Confirmado por la usuaria:** usar el NIT `900.262.374` tal como fue entregado, sin dígito de verificación; titulares: clientes, empleados, exempleados y proveedores, además de estudiantes/inscritos; no se tratan datos de menores o sensibles, no hay cámaras y no se envía publicidad.
- **Confirmado por la usuaria (2026-11-10):** Secretaría General atenderá consultas y reclamos en `escuela_impuesto@hotmail.com`; plazo informado: cinco (5) años; activos por debajo de 100.000 UVT. El plazo necesita fecha inicial y revisión de obligaciones que exijan conservación distinta.
- **Pendiente antes de adoptar/publicar el borrador:** canales, sistemas, proveedores y ubicaciones de tratamiento; datos y finalidades exactas por grupo; medidas de seguridad; constancia de autorizaciones; inicio y excepciones del plazo; revisión legal y aprobación formal. No completar estos datos por inferencia.
- **Pendiente:** confirmar el dominio y la URL pública final solo después de validación. La página disponible por ahora es una ruta local expresamente marcada como borrador.
- **Excluido:** autorización DOCX de FRIOCOSTA S.A.S. por pertenecer a otra empresa. El PDF de nombre similar no se ha leído y no se usará hasta confirmar pertinencia.
- **Confirmado por la usuaria:** AP Contadores Públicos Ltda. es propietaria de Escuela de Impuestos. El ZIP recibido corresponde al mismo proyecto; se revisó sin ejecutar sus archivos. La usuaria confirmó además el seminario activo, destinos oficiales, WhatsApp y relación con el software. Sobre privacidad, primero indicó que existía política y luego aclaró que no estaba establecida; se prepara un borrador nuevo.

## Entorno y comprobaciones

- **Comprobado:** instalación npm terminada; `npm run build` y `npm run lint` pasaron. Build muestra una advertencia de Vite sobre `__dirname` en `vite.config.ts`.
- **Parcialmente revisado:** la tarjeta del seminario se inspeccionó visualmente en la vista local, con unos 808 px de ancho. Pendiente probar móvil estrecho y escritorio ancho.
- **Pendiente:** comprobar el clic de los enlaces desde la vista local y el comportamiento móvil. No enviar datos de prueba a WhatsApp real.
- **Pendiente:** comprobar que el sitio público responde y si el proveedor despliega automáticamente desde `main`; el push por sí solo no verifica el sitio publicado.

## Cambio aplicado

Se retiró la sección **Comunidad** de la landing al no tener autorización confirmada para sus testimonios ni fotos. No se añadió material de reemplazo.

## Privacidad observada

- La landing pide nombre, correo, teléfono, ciudad, programa y tipo de facturación. Al continuar, arma un mensaje prellenado de WhatsApp con esos datos; no se verificó recepción.
- El formulario externo de inscripción es un destino separado y recoge campos adicionales; no se envió información. Fuentes externas de la página incluyen Google Fonts y recursos de imagen alojados en `googleusercontent.com`.
- No hay casilla de autorización en el formulario local ni un enlace a la política. El botón del pie “Privacidad & Habeas Data” lleva a la sección institucional.
- El modal de certificados acepta el código de muestra `DEMO-0001`; es una demostración local, no una búsqueda externa.

## Datos recibidos para el borrador de política

- **Confirmado por la usuaria:** responsable: AP Contadores Públicos Ltda.; fecha solicitada: 10/11/2026; NIT indicado: 900.262.374; domicilio: Manzana 20 casa 19, barrio Casimiro Maestre, Valledupar; correo para consultas/reclamos: escuela_impuesto@hotmail.com.
- **Pendiente:** validar dígito de verificación del NIT y cargo/área responsable. La usuaria indicó alcance de todas las actividades empresariales, pero describió como finalidad de los datos de la Escuela la inscripción y certificación; falta caracterizar otras actividades de AP Contadores.
- **Aclarado por la usuaria:** se usará el NIT tal como fue escrito, sin dígito de verificación. La política incluye clientes, empleados, exempleados y proveedores, además de inscripciones/certificaciones de la Escuela. No se tratan datos de menores ni sensibles, no hay cámaras ni publicidad.
- **RNBD pendiente:** confirmar si los activos totales superan 100.000 UVT. La SIC identifica ese umbral para sociedades obligadas a registrar sus bases; revisar la fuente oficial incluida en [[documentos-y-activos]].

## Avance local del borrador (2026-11-10)

- **Hecho:** se crearon cuatro documentos privados en `../Docs/datos-personales/`; los originales anteriores permanecen intactos. Se actualizó la lista de implementación con las respuestas recientes.
- **Hecho:** la landing local añade un vínculo al borrador, aviso explícito de borrador y casilla requerida sin marcar. La casilla aún requiere prueba funcional, teclado/móvil y validación del flujo sin enviar datos a WhatsApp.
- **No publicado:** quedan marcadores `[COMPLETAR]`, revisión jurídica y aprobación empresarial. No se subieron estos cambios a GitHub.
