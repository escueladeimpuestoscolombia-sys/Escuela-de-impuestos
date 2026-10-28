---
tipo: pendientes
estado: abierto
creado: 2026-10-28
actualizado: 2026-10-28
tags: [pendientes, validacion]
fuentes: [documentos-y-activos.md, empresa.md, estado-del-proyecto.md, ../src/components/CommunitySection.tsx, ../src/components/EnrollmentForm.tsx, ../src/components/CertificateModal.tsx]
---

# Pendientes

## Material y validación empresarial

- **Pendiente:** no está el ZIP original de Google AI Studio. La usuaria confirmó que no lo tiene; colocarlo aquí si aparece para conservarlo y compararlo sin sobrescribir la carpeta extraída.
- **Pendiente:** aportar documentos que confirmen oferta vigente, público, horas, modalidad, precios, certificación/acreditación, fechas y datos oficiales de contacto.
- **Pendiente:** verificar autenticidad y autorización de uso de los tres testimonios de `src/components/CommunitySection.tsx` y derechos de las fotos remotas asociadas.
- **Pendiente:** revisar expresiones como “acreditación”, “certificación”, “verificada”, “inscripción generada con éxito”, “actualización en tiempo real” y las afirmaciones de cumplimiento legal antes de presentarlas como hechos.
- **Pendiente:** decidir si la consulta de certificados de demostración puede mantenerse visible en el sitio público. `src/data/certificates.ts` y el modal indican que el registro mostrado es ficticio; existe además un archivo local ignorado por Git que no fue leído ni publicado.

## Entorno y comprobaciones

- **Comprobado:** instalación npm terminada; `npm run build` y `npm run lint` pasaron. Build muestra una advertencia de Vite sobre `__dirname` en `vite.config.ts`.
- **Pendiente:** revisar visualmente en escritorio y móvil. El navegador automatizado no pudo capturar la vista y la solicitud HTTP local terminó por timeout; no se declara una revisión visual.
- **Pendiente:** comprobar navegación y enlaces afectados. No enviar datos de prueba a WhatsApp real.
- **Pendiente:** confirmar si el proveedor de publicación despliega automáticamente desde `main`; el push por sí solo no verifica el sitio público.
- **Pendiente:** estado del despliegue público. El repositorio Git configurado no demuestra por sí mismo que el sitio esté publicado.

## Primera mejora sugerida (no aplicada)

Revisar la sección **Comunidad**: retirar temporalmente o sustituir con material autorizado los testimonios de perfiles genéricos mientras se valida su autenticidad y la licencia de las fotografías. La decisión sobre eliminar o reemplazar esos bloques le corresponde a la usuaria.
