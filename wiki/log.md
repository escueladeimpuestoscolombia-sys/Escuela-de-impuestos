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
