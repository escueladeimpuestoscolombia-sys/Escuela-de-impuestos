---
tipo: pendientes
estado: abierto
creado: 2026-10-28
actualizado: 2026-11-05
tags: [pendientes, validacion]
fuentes: [documentos-y-activos.md, empresa.md, estado-del-proyecto.md, plan-de-mejora.md, ../src/components/EnrollmentForm.tsx, ../src/components/CertificateModal.tsx]
---

# Pendientes

## Material y validación empresarial

- **Pendiente:** no está el ZIP original de Google AI Studio. La usuaria confirmó que no lo tiene; colocarlo aquí si aparece para conservarlo y compararlo sin sobrescribir la carpeta extraída.
- **Pendiente:** confirmar el nombre final y los descuentos del seminario frente al sistema de inscripciones; validar el resto de la oferta, horas, modalidad, acreditación/certificación y resultados con fuentes empresariales.
- **Pendiente si se solicita reintroducirla:** conseguir testimonios aprobados por sus autores y fotografías con derechos de uso confirmados para la sección Comunidad, que se retiró de la versión actual.
- **Pendiente:** revisar expresiones como “acreditación”, “certificación”, “verificada”, “inscripción generada con éxito”, “actualización en tiempo real” y las afirmaciones de cumplimiento legal antes de presentarlas como hechos.
- **Pendiente:** sustituir el acceso principal a la demo de certificados por el portal oficial confirmado; no presentar la muestra ficticia como validación real.

## Aclaraciones que bloquean el plan

- Resolver tres puntos de [[plan-de-mejora]]: nombre del seminario; categorías/acumulación de descuentos; URL/archivo de la política vigente. FAQ e imágenes autorizadas se incorporarán cuando la empresa las entregue.
- **Confirmado por la usuaria:** AP Contadores Públicos Ltda. es propietaria de Escuela de Impuestos. El ZIP recibido corresponde al mismo proyecto; se revisó sin ejecutar sus archivos. La usuaria confirmó además el seminario activo, destinos oficiales, WhatsApp, relación con el software y existencia de política de datos.

## Entorno y comprobaciones

- **Comprobado:** instalación npm terminada; `npm run build` y `npm run lint` pasaron. Build muestra una advertencia de Vite sobre `__dirname` en `vite.config.ts`.
- **Pendiente:** revisar visualmente en escritorio y móvil. El navegador automatizado no pudo capturar la vista y la solicitud HTTP local terminó por timeout; no se declara una revisión visual.
- **Pendiente:** comprobar navegación y enlaces afectados. No enviar datos de prueba a WhatsApp real.
- **Pendiente:** comprobar que el sitio público responde y si el proveedor despliega automáticamente desde `main`; el push por sí solo no verifica el sitio publicado.

## Cambio aplicado

Se retiró la sección **Comunidad** de la landing al no tener autorización confirmada para sus testimonios ni fotos. No se añadió material de reemplazo.
