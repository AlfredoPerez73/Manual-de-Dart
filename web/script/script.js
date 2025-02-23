'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Referencias a elementos principales
  const enterBtn = document.getElementById('enter-btn');
  const landing = document.getElementById('landing');
  const mainContent = document.getElementById('main-content');
  const body = document.body;

  // Mostrar contenido principal y ocultar landing al hacer clic
  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      landing.style.display = 'none';
      mainContent.style.display = 'block';
    });
  }

  // Toggle de tema (oscuro / claro)
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    // Por defecto, el body tiene la clase .dark-theme
    // Si se activa el checkbox, pasamos a .light-theme
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        // Quitar dark-theme, poner light-theme
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
      } else {
        // Quitar light-theme, poner dark-theme
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
      }
    });
  }

  // Navegación y animaciones
  const menuItems = document.querySelectorAll('.menu-item');
  const contentSections = document.querySelectorAll('.content-section');

  // Scroll suave a la sección seleccionada
  const handleNavClick = (event) => {
    event.preventDefault();
    const sectionId = event.currentTarget.getAttribute('data-section');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  menuItems.forEach(item => {
    item.addEventListener('click', handleNavClick);
  });

  // Resaltar item de menú activo según el scroll
  const updateActiveMenuItem = () => {
    let currentSectionId = '';
    contentSections.forEach(section => {
      const sectionTop = section.offsetTop - 50;
      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute('id');
      }
    });

    menuItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-section') === currentSectionId);
    });
  };

  let isScrolling = false;
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        updateActiveMenuItem();
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  // IntersectionObserver para animar la entrada de cada sección
  const observerOptions = { threshold: 0.2 };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  }, observerOptions);

  contentSections.forEach(section => sectionObserver.observe(section));

  // Mostrar/ocultar ejemplos en cada contenedor
  const exampleContainers = document.querySelectorAll('.example-container');
  exampleContainers.forEach(container => {
    const toggleButton = container.querySelector('.toggle-example');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        container.classList.toggle('expanded');
      });
    }
  });

  // Sección de práctica (Hola, mundo)
  const practiceButton = document.getElementById('practice-btn');
  const practiceInput = document.getElementById('practice-input');
  const practiceOutput = document.getElementById('practice-output');

  if (practiceButton && practiceInput && practiceOutput) {
    practiceButton.addEventListener('click', () => {
      const code = practiceInput.value;
      // Verificación básica: buscamos la función print con el mensaje "¡Hola, mundo!"
      if (
        code.includes('print("¡Hola, mundo!")') ||
        code.includes("print('¡Hola, mundo!')")
      ) {
        practiceOutput.textContent = '✅ ¡Correcto!';
        practiceOutput.style.color = 'green';
      } else {
        practiceOutput.textContent = '❌ Incorrecto, intenta de nuevo.';
        practiceOutput.style.color = 'red';
      }
    });
  }

  /* =========================
     PRÁCTICA AVANZADA
  ==========================*/
  
  // 1. Clases y Métodos
  const challenge1Btn = document.getElementById('eval-challenge-1');
  const challenge1Input = document.getElementById('challenge-1');
  const challenge1Output = document.getElementById('output-challenge-1');

  challenge1Btn.addEventListener('click', () => {
    const code = challenge1Input.value;
    // Buscamos 'class Persona', 'void saludar(' y 'print("Hola")' como mínimo
    if (
      code.includes('class Persona') &&
      code.includes('void saludar') &&
      (
        code.includes('print("Hola")') ||
        code.includes("print('Hola')")
      )
    ) {
      challenge1Output.textContent = '✅ ¡Desafío 1 completado!';
      challenge1Output.style.color = 'green';
    } else {
      challenge1Output.textContent = '❌ Asegúrate de crear la clase Persona y el método saludar() que imprima "Hola".';
      challenge1Output.style.color = 'red';
    }
  });

  // 2. Listas
  const challenge2Btn = document.getElementById('eval-challenge-2');
  const challenge2Input = document.getElementById('challenge-2');
  const challenge2Output = document.getElementById('output-challenge-2');

  challenge2Btn.addEventListener('click', () => {
    const code = challenge2Input.value;
    // Mínimo: 'List<String>' y 'print(' para imprimir
    if (
      code.includes('List<String>') &&
      code.includes('print(')
    ) {
      challenge2Output.textContent = '✅ ¡Desafío 2 completado!';
      challenge2Output.style.color = 'green';
    } else {
      challenge2Output.textContent = '❌ Asegúrate de usar List<String> con 3 frutas e imprimir la primera.';
      challenge2Output.style.color = 'red';
    }
  });

  // 3. Mapas
  const challenge3Btn = document.getElementById('eval-challenge-3');
  const challenge3Input = document.getElementById('challenge-3');
  const challenge3Output = document.getElementById('output-challenge-3');

  challenge3Btn.addEventListener('click', () => {
    const code = challenge3Input.value;
    // Mínimo: 'Map<String, int>' y 'print('Ana'
    if (
      code.includes('Map<String, int>') &&
      code.includes('print(') &&
      code.includes('["Ana"]')
    ) {
      challenge3Output.textContent = '✅ ¡Desafío 3 completado!';
      challenge3Output.style.color = 'green';
    } else {
      challenge3Output.textContent = '❌ Asegúrate de usar Map<String, int> y de imprimir el valor de la clave "Ana".';
      challenge3Output.style.color = 'red';
    }
  });

  // 4. Herencia
  const challenge4Btn = document.getElementById('eval-challenge-4');
  const challenge4Input = document.getElementById('challenge-4');
  const challenge4Output = document.getElementById('output-challenge-4');

  challenge4Btn.addEventListener('click', () => {
    const code = challenge4Input.value;
    // Mínimo: 'class Animal' y 'class Perro extends Animal' y 'hacerSonido'
    if (
      code.includes('class Animal') &&
      code.includes('class Perro extends Animal') &&
      code.includes('hacerSonido()')
    ) {
      challenge4Output.textContent = '✅ ¡Desafío 4 completado!';
      challenge4Output.style.color = 'green';
    } else {
      challenge4Output.textContent = '❌ Revisa la herencia: class Perro extends Animal y el método hacerSonido().';
      challenge4Output.style.color = 'red';
    }
  });

  // 5. Constructores
  const challenge5Btn = document.getElementById('eval-challenge-5');
  const challenge5Input = document.getElementById('challenge-5');
  const challenge5Output = document.getElementById('output-challenge-5');

  challenge5Btn.addEventListener('click', () => {
    const code = challenge5Input.value;
    // Mínimo: 'class Persona' y 'Persona(this.nombre, this.edad)' y algo de imprimir
    if (
      code.includes('class Persona') &&
      code.includes('Persona(this.nombre, this.edad)') &&
      code.includes('print(')
    ) {
      challenge5Output.textContent = '✅ ¡Desafío 5 completado!';
      challenge5Output.style.color = 'green';
    } else {
      challenge5Output.textContent = '❌ Crea la clase Persona con un constructor que reciba nombre y edad e imprima esos valores.';
      challenge5Output.style.color = 'red';
    }
  });

  // 6. Constructores Factory
  const challenge6Btn = document.getElementById('eval-challenge-6');
  const challenge6Input = document.getElementById('challenge-6');
  const challenge6Output = document.getElementById('output-challenge-6');

  challenge6Btn.addEventListener('click', () => {
    const code = challenge6Input.value;
    // Mínimo: 'class Usuario', 'factory Usuario.desdeJson', 'Map<String, dynamic>'
    if (
      code.includes('class Usuario') &&
      code.includes('factory Usuario.desdeJson') &&
      code.includes('Map<String, dynamic>')
    ) {
      challenge6Output.textContent = '✅ ¡Desafío 6 completado!';
      challenge6Output.style.color = 'green';
    } else {
      challenge6Output.textContent = '❌ Implementa la clase Usuario con factory Usuario.desdeJson(Map<String, dynamic> json).';
      challenge6Output.style.color = 'red';
    }
  });

  // 7. Búsquedas en Listas
  const challenge7Btn = document.getElementById('eval-challenge-7');
  const challenge7Input = document.getElementById('challenge-7');
  const challenge7Output = document.getElementById('output-challenge-7');

  challenge7Btn.addEventListener('click', () => {
    const code = challenge7Input.value;
    // Mínimo: 'List<int>' con [1,2,3,4,5], 'firstWhere(', 'orElse:'
    if (
      code.includes('List<int>') &&
      code.includes('[1,') &&
      code.includes('firstWhere(') &&
      code.includes('orElse:')
    ) {
      challenge7Output.textContent = '✅ ¡Desafío 7 completado!';
      challenge7Output.style.color = 'green';
    } else {
      challenge7Output.textContent = '❌ Usa firstWhere con orElse para encontrar el número mayor a 3.';
      challenge7Output.style.color = 'red';
    }
  });

  // 8. Operadores
  const challenge8Btn = document.getElementById('eval-challenge-8');
  const challenge8Input = document.getElementById('challenge-8');
  const challenge8Output = document.getElementById('output-challenge-8');

  challenge8Btn.addEventListener('click', () => {
    const code = challenge8Input.value;
    // Mínimo: 'int a = 10;', 'int b = 5;', 'print(a + b)'
    if (
      code.includes('int a = 10') &&
      code.includes('int b = 5') &&
      (
        code.includes('print(a + b)') ||
        code.includes('print(a+b)')
      )
    ) {
      challenge8Output.textContent = '✅ ¡Desafío 8 completado!';
      challenge8Output.style.color = 'green';
    } else {
      challenge8Output.textContent = '❌ Declara a=10 y b=5, e imprime su suma con print(a + b).';
      challenge8Output.style.color = 'red';
    }
  });

  // 9. Excepciones
  const challenge9Btn = document.getElementById('eval-challenge-9');
  const challenge9Input = document.getElementById('challenge-9');
  const challenge9Output = document.getElementById('output-challenge-9');

  challenge9Btn.addEventListener('click', () => {
    const code = challenge9Input.value;
    // Mínimo: 'try {', 'catch(', ' ~/ 0'
    if (
      code.includes('try {') &&
      code.includes('catch(') &&
      code.includes('~/ 0')
    ) {
      challenge9Output.textContent = '✅ ¡Desafío 9 completado!';
      challenge9Output.style.color = 'green';
    } else {
      challenge9Output.textContent = '❌ Usa try/catch y divide un entero por 0 con ~/ para lanzar excepción.';
      challenge9Output.style.color = 'red';
    }
  });

  // 10. JSON
  const challenge10Btn = document.getElementById('eval-challenge-10');
  const challenge10Input = document.getElementById('challenge-10');
  const challenge10Output = document.getElementById('output-challenge-10');

  challenge10Btn.addEventListener('click', () => {
    const code = challenge10Input.value;
    // Mínimo: 'jsonDecode(', 'Map<String, dynamic>', 'print(usuario["nombre"])'
    if (
      code.includes('jsonDecode(') &&
      code.includes('Map<String, dynamic>') &&
      (
        code.includes('print(usuario["nombre"])') ||
        code.includes("print(usuario['nombre'])")
      )
    ) {
      challenge10Output.textContent = '✅ ¡Desafío 10 completado!';
      challenge10Output.style.color = 'green';
    } else {
      challenge10Output.textContent = '❌ Convierte la cadena JSON a un Map<String,dynamic> con jsonDecode y luego imprime el nombre.';
      challenge10Output.style.color = 'red';
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  function desbloquearSiguiente(nivel) {
      const siguienteBloque = document.getElementById(`challenge-block-${nivel + 1}`);
      if (siguienteBloque) {
          siguienteBloque.style.display = "block"; // Hace visible el siguiente desafío
      }
  }

  function evaluarDesafio(nivel) {
      const input = document.getElementById(`challenge-${nivel}`).value.trim();
      const mensaje = document.createElement("p");

      // Simulación de evaluación (puedes agregar validaciones más específicas)
      if (input.length > 0) { 
          mensaje.textContent = "✅ ¡Correcto!";
          mensaje.style.color = "green";
          desbloquearSiguiente(nivel);
      } else {
          mensaje.textContent = "❌ Inténtalo de nuevo.";
          mensaje.style.color = "red";
      }

      document.getElementById(`output-challenge-${nivel}`).innerHTML = "";
      document.getElementById(`output-challenge-${nivel}`).appendChild(mensaje);
  }

  // Asignar eventos a los botones
  for (let i = 1; i <= 10; i++) {
      const boton = document.getElementById(`eval-challenge-${i}`);
      if (boton) {
          boton.addEventListener("click", () => evaluarDesafio(i));
      }
  }
});

