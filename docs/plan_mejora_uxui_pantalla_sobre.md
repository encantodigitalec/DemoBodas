# Plan de mejora UX/UI localizada — Pantalla inicial del sobre

## Tipo de intervención
Mejora visual puntual. No es un rediseño general.

## Objetivo
Mejorar únicamente el bloque visual ubicado sobre el sobre para que la pantalla inicial se perciba más elegante, romántica, limpia y premium, manteniendo intacto el diseño actual del sobre y su funcionamiento.

## Alcance
Modificar solamente:
- Bloque de texto superior.
- Tipografía.
- Jerarquía visual.
- Fecha.
- Espaciados.
- Elemento decorativo actual.
- Microanimación de entrada.

No modificar:
- Sobre.
- Sello.
- Colores del sobre.
- Sombras.
- Dimensiones.
- CTA “TOCA PARA ABRIR”.
- Lógica de apertura.
- JavaScript funcional.
- Resto de secciones del MVP.
- Arquitectura general del proyecto.

## 1. Eliminar la rama decorativa
- Eliminar completamente la rama verde ubicada junto al texto.
- No reemplazarla por flores, hojas, iconos, ornamentos o ilustraciones adicionales.
- El espacio negativo debe formar parte de la composición.

## 2. Nueva dirección tipográfica
Usar **Cormorant Garamond** para el bloque introductorio.

Composición:

```text
Tenemos algo
especial para ti
```

### “Tenemos algo”
- Cormorant Garamond.
- Peso aproximado: `400–500`.
- Color neutro oscuro.
- Tamaño moderado.
- Apariencia elegante y discreta.

### “especial para ti”
- Cormorant Garamond.
- `font-style: italic`.
- Peso aproximado: `500`.
- Ligeramente más grande que la línea anterior.
- Utilizar el verde principal ya definido en el proyecto.

La segunda línea debe ser el punto de mayor interés del bloque introductorio.

## 3. Mejorar la fecha
Cambiar:

```text
24 AGOSTO DEL 2027
```

por:

```text
24 · AGOSTO · 2027
```

Características:
- Mayúsculas.
- Tamaño pequeño.
- `letter-spacing` amplio.
- Peso medio.
- Color gris cálido o color secundario existente.
- Centrada.
- Mantener los datos parametrizables.

No colocar la fecha como texto fijo si actualmente proviene de variables o configuración.

## 4. Jerarquía visual
La composición debe seguir este orden:

```text
Tenemos algo
especial para ti

24 · AGOSTO · 2027


        SOBRE
```

Prioridad visual:

**frase destacada → mensaje introductorio → fecha → sobre**

El sobre debe seguir siendo el elemento visual principal de toda la pantalla.

## 5. Estructura del bloque
Agrupar los elementos superiores dentro de un contenedor lógico similar a:

```text
intro-content
    intro-title
    intro-highlight
    intro-date

envelope-container
```

Preferir:

```css
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
```

Gestionar separación mediante `gap`, `margin` o variables existentes.

Evitar:
- Posiciones absolutas innecesarias.
- Offsets manuales.
- Ajustes específicos por dispositivo salvo que sean imprescindibles.

## 6. Espaciado
- Mantener poca separación entre “Tenemos algo” y “especial para ti”.
- Usar separación media entre frase y fecha.
- Dar mayor aire entre fecha y sobre.
- Mantener suficiente espacio negativo alrededor.
- Evitar que cada elemento parezca independiente.

## 7. Microanimación
Añadir una entrada suave y discreta.

Secuencia:

```text
Tenemos algo
      ↓
especial para ti
      ↓
fecha
      ↓
sobre
```

Usar únicamente:
- `opacity`.
- `transform: translateY(...)`.

Duraciones orientativas:
- Animación: `500–700ms`.
- Retraso entre elementos: `100–150ms`.

El desplazamiento vertical debe ser mínimo, por ejemplo:

```css
transform: translateY(6px);
```

No utilizar:
- Bounce.
- Zoom.
- Rotaciones.
- Escalados fuertes.
- Efectos brillantes.
- Partículas.
- Animaciones complejas.

## 8. No duplicar animaciones
Si el sobre ya posee una animación inicial implementada en el MVP, integrar esa animación dentro de la nueva secuencia en lugar de crear otra que compita con la existente.

Conservar el comportamiento actual siempre que sea posible.

## 9. Accesibilidad
Respetar:

```css
@media (prefers-reduced-motion: reduce)
```

En ese caso:
- Eliminar delays innecesarios.
- Minimizar movimiento.
- Mostrar los elementos prácticamente de forma inmediata.

## 10. Responsive
Validar al menos:
- `320px`.
- `360px`.
- `375px`.
- `390px`.
- `430px`.
- Escritorio.

Prioridad en móvil:
- Encabezado visible.
- Fecha legible.
- Sobre claramente visible.
- CTA accesible.
- Evitar scroll inicial innecesario.

En pantallas con poca altura:
- Reducir primero gaps.
- Reducir márgenes verticales.
- No reducir agresivamente la tipografía.

## 11. Mantener la paleta existente
No crear una nueva paleta.

Continuar utilizando:
- Fondo crema/blanco cálido.
- Verde principal existente.
- Tonos neutros actuales.

Codex debe reutilizar las variables CSS del proyecto siempre que existan.

## 12. No introducir dependencias innecesarias
No incorporar:
- Librerías de animación.
- Frameworks nuevos.
- Paquetes JavaScript.
- Librerías de iconos.

La mejora debe resolverse con el HTML/CSS existente.

La única dependencia aceptable sería la fuente si Cormorant Garamond todavía no está disponible en el proyecto.

## 13. Resultado visual esperado
La pantalla debe pasar de:

```text
texto sencillo
+
rama decorativa
+
sobre
```

a:

```text
mensaje editorial elegante
+
fecha delicada
+
espacio limpio
+
sobre protagonista
```

## 14. Criterios de aceptación
La mejora estará terminada cuando:
- La rama haya desaparecido.
- Cormorant Garamond esté correctamente aplicada.
- Exista clara jerarquía entre las dos líneas.
- La fecha utilice el formato `24 · AGOSTO · 2027`.
- El bloque esté correctamente centrado.
- Los espacios se perciban equilibrados.
- Exista una entrada sutil.
- Funcione correctamente en móvil.
- El sobre permanezca visual y funcionalmente igual.
- Ninguna otra sección del MVP haya sido modificada.

## Instrucción principal para Codex

> Esta tarea corresponde exclusivamente a una mejora UX/UI localizada de la pantalla inicial. No realizar un rediseño general, no modificar la arquitectura, no alterar la lógica actual y no cambiar el diseño del sobre. Limitar la intervención al bloque introductorio situado sobre el sobre: tipografía, jerarquía, fecha, espaciados, eliminación de la rama decorativa y microanimación sutil.
