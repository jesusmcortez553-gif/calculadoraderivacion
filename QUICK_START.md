# ⚡ QUICK START - 5 MINUTOS

## Opción 1: Deploy a Vercel (Más fácil - 2 minutos)

```bash
# 1. Abre GitHub y crea un nuevo repositorio vacío
# Nombre: derivador-comercial-bcp

# 2. En tu terminal:
git clone https://github.com/TU_USUARIO/derivador-comercial-bcp.git
cd derivador-comercial-bcp
git push -u origin main

# 3. Ve a Vercel.com
# Click "Import Project"
# Pega tu URL de GitHub
# Click "Deploy"

# ¡LISTO! Tu app estará en: https://derivador-comercial-bcp.vercel.app
```

## Opción 2: Ejecutar localmente (5 minutos)

```bash
# 1. Clonar el repo
git clone https://github.com/TU_USUARIO/derivador-comercial-bcp.git
cd derivador-comercial-bcp

# 2. Instalar dependencias
npm install

# 3. Ejecutar servidor de desarrollo
npm run dev

# 4. Abrir navegador
# http://localhost:3000

# ¡LISTO! La calculadora está funcionando
```

## Archivos que necesitas

```
derivador-comercial-bcp/
├── pages/
│   ├── api/
│   │   └── calcular.js          (YA INCLUIDO)
│   ├── _app.js                  (YA INCLUIDO)
│   └── index.js                 (YA INCLUIDO)
├── styles/
│   ├── globals.css              (YA INCLUIDO)
│   └── Home.module.css          (YA INCLUIDO)
├── public/
│   └── favicon.ico              (Crea carpeta vacía)
├── package.json                 (YA INCLUIDO)
├── next.config.js               (YA INCLUIDO)
├── .gitignore                   (YA INCLUIDO)
└── README.md                    (YA INCLUIDO)
```

## Solucionar problemas

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### "Error en Vercel"
```bash
npm run build
npm start
```

## URLs útiles

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub:** https://github.com
- **Documentación Next.js:** https://nextjs.org/docs
- **Soporte Vercel:** https://vercel.com/support

---

**¿Necesitas ayuda?** Abre un Issue en GitHub 🚀
