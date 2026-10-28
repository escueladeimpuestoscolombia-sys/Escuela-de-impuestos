import { Seminar } from '../types.ts';

export const SEMINARS_DATA: Seminar[] = [
  {
    id: 'sem-01',
    number: '01',
    title: 'Actualización Tributaria',
    category: 'renta',
    categoryLabel: 'Renta e IVA',
    shortDesc: 'Impacto de la última reforma, doctrina constitucional y cambios reglamentarios aplicables al año gravable.',
    fullDesc: 'Análisis minucioso y fundamentado de las modificaciones introducidas por la reforma tributaria más reciente, decretos reglamentarios vigentes y los fallos de la Corte Constitucional y Consejo de Estado con impacto directo en personas jurídicas y naturales.',
    icon: 'update',
    hours: '16 horas académicas',
    modality: 'Virtual Sincrónico + Grabación HD',
    topics: [
      'Novedades en tarifas corporativas y sobretasas sectoriales',
      'Límites a deducciones, beneficios y exenciones tributarias',
      'Nueva doctrina unificada de la DIAN para el año en curso',
      'Matriz de riesgos de fiscalización para auditoría preventiva'
    ],
    targetAudience: 'Revisores fiscales, auditores, contadores públicos y directores financieros.'
  },
  {
    id: 'sem-02',
    number: '02',
    title: 'Información Exógena para la DIAN',
    category: 'dian',
    categoryLabel: 'DIAN y Exógena',
    shortDesc: 'Estructuración correcta de formatos, cruces de información, prevención de sanciones y requerimientos ordinarios.',
    fullDesc: 'Taller 100% práctico de validación previa, diligenciamiento y conciliación de los principales formatos de medios magnéticos nacionales y distritales, evitando tipificación de sanciones del Art. 651 del E.T.',
    icon: 'dataset',
    hours: '20 horas académicas',
    modality: 'Virtual Sincrónico + Archivos XML / Excel',
    topics: [
      'Resolución DIAN aplicable y obligados a reportar',
      'Cruces automáticos: Formato 1001, 1003, 1007, 1008 y 1009',
      'Manejo de diferencias entre exógena reportada y declaraciones de IVA/Renta',
      'Estrategia de respuesta a requerimientos por inconsistencias'
    ],
    targetAudience: 'Contadores, auxiliares contables de cierre y jefes de impuestos.'
  },
  {
    id: 'sem-03',
    number: '03',
    title: 'Impuesto de Renta: Personas Jurídicas',
    category: 'renta',
    categoryLabel: 'Renta e IVA',
    shortDesc: 'Determinación de la renta líquida cedular corporativa, deducciones imputables, ganancias ocasionales y tasa mínima.',
    fullDesc: 'Profundización técnica sobre la depuración del impuesto sobre la renta para sociedades comerciales, aplicación rigurosa de la Tasa de Tributación Depurada (TTD), límites a gastos no deducibles y compensaciones.',
    icon: 'corporate_fare',
    hours: '24 horas académicas',
    modality: 'Virtual Sincrónico + Plantilla Automatizada',
    topics: [
      'Cálculo y depuración de la Tasa de Tributación Depurada (TTD)',
      'Ingresos no constitutivos de renta y rentas exentas autorizadas',
      'Bancarización y soporte de costos bajo nómina y factura electrónica',
      'Ganancias ocasionales corporativas y anticipos'
    ],
    targetAudience: 'Gerentes tributarios, asesores corporativos y contadores generales.'
  },
  {
    id: 'sem-04',
    number: '04',
    title: 'Impuesto de Renta: Personas Naturales',
    category: 'renta',
    categoryLabel: 'Renta e IVA',
    shortDesc: 'Depuración por cédulas, rentas de trabajo y no laborales, dividendos y optimización patrimonial legal.',
    fullDesc: 'Enfoque práctico para la determinación cedular del impuesto de renta de personas naturales: rentas de trabajo, pensiones, capital, no laborales y cédula de dividendos, con estricto apego al límite del 40% y 1.340 UVT.',
    icon: 'person',
    hours: '18 horas académicas',
    modality: 'Virtual Sincrónico + Liquidador Cedular',
    topics: [
      'Sistema cedular y topes de deducciones y rentas exentas',
      'Tratamiento de dependientes económicos y deducciones de vivienda/salud',
      'Tributación sobre dividendos y participaciones nacionales e internacionales',
      'Efectos del impuesto al patrimonio y valoración de activos reales'
    ],
    targetAudience: 'Contadores independientes, planificadores financieros y asesores de familias de negocios.'
  },
  {
    id: 'sem-05',
    number: '05',
    title: 'Retención en la Fuente',
    category: 'renta',
    categoryLabel: 'Renta e IVA',
    shortDesc: 'Mecanismos de causación, agentes de retención, tarifas concurrentes y casos complejos de pagos laborales.',
    fullDesc: 'Guía exhaustiva para la aplicación del mecanismo de recaudo anticipado en renta, IVA e ICA. Tablas de retención, procedimiento 1 y 2 para pagos laborales, y autoretefuente especial.',
    icon: 'percent',
    hours: '16 horas académicas',
    modality: 'Virtual Sincrónico + Casos prácticos',
    topics: [
      'Agentes de retención obligados y autorretenedores especiales',
      'Depuración de nómina: Procedimiento 1 vs. Procedimiento 2 con UVT vigente',
      'Retención a título de IVA (ReteIVA) y territorial (ReteICA)',
      'Ineficacia de declaraciones presentadas sin pago total (Art. 580-1 E.T.)'
    ],
    targetAudience: 'Especialistas de nómina, tesoreros, contadores y auditores de procesos.'
  },
  {
    id: 'sem-06',
    number: '06',
    title: 'Impuesto sobre las Ventas (IVA)',
    category: 'renta',
    categoryLabel: 'Renta e IVA',
    shortDesc: 'Bienes exentos, excluidos y gravados. Prorrateo, saldos a favor e imputación contable sin reprocesos.',
    fullDesc: 'Análisis detallado de la causación, territorialidad y bases gravables del IVA. Métodos de prorrateo transitorio y definitivo de IVA común, devoluciones y compensaciones ante la administración.',
    icon: 'receipt_long',
    hours: '16 horas académicas',
    modality: 'Virtual Sincrónico + Guía de Prorrateo',
    topics: [
      'Clasificación técnica: Bienes gravados, excluidos, exentos y no sujetos',
      'Cálculo de prorrateo de IVA descontable en operaciones mixtas',
      'Saldos a favor en IVA: requisitos y auditoría para solicitud de devolución',
      'Facturación electrónica en ventas con múltiples tarifas'
    ],
    targetAudience: 'Contadores de empresas comerciales e industriales, analistas de impuestos.'
  },
  {
    id: 'sem-07',
    number: '07',
    title: 'Procedimiento Tributario',
    category: 'dian',
    categoryLabel: 'DIAN y Exógena',
    shortDesc: 'Régimen sancionatorio, recursos de reconsideración, requerimientos especiales y firmeza de declaraciones.',
    fullDesc: 'El marco jurídico de defensa del contribuyente frente a las actuaciones de la DIAN y entes territoriales. Reglas de firmeza, régimen de correcciones, prescripción de la acción de cobro y recursos en vía gubernativa.',
    icon: 'gavel',
    hours: '20 horas académicas',
    modality: 'Virtual Sincrónico + Modelos de Recursos',
    topics: [
      'Términos procesales, requerimiento ordinario vs. especial',
      'Régimen sancionatorio y gradualidad de sanciones (Art. 640 E.T.)',
      'Estrategia de redacción de recurso de reconsideración y pruebas conducentes',
      'Firmeza general y extraordinaria de declaraciones tributarias'
    ],
    targetAudience: 'Abogados tributaristas, contadores litigantes y directores jurídicos.'
  },
  {
    id: 'sem-08',
    number: '08',
    title: 'Regímenes Tributarios Especiales',
    category: 'regimen',
    categoryLabel: 'Regímenes y Cierre',
    shortDesc: 'Entidades sin ánimo de lucro (ESAL), calificación, permanencia y reinversión del beneficio neto o excedente.',
    fullDesc: 'Ruta jurídica y contable para fundaciones, corporaciones y asociaciones sin ánimo de lucro: proceso anual de calificación y permanencia en la DIAN, causación de excedentes y su destinación a programas de interés general.',
    icon: 'shield',
    hours: '14 horas académicas',
    modality: 'Virtual Sincrónico + Lista de Chequeo DIAN',
    topics: [
      'Requisitos para calificación o readmisión al Régimen Especial',
      'Determinación del beneficio neto o excedente contable vs. fiscal',
      'Asignaciones permanentes y proyectos de inversión social',
      'Causales de exclusión y efectos de tributar como sociedad ordinaria'
    ],
    targetAudience: 'Contadores y revisores de fundaciones, ONGs y cooperativas.'
  },
  {
    id: 'sem-09',
    number: '09',
    title: 'Servicios Informáticos Electrónicos',
    category: 'dian',
    categoryLabel: 'DIAN y Exógena',
    shortDesc: 'Facturación electrónica, nómina electrónica, documento equivalente y plataforma Muisca de la DIAN.',
    fullDesc: 'Operatividad de todo el ecosistema digital obligatorio de la DIAN: facturación electrónica con validación previa, eventos del Radian, documento equivalente electrónico (POS, peajes, servicios públicos) y nómina electrónica.',
    icon: 'cloud_sync',
    hours: '14 horas académicas',
    modality: 'Virtual Sincrónico + Simulación Muisca',
    topics: [
      'Documento equivalente electrónico y calendario de implementación',
      'Eventos del Radian: acuse de recibo y recepción de bienes/servicios para deducibilidad',
      'Nómina electrónica: ajustes, notas de reemplazo y eliminación',
      'Uso eficiente de firmas digitales y trámites en la plataforma Muisca'
    ],
    targetAudience: 'Líderes de TI, directores administrativos, contadores y facturadores.'
  },
  {
    id: 'sem-10',
    number: '10',
    title: 'Régimen Simple de Tributación',
    category: 'regimen',
    categoryLabel: 'Regímenes y Cierre',
    shortDesc: 'Tarifas unificadas, anticipos bimestrales, ventajas competitivas para PYMES y requisitos de permanencia.',
    fullDesc: 'Evaluación comparativa de conveniencia fiscal del Régimen Simple de Tributación (RST) frente al régimen ordinario. Liquidación de anticipos bimestrales en Formulario 260 y declaración anual consolidada.',
    icon: 'flash_on',
    hours: '16 horas académicas',
    modality: 'Virtual Sincrónico + Simulador de Conveniencia',
    topics: [
      'Condiciones de ingreso, exclusiones y topes de 100.000 UVT',
      'Simulador financiero: ¿Cuándo conviene el Simple frente al Ordinario?',
      'Integración con ICA municipal y aportes a pensiones como descuento',
      'Consecuencias de la exclusión oficiosa por parte de la DIAN'
    ],
    targetAudience: 'Emprendedores, asesores de micro, pequeñas y medianas empresas.'
  },
  {
    id: 'sem-11',
    number: '11',
    title: 'Cierre Contable y Tributario',
    category: 'regimen',
    categoryLabel: 'Regímenes y Cierre',
    shortDesc: 'Conciliación fiscal formato 2516, diferencias entre valor contable y fiscal bajo NIIF y cálculo de impuesto diferido.',
    fullDesc: 'Metodología integral para realizar el cierre anual coordinado entre las normas de información financiera NIIF y las normas fiscales colombianas, estructurando adecuadamente el Formato 2516 de conciliación fiscal.',
    icon: 'event_available',
    hours: '22 horas académicas',
    modality: 'Virtual Sincrónico + Modelo 2516 en Excel',
    topics: [
      'Diferencias temporarias y permanentes bajo NIC 12 / NIIF para PYMES Sección 29',
      'Estructuración de las secciones del Formato 2516 (Carátula, ERI, ESF)',
      'Medición posterior de inventarios, propiedades de inversión y provisiones',
      'Presentación limpia de estados financieros a la asamblea de accionistas'
    ],
    targetAudience: 'Contadores generales, auditores, socios de firmas de auditoría y directores financieros.'
  }
];
