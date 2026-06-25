#!/bin/bash

# Script de instalación automática para derivador-comercial-bcp
# Uso: bash SETUP.sh

echo "🚀 Derivador Comercial BCP - Instalación"
echo "=========================================="
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar si Node.js está instalado
echo -e "${BLUE}✓ Verificando Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}⚠️  Node.js no está instalado${NC}"
    echo "Descarga desde: https://nodejs.org"
    exit 1
fi
echo -e "${GREEN}✓ Node.js instalado: $(node -v)${NC}"
echo ""

# Instalar dependencias
echo -e "${BLUE}✓ Instalando dependencias...${NC}"
npm install
echo -e "${GREEN}✓ Dependencias instaladas${NC}"
echo ""

# Crear estructura de carpetas
echo -e "${BLUE}✓ Creando estructura del proyecto...${NC}"
mkdir -p pages/api
mkdir -p styles
mkdir -p public
echo -e "${GREEN}✓ Carpetas creadas${NC}"
echo ""

# Inicializar Git (si no está inicializado)
if [ ! -d ".git" ]; then
    echo -e "${BLUE}✓ Inicializando Git...${NC}"
    git init
    git add .
    git commit -m "Initial commit: Derivador Comercial BCP"
    echo -e "${GREEN}✓ Git inicializado${NC}"
fi
echo ""

# Resumen
echo -e "${GREEN}=========================================="
echo "✅ ¡Instalación completada!"
echo "==========================================${NC}"
echo ""
echo -e "${BLUE}Próximos pasos:${NC}"
echo "1. Ejecutar servidor local:"
echo -e "   ${YELLOW}npm run dev${NC}"
echo ""
echo "2. Abrir navegador:"
echo -e "   ${YELLOW}http://localhost:3000${NC}"
echo ""
echo "3. Para desplegar en Vercel:"
echo -e "   ${YELLOW}git push origin main${NC}"
echo "   Luego ve a https://vercel.com"
echo ""
echo -e "${BLUE}Documentación:${NC}"
echo "- README.md - Documentación completa"
echo "- QUICK_START.md - Guía rápida"
echo ""
