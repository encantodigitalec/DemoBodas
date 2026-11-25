# FASE 02 — Experiencia Premium

## Objetivo

Crear el momento de mayor impacto de la invitación: **apertura cinematic + Hero inmersivo + entrada a la experiencia + reproductor musical flotante**.

La secuencia debe impresionar sin hacer esperar al invitado.

## 1. Apertura cinematic

Partir del concepto de sobre ya existente. Evolucionarlo, no reemplazarlo innecesariamente.

Flujo objetivo:

```text
usuario abre enlace
        ↓
aparece fondo / escena inicial
        ↓
sobre se presenta
        ↓
nombres + fecha
        ↓
[ ABRIR INVITACIÓN ]
        ↓
interacción
        ↓
solapa del sobre se abre
        ↓
tarjeta sale parcialmente
        ↓
transición
        ↓
HERO
```

### Duración

Después de pulsar `Abrir invitación`, la transición completa debería durar aproximadamente **1.5–2 segundos como máximo**.

No crear una intro larga que el usuario tenga que esperar o saltar.

## 2. CTA de entrada

`Abrir invitación` debe ser claramente interactivo y suficientemente grande en móvil.

La interacción sirve también como gesto de usuario para intentar iniciar la reproducción musical de forma compatible con las restricciones del navegador.

## 3. Hero inmersivo

Después de la apertura, presentar una escena de alto impacto visual.

En móvil puede aproximarse a `100svh`.

Elementos principales:

- fotografía Hero;
- nombres;
- fecha;
- opcionalmente un mensaje corto;
- indicador de continuidad/scroll.

Ejemplo conceptual:

```text
[       FOTOGRAFÍA       ]

          Camila
             &
          Daniel

        19 · 03 · 2027

              ↓
```

No hardcodear esos nombres o fecha: son solo referencia visual.

## 4. Legibilidad del Hero

Debe funcionar con fotografías:

- claras;
- oscuras;
- verticales;
- horizontales;
- con sujetos centrados o desplazados.

Usar tratamiento de imagen, posición y overlay cuando corresponda para proteger la legibilidad.

## 5. Entrada escalonada

Los elementos del Hero pueden aparecer en capas, de manera sutil.

Referencia conceptual:

```text
0ms     fotografía / base visual
200ms   overlay
400ms   nombres
600ms   fecha
900ms   indicador de scroll
```

Los tiempos finales pueden ajustarse durante implementación siempre que la experiencia sea rápida.

## 6. Indicador de scroll

Mostrar una indicación discreta similar a:

```text
Desliza para descubrir
        ↓
```

Debe desaparecer o perder protagonismo cuando el usuario comience a desplazarse.

No implementar menú tradicional para navegar por la invitación.

## 7. Música

Flujo esperado:

```text
ABRIR INVITACIÓN
        ↓
intentar iniciar música
        ↓
mostrar reproductor
```

Si el navegador impide autoplay, la invitación debe continuar normalmente y permitir que el usuario inicie la música manualmente.

El audio nunca debe bloquear el acceso al contenido.

## 8. Floating Music Player

Estado expandido inicial aproximado:

```text
♫  Nuestra canción   ❚❚
```

Puede compactarse durante el scroll:

```text
♫
```

Debe permitir como mínimo:

- play;
- pause;
- indicar estado;
- permanecer disponible durante el recorrido.

Debe respetar safe areas y no cubrir CTAs o información importante.

## 9. Navegación

Mantener scroll vertical nativo.

No añadir:

- menú web tradicional;
- navegación inferior persistente;
- indicadores complejos de secciones;
- scroll-jacking.

La invitación debe sentirse como una historia que se descubre verticalmente.

## 10. Restricciones

- Mantener los datos y recursos parametrizados existentes.
- No reemplazar el sistema musical existente si puede evolucionarse.
- No añadir una dependencia pesada solo para abrir el sobre.
- No sacrificar rendimiento por la animación.
- La invitación debe poder accederse incluso si audio o animaciones fallan.

## 11. Criterios de aceptación

- El usuario entiende inmediatamente cómo abrir la invitación.
- La apertura se siente premium y dura como máximo aproximadamente 2 segundos después del gesto.
- La transición entre sobre y Hero es visualmente coherente.
- El Hero funciona en móvil sin scroll horizontal ni contenido cortado de forma problemática.
- La legibilidad se mantiene con diferentes fotografías.
- La música puede iniciarse desde la interacción de apertura cuando el navegador lo permite.
- Si autoplay falla, el contenido sigue funcionando.
- El reproductor no tapa CTAs.
- El scroll permanece nativo.
