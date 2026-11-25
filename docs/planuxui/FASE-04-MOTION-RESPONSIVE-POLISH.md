# FASE 04 — Motion, Responsive, Performance y Polish

## Objetivo

Dar acabado premium al sistema UX/UI mediante movimiento sutil, excelente experiencia móvil, adaptación real a desktop, accesibilidad práctica, performance y QA.

## 1. Mobile-first

Priorizar especialmente anchos aproximados de:

```text
360px
390px
430px
```

La plantilla debe funcionar también por debajo y por encima de esos valores sin depender de breakpoints exactos para cada dispositivo.

En móvil:

- Hero cercano a `100svh` cuando sea apropiado.
- Fotografías protagonistas.
- Márgenes laterales consistentes.
- Tipografía fluida y legible.
- Botones cómodos para interacción táctil.
- Sin scroll horizontal.
- Floating player sin tapar contenido.
- RSVP claramente visible.
- Respetar safe areas cuando aplique.

## 2. Desktop

No limitarse a estirar el layout móvil.

Aprovechar el ancho para composiciones editoriales, por ejemplo:

```text
[FOTO GRANDE]     TÍTULO
                  TEXTO
                  CTA
```

Debe seguir siendo la misma plantilla y utilizar los mismos datos/configuración.

## 3. Sistema de motion

Limitar el sistema principalmente a cuatro patrones reutilizables.

### Fade Up

Para títulos, textos, datos y CTAs.

### Fade

Para fotografías, fondos y decoración.

### Scale Reveal

Muy sutil en fotografías importantes.

Referencia conceptual:

```text
scale(.97) → scale(1)
```

### Stagger

Para grupos relacionados.

Ejemplo:

```text
Título
+100ms dato
+100ms lugar
+100ms CTA
```

No crear una animación diferente para cada sección.

## 4. Duraciones

Orientación:

- microinteracciones: `150–300ms`;
- reveals normales: `400–700ms`;
- apertura cinematic completa después del gesto: máximo aproximado `2s`.

Evitar animaciones que obliguen al usuario a esperar.

## 5. Scroll

Mantener scroll nativo.

No implementar scroll-jacking ni librerías de smooth-scroll que reemplacen el comportamiento natural del navegador.

## 6. Parallax

Solo si aporta valor visual real.

- extremadamente sutil;
- preferentemente desktop;
- desactivado o reducido en móvil;
- nunca a costa del rendimiento.

Es opcional, no un requisito de terminado.

## 7. Floating player

Comprobar:

- play/pause;
- estado visual;
- expansión/compactación si se implementó;
- safe-area;
- no solapamiento con RSVP, botones o controles;
- comportamiento correcto al hacer scroll;
- funcionamiento aunque autoplay sea bloqueado.

## 8. Microinteracciones

Botones y controles deben ofrecer feedback visual en:

- hover cuando exista puntero;
- focus;
- active/pressed.

No depender de hover para comunicar información esencial.

## 9. Galería / Lightbox

Comprobar y pulir:

- apertura;
- cierre visible;
- navegación anterior/siguiente si ya existe o forma parte de la implementación actual;
- `Esc` en desktop cuando corresponda;
- interacción táctil clara;
- bloqueo/restauración correcta del scroll de fondo;
- foco accesible razonable.

No añadir autoplay de galería.

## 10. Reduced Motion

Respetar:

```css
@media (prefers-reduced-motion: reduce)
```

La invitación debe seguir siendo totalmente utilizable sin depender de animaciones.

Las animaciones mejoran la experiencia; no controlan la funcionalidad.

## 11. Contenido variable

Probar layouts con datos cortos y largos.

Ejemplos de prueba:

```text
Ana & Luis
```

vs.

```text
María Fernanda
&
Juan Sebastián
```

También probar lugares extensos, textos mayores y fechas/horarios reales.

No resolver problemas únicamente reduciendo el font-size hasta hacerlo ilegible.

## 12. Fotografías variables

Probar:

- vertical;
- horizontal;
- clara;
- oscura;
- sujetos centrados;
- sujetos desplazados.

Usar correctamente `object-fit`, `object-position`, overlays y contenedores responsive.

## 13. Performance

Priorizar la percepción de carga de:

1. apertura;
2. sobre;
3. tipografía crítica;
4. Hero;
5. contenido inmediato;
6. imágenes posteriores.

Aplicar cuando corresponda:

- optimización de imágenes;
- lazy loading fuera del contenido inicial;
- evitar JS innecesario;
- evitar dependencias pesadas;
- evitar exceso de familias/pesos tipográficos;
- evitar layout shifts;
- animar propiedades eficientes;
- no precargar recursos que no sean críticos.

## 14. Accesibilidad práctica

Verificar:

- contraste suficiente;
- áreas táctiles cómodas;
- `alt` apropiado en imágenes relevantes;
- foco visible;
- semántica razonable;
- controles identificables;
- no depender únicamente del color;
- reduced motion;
- navegación funcional con teclado donde corresponda.

## 15. QA funcional

Antes de cerrar la fase verificar como mínimo:

```text
[ ] Apertura
[ ] Hero
[ ] Música
[ ] Floating player
[ ] Scroll
[ ] Animaciones
[ ] Maps
[ ] Calendario
[ ] Countdown
[ ] Galería / modal
[ ] Dress Code
[ ] Regalos
[ ] WhatsApp RSVP
[ ] Cierre
[ ] Secciones opcionales
[ ] Mobile
[ ] Tablet
[ ] Desktop
[ ] Reduced motion
[ ] Contenido largo
[ ] Fotografías variables
```

## 16. Pruebas de regresión

El rediseño no está terminado si una funcionalidad que funcionaba antes dejó de funcionar.

Corregir regresiones antes de considerar cerrada la fase.

## 17. Criterios de aceptación final

- La experiencia se siente fluida en móvil.
- No existe scroll horizontal accidental.
- Las animaciones son consistentes y discretas.
- La plantilla funciona con reduced motion.
- El contenido largo no rompe componentes.
- Fotografías diferentes conservan buena composición.
- El reproductor no interfiere con otros controles.
- Las integraciones existentes siguen funcionando.
- El rendimiento no se degrada de manera evidente por el rediseño.
- Desktop aprovecha el espacio sin convertirse en otro producto distinto.
- El producto conserva su reutilización y rapidez de personalización.
