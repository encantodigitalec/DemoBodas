# FASE 07 — OPENING EXPERIENCE PREMIUM

## 1. Objetivo
Rediseñar profundamente la pantalla inicial del sobre para convertirla en una experiencia premium, romántica, editorial y memorable.

La sensación objetivo es:

> “Acabo de recibir una invitación especial.”

No:

> “Acabo de abrir una página web.”

Esta fase puede modificar significativamente la APERTURA, pero debe preservar arquitectura, datos, parametrización y el interior ya aprobado.

## 2. Flujo objetivo

```text
ABRIR LINK
   ↓
preparación visual sin flash
   ↓
fondo premium
   ↓
detalle ambiental/botánico
   ↓
mensaje inicial
   ↓
entrada animada del sobre
   ↓
sello/monograma
   ↓
fecha + CTA
   ↓
usuario toca
   ↓
reacción del sello
   ↓
solapa abre
   ↓
tarjeta emerge
   ↓
transición
   ↓
HERO
   ↓
intento de inicio de música
   ↓
♫ Nuestra canción
```

## 3. Loading integrado
NO utilizar spinner, porcentaje, barra, “Cargando…”, countdown ni splash de logo obligatorio.

La propia entrada debe funcionar como percepción de carga.

Secuencia orientativa:
- 0.0 s: fondo.
- 0.2 s: detalle ambiental.
- 0.4 s: mensaje.
- 0.7 s: sobre entra desde abajo.
- 1.1 s: micro-asentamiento.
- 1.3 s: sello/monograma.
- 1.5 s: fecha.
- 1.7 s: `Toca para abrir`.

Objetivo aproximado: 1.5–1.8 s. No superar ~2 s sin razón técnica clara.

No prolongar artificialmente la carga. No esperar galería ni recursos secundarios.

Priorizar estilos, fuentes esenciales, assets de apertura, Hero y primera imagen crítica.

## 4. Evitar FOUC
Revisar CSS crítico, estado inicial, carga de fuentes, `font-display`, precarga crítica y layout shifts.

No debe aparecer momentáneamente contenido:
- sin estilos;
- con fuente incorrecta;
- mal posicionado;
- con assets críticos ausentes.

Debe existir fallback seguro y nunca ocultar indefinidamente la página.

## 5. Fondo premium
Dirección:
- crema/marfil derivado del tema;
- textura de papel extremadamente sutil;
- gradiente/iluminación suave;
- profundidad ligera;
- decoración botánica mínima.

Usar decoración para enmarcar, no llenar.

Evitar flores por toda la pantalla, partículas, corazones repetidos y elementos flotantes permanentes.

## 6. Tipografía
Usar el sistema de Fase 5:
- serif editorial protagonista;
- sans funcional;
- script solo como acento.

Referencia conceptual:

```text
        Tenemos algo
      especial para ti

           C & D

        NUESTRA BODA

       24 · 08 · 2027
```

No hardcodear iniciales, nombres, fecha o contenido configurable.

## 7. Sobre protagonista
Aumentar presencia mediante:
- formas limpias;
- capas;
- cuerpo/solapa diferenciados;
- sombra suave;
- profundidad controlada;
- textura de papel opcional.

No hacerlo hiperrealista ni pesado.

Debe adaptarse a móvil/tablet/desktop.

## 8. Entrada del sobre
Evitar aparición abrupta.

Referencia:

```text
opacity: 0 → 1
translateY(30–50px) → 0
scale(.96) → 1
```

Easing elegante. Se permite micro-asentamiento `0.96 → 1.01 → 1`.

No usar rebote cartoon, elastic exagerado, rotaciones fuertes ni movimiento infinito.

## 9. Sello y problema del corazón en iPhone
NO usar `❤️` o `❤` como elemento visual principal.

Sustituir por SVG propio controlado por CSS/tokens.

Dirección recomendada:
**sello de lacre estilizado + monograma parametrizable.**

Requisitos:
- mismo concepto visual en iOS/Android/desktop;
- color controlado;
- iniciales dinámicas;
- contraste correcto;
- sin dependencia de emoji.

Reutilizar lógica de iniciales existente si existe. No hardcodear `C&D`.

## 10. CTA
Referencia:

```text
Toca para abrir
      ↓
```

El sobre completo puede ser interactivo si mantiene semántica accesible.

Debe funcionar con teclado, foco visible, aria-label y touch target adecuado.

## 11. Apertura
Al tap/click:
1. respuesta inmediata;
2. micro reacción del sello;
3. solapa abre;
4. tarjeta emerge;
5. transición al Hero.

Duración posterior al toque: aprox. 1.3–1.6 s; máximo orientativo ~2 s.

No requerir segundo tap.

## 12. Tarjeta emergente
Puede mostrar brevemente iniciales/nombres/fecha/detalle editorial.

No cargarla de información ni convertirla en otra pantalla.

## 13. Transición al Hero
Evitar `opening → pantalla blanca → Hero`.

Preferir fade cruzado, capas coordinadas o continuidad cromática.

El Hero debe sentirse continuación de la apertura.

## 14. Música
El gesto `Toca para abrir` debe seguir sirviendo para intentar iniciar audio.

Mantener fallback de autoplay, play/pause y reproductor `♫ Nuestra canción`.

No retrasar apertura esperando audio. El reproductor aparece después de entrar, no sobre el opening.

## 15. Responsive móvil/iPhone
Probar especialmente:
360, 375, 390, 393, 414 y 430 px; además 768, 1024 y 1440 px.

Revisar:
- `100svh`;
- safe areas;
- Safari iOS;
- barras del navegador;
- sello;
- textos largos;
- fecha;
- CTA;
- posición/tamaño del sobre;
- overflow.

## 16. Reduced motion
Con `prefers-reduced-motion: reduce`, reducir entrada, asentamiento, apertura y desplazamientos, manteniendo funcionalidad y comprensión del estado.

## 17. Rendimiento
Priorizar `transform` y `opacity`.

No añadir librerías pesadas si CSS/JS existente basta.

Optimizar SVG, imágenes, fuentes y preload crítico. Lazy-load para contenido posterior. No precargar galería completa.

## 18. Fallbacks
La invitación debe funcionar si:
- falla una fuente;
- audio es bloqueado;
- textura no carga;
- backdrop-filter no existe;
- reduced motion está activo.

La apertura nunca debe depender de un recurso decorativo.

## 19. Criterios de aceptación

### Primera carga
- [ ] Sin FOUC/flash molesto.
- [ ] Entrada no se siente seca.
- [ ] Sin loading tradicional.
- [ ] Intro breve.

### Diseño
- [ ] Fondo con profundidad sutil.
- [ ] Tipografía coherente con interior.
- [ ] Sobre protagonista.
- [ ] Decoración controlada.
- [ ] Sensación premium.

### Sello
- [ ] Sin emoji rojo del sistema.
- [ ] SVG propio.
- [ ] Consistente en iPhone/Android/desktop.
- [ ] Monograma parametrizable.

### Interacción
- [ ] CTA evidente.
- [ ] Tap responde inmediatamente.
- [ ] Solapa abre.
- [ ] Tarjeta emerge.
- [ ] Un solo tap.
- [ ] Transición fluida al Hero.

### Música
- [ ] Intento de inicio desde gesto.
- [ ] Fallback correcto.
- [ ] Reproductor aparece después.
- [ ] Todo funciona sin audio.

### Accesibilidad
- [ ] Teclado.
- [ ] Foco.
- [ ] Semántica.
- [ ] Reduced motion.
- [ ] Contraste.
- [ ] Touch target.

### Regresión
- [ ] Interior intacto.
- [ ] Maps.
- [ ] Calendario.
- [ ] Countdown.
- [ ] Galería.
- [ ] Regalos.
- [ ] Dress Code.
- [ ] RSVP.

## 20. Orden para Codex
1. Inspeccionar opening actual.
2. Identificar HTML/CSS/JS/assets.
3. Revisar flujo de apertura/audio.
4. Corregir estado inicial/FOUC.
5. Crear/refinar fondo.
6. Composición tipográfica.
7. Rediseñar sobre.
8. Sustituir corazón por sello SVG.
9. Monograma parametrizable.
10. Entrada animada.
11. CTA.
12. Animación de apertura.
13. Tarjeta emergente.
14. Transición al Hero.
15. Integración audio.
16. Reduced motion.
17. Safari/iPhone/móvil.
18. Desktop.
19. Regresión.
20. Documentar.
21. DETENERSE.

## 21. Fuera de alcance
No hacer:
- rediseño del interior;
- nuevas secciones;
- nuevas funciones de negocio;
- scroll-jacking;
- partículas;
- video de fondo;
- intro larga;
- spinner/barra;
- animaciones infinitas;
- frameworks nuevos;
- librerías pesadas innecesarias.

## 22. Principio final
No interpretar “premium” como “más efectos”.

La apertura debe destacar mediante:

**composición + tipografía + profundidad + movimiento controlado + continuidad visual.**

## 23. Entrega de Codex
Al finalizar reportar:
- archivos modificados;
- assets creados/reemplazados;
- cambios HTML/CSS/JS;
- estrategia de carga;
- solución del corazón en iPhone;
- responsive;
- reduced-motion;
- integración de música;
- pruebas;
- puntos para revisión visual humana.

No continuar con nuevas fases sin aprobación.
