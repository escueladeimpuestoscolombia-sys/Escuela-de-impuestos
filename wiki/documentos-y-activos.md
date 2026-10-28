---
tipo: catalogo-de-fuentes
estado: vigente
creado: 2026-10-28
actualizado: 2026-10-28
tags: [fuentes, activos, docs]
fuentes: [../../Docs/LOGO%20ESCUELA%20DE%20IMPUESTOS%20AZUL.jpeg, ../../Docs/LOGO%20ESCUELA%20DE%20IMPUESTOS%20NEGRO.jpeg, ../public/assets/aistudio/image_04076cd5.png, ../src/components/CommunitySection.tsx, ../src/components/EnrollmentForm.tsx]
---

# Documentos y activos

`Docs/` en la carpeta de empresa es la entrada principal de originales. Los originales quedan allí, sin mover, renombrar ni modificar; esta tabla facilita encontrarlos. No hay una carpeta `fuentes/` adicional ni se duplicó el contenido de `Docs/`.

| Ruta al original o fuente | Categoría | Descripción e información comprobada | Posible uso en la landing | Revisión pendiente |
|---|---|---|---|---|
| `../../Docs/LOGO ESCUELA DE IMPUESTOS AZUL.jpeg` | Identidad visual | Original de 51.575 bytes, fechado por el sistema el 2026-10-26. Revisión visual realizada: símbolo y texto azul sobre fondo negro. | Logo en fondo oscuro, si la variante y el contraste se aprueban. | Confirmar fondo, variante vigente, legibilidad y autorización. |
| `../../Docs/LOGO ESCUELA DE IMPUESTOS NEGRO.jpeg` | Identidad visual | Original de 52.963 bytes, fechado por el sistema el 2026-10-26. Revisión visual realizada: símbolo y texto blancos sobre fondo negro. | Logo claro en fondo oscuro, si la variante y el contraste se aprueban. | Confirmar por qué el nombre dice “NEGRO” si el contenido observado es blanco sobre negro; confirmar variante y autorización. |
| `../public/assets/aistudio/image_04076cd5.png` | Identidad visual / activo del sitio | Icono local ya usado como favicon y en el pie. Revisión visual realizada; muestra el símbolo y nombre en blanco sobre fondo negro. | Favicon y marca compacta en el pie. | Confirmar que sea el logo aprobado; revisar fondo antes de cambiarlo. |
| `../src/components/CommunitySection.tsx` | Imágenes y testimonios | Tres imágenes remotas de Googleusercontent y tres testimonios atribuidos a perfiles genéricos. Proceden del código de la landing; no hay autorización ni fuente empresarial en `Docs/`. | Solo si se verifican derechos de uso y autenticidad de testimonios. | Confirmar origen/licencia de las fotos y autorización literal de cada testimonio; hasta entonces tratarlos como demostración no aprobada. |
| `../src/components/EnrollmentForm.tsx` | Contacto y flujo | Formulario de interfaz; su código abre WhatsApp con los datos ingresados. No se observa envío a una base de datos o servicio de inscripción. | Contacto manual por WhatsApp. | Verificar destino, texto, recepción y tratamiento de datos antes de presentarlo como inscripción completada. |
| `../index.html`, `../src/` y `../README.md` | Fuente del proyecto | Código extraído y documentación de la landing; contiene textos y enlaces que aún no han sido contrastados con documentos empresariales. | Referencia para cambios pequeños y preservación de estructura. | Confirmar afirmaciones sobre certificaciones, acreditación, testimonios, horarios, cifras, términos y privacidad. |

## Inventario al arranque

- **Confirmado:** `Docs/` contiene dos originales JPEG de identidad visual; ambos se abrieron e inspeccionaron visualmente.
- **Confirmado:** la carpeta de la aplicación tiene un icono PNG local y referencias a imágenes remotas; no se descargaron activos remotos.
- **Pendiente:** no hay ZIP original disponible, por confirmación de la usuaria. La carpeta extraída se usa como fuente del proyecto, sin compararla con el comprimido.
- **Privado y excluido:** Git ignora `src/data/certificates.pre-publish.private.local.ts`. No se inspeccionó ni se incluirá en publicaciones.
- No se crearon copias en `Docs/organizados/`: no hacen falta para el inventario inicial.
