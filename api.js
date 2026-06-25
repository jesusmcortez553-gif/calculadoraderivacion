// API Backend - Calculadora Derivación Comercial BCP
// Este archivo va en: pages/api/calcular.js (en tu proyecto Next.js)

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { arribados, derivados } = req.body;

  // Validaciones
  if (!Number.isInteger(arribados) || !Number.isInteger(derivados)) {
    return res.status(400).json({ error: 'Los valores deben ser números enteros' });
  }

  if (arribados < 0 || derivados < 0) {
    return res.status(400).json({ error: 'Los valores no pueden ser negativos' });
  }

  if (derivados > arribados) {
    return res.status(400).json({ error: 'No puedes derivar más que los arribados' });
  }

  // CÁLCULOS PRINCIPALES
  const ratio = arribados === 0 ? 0 : (derivados / arribados) * 100;
  const meta20 = arribados * 0.20;
  const meta24 = arribados * 0.24;
  const cumplimiento = arribados === 0 ? 0 : (derivados / meta20) * 100;

  // FALTANTES PARA METAS
  const faltante20 = Math.max(0, Math.ceil(meta20 - derivados));
  const faltante24 = Math.max(0, Math.ceil(meta24 - derivados));
  const porcentajePorDerivacion = arribados === 0 ? 0 : (1 / arribados) * 100;

  // ESTADO Y ALERTAS
  let estado = 'crítico';
  let color = 'danger';
  let mensaje = '';

  if (arribados === 0) {
    estado = 'sin_datos';
    mensaje = 'Ingresa primero los arribados';
  } else if (cumplimiento >= 120) {
    estado = 'excelente';
    color = 'success';
    mensaje = `Vas al ${Math.round(cumplimiento)}% - EXCELENTE`;
  } else if (cumplimiento >= 100) {
    estado = 'cumplida';
    color = 'success';
    mensaje = `Vas al ${Math.round(cumplimiento)}% - META CUMPLIDA`;
  } else if (cumplimiento >= 80) {
    estado = 'en_riesgo';
    color = 'warning';
    mensaje = `Vas al ${Math.round(cumplimiento)}% - EN RIESGO`;
  } else {
    estado = 'critico';
    color = 'danger';
    mensaje = `Vas al ${Math.round(cumplimiento)}% - CRÍTICO`;
  }

  // PROYECCIÓN (asumiendo ritmo constante)
  const diasRestantes = 30 - 13; // Si es día 13 del mes
  const promedioDiario = arribados / 13;
  const proyeccionFinal = Math.round(arribados + (promedioDiario * diasRestantes));
  const metaProyectada = Math.round(proyeccionFinal * 0.20);

  return res.status(200).json({
    // Inputs
    arribados,
    derivados,

    // Métricas principales
    ratio: parseFloat(ratio.toFixed(2)),
    meta20: parseFloat(meta20.toFixed(1)),
    meta24: parseFloat(meta24.toFixed(1)),
    cumplimiento: parseFloat(cumplimiento.toFixed(1)),

    // Plan de acción
    faltante20,
    faltante24,
    porcentajePorDerivacion: parseFloat(porcentajePorDerivacion.toFixed(2)),

    // Estado
    estado,
    color,
    mensaje,
    statusText: 
      faltante20 === 0 
        ? '✅ YA CUMPLES META'
        : faltante20 === 1
        ? '1 derivación más te lleva a meta'
        : `${faltante20} derivaciones más te llevan a meta`,

    // Proyección
    proyeccion: {
      diasRestantes,
      promedioDiario: parseFloat(promedioDiario.toFixed(2)),
      proyeccionFinal,
      metaProyectada,
      cumplimientoProyectado: parseFloat(((proyeccionFinal / metaProyectada) * 100).toFixed(1))
    }
  });
}
