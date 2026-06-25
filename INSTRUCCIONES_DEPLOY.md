# 🚀 GUÍA DE DESPLIEGUE EN VERCEL - Derivador Comercial BCP

## REQUISITOS PREVIOS
- Tener una cuenta en GitHub (gratis)
- Tener una cuenta en Vercel (gratis)
- Node.js 18+ instalado en tu PC

## PASO 1: CREAR EL PROYECTO NEXT.JS LOCALMENTE

```bash
# En tu terminal/CMD, ve a la carpeta donde quieres crear el proyecto
cd Desktop

# Crear nuevo proyecto Next.js
npx create-next-app@latest derivador-comercial --typescript false

# Responder a las preguntas:
# ✔ Would you like to use TypeScript? › No
# ✔ Would you like to use ESLint? › Yes
# ✔ Would you like to use Tailwind CSS? › No
# ✔ Would you like your code inside a `src/` directory? › No
# ✔ Would you like to use App Router? › No
# ✔ Would you like to customize the default import alias? › No

# Entrar a la carpeta
cd derivador-comercial
```

## PASO 2: AGREGAR LOS ARCHIVOS

```bash
# Crear las carpetas necesarias
mkdir -p pages/api
mkdir styles

# Copiar los archivos:
# 1. Copia el contenido de "api.js" → pages/api/calcular.js
# 2. Copia el contenido de "index.js" → pages/index.js
# 3. Copia el contenido de "Home.module.css" → styles/Home.module.css
```

**O directamente desde la terminal:**

```bash
# En Windows (PowerShell)
New-Item -Path "pages\api\calcular.js" -Force
# (Pega el contenido de api.js)

New-Item -Path "pages\index.js" -Force
# (Pega el contenido de index.js)

New-Item -Path "styles\Home.module.css" -Force
# (Pega el contenido de Home.module.css)

# En Mac/Linux
cat > pages/api/calcular.js << 'EOF'
# (Pega el contenido de api.js)
EOF
```

## PASO 3: PROBAR LOCALMENTE

```bash
# Instalar dependencias (si no se instalaron)
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Abrir en navegador: http://localhost:3000
# Deberías ver la calculadora funcionando
```

## PASO 4: SUBIR A GITHUB

```bash
# Inicializar Git (si aún no lo has hecho)
git init
git add .
git commit -m "Inicial: Derivador Comercial BCP"

# Crear un repositorio en GitHub.com
# 1. Ve a https://github.com/new
# 2. Nombre: "derivador-comercial"
# 3. Descripción: "Calculadora de derivación comercial BCP"
# 4. Click en "Create repository"

# Desde tu terminal, conectar con GitHub
git remote add origin https://github.com/TU_USUARIO/derivador-comercial.git
git branch -M main
git push -u origin main
```

## PASO 5: DESPLEGAR EN VERCEL

### OPCIÓN A: Desde el sitio de Vercel (recomendado)

1. Ve a https://vercel.com
2. Click en "Sign Up" → Usa tu cuenta de GitHub
3. Click en "Import Project"
4. Pega: `https://github.com/TU_USUARIO/derivador-comercial`
5. Click "Import"
6. Vercel automáticamente detectará que es un proyecto Next.js
7. Click "Deploy"
8. ¡LISTO! Tu app estará en vivo en unos 60 segundos

URL será algo como: `https://derivador-comercial.vercel.app`

### OPCIÓN B: Desde la terminal (avanzado)

```bash
# Instalar CLI de Vercel
npm i -g vercel

# Desplegar
vercel

# Seguir las instrucciones interactivas
# Será tu primer deploy
```

## PASO 6: CONFIGURAR DOMINIO PERSONALIZADO (Opcional)

Si quieres un dominio como `https://derivador.bcp.pe`:

1. Compra el dominio en GoDaddy, Namecheap, o similar
2. En Vercel, ve a Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para apuntar los DNS

## PASO 7: USAR LA APP

- URL: `https://derivador-comercial.vercel.app` (o tu dominio personalizado)
- Ingresa "Arribados" y "Derivados"
- La calculadora se actualiza automáticamente
- ¡Compartir el link con tu equipo!

---

## ESTRUCTURA DEL PROYECTO

```
derivador-comercial/
├── pages/
│   ├── api/
│   │   └── calcular.js         (Backend - API)
│   └── index.js                 (Frontend - Interfaz)
├── styles/
│   └── Home.module.css          (Estilos)
├── public/
│   └── favicon.ico
├── package.json
├── next.config.js
└── .gitignore
```

---

## SOLUCIONAR PROBLEMAS

### "No funciona el cálculo"
- Revisa la consola del navegador (F12 → Console)
- Asegúrate de que `pages/api/calcular.js` existe

### "Error: Module not found"
```bash
npm install
npm run dev
```

### "Puerto 3000 ya está en uso"
```bash
# Usa otro puerto
npm run dev -- -p 3001
```

### "Error al hacer deploy en Vercel"
- Asegúrate que los archivos están en las carpetas correctas
- Verifica que `package.json` tiene "next" como dependencia
- Intenta: `npm run build`

---

## PRÓXIMAS MEJORAS (Opcional)

```javascript
// Agregar integración con Json.pe para DNI lookup
// Agregar histórico de cálculos
// Agregar descarga de reportes PDF
// Integrar con Google Sheets para guardar datos
// Agregar gráficos de tendencias
```

---

## SOPORTE

- Documentación Next.js: https://nextjs.org/docs
- Documentación Vercel: https://vercel.com/docs
- GitHub Issues: Sube problemas en tu repositorio

---

**¡Ya tienes una app profesional en producción!** 🚀

Puedes compartir el link con todo tu equipo y funciona desde cualquier navegador.
