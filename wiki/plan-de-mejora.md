---
tipo: plan-de-mejora
estado: pendiente-de-alineacion-con-sistema-de-inscripcion
creado: 2026-11-05
actualizado: 2026-11-05
tags: [landing, mejora, escuela-de-impuestos]
fuentes: [../../../../../Downloads/18-ap-contadores-publicos-ltda-20261105T220557Z-1-001.zip, "https://inscripciones.escueladeimpuestos.com", "https://certificados.escueladeimpuestos.com/certificaciones.php", ../src/App.tsx, ../src/components/EnrollmentForm.tsx, ../src/components/SeminarsCatalog.tsx, ../src/components/CertificateModal.tsx, ../src/components/FaqAndServices.tsx, ../src/components/Footer.tsx, ../../Docs/LOGO%20ESCUELA%20DE%20IMPUESTOS%20AZUL.jpeg, ../../Docs/LOGO%20ESCUELA%20DE%20IMPUESTOS%20NEGRO.jpeg]
---

# Plan de mejora de la landing · Escuela de Impuestos

Adaptado al sitio real, al paquete recibido y a las confirmaciones de la usuaria. **La página no se ha modificado.** La propiedad de la marca, el contacto oficial, los destinos de inscripción/certificados, el software usado durante la formación y un seminario activo ya están confirmados.

## Estado observado

- **Confirmado:** la landing existente usa React, TypeScript y Vite; no hace falta reconstruirla.
- **Confirmado en el código; prueba funcional pendiente:** el catálogo contiene 11 fichas, filtros y búsqueda. La introducción todavía habla del ejercicio 2025.
- **Confirmado:** el formulario propio muestra tres apartados juntos, no como pasos navegables. Recoge nombre, correo, teléfono, ciudad y facturación; abre WhatsApp y anuncia “Solicitud generada con éxito” antes de que la persona envíe el mensaje.
- **Confirmado por lectura pública del sistema externo:** el registro de inscripciones respondió HTTP 200. Pide seminario y valor, nombre, cédula, celular, correo, dirección de residencia, ciudad, profesión/ocupación, descuento y comentario; si se factura a empresa, también nombre, NIT, dirección, teléfono y correo empresarial. No se completó ni envió.
- **Confirmado por lectura pública:** el sistema muestra el 21 de noviembre de 2026 un seminario virtual “BLINDAJE FISCAL 2026 Y PLANEACION ESTRATEGICA 2027”, valor 520000 e intensidad 8 horas. La usuaria lo llama “Seminario de Cierre Fiscal”; fecha, valor y horario informados coinciden en parte, pero el título difiere.
- **Discrepancia:** la usuaria indicó descuentos para egresados (40%), usuarios del software AP (30%) y clientes antiguos (10%). El sistema muestra egresados (40%), clientes AP Contables (30%), asistir con otra persona (10%) y ninguno. No se sabe si “clientes antiguos” equivale a “asistir con otra persona”, ni si se combinan descuentos.
- **Confirmado:** el portal de certificados respondió HTTP 200. El verificador local, en cambio, es una demostración ficticia con avisos visibles; no verifica certificados reales.
- **Confirmado por la usuaria:** AP Contadores Públicos Ltda. posee AP Contables y autoriza acceso al software durante la formación. El acceso debe presentarse como herramienta educativa temporal.
- **Confirmado por la usuaria:** WhatsApp oficial `+57 316 758 9456` y existencia de una política de datos. En el formulario externo consultado no se encontró un enlace visible a esa política.
- **Pendiente:** la usuaria tendrá FAQ e imágenes reales más adelante; ninguna foto está escogida todavía. «Comunidad» permanece retirada por falta de testimonios y fotos autorizados.
- **No probado:** no se envió ninguna inscripción, no se verificó recepción, y no se hizo revisión visual en escritorio o móvil.

## Hoja de ruta

### 1. Alinear seminario, nombre y descuentos

**Bloqueo actual.** Antes de cambiar la oferta visible, confirmar el nombre comercial exacto del evento y alinear las opciones de descuento del sistema con las vigentes. Definir si 10% por clientes antiguos reemplaza o coexiste con el descuento por asistir acompañado y si los descuentos se pueden combinar. Confirmar la moneda del valor $520.000; se presume COP por el contexto colombiano.

Con esa validación, actualizar el texto del seminario, fecha (21 de noviembre de 2026 según el registro externo), horario 8:00–12:00 y 14:00–18:00, modalidad virtual y valor. Usar el destino externo para inscribirse; no enviar datos desde el sitio como si se hubiera completado la inscripción.

**Criterio:** el nombre, valor, horario y descuentos coinciden entre landing y formulario oficial.

### 2. Renovar presentación manteniendo el proyecto

Conservar React/Vite, marca y logos existentes. Tomar como **propuesta provisional** el estilo ejecutivo, premium y minimalista sugerido en el ZIP. Mantener Escuela de Impuestos como protagonista y presentar AP Contables dentro del contexto pedagógico: quienes participan tienen acceso mientras dura la formación. Revisar el banner de AP para que no desplace el objetivo educativo.

**Criterio:** se entiende que AP Contadores es propietaria de Escuela de Impuestos y de AP Contables, y que la página promueve formación profesional.

### 3. Simplificar el recorrido de inscripción

Usar como destino principal `https://inscripciones.escueladeimpuestos.com`, ya confirmado. Evitar duplicar en el formulario local datos como cédula y dirección residencial si no hay una razón aprobada; preferir una llamada clara que lleve al sistema oficial. Corregir el mensaje de éxito prematuro del formulario local o retirarlo al simplificarlo.

**Criterio:** el botón lleva al sistema que registra la solicitud y la landing no promete una inscripción que todavía no ocurrió.

### 4. Llevar la consulta de certificados al portal real

Cambiar el acceso principal del modal ficticio a `https://certificados.escueladeimpuestos.com/certificaciones.php`. Puede conservarse una demo solo si sigue claramente identificada como ficticia y no confunde a quien busca validar un certificado real.

### 5. Enlazar la política vigente y revisar el flujo de datos

Recibir la URL o el archivo de la política, comprobar que corresponda a los datos que solicita el sistema externo y enlazarla desde la landing y junto al CTA de inscripción. La página externa pide cédula y dirección residencial además de datos de contacto y facturación. No redactar una segunda política ni afirmar que el flujo está cubierto hasta revisar el documento.

### 6. Completar FAQ y material visual cuando esté listo

Añadir respuestas que entregue la empresa. Incorporar fotos solo después de recibir los archivos y confirmar su autorización de uso. Mantener testimonios y sección «Comunidad» fuera hasta disponer de aprobaciones verificables.

### 7. Corregir contenidos restantes y SEO

Revisar la referencia desactualizada a 2025, afirmaciones de certificación, disponibilidad, modalidad, tarifas y planes empresariales contra fuentes aprobadas. Mantener los filtros existentes si pasan pruebas. Actualizar metadatos SEO con la oferta y datos institucionales vigentes.

### 8. Verificar antes de publicar

Comprobar en celular y computador: legibilidad, navegación, formularios, filtros, destinos, enlaces de WhatsApp y certificados, contenido largo y ausencia de desbordamientos. Distinguir compilación, revisión visual, prueba funcional y publicación. No enviar datos ficticios a canales reales.

## Preguntas que siguen abiertas

1. ¿El seminario que el sistema llama “Blindaje Fiscal 2026 y Planeación Estratégica 2027” es el mismo que llamas “Cierre Fiscal”? ¿Cuál nombre exacto debe mostrar la landing?
2. ¿Confirmas los descuentos vigentes: egresados 40%, usuarios de AP Contables 30% y clientes antiguos 10%? ¿El 10% por asistir con otra persona sigue vigente también? ¿Se pueden acumular?
3. ¿Me compartes la URL o el archivo de la política de datos vigente para enlazarla?

## Límites y pendientes

No agregar botón de pago ni construir un sistema nuevo de inscripción. El sistema externo ya existe; una integración distinta requeriría definir alcance y responsable técnico. No instalar las skills adjuntas ni ejecutar sus scripts por el solo hecho de estar en el ZIP.

FAQ e imágenes reales están pendientes para cuando la empresa las tenga. La landing no se modificó al crear este plan.