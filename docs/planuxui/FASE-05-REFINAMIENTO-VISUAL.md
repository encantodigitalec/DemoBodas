# FASE 05 — REFINAMIENTO VISUAL Y DIRECCIÓN ARTÍSTICA

## 1. Objetivo

Refinar el resultado UX/UI ya implementado en las Fases 1–4 para elevar la percepción premium de la plantilla, sin rehacer la arquitectura, la parametrización, la estructura funcional ni el sistema de secciones existente.

Esta fase debe corregir principalmente los elementos que todavía se perciben demasiado simples o genéricos:

- reproductor flotante de música;
- escala y presencia tipográfica;
- personalidad de los títulos;
- sección Código de Vestimenta;
- sección Regalos;
- coherencia de iconografía e ilustraciones;
- pequeños detalles visuales de Ceremonia y Recepción.

El objetivo NO es agregar más efectos. El objetivo es mejorar dirección artística, legibilidad, personalidad y consistencia.

---

## 2. Principio rector

Este proyecto es una plantilla comercial reutilizable.

Toda mejora debe seguir funcionando al cambiar:

- nombres;
- fechas;
- textos;
- colores;
- fotografías;
- lugares;
- horarios;
- canción;
- información de regalos;
- secciones opcionales.

No diseñar exclusivamente para los datos actuales.

No hardcodear contenido que ya esté parametrizado.

---

## 3. Restricciones

Antes de modificar código:

1. Revisar la implementación actual.
2. Identificar cómo están resueltos actualmente:
   - variables de tema;
   - tipografías;
   - reproductor;
   - assets/iconos;
   - Dress Code;
   - Regalos;
   - Ceremonia y Recepción.
3. Reutilizar la arquitectura existente.
4. Evitar dependencias nuevas salvo que sean realmente necesarias.
5. No modificar funcionalidades que ya funcionan.
6. No rehacer Fases 1–4.
7. No cambiar el modelo de datos ni la parametrización salvo que sea imprescindible para cumplir esta fase.

---

# 4. REPRODUCTOR FLOTANTE — “NUESTRA CANCIÓN”

## Problema actual

El reproductor muestra inicialmente el texto “Nuestra canción”, pero al hacer scroll se compacta demasiado y termina perdiendo contexto visual.

Un icono aislado de música se percibe como un botón flotante genérico y no como parte emocional de la invitación.

## Cambio requerido

Mantener visible durante toda la experiencia una versión compacta del reproductor que conserve contexto textual.

Referencia conceptual:

```text
♫  Nuestra canción  ❚❚
```

No convertir automáticamente el reproductor en un círculo que muestre únicamente el icono musical durante el scroll.

## Tratamiento visual

Diseñar el reproductor como una cápsula flotante premium:

- tamaño compacto;
- bordes redondeados;
- fondo integrado con el tema;
- ligera transparencia si funciona con la paleta actual;
- `backdrop-filter`/blur únicamente si mejora el resultado y tiene fallback correcto;
- borde fino;
- sombra muy suave;
- iconografía coherente;
- estados claros de play/pause;
- sin competir visualmente con RSVP.

En pantallas extremadamente estrechas se permite reducir el texto a:

```text
♫  Canción  ❚❚
```

pero mantener siempre una etiqueta textual cuando exista espacio razonable.

## Comportamiento

- Aparece después de abrir la invitación.
- Permanece accesible durante todo el scroll.
- No debe saltar de tamaño de forma molesta.
- No debe cubrir CTAs.
- Respetar `safe-area-inset-*`.
- Mantener funcionamiento actual de play/pause.
- Si el navegador bloquea audio, la invitación debe seguir funcionando.
- No iniciar comportamientos inesperados al hacer scroll.

---

# 5. ESCALA TIPOGRÁFICA

## Problema

Algunos textos se perciben pequeños respecto al espacio disponible. La plantilla tiene aire, pero parte de ese aire actualmente puede sentirse vacío en lugar de editorial.

## Objetivo

Aumentar presencia y legibilidad sin convertir toda la interfaz en texto grande.

Crear una jerarquía claramente diferenciada:

1. nombres / Hero;
2. títulos principales;
3. subtítulos;
4. texto de lectura;
5. información funcional;
6. microtexto.

## Referencia móvil

Usar estos rangos como dirección visual, NO como valores rígidos:

```text
Nombres / Hero       48–64 px
Título de sección    32–40 px
Subtítulo            20–24 px
Texto principal      17–18 px
Texto secundario     15–16 px
Microtexto           13–14 px
```

Implementar tamaños fluidos mediante `clamp()` cuando corresponda.

## Reglas

- No usar texto principal importante a tamaños excesivamente pequeños.
- Mantener longitudes de línea cómodas.
- Revisar `line-height`.
- Revisar `letter-spacing`.
- Los títulos deben tener presencia sin provocar saltos incorrectos con nombres/textos largos.
- Probar especialmente 360 px, 390 px y 430 px.
- Desktop debe escalar de forma editorial, no simplemente agrandar todo.

---

# 6. PERSONALIDAD TIPOGRÁFICA

## Dirección

Mantener el lenguaje:

**romántico + editorial + moderno**

pero darle mayor personalidad.

El sistema tipográfico debe trabajar con tres roles:

### 6.1 Serif protagonista

Utilizar para:

- nombres cuando corresponda;
- Nuestra Historia;
- El Gran Día;
- Código de Vestimenta;
- Detalles y Regalos;
- RSVP;
- títulos emocionales.

Buscar una serif elegante con carácter editorial, buen contraste de trazos y buena lectura.

No sustituir tipografías de manera arbitraria si la fuente actual ya cumple; primero evaluar si puede ajustarse mediante peso, tamaño, tracking y composición.

### 6.2 Sans funcional

Mantener/utilizar para:

- horarios;
- ubicaciones;
- botones;
- labels;
- información funcional;
- navegación;
- datos secundarios.

Debe ser limpia y muy legible.

### 6.3 Script/acento

Introducir o reforzar una tipografía manuscrita únicamente como acento gráfico.

NO usar script para:

- párrafos;
- información importante;
- botones;
- horarios;
- datos funcionales.

Puede utilizarse en palabras cortas o detalles como:

```text
Nuestra
juntos
amor
para siempre
```

o como pequeño contraste dentro de determinados títulos.

Debe sentirse como una firma, no como la tipografía dominante.

## Rendimiento

No cargar múltiples familias/pesos innecesarios.

Si se añade una fuente, revisar impacto en carga y utilizar únicamente los pesos necesarios.

---

# 7. COMPOSICIÓN DE TÍTULOS

Evitar que todos los encabezados sean simplemente texto centrado en mayúsculas.

Crear un sistema editorial reutilizable con 2–3 variantes como máximo.

Ejemplos conceptuales:

```text
Nuestra
HISTORIA
```

```text
Código de
VESTIMENTA
```

```text
Detalles
& regalos
```

Las variantes deben:

- compartir lógica visual;
- funcionar con textos parametrizados;
- no depender de una palabra específica;
- adaptarse correctamente a títulos más largos;
- mantener consistencia entre secciones.

No convertir cada sección en un diseño diferente.

---

# 8. CÓDIGO DE VESTIMENTA

## Problema

Las imágenes/iconos actuales de vestido/traje se perciben demasiado simples frente al nuevo lenguaje premium.

NO solucionar el problema simplemente aumentando su tamaño.

## Nueva dirección artística

Reemplazar o rediseñar estos assets siguiendo:

**fashion illustration / line-art romántico editorial**

Características:

- trazos finos;
- siluetas elegantes;
- composición limpia;
- detalles mínimos;
- integración con `accent` / colores del tema;
- evitar negro sólido pesado;
- evitar apariencia de clip-art;
- evitar iconografía genérica de aplicación.

## Composición objetivo

Referencia:

```text
        Código de
        VESTIMENTA

           Formal

   [ilustración]   [ilustración]

       DAMAS        CABALLEROS
    Vestido largo   Traje formal

          ─── ♡ ───

   El color blanco está reservado
           para la novia
```

No copiar literalmente la maqueta si otra composición funciona mejor con el sistema actual.

## Responsive

En móvil:

- ilustraciones suficientemente visibles;
- mantener equilibrio entre ambas;
- evitar que texto e ilustraciones queden comprimidos.

En desktop:

- permitir una composición más editorial;
- no aumentar desproporcionadamente los assets.

## Reutilización

La solución debe permitir cambiar textos sin tener que rediseñar la sección.

---

# 9. REGALOS

## Problema

El asset actual de regalo se percibe genérico y visualmente pesado.

La información bancaria expuesta directamente puede dominar una sección que debería sentirse emocional.

## Nueva dirección artística

Sustituir el tratamiento actual por una ilustración editorial romántica.

Posibles motivos:

- regalo line-art;
- sobre + lazo;
- ramas delicadas + detalle de regalo;
- composición floral mínima.

Debe seguir la misma familia visual que Dress Code y el resto de iconografía.

## Composición

Referencia:

```text
          [ilustración]

       Detalles
       & regalos

   Tu presencia es nuestro
        mejor regalo.

 Si deseas tener un detalle con
 nosotros, puedes hacerlo mediante
 sobre cerrado o transferencia.

    [ VER DATOS BANCARIOS ]
```

El texto exacto debe seguir viniendo de la configuración existente cuando corresponda.

---

# 10. DATOS BANCARIOS DESPLEGABLES

Si la arquitectura actual permite hacerlo sin introducir complejidad innecesaria, evitar mostrar todos los datos bancarios de forma permanente.

Añadir CTA:

```text
VER DATOS BANCARIOS
```

Al activarlo, mostrar los datos mediante:

- expansión inline elegante; o
- modal accesible.

Elegir la alternativa que mejor encaje con la implementación existente y requiera menos complejidad.

## Mejora UX recomendada

Si existe número de cuenta parametrizado, incorporar:

```text
COPIAR CUENTA
```

Al copiar:

- feedback breve;
- no usar alertas intrusivas;
- conservar accesibilidad.

No hardcodear banco, titular, tipo o número de cuenta.

Si ocultar los datos requiere modificar significativamente la arquitectura actual, documentarlo antes de implementarlo.

---

# 11. ICONOGRAFÍA GLOBAL

Realizar una auditoría visual de los iconos/ilustraciones usados en:

- ceremonia;
- recepción;
- ubicación;
- calendario;
- música;
- Dress Code;
- regalos;
- RSVP;
- galería si aplica.

## Dirección única

Adoptar:

**line-art romántico/editorial, trazo fino y elegante**

Evitar mezclar:

- PNG negro pesado;
- emoji;
- SVG lineal;
- iconos rellenos;
- estilos 3D;
- clip-art.

No es obligatorio sustituir un icono si ya encaja correctamente.

Priorizar coherencia sobre cantidad.

## Color

Los assets deben poder integrarse con los roles de color existentes:

- `primary`;
- `accent`;
- `text-primary`;
- `text-secondary`.

Evitar colores hardcodeados que dificulten reutilizar el tema.

---

# 12. CEREMONIA Y RECEPCIÓN

Realizar un refinamiento menor, no un rediseño.

Ambas deben compartir exactamente la misma lógica visual:

```text
icono / detalle
tipo de evento
hora
lugar
ubicación
CTA
```

Normalizar representación horaria.

No mezclar formatos como:

```text
17:00 pm
19H00 pm
```

Preferir una única convención configurable/presente en los datos, por ejemplo:

```text
17:00
19:00
```

o:

```text
5:00 PM
7:00 PM
```

No cambiar datos reales; solo evitar duplicar AM/PM cuando ya se usa formato 24 horas.

---

# 13. MOTION

NO agregar un nuevo sistema de animaciones.

Reutilizar el motion system existente.

Los nuevos elementos pueden utilizar las animaciones ya disponibles:

- fade;
- fade-up;
- scale reveal;
- stagger.

Las ilustraciones NO deben tener animaciones decorativas permanentes.

Evitar:

- flotación continua;
- rotaciones;
- pulsos constantes;
- partículas;
- movimientos que distraigan.

La dirección premium debe venir principalmente de composición, tipografía, ilustración y espacio.

---

# 14. ACCESIBILIDAD

Mantener:

- contraste suficiente;
- `alt` apropiado en ilustraciones informativas;
- `alt=""` en decoración puramente ornamental cuando corresponda;
- controles accesibles por teclado;
- foco visible;
- labels/`aria-label` adecuados para play/pause;
- reduced motion;
- áreas táctiles adecuadas.

El botón de copiar cuenta debe comunicar correctamente el resultado a tecnologías asistivas si se implementa.

---

# 15. PRUEBAS RESPONSIVE

Validar al menos:

```text
360 px
390 px
430 px
768 px
1024 px
1440 px
```

Revisar especialmente:

- nombres largos;
- títulos largos;
- Dress Code;
- reproductor;
- CTA de regalos;
- modal/expansión bancaria;
- RSVP;
- safe areas;
- ausencia de scroll horizontal.

Casos de prueba recomendados:

```text
Ana & Luis
```

y:

```text
María Fernanda
&
Juan Sebastián
```

Los cambios deben soportar ambos extremos.

---

# 16. CRITERIOS DE ACEPTACIÓN

La Fase 5 se considera terminada únicamente cuando:

- [ ] “Nuestra canción” permanece identificable durante el scroll.
- [ ] El reproductor no se reduce a un icono ambiguo en condiciones normales.
- [ ] El reproductor no tapa contenido ni CTAs.
- [ ] La tipografía general tiene mayor legibilidad y presencia.
- [ ] Los títulos poseen una personalidad editorial más marcada.
- [ ] La tipografía script se usa únicamente como acento.
- [ ] No se ha perjudicado el rendimiento cargando fuentes innecesarias.
- [ ] Dress Code ya no utiliza un tratamiento visual genérico/pesado.
- [ ] Vestido y traje pertenecen a una misma familia de ilustración.
- [ ] Regalos posee un tratamiento visual coherente con Dress Code.
- [ ] Los datos bancarios no dominan visualmente la sección.
- [ ] Si se implementa “Copiar cuenta”, funciona correctamente.
- [ ] Iconografía global se percibe coherente.
- [ ] Ceremonia y Recepción comparten estructura visual.
- [ ] Horarios no mezclan incorrectamente formato 24 h con AM/PM.
- [ ] No se rompió música.
- [ ] No se rompió Maps.
- [ ] No se rompió calendario.
- [ ] No se rompió galería.
- [ ] No se rompió RSVP/WhatsApp.
- [ ] No se rompió parametrización.
- [ ] Secciones opcionales siguen funcionando.
- [ ] No existe scroll horizontal en móvil.
- [ ] La experiencia sigue funcionando con reduced motion.

---

# 17. ORDEN DE IMPLEMENTACIÓN PARA CODEX

Ejecutar en este orden:

1. Inspeccionar implementación actual.
2. Ajustar escala tipográfica.
3. Refinar sistema/composición de títulos.
4. Refinar comportamiento y diseño del reproductor.
5. Rediseñar Dress Code.
6. Rediseñar Regalos.
7. Implementar/ajustar datos bancarios desplegables si es viable.
8. Auditar/unificar iconografía.
9. Refinar Ceremonia y Recepción.
10. Validar responsive.
11. Validar accesibilidad.
12. Ejecutar regresión funcional.
13. Informar archivos modificados y decisiones tomadas.

---

# 18. FUERA DE ALCANCE

No realizar en esta fase:

- nueva arquitectura;
- nueva parametrización general;
- reestructuración completa del proyecto;
- nuevas secciones;
- nuevo sistema de navegación;
- nuevos efectos de scroll;
- nuevas animaciones complejas;
- cambios en lógica de negocio;
- rediseño completo de Hero;
- rediseño completo de apertura cinematic;
- sustitución innecesaria de fotografías;
- cambios de contenido del cliente salvo correcciones de presentación.

---

# 19. INSTRUCCIÓN FINAL PARA CODEX

Implementa esta fase como refinamiento incremental sobre el resultado actual.

Antes de cambiar un componente, inspecciona cómo está construido y reutiliza la solución existente siempre que sea posible.

No interpretes “premium” como “más efectos”.

Prioriza:

**tipografía + jerarquía + composición + ilustración + consistencia + legibilidad.**

Al finalizar, detente.

Entrega un resumen con:

- archivos modificados;
- cambios visuales realizados;
- assets sustituidos o añadidos;
- fuentes añadidas/eliminadas si aplica;
- decisiones tomadas;
- posibles puntos que requieran revisión visual humana.

No continúes con nuevas mejoras fuera de esta fase sin aprobación.
