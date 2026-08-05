# Semana 6 — Validación de formularios

**Concepto practicado:** expresiones regulares, sanitización contra XSS y
validadores reutilizables.

Formulario de registro con validación en tiempo real: nombre, email,
teléfono, fecha de nacimiento, ID de miembro, código postal, URL de perfil
y contraseña. Cada validador usa un patrón `RegExp` propio y devuelve un
objeto `{ isValid, message, formatted }` consistente. `sanitizeInput()`
escapa `& < > " '` antes de mostrar cualquier valor en el DOM.

## Ejecutar

```bash
cd semana-06-validacion-formularios
python3 -m http.server 5500
```

Abrir `http://localhost:5500` en el navegador.
