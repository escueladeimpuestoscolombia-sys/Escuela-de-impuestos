---
tipo: plan-de-mejora
estado: en-ejecucion
creado: 2026-11-05
actualizado: 2026-11-05
tags: [landing, mejora, escuela-de-impuestos]
fuentes: ["confirmación directa de la usuaria (2026-11-05)", "https://inscripciones.escueladeimpuestos.com", "https://certificados.escueladeimpuestos.com/certificaciones.php", ../src/App.tsx, ../src/components/SeminarsCatalog.tsx, ../src/components/EnrollmentForm.tsx, ../src/components/CertificateModal.tsx, ../src/components/Footer.tsx, ../../Docs/LOGO%20ESCUELA%20DE%20IMPUESTOS%20AZUL.jpeg, ../../Docs/LOGO%20ESCUELA%20DE%20IMPUESTOS%20NEGRO.jpeg]
---

# Plan de mejora de la landing · Escuela de Impuestos

Plan adaptado al sitio real y a los datos confirmados por la usuaria. La primera mejora de oferta está implementada y compilada. No se enviaron datos de inscripción; el despliegue público aún no está verificado.

## Hallazgos comprobados

- **Confirmado:** la landing usa React, TypeScript y Vite; no requiere reconstrucción.
- **Confirmado en el código:** el catálogo tiene 11 fichas, filtros y búsqueda. Se retiró de la introducción la referencia desactualizada al ejercicio 2025.
- **Confirmado por la usuaria:** seminario virtual **Blindaje Fiscal 2026 y Planeación Estratégica 2027**, sábado 21 de noviembre de 2026, de 8:00 a. m. a 12:00 m. y de 2:00 p. m. a 6:00 p. m., valor $520.000.
- **Confirmado por la usuaria:** egresados 40%, usuarios de AP Contables 30%, asistir con otra persona 10%. El descuento de clientes antiguos fue reemplazado. El formulario externo permite una sola opción; su etiqueta de 30% dice “Cliente AP Contables”.
- **Implementado localmente:** tarjeta destacada con nombre, fecha, modalidad, horario, valor, descuentos y enlace al portal de inscripción.
- **Confirmado por lectura pública del formulario:** el sistema de inscripción respondió HTTP 200 y solicita seminario/valor, nombre, cédula, celular, correo, dirección residencial, ciudad, profesión/ocupación, descuento y comentario; para factura empresarial solicita además empresa, NIT, dirección, teléfono y correo empresarial. No se completó ni envió.
- **Confirmado por la usuaria:** el portal de certificados dado es el destino oficial y respondió HTTP 200. El modal local aún muestra una demostración ficticia y no valida certificados reales.
- **Confirmado por la usuaria:** AP Contadores Públicos Ltda. es propietaria de AP Contables y autoriza su uso mientras dure la formación; el WhatsApp oficial es `+57 316 758 9456`.
- **Privacidad pendiente:** la usuaria confirma que hay Política de Tratamiento de Datos Personales y menciona la Ley 1581 de 2012 y el Decreto 1377 de 2013. Falta el documento o URL; no se encontró enlace visible a la política en el formulario externo.
- **Pendiente para una siguiente etapa:** FAQ e imágenes reales se entregarán más adelante; ninguna fotografía está escogida. «Comunidad» permanece retirada sin testimonios e imágenes autorizados.
- **Sin probar:** no se envió inscripción ni se verificó recepción; la vista aún requiere revisión visual en escritorio y móvil.

## Hoja de ruta

### 1. Oferta vigente — implementada localmente
Mostrar el seminario con la información confirmada y un botón que lleve al sistema oficial. Las opciones visibles son egresados 40%, usuarios de AP Contables 30% y asistir con otra persona 10%. El formulario externo etiqueta el 30% como “Cliente AP Contables”; se conserva el texto solicitado por la usuaria en la landing.

**Criterio:** los datos del evento son claros y el botón conduce al registro externo, sin simular una inscripción completada.

### 2. Inscripción más clara
Simplificar el flujo propio para evitar duplicar datos sensibles que ya recoge el sistema externo. Hacer que el CTA principal lleve al formulario oficial y retirar o corregir el aviso local “Solicitud generada con éxito”, que aparece antes de que la persona envíe el mensaje de WhatsApp.

### 3. Acceso a certificados
Cambiar el acceso principal del modal ficticio para abrir `https://certificados.escueladeimpuestos.com/certificaciones.php`. Si la demostración se conserva, mantenerla claramente rotulada como ficticia.

### 4. Política de datos
La usuaria confirma que hay una política vigente y menciona su marco normativo. Recibir el texto o URL, verificar que corresponda al formulario externo y enlazarlo desde la landing y junto al CTA. No redactar una política sustituta ni afirmar que ya se revisó.

### 5. Presentación e identidad
Conservar React/Vite, Escuela de Impuestos y los logos. El estilo ejecutivo, premium y minimalista es una dirección provisional sugerida por el ZIP, no una preferencia confirmada. Mostrar el software AP en su contexto educativo y aclarar que el acceso se limita al tiempo de formación.

### 6. FAQ, imágenes y Comunidad
Agregar FAQ cuando la empresa entregue las respuestas. Incorporar fotos solo después de recibirlas y confirmar autorización. Mantener fuera testimonios y fotos de «Comunidad» sin procedencia y permisos confirmados.

### 7. Revisión de contenido y SEO
Contrastar el resto del diplomado, seminarios y laboratorio, además de certificaciones, modalidad, disponibilidad y planes para empresas. No presentar el resto del catálogo como vigente sin aprobación. Actualizar los metadatos con datos confirmados.

### 8. Verificación final
La tarjeta se revisó visualmente en la vista local disponible, de unos 808 px de ancho. Falta revisión en un móvil estrecho y en escritorio ancho. Revisar navegación, desbordamientos, filtros, destino del CTA, WhatsApp y certificado. Distinguir build, revisión visual, prueba funcional y publicación; no enviar datos ficticios a canales reales.

## Pendiente para continuar

Compartir la URL o el archivo de la Política de Tratamiento de Datos Personales para revisarlo y enlazarlo. La referencia a leyes y decretos no reemplaza el texto vigente de la empresa.

## Límites

No añadir pagos ni construir un sistema nuevo de inscripción. No instalar las skills del ZIP por el solo hecho de que estén incluidas. Cualquier cambio en el portal externo de inscripción requiere acceso y autorización de la empresa; el cambio actual toca solo archivos locales de la landing; no se editó el sistema externo.