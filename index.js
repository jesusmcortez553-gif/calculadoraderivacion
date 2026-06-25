// Frontend - Calculadora Derivación Comercial BCP
// Este archivo va en: pages/index.js (en tu proyecto Next.js)

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [arribados, setArribados] = useState(49);
  const [derivados, setDerivados] = useState(12);
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para llamar la API
  const calcular = async (arr, der) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/calcular', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          arribados: parseInt(arr) || 0,
          derivados: parseInt(der) || 0
        })
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Error en la API');
      }

      const data = await res.json();
      setResultado(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Calcular automáticamente cuando cambien los valores
  useEffect(() => {
    calcular(arribados, derivados);
  }, [arribados, derivados]);

  const getStatusColor = (estado) => {
    switch (estado) {
      case 'excelente':
      case 'cumplida':
        return '#4CAF50'; // Verde
      case 'en_riesgo':
        return '#FFC107'; // Amarillo
      case 'critico':
        return '#E74C3C'; // Rojo
      default:
        return '#999';
    }
  };

  const getStatusEmoji = (estado) => {
    switch (estado) {
      case 'excelente':
        return '🟢';
      case 'cumplida':
        return '✅';
      case 'en_riesgo':
        return '🟡';
      case 'critico':
        return '🔴';
      default:
        return 'ℹ️';
    }
  };

  const progresoPorcentaje = resultado 
    ? Math.min(100, (resultado.cumplimiento / 100) * 100)
    : 0;

  return (
    <>
      <Head>
        <title>Derivador Comercial BCP</title>
        <meta name="description" content="Calculadora de derivación comercial - BCP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* HEADER */}
          <header className={styles.header}>
            <div className={styles.logo}>
              <h1>Derivador Comercial BCP</h1>
              <p>Calculadora de ratios en tiempo real</p>
            </div>
          </header>

          {/* INPUTS */}
          <section className={styles.inputSection}>
            <div className={styles.inputGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="arribados">Clientes con leads (Arribados)</label>
                <input
                  id="arribados"
                  type="number"
                  min="0"
                  value={arribados}
                  onChange={(e) => setArribados(e.target.value)}
                  placeholder="Ej: 49"
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="derivados">Clientes derivados</label>
                <input
                  id="derivados"
                  type="number"
                  min="0"
                  value={derivados}
                  onChange={(e) => setDerivados(e.target.value)}
                  placeholder="Ej: 12"
                />
              </div>
            </div>
          </section>

          {error && (
            <div className={styles.errorBox}>
              <p>⚠️ {error}</p>
            </div>
          )}

          {loading && (
            <div className={styles.loadingBox}>
              <p>Calculando...</p>
            </div>
          )}

          {resultado && !loading && (
            <>
              {/* MÉTRICAS PRINCIPALES */}
              <section className={styles.metricsSection}>
                <div className={styles.metricsGrid}>
                  <div className={styles.metricCard}>
                    <label>Ratio actual</label>
                    <div className={styles.metricValue}>
                      {resultado.ratio.toFixed(1)}%
                    </div>
                  </div>
                  <div className={styles.metricCard}>
                    <label>Meta 20%</label>
                    <div className={styles.metricValue}>
                      {resultado.meta20.toFixed(1)}
                    </div>
                  </div>
                  <div className={styles.metricCard}>
                    <label>Cumplimiento</label>
                    <div 
                      className={styles.metricValue}
                      style={{ color: getStatusColor(resultado.estado) }}
                    >
                      {resultado.cumplimiento.toFixed(0)}%
                    </div>
                  </div>
                </div>
              </section>

              {/* BARRA DE PROGRESO */}
              <section className={styles.statusSection}>
                <label>Progreso hacia meta (100% = 20%)</label>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{
                      width: `${progresoPorcentaje}%`,
                      backgroundColor: getStatusColor(resultado.estado)
                    }}
                  />
                </div>
                <p className={styles.statusText}>
                  {getStatusEmoji(resultado.estado)} {resultado.mensaje}
                </p>
              </section>

              {/* PLAN DE ACCIÓN */}
              <section className={styles.actionSection}>
                <h3>📋 Plan de acción</h3>
                <div className={styles.actionBox}>
                  <p className={styles.actionText}>
                    Para llegar a <strong>20% (100% cumplimiento):</strong>
                  </p>
                  <p className={styles.actionHighlight}>
                    {resultado.faltante20 === 0 
                      ? '✅ ¡YA CUMPLES LA META!'
                      : `Necesitas derivar ${resultado.faltante20} cliente${resultado.faltante20 !== 1 ? 's' : ''} más`}
                  </p>
                </div>
              </section>

              {/* DETALLES */}
              <section className={styles.detailsSection}>
                <h3>📊 Detalles</h3>
                <div className={styles.detailsGrid}>
                  <div className={styles.detailItem}>
                    <label>Meta 120%</label>
                    <p>Necesitas <strong>{resultado.faltante24}</strong> más</p>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Impacto por derivación</label>
                    <p>Cada una suma <strong>{resultado.porcentajePorDerivacion.toFixed(2)}%</strong></p>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Status actual</label>
                    <p>{resultado.statusText}</p>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Promedio diario</label>
                    <p><strong>{resultado.proyeccion.promedioDiario.toFixed(1)}</strong> clientes/día</p>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Proyección final (30/06)</label>
                    <p><strong>{resultado.proyeccion.proyeccionFinal}</strong> arriados estimados</p>
                  </div>
                  <div className={styles.detailItem}>
                    <label>Cumplimiento proyectado</label>
                    <p className={styles.projectionHighlight}>
                      {resultado.proyeccion.cumplimientoProyectado.toFixed(0)}%
                    </p>
                  </div>
                </div>
              </section>

              {/* TABLA COMPARATIVA */}
              <section className={styles.tableSection}>
                <h3>📈 Resumen de métricas</h3>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Métrica</th>
                      <th>Valor actual</th>
                      <th>Meta</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ratio derivación</td>
                      <td><strong>{resultado.ratio.toFixed(1)}%</strong></td>
                      <td>20%</td>
                      <td>{resultado.ratio >= 20 ? '✅' : '❌'}</td>
                    </tr>
                    <tr>
                      <td>Cumplimiento</td>
                      <td><strong>{resultado.cumplimiento.toFixed(0)}%</strong></td>
                      <td>100%</td>
                      <td>{resultado.cumplimiento >= 100 ? '✅' : '❌'}</td>
                    </tr>
                    <tr>
                      <td>Meta 120% (Excelencia)</td>
                      <td><strong>{Math.round((resultado.cumplimiento / 120) * 100)}%</strong></td>
                      <td>120%</td>
                      <td>{resultado.cumplimiento >= 120 ? '✅' : '❌'}</td>
                    </tr>
                    <tr>
                      <td>Derivados actuales</td>
                      <td><strong>{resultado.derivados}</strong></td>
                      <td>{resultado.meta20.toFixed(1)}</td>
                      <td>{resultado.derivados >= resultado.meta20 ? '✅' : '❌'}</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              {/* FOOTER INFO */}
              <section className={styles.footer}>
                <p>
                  <strong>Nota:</strong> La meta es 20% de derivación = 100% de cumplimiento. 
                  Objetivo adicional: 24% = 120% cumplimiento (excelencia).
                </p>
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
}
