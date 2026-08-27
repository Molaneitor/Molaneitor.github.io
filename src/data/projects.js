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
      "Diseño y desarrollo del sitio web de la empresa en WordPress (constructor Divi), incluyendo checkout con WooCommerce e integración de pago a cuotas con Addi.",
    tags: ["WordPress", "Divi", "WooCommerce"],
    repo: null,
    live: null,
    featured: false,
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
