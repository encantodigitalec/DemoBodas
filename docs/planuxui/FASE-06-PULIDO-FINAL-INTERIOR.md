# FASE 06 — PULIDO FINAL DEL INTERIOR

## Objetivo
Realizar un último refinamiento puntual del interior ya aprobado. Esta fase NO es un rediseño general.

## Alcance
1. Mejorar presentación responsive de datos bancarios.
2. Aumentar respiración y jerarquía de esa información.
3. Suavizar determinadas fotografías.
4. Mantener intactos arquitectura, parametrización y resto de UX/UI.

## Datos bancarios
En móvil, priorizar una sola columna en lugar de una tabla horizontal comprimida.

Jerarquía:
- Banco.
- Label pequeño/secundario.
- Valor claramente legible.
- Separación generosa entre grupos.
- Número de cuenta con destaque moderado.
- CTA `COPIAR CUENTA` separado del contenido.

Referencia:

```text
╭──────────────────────────────╮
│       BANCO PICHINCHA        │
│                              │
│ Titular                      │
│ Daniel Rosendo Sánchez Perez │
│                              │
│ Tipo de cuenta               │
│ Ahorros                      │
│                              │
│ Número de cuenta             │
│ 5999999999                   │
│                              │
│      [ COPIAR CUENTA ]       │
╰──────────────────────────────╯
```

No hardcodear datos. Aumentar padding, line-height y separación label/valor. Evitar overflow horizontal y textos pegados a bordes.

Si `COPIAR CUENTA` ya existe, conservar y revisar feedback/accesibilidad. Si Fase 5 dejó preparada la función, reutilizar la parametrización existente.

## Fotografías
No aplicar el mismo tratamiento a todas.

- Hero/full-bleed: sin borde/radio visible.
- Fotos editoriales dentro del contenido: `border-radius` suave, referencia 12–20 px.
- En una o pocas imágenes se permite borde fino, marco desplazado o línea accent.
- Evitar bordes gruesos, sombras fuertes y apariencia de cards repetidas.

La intención es suavizar la transición visual de las fotografías rectangulares sin perder el lenguaje editorial.

## Responsive
Validar: 360, 390, 430, 768, 1024 y 1440 px.

Revisar titular largo, número de cuenta, CTA, fotografías y ausencia de scroll horizontal.

## Accesibilidad
Mantener contraste, foco visible, botones accesibles, feedback de copia, alt text y áreas táctiles adecuadas.

## Regresión
Verificar apertura, música, reproductor, Maps, calendario, countdown, galería, Dress Code, Regalos, copiar cuenta, RSVP/WhatsApp y secciones opcionales.

## Criterios de aceptación
- [ ] Datos bancarios cómodos en móvil.
- [ ] Sin texto pegado a bordes.
- [ ] Labels/valores con jerarquía clara.
- [ ] Sin overflow horizontal.
- [ ] Copiar cuenta funciona.
- [ ] Fotos editoriales se sienten más suaves.
- [ ] Hero/full-bleed conserva impacto.
- [ ] No todas las imágenes parecen cards.
- [ ] No se alteró innecesariamente el interior aprobado.
- [ ] Sin regresiones.

## Instrucción para Codex
Implementar únicamente este pulido. No continuar automáticamente con Fase 7.

Al terminar listar archivos modificados, cambios, decisiones responsive y cualquier regresión/duda. Detenerse para revisión visual.
