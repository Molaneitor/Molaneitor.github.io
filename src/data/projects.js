// Actualiza "repo" con el link real una vez subas cada proyecto a GitHub.
export const projects = [
  {
    title: "TiendaGymBI — Pipeline de datos comerciales",
    description:
      "Pipeline de datos de ventas end-to-end: exportación desde DreamSoft, carga y transformación con Python, almacenamiento en SQL Server y consumo en Power BI para el seguimiento de ventas, inventario y desempeño comercial de la empresa.",
    tags: ["Python", "SQL Server", "ETL", "Power BI"],
    repo: "https://github.com/Molaneitor",
    live: null,
    featured: true,
  },
  {
    title: "Dashboard de Ventas — Power BI",
    description:
      "Dashboard interactivo con KPIs de ventas, unidades por producto y evolución mensual/anual, alimentado por el pipeline de datos propio y con medidas DAX personalizadas.",
    tags: ["Power BI", "DAX", "SQL"],
    repo: "https://github.com/Molaneitor",
    live: null,
    featured: true,
  },
  {
    title: "Sitio web corporativo — Tienda Gym",
    description:
      "Diseño y desarrollo completo del sitio web de la empresa (WordPress + Divi + WooCommerce). Construí un cotizador de autoservicio a medida (arrastrar y soltar productos, buscador en vivo con la Store API, generación de PDF/Excel y envío por WhatsApp) que reemplazó cotizaciones manuales del equipo de ventas, además del checkout con múltiples medios de pago (Mercado Pago, PSE, tarjeta, Addi).",
    tags: ["WordPress", "Divi", "WooCommerce", "JavaScript", "Addi"],
    repo: "https://github.com/Molaneitor/TiendaGym-Website",
    live: "https://tiendagym.com/",
    featured: true,
  },
  {
    title: "Reportes SGI automatizados",
    description:
      "Automatización de la generación de reportes internos del Banco AV Villas mediante consultas SQL y procesos ETL, reduciendo significativamente el tiempo de elaboración de reportes recurrentes.",
    tags: ["SQL", "ETL", "Excel", "Power BI"],
    repo: null,
    live: null,
    featured: false,
  },
];