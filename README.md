# 🚀 Derivador Comercial BCP

Calculadora de derivación comercial en tiempo real para el Banco de Crédito del Perú (BCP).

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-18+-green)

## 📋 Características

✅ **Cálculo automático en tiempo real** - Actualización instantánea de métricas  
✅ **Indicador visual de progreso** - Barra de progreso con código de colores  
✅ **Plan de acción claro** - Te dice exactamente cuántas derivaciones necesitas  
✅ **Proyección al 30/06** - Estimación de cumplimiento final  
✅ **Diseño profesional** - Interfaz moderna y responsiva  
✅ **Compatible con móviles** - Funciona en PC, tablet y celular  
✅ **Cero configuración** - Deploy a Vercel en 1 click  

## 🎯 Qué hace

La calculadora te ayuda a:

1. **Ingresar datos diarios**
   - Clientes con leads (Arribados)
   - Clientes derivados

2. **Ver en tiempo real**
   - Ratio de derivación actual
   - Meta del 20% (100% cumplimiento)
   - Meta del 24% (120% cumplimiento - excelencia)
   - % de cumplimiento

3. **Recibir plan de acción**
   - Cuántas derivaciones te faltan para cumplir meta
   - Impacto de cada derivación adicional
   - Status actual (crítico, en riesgo, cumplida, excelente)

## 🛠️ Stack Tecnológico

- **Next.js 14** - Framework React moderno
- **React 18** - Librería de componentes
- **CSS Modules** - Estilos encapsulados
- **Vercel** - Hosting y deployment automático

## 📦 Instalación

### Opción 1: Clonar desde GitHub (Recomendado)

```bash
git clone https://github.com/TU_USUARIO/derivador-comercial-bcp.git
cd derivador-comercial-bcp
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Opción 2: Crear desde cero

```bash
npx create-next-app@latest derivador-comercial-bcp
# Responde "No" a TypeScript y Tailwind
cd derivador-comercial-bcp

# Agrega los archivos:
# 1. pages/api/calcular.js
# 2. pages/index.js
# 3. styles/Home.module.css

npm run dev
```

## 🚀 Deploy a Vercel

### Desde GitHub (1 click)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Pega: `https://github.com/TU_USUARIO/derivador-comercial-bcp`
5. Click "Deploy"
6. ¡Listo! Tu app estará en vivo en ~60 segundos

**Tu URL será:** `https://derivador-comercial-bcp.vercel.app`

### Desde la terminal

```bash
npm i -g vercel
vercel
```

## 📁 Estructura del Proyecto

```
derivador-comercial-bcp/
├── pages/
│   ├── api/
│   │   └── calcular.js          # API Backend - Cálculos
│   ├── _app.js                  # App principal (Next.js)
│   └── index.js                 # Frontend - Calculadora
├── styles/
│   ├── globals.css              # Estilos globales
│   └── Home.module.css          # Estilos del componente
├── public/
│   └── favicon.ico
├── package.json                 # Dependencias
├── next.config.js               # Config de Next.js
├── .gitignore
└── README.md
```

## 🔧 API

### POST `/api/calcular`

Calcula métricas de derivación comercial.

**Request:**
```json
{
  "arribados": 49,
  "derivados": 12
}
```

**Response:**
```json
{
  "arribados": 49,
  "derivados": 12,
  "ratio": 24.49,
  "meta20": 9.8,
  "meta24": 11.76,
  "cumplimiento": 122.4,
  "faltante20": 0,
  "faltante24": 0,
  "porcentajePorDerivacion": 2.04,
  "estado": "cumplida",
  "color": "success",
  "mensaje": "Vas al 122% - META CUMPLIDA",
  "statusText": "✅ YA CUMPLES META",
  "proyeccion": {
    "diasRestantes": 17,
    "promedioDiario": 3.77,
    "proyeccionFinal": 113,
    "metaProyectada": 23,
    "cumplimientoProyectado": 491.3
  }
}
```

## 🎨 UI/UX

### Paleta de colores

- **Principal:** #1B3B7D (Azul BCP)
- **Secundario:** #6B4C9A (Morado)
- **Éxito:** #4CAF50 (Verde)
- **Alerta:** #FFC107 (Amarillo)
- **Crítico:** #E74C3C (Rojo)

### Responsividad

- **Desktop:** Layout de 3 columnas
- **Tablet:** Layout de 2 columnas
- **Mobile:** Layout de 1 columna

## 📊 Fórmulas Utilizadas

```
Ratio Derivación = (Derivados / Arribados) × 100

Meta 20% = Arribados × 0.20
Meta 120% = Arribados × 0.24

Cumplimiento (%) = (Derivados / Meta 20%) × 100

Faltante para Meta = Máximo(0, Techo(Meta 20% - Derivados))

Impacto por Derivación (%) = (1 / Arribados) × 100

Promedio Diario = Arribados / Día Actual
Proyección Final = Arribados + (Promedio Diario × Días Restantes)
```

## 💡 Próximas Mejoras

- [ ] Integración con Api.json.pe para validación de DNI
- [ ] Histórico de cálculos con base de datos
- [ ] Gráficos de tendencias mensuales
- [ ] Exportar reportes a PDF
- [ ] Integración con Google Sheets
- [ ] Autenticación de usuarios
- [ ] Dashboard para supervisores
- [ ] Notificaciones de alerta

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/mi-mejora`
3. Commit: `git commit -m 'Agrega mi mejora'`
4. Push: `git push origin feature/mi-mejora`
5. Abre un Pull Request

## 📝 Licencia

MIT © 2024

## 👤 Autor

**Jesus Romero**  
Promotor de Servicios - BCP

## 📧 Contacto

Para preguntas o sugerencias, abre un [Issue](https://github.com/TU_USUARIO/derivador-comercial-bcp/issues)

---

**¡Hecho con ❤️ para mejorar la productividad del equipo BCP!**

Hecho en Vercel - Deploy fácil, rápido y gratis 🚀
