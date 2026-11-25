# FASE 03 — Rediseño de Secciones

## Objetivo

Aplicar el lenguaje visual premium al recorrido completo de la invitación, creando ritmo narrativo sin perder reutilización ni funcionalidad.

## Principio

Cada sección puede tener personalidad propia, pero debe pertenecer al mismo sistema visual.

Evitar que todas las secciones sean cards o tengan exactamente la misma composición.

## 1. Mensaje / Invitación

Tratamiento:

- fondo limpio;
- composición centrada;
- mucho espacio negativo;
- texto corto;
- pequeño detalle romántico/editorial.

No usar card salvo necesidad real.

## 2. Nuestra Historia

### Móvil

Priorizar fotografía + título + relato.

### Desktop

Permitir composición editorial asimétrica entre fotografía y texto.

No implementar una cronología compleja si no existe como requerimiento funcional. Debe seguir siendo rápido adaptar el contenido para cada cliente.

## 3. Transición fotográfica

Introducir una fotografía grande/full-bleed después de bloques de contenido cuando ayude al ritmo.

Puede contener una frase corta parametrizada si existe contenido adecuado.

Su función principal es emocional y de respiración visual.

## 4. El Gran Día

Convertir la fecha en un elemento gráfico protagonista.

Ejemplo conceptual:

```text
        EL GRAN DÍA

             19
           MARZO
            2027

           SÁBADO
```

No presentar la fecha únicamente como metadata convencional.

## 5. Ceremonia y Recepción

Presentar cada evento con jerarquía clara:

```text
CEREMONIA
16:00
Nombre del lugar
Ciudad / dirección
[ CÓMO LLEGAR ]
```

```text
RECEPCIÓN
18:00
Nombre del lugar
Ciudad / dirección
[ CÓMO LLEGAR ]
```

El usuario debe poder identificar rápidamente:

1. qué evento es;
2. a qué hora;
3. dónde;
4. cómo llegar.

Mantener la integración Maps existente.

## 6. Calendario

Mantenerlo como acción secundaria.

Ejemplo conceptual:

```text
No olvides guardar la fecha
+ AGREGAR A MI CALENDARIO
```

No debe competir visualmente con RSVP.

## 7. Cuenta regresiva

Preferir composición tipográfica limpia frente a cuatro tarjetas pesadas.

Ejemplo:

```text
CADA VEZ FALTA MENOS

124    08    34    12
DÍAS  HORAS  MIN   SEG

PARA NUESTRO GRAN DÍA
```

Los números deben ser protagonistas y seguir siendo legibles en pantallas pequeñas.

## 8. Segundo momento fotográfico

Usar fotografía grande para romper el ritmo informativo.

No requiere texto obligatoriamente.

No implementar efectos costosos solo para esta sección.

## 9. Dress Code

Composición elegante y sencilla.

Debe soportar contenido variable sin depender de ilustraciones específicas de vestidos/trajes.

Ejemplo conceptual:

```text
DRESS CODE
FORMAL

Ellas          Ellos
Vestido largo  Traje formal

Evitar blanco
```

## 10. Regalos

Puede utilizar una superficie/card elegante porque agrupa información funcional.

Primera capa:

```text
EL MEJOR REGALO
ES COMPARTIR CONTIGO

Si deseas tener un detalle...

[ VER INFORMACIÓN ]
```

Si actualmente existe modal, expansión u otro comportamiento para mostrar información, conservarlo y mejorar su presentación en lugar de sustituirlo sin necesidad.

## 11. Galería

Evitar una cuadrícula excesivamente rígida si el layout existente permite evolucionarla.

Buscar composición editorial controlada y responsive.

Mantener la posibilidad de abrir fotografías mediante modal/lightbox.

La galería debe soportar diferentes proporciones de fotografía sin romper el layout.

## 12. RSVP

Es el CTA principal de toda la invitación.

Debe recibir mayor contraste y protagonismo que Maps, calendario o regalos.

Ejemplo conceptual:

```text
¿NOS ACOMPAÑAS?

Nos hará muy felices
celebrar contigo.

Confirma tu asistencia
antes de [fecha].

[ CONFIRMAR ASISTENCIA ]

vía WhatsApp
```

Mantener la integración WhatsApp existente.

## 13. Cierre emocional

Final limpio, emocional y sin apariencia de footer corporativo.

Puede combinar:

- iniciales/nombres;
- mensaje final;
- fecha;
- fotografía o fondo limpio;
- detalle romántico mínimo.

No añadir información comercial dentro de la experiencia de los invitados salvo que exista como requerimiento separado del producto.

## 14. Secciones opcionales

El diseño debe funcionar si alguna sección está deshabilitada.

Probar combinaciones como:

- sin Historia;
- sin Regalos;
- sin Dress Code;
- sin Galería;
- varias secciones opcionales ausentes simultáneamente.

No deben quedar:

- espacios vacíos excesivos;
- separadores huérfanos;
- decoración sin contexto;
- alternancias de fondo rotas.

## 15. Restricciones

- No crear contenido específico obligatorio para una sola pareja.
- No añadir secciones nuevas por iniciativa propia.
- No alterar integraciones existentes sin necesidad.
- No introducir todavía efectos complejos de scroll; Fase 04 los consolida.

## 16. Criterios de aceptación

- Existe un recorrido visual claro desde Hero hasta cierre.
- Las secciones emocionales y funcionales tienen ritmos distintos.
- La fecha y las fotografías tienen mayor protagonismo.
- Ceremonia/recepción son fáciles de escanear.
- RSVP es inequívocamente el CTA principal.
- Las secciones opcionales pueden desaparecer sin romper el diseño.
- Maps, calendario, contador, regalos, galería y WhatsApp conservan su funcionalidad.
