import 'dart:html';

void main() {
  // Definir variables
  String nombre = "Juan";
  int edad = 25;

  // Aplica la hoja de estilos
  final link = LinkElement()
    ..rel = 'stylesheet'
    ..href = 'css/styles.css';
  document.head!.append(link);

  // Aplica el script JavaScript
  final script = ScriptElement()
    ..src = 'script/script.js'
    ..defer = true;
  document.head!.append(script);

  // Crear contenido HTML
  final body = document.body!;
  body.className = 'dark-theme';

  // Landing Page: Vista de Introducción extendida
  final landing = DivElement()
    ..id = 'landing'
    ..innerHtml = '''
      <div class="landing-content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png" alt="Dart Logo" class="landing-image">
        <h1>Bienvenido al Manual Interactivo de Dart</h1>
        <p>Dart es un lenguaje de programación moderno, desarrollado por Google, que potencia el desarrollo de aplicaciones web y móviles. 
        Gracias a su sintaxis limpia y características avanzadas, Dart te permite construir interfaces impresionantes, manejar datos de forma eficiente y crear aplicaciones escalables.</p>
        <p>Explora este portal interactivo, donde encontrarás ejemplos prácticos, comparaciones entre el uso correcto e incorrecto y datos complementarios que enriquecerán tu aprendizaje.</p>
        <button class="toggle-enter" id="enter-btn">Entrar al Manual</button>
      </div>
    ''';
  body.append(landing);

  // Contenido principal del manual (inicialmente oculto)
  final mainContent = DivElement()
    ..id = 'main-content'
    ..innerHtml = '''
      <header>
        <h1>📘 Aprende Dart Interactivamente</h1>
        <nav>
          <ul class="menu">
            <li class="menu-item" data-section="introduccion">Introducción</li>
            <li class="menu-item" data-section="clases">Clases y Métodos</li>
            <li class="menu-item" data-section="listas">Listas</li>
            <li class="menu-item" data-section="mapas">Mapas y Diccionarios</li>
            <li class="menu-item" data-section="herencia">Herencia</li>
            <li class="menu-item" data-section="constructores">Constructores</li>
            <li class="menu-item" data-section="factory">Constructores Factory</li>
            <li class="menu-item" data-section="busquedas">Búsquedas en Listas</li>
            <li class="menu-item" data-section="operadores">Operadores</li>
            <li class="menu-item" data-section="excepciones">Excepciones</li>
            <li class="menu-item" data-section="json">Manejo de JSON</li>
            <li class="menu-item" data-section="practica">Práctica</li>
            <li class="menu-item" data-section="practica-completa">Práctica Avanzada</li>
          </ul>
        </nav>
        <div class="theme-toggle-container">
          <span>Modo Oscuro</span>
          <label class="switch">
            <input type="checkbox" id="theme-toggle">
            <span class="slider"></span>
          </label>
          <span>Modo Claro</span>
        </div>
      </header>
      <main>
        <!-- Sección: Introducción -->
        <section id="introduccion" class="content-section">
          <h2>🚀 Introducción a Dart</h2>
          <p>Dart es un lenguaje versátil que sirve de base para el desarrollo con Flutter, permitiendo crear aplicaciones de alto rendimiento y interfaces de usuario atractivas.</p>
          <div class="example-container">
            <button class="toggle-example">Ver ejemplos</button>
            <div class="example">
              <strong class="correct-label">✅ Correcto:</strong>
              <pre><code>// Punto de entrada del programa
void main() {
  print("¡Hola, Dart!"); // Uso de la función print para mostrar en consola
}</code></pre>
              <strong class="incorrect-label">❌ Incorrecto:</strong>
              <pre><code>// 'echo' no es válido en Dart, se usa print en su lugar
void main() {
  echo "¡Hola, Dart!";
}</code></pre>
              <div class="complement-info">
                <em>Dato complementario:</em> La función <code>main()</code> es el punto de entrada en Dart y es esencial para iniciar cualquier programa.
              </div>
            </div>
          </div>
        </section>
        <!-- Más secciones aquí ... -->
      </main>
      <footer>
        <p>© 2025 Manual Interactivo de Dart</p>
        <div id="info">
          <p>Nombre: $nombre, Edad: $edad</p>
        </div>
      </footer>
    ''';
  body.append(mainContent);
}
