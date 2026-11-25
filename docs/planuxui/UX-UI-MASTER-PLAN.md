# UX/UI MASTER PLAN — Plantilla Premium de Bodas

## 1. Propósito

Evolucionar la plantilla de bodas existente hacia una experiencia digital premium, moderna, romántica-editorial e inmersiva, manteniendo intacta la arquitectura y parametrización ya construidas.

Este proyecto NO busca rehacer la aplicación ni crear una invitación específica para los datos actuales. El objetivo es mejorar el sistema UX/UI de una plantilla comercial reutilizable que permita producir invitaciones para nuevos clientes rápidamente mediante el reemplazo de datos, colores, fotografías, música y contenido ya parametrizados.

## 2. Principio rector

> La calidad visual debe mantenerse al cambiar los datos del cliente. Ninguna mejora UX/UI debe depender exclusivamente de los nombres, fotografías, textos, colores o contenido actualmente cargados en la demo.

## 3. Alcance

El trabajo se divide en cuatro fases, que deben ejecutarse en orden:

1. `FASE-01-SISTEMA-VISUAL.md`
2. `FASE-02-EXPERIENCIA-PREMIUM.md`
3. `FASE-03-REDISENO-SECCIONES.md`
4. `FASE-04-MOTION-RESPONSIVE-POLISH.md`

Codex debe leer este documento antes de iniciar cualquier fase y leer el documento específico de la fase antes de modificar código.

## 4. Dirección UX/UI aprobada

- Estilo: romántico-editorial moderno.
- Alcance: redesign visual y experiencial.
- Nivel de interacción: inmersivo premium, sin exceso de efectos.
- Navegación principal: scroll nativo vertical.
- Entrada: apertura cinematic basada en el sobre existente.
- Hero: inmersivo y de alto impacto visual.
- Música: reproductor flotante discreto.
- Fotografía: protagonista.
- Tipografía: serif editorial + sans funcional + script únicamente como acento.
- Decoración: romántica, sutil y controlada.
- Enfoque: mobile-first.

## 5. Recorrido UX objetivo

```text
APERTURA CINEMATIC
        ↓
HERO INMERSIVO
        ↓
MENSAJE / INVITACIÓN
        ↓
NUESTRA HISTORIA
        ↓
TRANSICIÓN FOTOGRÁFICA
        ↓
EL GRAN DÍA
        ↓
CEREMONIA
        ↓
RECEPCIÓN
        ↓
CALENDARIO
        ↓
CUENTA REGRESIVA
        ↓
MOMENTO FOTOGRÁFICO
        ↓
DRESS CODE
        ↓
REGALOS
        ↓
GALERÍA
        ↓
RSVP
        ↓
CIERRE EMOCIONAL
```

Las secciones opcionales deben poder desaparecer sin dejar huecos visuales ni romper el ritmo del recorrido.

## 6. Reglas de implementación

### Conservar

- Arquitectura existente.
- Sistema actual de parametrización/configuración.
- Separación existente de textos, datos y recursos.
- Funcionalidades que actualmente funcionan.
- Integraciones de Maps, calendario, WhatsApp, música, contador y galería/modal cuando existan.
- Enfoque de plantilla reutilizable.

### No hacer

- No reestructurar el proyecto por iniciativa propia si no es necesario para UX/UI.
- No migrar framework o stack.
- No duplicar datos ya parametrizados dentro del HTML/CSS/JS.
- No hardcodear nombres, fechas, lugares, colores o fotografías para conseguir el diseño.
- No introducir librerías pesadas solo para animaciones simples.
- No implementar smooth-scroll que secuestre el desplazamiento nativo.
- No convertir todas las secciones en tarjetas.
- No añadir funcionalidades que no estén especificadas en estos documentos.
- No eliminar una funcionalidad existente para simplificar el rediseño.

## 7. Estrategia de ejecución para Codex

Para cada fase:

1. Leer `UX-UI-MASTER-PLAN.md`.
2. Leer el documento de la fase.
3. Inspeccionar la implementación existente relacionada.
4. Identificar qué puede reutilizarse antes de crear código nuevo.
5. Implementar únicamente el alcance de esa fase.
6. Verificar que no se rompieron funcionalidades existentes.
7. Informar qué archivos fueron modificados y por qué.
8. Informar cualquier decisión que se haya tenido que asumir.
9. Detenerse al terminar la fase. No comenzar automáticamente la siguiente.

## 8. Prioridades

En caso de conflicto, usar este orden:

1. Funcionalidad existente.
2. Reutilización de la plantilla.
3. Experiencia móvil.
4. Claridad UX.
5. Consistencia visual.
6. Performance.
7. Animaciones y efectos decorativos.

Una animación nunca justifica romper funcionalidad, legibilidad o rendimiento.

## 9. Criterio de producto

La plantilla debe poder venderse como un producto premium y, al mismo tiempo, ser rápida de producir para nuevos clientes.

La personalización habitual de una nueva invitación debería consistir principalmente en sustituir parámetros ya contemplados por la arquitectura existente, no en rediseñar componentes.

El resultado debe sentirse como una invitación digital diseñada específicamente para una pareja aunque utilice una base reutilizable.

## 10. Definición global de terminado

El rediseño estará terminado cuando:

- La apertura produzca una primera impresión premium.
- El Hero tenga alto impacto visual.
- El scroll tenga ritmo narrativo.
- Todas las secciones compartan un lenguaje visual consistente.
- La fotografía tenga protagonismo.
- El RSVP sea el CTA principal.
- La música sea accesible sin interferir con el contenido.
- La experiencia sea excelente en móvil.
- Los datos variables no rompan el layout.
- Las secciones opcionales puedan desaparecer correctamente.
- La invitación siga funcionando sin animaciones.
- No se hayan roto las funcionalidades originales.
- La plantilla continúe siendo reutilizable y rápida de personalizar.
