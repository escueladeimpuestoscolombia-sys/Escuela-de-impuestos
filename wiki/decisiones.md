---
tipo: decisiones
estado: vigente
creado: 2026-10-28
actualizado: 2026-10-28
tags: [decisiones, proyecto]
fuentes: [../AGENTS.md, ../.gitignore, ../package.json, ../../Docs/LOGO%20ESCUELA%20DE%20IMPUESTOS%20AZUL.jpeg, ../../Docs/LOGO%20ESCUELA%20DE%20IMPUESTOS%20NEGRO.jpeg]
---

# Decisiones

- **2026-10-28 — Mantener la app React + TypeScript + Vite tal como está.** Motivo: es la estructura existente y no hay una necesidad observada de reconstruirla. Fuente: `package.json`, `vite.config.ts` y `src/`.
- **2026-10-28 — Tratar el código actual como una fuente provisional, no como aprobación empresarial.** Motivo: no hay documentos de oferta o contacto en `Docs/`; se evita convertir textos de demostración en hechos. Fuente: inventario inicial de `Docs/` y código en `src/`.
- **2026-10-28 — Conservar los originales de `Docs/` fuera de la carpeta Git de la aplicación.** Motivo: la carpeta empresarial `Docs/` está junto a la app, no dentro de ella; no se duplicará ni publicará sin una solicitud específica. Fuente: estructura del espacio y autorización de privacidad en las instrucciones de la usuaria.
- **2026-10-28 — No alterar texto ni diseño de la landing durante esta configuración.** Motivo: la usuaria no pidió un cambio concreto de página; primero se prepara la memoria, el entorno y la revisión inicial.
- **2026-10-28 — Dejar fuera del repositorio el archivo ignorado de certificados locales.** Motivo: `.gitignore` lo marca como privado; no se inspeccionó ni se preparó para publicación.
- **2026-10-28 — El ZIP original sigue pendiente.** Motivo: no aparece en esta carpeta y la usuaria confirmó que no lo tiene ahora. Se trabaja con la carpeta extraída existente, preservando esa limitación.
- **2026-10-28 — Alinear `esbuild` con Vite 8 durante la preparación local.** Motivo: `npm install` detectó que el paquete declarado `esbuild@^0.25.0` no satisface el peer opcional de Vite 8.3.5 (`^0.27.0 || ^0.28.0`). Se actualiza la dependencia directa a `^0.28.2` para resolver el conflicto sin forzar npm. Fuente: `package.json` y error ERESOLVE de npm.
- **2026-10-28 — Retirar la sección Comunidad de la landing.** Motivo: los tres testimonios y las tres fotografías remotas de la sección no tenían autenticidad, permiso de uso ni procedencia empresarial confirmados; la usuaria indicó continuar sin ese material. No se añadió contenido sustituto. Fuente anterior: `src/components/CommunitySection.tsx` en el commit `312804e`; cambio actual: `src/App.tsx`.
