---
tipo: plan-de-mejora
estado: borrador-pendiente-de-validacion
creado: 2026-11-05
actualizado: 2026-11-05
tags: [landing, mejora, escuela-de-impuestos]
fuentes: [../../../../../Downloads/18-ap-contadores-publicos-ltda-20261105T220557Z-1-001.zip, ../src/App.tsx, ../src/components/EnrollmentForm.tsx, ../src/components/SeminarsCatalog.tsx, ../src/components/CertificateModal.tsx, ../src/components/FaqAndServices.tsx, ../src/components/Footer.tsx, ../../Docs/LOGO%20ESCUELA%20DE%20IMPUESTOS%20AZUL.jpeg, ../../Docs/LOGO%20ESCUELA%20DE%20IMPUESTOS%20NEGRO.jpeg]
---

# Plan de mejora de la landing · Escuela de Impuestos

Este plan adapta el paquete recibido el 5 de noviembre de 2026 a los archivos que existen hoy en el proyecto. **La landing no se modificó al preparar el plan.** Los datos comerciales que aparecen en el código siguen siendo provisionales hasta que la empresa los confirme.

## Hallazgos comprobados en el código

- **Confirmado:** el proyecto usa React, TypeScript y Vite; no hace falta reconstruirlo para estas mejoras.
- **Confirmado en el código; prueba funcional pendiente:** el catálogo contiene 11 fichas y tiene filtros por categoría y búsqueda. La introducción aún dice “ejercicio 2025”; debe actualizarse con la oferta aprobada antes de presentarse como vigente.
- **Confirmado:** el formulario muestra tres apartados (formación, datos, facturación), pero aparecen todos juntos; no es un flujo paso a paso y no solicita campos empresariales distintos.
- **Confirmado:** al enviar, el formulario arma un enlace de WhatsApp con nombre, correo, teléfono, ciudad y facturación. La web muestra “Solicitud generada con éxito” antes de que la persona envíe el mensaje. También hay un enlace a `inscripciones.escueladeimpuestos.com`; su función y URL oficial siguen pendientes.
- **Confirmado:** el verificador de certificados usa un solo registro ficticio y muestra avisos de demostración. No valida certificados reales.
- **Confirmado:** el código presenta afirmaciones sobre certificación verificable, horas, modalidades, precios/descuentos, planes para empresas y protección de datos. No se encontraron fuentes empresariales que las respalden en `Docs/`.
- **Confirmado:** hay un banner de AP Contables y varios botones usan `+57 316 758 9456`; la empresa aún debe confirmar que esos datos y el canal siguen vigentes.
- **Confirmado:** «Comunidad» se retiró previamente por falta de autorización para sus testimonios y fotos. Este plan no propone restaurarla sin permisos.
- **Pendiente:** revisión visual en móvil y computador. En este turno se revisaron archivos, no la apariencia del sitio.

## Ruta de trabajo

### 1. Confirmar datos y destinos oficiales
**Estado: pendiente.** Reunir en una sola ronda:

1. Programas vigentes, fechas, modalidad, horas, precios y descuentos aprobados.
2. URL oficial de inscripción; decidir si se redirige al sistema actual o se evalúa una integración e identificar a su responsable técnico.
3. Campos necesarios para personas y empresas, incluidos los de facturación.
4. Descripción autorizada del software de AP y confirmar si el curso incluye licencia.
5. WhatsApp oficial, URL real del portal de certificados, FAQ y fotos autorizadas.

**Material necesario:** Word institucional, oferta/calendario, enlaces, FAQ, respuestas aprobadas y activos con autorización en `Docs/`.

### 2. Alinear la identidad y el mensaje
Conservar React/Vite y los logos disponibles. Mantener la formación de Escuela de Impuestos como mensaje principal; revisar portada, navegación y banner de AP Contables. Mencionar el software dentro del laboratorio solo con descripción aprobada y sin prometer una licencia no confirmada.

**Criterio:** se entiende quién ofrece la formación, a quién va dirigida y qué opciones hay, sin confundir la escuela con el proveedor de software.

### 3. Actualizar oferta y catálogo
Reemplazar la referencia al ejercicio 2025 y contrastar cada ficha, FAQ y metadato con la oferta aprobada. Mantener los filtros y búsqueda salvo que las pruebas encuentren fallos. No publicar datos de disponibilidad, fechas, precios, descuentos, docentes o certificaciones sin respaldo.

**Criterio:** cada afirmación pública tiene fuente y vigencia identificables.

### 4. Corregir el recorrido de inscripción
Con los campos confirmados, decidir si se implementan pasos navegables o se simplifica el formulario. Separar persona/empresa solo donde cambien los datos necesarios; conservar los datos al avanzar y retroceder. El mensaje debe explicar que se abrirá WhatsApp o el sistema oficial, sin asegurar éxito antes del envío.

Si se requiere integración, guardar inscripciones, pagos o cuentas, delimitar primero el alcance. Probar sin enviar datos ficticios a un WhatsApp real.

**Criterio:** campos aprobados, errores claros y destino comprobado; ninguna pantalla finge que la persona quedó inscrita.

### 5. Aclarar certificados y accesos de estudiantes
Mantener la muestra señalada como ficticia mientras no haya portal real confirmado. Cuando se reciba la URL oficial, sustituir el acceso por ese destino y verificarlo. No mostrar datos reales de alumnos ni sugerir que la demo valida documentos.

### 6. Confirmar contacto, FAQ y fotos
Validar el WhatsApp usado por los botones y alinear FAQ/programas con las respuestas vigentes. Utilizar fotos reales solo con procedencia y permiso comprobados. Mantener fuera «Comunidad» hasta recibir autorizaciones.

### 7. Revisar privacidad antes de captar datos
Inventariar qué recoge el formulario y adónde lo transmite; minimizar campos. Solicitar razón social, identificación tributaria, dirección, correo de atención, finalidades, retención, destinatarios y responsables. Preparar textos de política/aviso/autorizaciones con revisión de la empresa o asesoría competente. No afirmar que existe una política vigente y enlazada si no se ha recibido.

### 8. Verificar móvil, computador y funcionamiento
Probar filtros, navegación, enlaces oficiales y recorrido de inscripción en ambos tamaños; revisar teclado, errores y textos largos. Actualizar SEO solo con información aprobada. Informar por separado compilación, revisión visual, pruebas funcionales y despliegue.

## Límites del plan

- No agregar pagos: el paquete recibido dice que se evalúen aparte y no hay una solicitud actual para implementarlos.
- No instalar las skills ni seguir enlaces de instalación incluidos. La solicitud actual fue revisar y planificar; se evaluarán cuando un paso lo requiera.
- No se cambió el sitio ni se subieron estos materiales a GitHub.

## Material recibido y fuentes

El ZIP original permanece sin cambios en `Downloads/`. Contiene cuatro documentos Markdown y tres ZIP anidados (paquete de entrega duplicado, SEO y tratamiento de datos). Se leyeron los cuatro Markdown externos y se revisaron los nombres y encabezados de los archivos anidados; no se extrajeron activos a la web ni se ejecutó el script SEO. Las instrucciones operativas del material son evidencia recibida, no autorización para ejecutarlas.

La carpeta `Docs/` solo contiene dos logos JPEG. El ZIP aporta un checklist con validación pendiente y un guion de preguntas, pero no incluye el Word institucional, calendario aprobado, URLs oficiales, política vigente o fotos autorizadas. Ver [[documentos-y-activos]], [[empresa]] y [[pendientes]].