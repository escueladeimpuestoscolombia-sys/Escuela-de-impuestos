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
- **Pendiente:** validar el resto de la oferta, horas, modalidad, acreditación/certificación y resultados con fuentes empresariales; la tarjeta del seminario activo ya está actualizada en local.
- **Pendiente si se solicita reintroducirla:** conseguir testimonios aprobados por sus autores y fotografías con derechos de uso confirmados para la sección Comunidad, que se retiró de la versión actual.
- **Pendiente:** revisar expresiones como “acreditación”, “certificación”, “verificada”, “inscripción generada con éxito”, “actualización en tiempo real” y las afirmaciones de cumplimiento legal antes de presentarlas como hechos.
- **Pendiente:** enlazar el botón principal de certificados al portal oficial; mientras tanto, el modal local sigue siendo una demostración ficticia.

## Aclaraciones que bloquean el plan

- **Pendiente:** compartir la URL o archivo de la política vigente para revisarla y enlazarla. El aviso local menciona ahora la Ley 1581 de 2012 y el Decreto 1377 de 2013, según la aclaración de la usuaria; FAQ e imágenes autorizadas se incorporarán cuando la empresa las entregue.
- **Confirmado por la usuaria:** AP Contadores Públicos Ltda. es propietaria de Escuela de Impuestos. El ZIP recibido corresponde al mismo proyecto; se revisó sin ejecutar sus archivos. La usuaria confirmó además el seminario activo, destinos oficiales, WhatsApp, relación con el software y existencia de política de datos.

## Entorno y comprobaciones

- **Comprobado:** instalación npm terminada; `npm run build` y `npm run lint` pasaron. Build muestra una advertencia de Vite sobre `__dirname` en `vite.config.ts`.
- **Parcialmente revisado:** la tarjeta del seminario se inspeccionó visualmente en la vista local, con unos 808 px de ancho. Pendiente probar móvil estrecho y escritorio ancho.
- **Pendiente:** comprobar el clic de los enlaces desde la vista local y el comportamiento móvil. No enviar datos de prueba a WhatsApp real.
- **Pendiente:** comprobar que el sitio público responde y si el proveedor despliega automáticamente desde `main`; el push por sí solo no verifica el sitio publicado.

## Cambio aplicado

Se retiró la sección **Comunidad** de la landing al no tener autorización confirmada para sus testimonios ni fotos. No se añadió material de reemplazo.
