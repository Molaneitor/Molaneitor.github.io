// Update "repo" with the real link once each project is uploaded to GitHub.
export const projects = [
  {
    title: { es: "TiendaGymBI — Pipeline de datos comerciales", en: "TiendaGymBI — Business data pipeline" },
    description: {
      es: "Pipeline de datos de ventas end-to-end: exportación desde DreamSoft, carga y transformación con Python, almacenamiento en SQL Server y consumo en Power BI para el seguimiento de ventas, inventario y desempeño comercial de la empresa.",
      en: "End-to-end sales data pipeline: export from DreamSoft, load and transform with Python, storage in SQL Server, and consumption in Power BI to track the company's sales, inventory, and business performance.",
    },
    tags: ["Python", "SQL Server", "ETL", "Power BI"],
    repo: "https://github.com/Molaneitor/TiendaGymBI",
    live: null,
    featured: true,
  },
  {
    title: { es: "Dashboard de Ventas — Power BI", en: "Sales Dashboard — Power BI" },
    description: {
      es: "Dashboard interactivo con KPIs de ventas, unidades por producto y evolución mensual/anual, alimentado por el pipeline de datos propio y con medidas DAX personalizadas.",
      en: "Interactive dashboard with sales KPIs, units per product, and monthly/yearly trends, powered by my own data pipeline and custom DAX measures.",
    },
    tags: ["Power BI", "DAX", "SQL"],
    repo: "https://github.com/Molaneitor/TiendaGymBI",
    live: null,
    featured: true,
  },
  {
    title: { es: "Sitio web corporativo — Tienda Gym", en: "Corporate Website — Tienda Gym" },
    description: {
      es: "Diseño y desarrollo completo del sitio web de la empresa (WordPress + Divi + WooCommerce). Construí un cotizador de autoservicio a medida (arrastrar y soltar productos, buscador en vivo con la Store API, generación de PDF/Excel y envío por WhatsApp) que reemplazó cotizaciones manuales del equipo de ventas, además del checkout con múltiples medios de pago (Mercado Pago, PSE, tarjeta, Addi).",
      en: "Full design and development of the company's website (WordPress + Divi + WooCommerce). I built a custom self-service quoting tool (drag-and-drop products, live search with the Store API, PDF/Excel generation, and WhatsApp delivery) that replaced manual quotes from the sales team, plus checkout with multiple payment methods (Mercado Pago, PSE, card, Addi).",
    },
    tags: ["WordPress", "Divi", "WooCommerce", "JavaScript", "Addi"],
    repo: "https://github.com/Molaneitor/TiendaGym-Website",
    live: "https://tiendagym.com/",
    featured: true,
  },
  {
    title: { es: "Reportes SGI automatizados", en: "Automated SGI Reports" },
    description: {
      es: "Automatización de la generación de reportes internos del Banco AV Villas mediante consultas SQL y procesos ETL, reduciendo significativamente el tiempo de elaboración de reportes recurrentes.",
      en: "Automated the generation of internal reports at Banco AV Villas through SQL queries and ETL processes, significantly reducing the time spent producing recurring reports.",
    },
    tags: ["SQL", "ETL", "Excel", "Power BI"],
    repo: null,
    live: null,
    featured: false,
  },
];
