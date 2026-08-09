````md
# Plan de reorganización visual del portafolio

## Objetivo

Mejorar la composición visual del sitio existente sin cambiar, eliminar, renombrar ni agregar secciones de contenido.

El trabajo debe enfocarse exclusivamente en:

- Distribución de elementos.
- Jerarquía visual.
- Uso del espacio.
- Alineación.
- Profundidad.
- Fondos.
- Ritmo entre secciones.
- Responsive design.
- Integración de efectos de cristal.

El contenido actual debe conservarse.

---

# 1. Sistema general de layout

Utilizar un sistema consistente para todo el sitio.

## Contenedor principal

Usar un contenedor central con un ancho máximo aproximado de:

- `1280px - 1440px` en desktop.
- Padding lateral de `24px - 48px`.
- Centrado mediante `margin-inline: auto`.

Ejemplo conceptual:

```text
┌───────────────────────────────────────────────────────────┐
│                                                           │
│    ┌─────────────────────────────────────────────────┐    │
│    │                                                 │    │
│    │              CONTENT CONTAINER                  │    │
│    │                                                 │    │
│    └─────────────────────────────────────────────────┘    │
│                                                           │
└───────────────────────────────────────────────────────────┘
````

---

# 2. Grid

Usar internamente un grid de 12 columnas.

```css
.layout-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
}
```

Esto permitirá organizar el contenido existente en diferentes proporciones sin modificarlo.

Composiciones principales:

* `6 / 6`
* `7 / 5`
* `5 / 7`
* `8 / 4`
* `4 / 8`
* `12`
* Elementos centrados ocupando `6-8` columnas.

Evitar que todas las secciones tengan exactamente la misma distribución.

---

# 3. Principio de composición

No colocar todo al centro.

Usar tres tipos principales de composición:

## Izquierda → derecha

```text
┌─────────────────────────────────────────────┐
│                                             │
│  CONTENIDO                    ELEMENTO       │
│  PRINCIPAL                    SECUNDARIO     │
│                                             │
└─────────────────────────────────────────────┘
```

Ideal para secciones donde exista:

* Texto + imagen.
* Texto + gráfico.
* Texto + componente visual.
* Información principal + información secundaria.

---

## Derecha → izquierda

Invertir periódicamente la composición:

```text
┌─────────────────────────────────────────────┐
│                                             │
│  ELEMENTO                     CONTENIDO      │
│  SECUNDARIO                   PRINCIPAL      │
│                                             │
└─────────────────────────────────────────────┘
```

Esto genera ritmo visual y evita que toda la página parezca una plantilla repetida.

---

## Centro

Reservar las composiciones centradas para elementos importantes.

```text
                    TÍTULO

             Texto o contenido
                importante

                 [ Acción ]
```

No usar centro sistemáticamente.

Debe funcionar como un cambio de ritmo.

---

# 4. Ritmo general de la página

Organizar las secciones existentes utilizando una alternancia visual.

Ejemplo:

```text
SECCIÓN
LEFT  → RIGHT

        ↓

SECCIÓN
       CENTER

        ↓

SECCIÓN
RIGHT ← LEFT

        ↓

SECCIÓN
FULL WIDTH

        ↓

SECCIÓN
LEFT → RIGHT

        ↓

SECCIÓN
       CENTER
```

No es obligatorio seguir exactamente este patrón.

El objetivo es evitar:

```text
CENTER
CENTER
CENTER
CENTER
CENTER
CENTER
```

o:

```text
LEFT
LEFT
LEFT
LEFT
LEFT
LEFT
```

---

# 5. Regla de alternancia

Al revisar las secciones existentes:

1. Identificar cuál es el elemento visualmente dominante.
2. Identificar cuál es el contenido secundario.
3. Asignarles posiciones dentro del grid.
4. Alternar la dirección respecto a la sección anterior cuando sea posible.

Ejemplo:

```text
SECCIÓN A

████████                 █████
contenido                 visual


SECCIÓN B

█████                 ████████
visual                  contenido


SECCIÓN C

              ███████
              contenido
```

No modificar el contenido para conseguir esta composición.

Modificar únicamente su layout.

---

# 6. Full-width sections

Algunas secciones pueden romper temporalmente el contenedor principal.

Usarlas para:

* Elementos visuales importantes.
* Experiencias interactivas.
* Galerías.
* Grids grandes.
* Elementos gráficos.
* Transiciones entre áreas importantes.

Ejemplo:

```text
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                   FULL WIDTH AREA                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

El contenido interno puede seguir alineándose con el grid general.

Usar este recurso pocas veces para que tenga impacto.

---

# 7. Manejo del espacio vacío

No intentar llenar todos los espacios.

El whitespace debe utilizarse intencionalmente.

Ejemplo:

```text
████████████

                               visual
                                 ◯
```

El espacio vacío puede:

* Separar jerarquías.
* Dirigir la mirada.
* Crear profundidad.
* Hacer destacar elementos.
* Evitar saturación.

Una sección puede tener mucho espacio siempre que exista un punto visual claro hacia el cual dirija la mirada.

---

# 8. Fondos

No utilizar un único background plano para toda la aplicación.

Crear un sistema de fondo por capas.

Orden:

```text
Base background
      ↓
Ambient gradients
      ↓
Grid / patterns
      ↓
Noise
      ↓
Decorative elements
      ↓
Glass surfaces
      ↓
Content
```

---

# 9. Fondo base

Utilizar un color base consistente para toda la aplicación.

Evitar negro absoluto cuando el diseño sea oscuro.

Ejemplos:

```css
--background: #08090c;
--background-secondary: #0b0d12;
```

---

# 10. Luces ambientales

Agregar grandes radial gradients detrás de determinadas áreas.

Ejemplo:

```css
background:
  radial-gradient(
    circle at 20% 30%,
    rgb(90 80 255 / 18%),
    transparent 35%
  ),
  radial-gradient(
    circle at 80% 60%,
    rgb(0 160 255 / 12%),
    transparent 40%
  );
```

Las luces deben ser:

* Grandes.
* Difusas.
* Poco saturadas.
* Parcialmente fuera del viewport.
* Diferentes dependiendo de la zona.

Nunca deben parecer círculos claramente visibles.

---

# 11. Relación entre fondo y layout

Las luces ambientales deben acompañar la composición.

Si el contenido está a la izquierda:

```text
CONTENT

████████

                              ◯
                         ambient light
```

Si el contenido está a la derecha:

```text
      ◯
 ambient light

                         ████████
                         CONTENT
```

Esto ayuda a equilibrar visualmente las secciones.

---

# 12. Grid de fondo

Agregar opcionalmente un grid extremadamente sutil.

Ejemplo:

```css
background-image:
  linear-gradient(
    rgb(255 255 255 / 0.025) 1px,
    transparent 1px
  ),
  linear-gradient(
    90deg,
    rgb(255 255 255 / 0.025) 1px,
    transparent 1px
  );

background-size: 64px 64px;
```

Debe ser casi imperceptible.

No debe competir con el contenido.

---

# 13. Noise / grain

Agregar una capa global muy ligera de ruido.

Objetivo:

* Evitar fondos excesivamente digitales o planos.
* Añadir textura.
* Mejorar la percepción del cristal.
* Crear sensación de material.

Opacidad aproximada:

```css
opacity: 0.02;
```

Debe ser prácticamente invisible conscientemente.

---

# 14. Glass surfaces

No convertir todos los elementos en tarjetas de cristal.

Usar glass principalmente en:

* Navegación.
* Controles.
* Componentes flotantes.
* Información secundaria.
* Elementos interactivos.
* Cards que realmente necesiten separación del fondo.

Jerarquía:

```text
BACKGROUND

      ┌───────────────────────┐
      │ GLASS SURFACE         │
      │                       │
      │ CONTENT               │
      └───────────────────────┘
```

El background debe seguir siendo parcialmente visible detrás del glass.

---

# 15. Profundidad

Trabajar con varios niveles visuales.

```text
LEVEL 0
Background

LEVEL 1
Ambient lights / grid / noise

LEVEL 2
Decorative elements

LEVEL 3
Main content

LEVEL 4
Glass cards

LEVEL 5
Navigation / floating controls
```

No utilizar las mismas sombras, blur y transparencia para todos los niveles.

---

# 16. Elementos decorativos

Los elementos decorativos deben ocupar espacios que actualmente se perciban demasiado vacíos.

Pueden ser:

* Glows.
* Blobs.
* Líneas.
* Formas abstractas.
* Orbes.
* Meshes.
* Elementos WebGL/WebGPU.
* Pequeños gráficos.
* Elementos geométricos.

No agregar decoración únicamente para llenar espacio.

Cada elemento debe ayudar a equilibrar la composición.

---

# 17. Elementos visuales existentes

Si ya existen:

* Imágenes.
* Screenshots.
* Ilustraciones.
* Videos.
* Gráficos.
* Iconos.
* Animaciones.

No eliminarlos.

Integrarlos al nuevo grid.

Ejemplo:

Antes:

```text
             TITLE

             TEXT

             IMAGE
```

Después:

```text
TITLE / TEXT                 IMAGE
████████                     █████
████████                     █████
```

El contenido no cambia.

Solamente cambia su composición.

---

# 18. Secciones con muchos elementos

Cuando una sección tenga varios elementos similares, utilizar grid.

Por ejemplo:

```text
┌────────────────────┬───────────────┐
│                    │               │
│                    │               │
├──────────┬─────────┼───────────────┤
│          │         │               │
└──────────┴─────────┴───────────────┘
```

Puede utilizarse un estilo Bento cuando la importancia de los elementos sea diferente.

Evitar grids donde absolutamente todos los elementos tengan siempre las mismas dimensiones.

---

# 19. Jerarquía de tamaño

No todos los componentes deben tener el mismo peso visual.

Usar aproximadamente:

```text
Primary element
████████████████████████

Secondary element
████████████

Tertiary element
██████
```

El tamaño debe comunicar importancia.

---

# 20. Alineación vertical

Evitar colocar automáticamente todos los elementos en `align-items: center`.

Dependiendo de la composición utilizar:

```css
align-items: start;
align-items: center;
align-items: end;
```

Por ejemplo:

```text
CONTENT
████████
████████
████████

                     VISUAL
                     █████
                     █████
```

Los pequeños desplazamientos verticales ayudan a evitar layouts excesivamente rígidos.

---

# 21. Navegación y elementos flotantes

Si existe navegación, mantener su contenido actual.

Puede cambiar su presentación visual para:

* Flotar sobre la interfaz.
* Centrarse horizontalmente.
* Utilizar glass.
* Reducirse ligeramente al hacer scroll.
* Cambiar su transparencia dependiendo del contenido detrás.

No cambiar sus opciones ni estructura funcional.

---

# 22. Movimiento

Agregar movimiento solamente donde aporte información o profundidad.

Priorizar:

* Entrada suave de elementos.
* Parallax muy ligero.
* Movimiento de luces.
* Highlights según cursor.
* Transiciones de páginas.
* Transiciones entre estados.
* Scroll-triggered animations discretas.

Evitar animar constantemente todo el sitio.

---

# 23. Velocidad de las animaciones

Las animaciones ambientales deben ser lentas.

Ejemplo:

```text
Ambient background:
10s - 30s

Section reveal:
400ms - 800ms

Hover:
150ms - 300ms

Navigation:
200ms - 400ms
```

Evitar movimientos bruscos.

---

# 24. Scroll

El scroll debe ayudar a revelar la composición.

Una sección puede aparecer:

```text
TEXT  →


             ← VISUAL
```

o:

```text
            CONTENT
              ↑
```

Las animaciones deben complementar el layout existente, no determinarlo.

El sitio debe seguir funcionando correctamente sin animaciones.

---

# 25. Responsive

Desktop puede utilizar composiciones asimétricas.

Tablet puede simplificarlas.

Mobile debe priorizar claridad.

Ejemplo:

Desktop:

```text
TEXT                    VISUAL
████████                █████
```

Mobile:

```text
TEXT
████████

VISUAL
████████
```

No intentar conservar diseños `7 / 5` en pantallas pequeñas.

---

# 26. Breakpoints conceptuales

No depender exclusivamente de breakpoints globales.

Utilizar también Container Queries cuando sea apropiado.

Referencia general:

```text
Mobile
< 640px

Tablet
640px - 1024px

Desktop
1024px - 1440px

Large desktop
> 1440px
```

Los componentes deben adaptarse también al espacio que realmente reciben.

---

# 27. Consistencia

Crear design tokens para:

```css
--page-max-width

--space-xs
--space-sm
--space-md
--space-lg
--space-xl
--space-2xl

--radius-sm
--radius-md
--radius-lg

--glass-blur-sm
--glass-blur-md
--glass-blur-lg

--depth-1
--depth-2
--depth-3
```

Evitar valores arbitrarios diferentes en cada componente.

---

# 28. Regla para reorganizar secciones existentes

Para cada sección existente seguir este proceso:

1. No modificar su contenido.
2. No eliminar elementos.
3. No crear una sección nueva para reemplazarla.
4. Identificar el contenido dominante.
5. Identificar contenido secundario o visual.
6. Elegir composición:

   * izquierda/derecha,
   * derecha/izquierda,
   * centro,
   * full width,
   * grid.
7. Revisar la composición de la sección anterior.
8. Evitar repetirla si existe una alternativa razonable.
9. Colocar ambient lighting para balancear la sección.
10. Aplicar profundidad solamente cuando sea necesaria.
11. Verificar comportamiento responsive.

---

# 29. Restricciones

No realizar los siguientes cambios:

* No modificar textos existentes.
* No renombrar secciones.
* No eliminar secciones.
* No cambiar el significado del contenido.
* No inventar proyectos o información.
* No agregar contenido únicamente para llenar espacio.
* No cambiar la navegación funcional.
* No alterar funcionalidades existentes.

El objetivo es reorganizar y mejorar visualmente lo que ya existe.

---

# 30. Resultado esperado

El sitio existente debe pasar de una estructura visualmente uniforme:

```text
        CONTENT

        CONTENT

        CONTENT

        CONTENT
```

a una composición con ritmo:

```text
LEFT ───────────── RIGHT

             CENTER

RIGHT ───────────── LEFT

████████ FULL WIDTH ████████

LEFT ───────────── RIGHT

             CENTER
```

manteniendo exactamente el contenido y las secciones actuales.

El resultado debe sentirse:

* Moderno.
* Espacioso.
* Intencional.
* Asimétrico cuando corresponda.
* Consistente.
* Profundo.
* Visualmente balanceado.
* Premium.
* Responsive.
* Escalable.

La prioridad es reorganizar el sitio existente, no rediseñar su contenido.

```
```
