# FASE 01 — Sistema Visual Premium

## Objetivo

Construir un lenguaje visual consistente para toda la plantilla sin modificar su arquitectura funcional.

La dirección aprobada es **romántico-editorial moderno**.

## Resultado esperado

La plantilla debe dejar de percibirse como una colección de secciones independientes y comenzar a sentirse como una experiencia diseñada bajo un mismo sistema visual.

## 1. Tipografía

Usar tres roles como máximo:

### Serif editorial

Uso principal:

- nombres de los novios;
- títulos principales;
- títulos emocionales;
- fechas tratadas como elemento gráfico.

Debe transmitir elegancia y personalidad.

### Sans funcional

Uso principal:

- horarios;
- ubicaciones;
- botones;
- etiquetas;
- información secundaria;
- textos donde prime la legibilidad.

### Script / manuscrita

Uso únicamente como acento romántico.

No utilizarla para párrafos largos, botones, información crítica ni como tipografía dominante.

## 2. Jerarquía

Crear una escala tipográfica clara y reutilizable para:

- display / nombres;
- heading principal;
- heading de sección;
- eyebrow / etiqueta;
- body;
- small / metadata;
- CTA.

Usar tamaños fluidos cuando ayuden a mantener proporción entre móvil y desktop.

## 3. Paleta por roles

No diseñar alrededor de un color concreto de la demo.

El sistema debe respetar la parametrización existente y trabajar conceptualmente con roles equivalentes a:

```text
background
surface
primary
accent
text-primary
text-secondary
border-subtle
```

Los nombres reales deben adaptarse a la arquitectura existente si ya hay variables/tokens definidos.

## 4. Espaciado

Crear o consolidar una escala coherente de espaciado.

Conceptualmente:

```text
XS / S / M / L / XL / 2XL
```

Usar bastante espacio negativo entre bloques y secciones.

Evitar llenar visualmente cada zona de la pantalla.

## 5. Fotografía

Definir tratamientos reutilizables:

- Hero inmersivo.
- Imagen editorial.
- Imagen full-bleed.
- Galería.

Las imágenes deben integrarse en la composición y no sentirse como elementos simplemente insertados entre textos.

## 6. Decoración

### Ambiental

- fondos suaves;
- gradientes discretos;
- textura muy ligera si ya existen recursos apropiados.

### Editorial

- líneas finas;
- iniciales;
- pequeñas fechas;
- separadores;
- ornamentos mínimos.

### Romántica

Flores/hojas/ornamentos solo en puntos estratégicos:

- apertura;
- Hero;
- alguna transición;
- cierre.

Evitar repetir decoración floral en todas las secciones.

## 7. Botones y acciones

Consolidar el lenguaje visual en tres niveles:

### Primary CTA

Reservado principalmente para RSVP / Confirmar asistencia.

### Secondary CTA

Ejemplos:

- Cómo llegar.
- Ver información.

### Acción discreta

Ejemplo:

- Agregar al calendario.

Maps o calendario no deben competir visualmente con RSVP.

## 8. Tarjetas

No convertir cada sección en una card.

Usarlas solo cuando aporten agrupación funcional, por ejemplo:

- datos de evento si la composición lo necesita;
- regalos;
- contenido desplegable.

Cuando se utilicen:

- borde sutil;
- fondo ligeramente diferenciado;
- sombras mínimas o inexistentes;
- radios coherentes.

## 9. Iconografía

Unificar el estilo.

Preferencia: iconos lineales, simples y elegantes.

No mezclar arbitrariamente emojis, SVG, FontAwesome u otros estilos visuales.

## 10. Ritmo visual

Evitar que todas las secciones tengan idéntica composición.

Alternar de forma controlada:

```text
contenido limpio
→ fotografía
→ composición editorial
→ bloque destacado
→ fotografía
→ contenido funcional
```

La variación debe provenir del sistema, no de estilos aislados difíciles de reutilizar.

## 11. Restricciones

- No modificar arquitectura de datos.
- No hardcodear contenido de la pareja actual.
- No introducir todavía la secuencia cinematic completa; corresponde a Fase 02.
- No implementar todavía un sistema complejo de animaciones; corresponde a Fase 04.
- No romper los componentes funcionales existentes.

## 12. Criterios de aceptación

La fase está terminada cuando:

- Existe una jerarquía tipográfica consistente.
- Los colores se aplican mediante roles coherentes.
- Los botones tienen jerarquía clara.
- El RSVP puede distinguirse como acción primaria.
- Las fotografías tienen tratamientos definidos.
- La decoración está controlada.
- El espaciado es consistente.
- Las secciones ya no dependen de estilos arbitrarios individuales.
- El resultado funciona con los parámetros actuales sin introducir valores de cliente hardcodeados.
