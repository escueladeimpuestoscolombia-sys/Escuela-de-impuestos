import { LabPhase } from '../types.ts';

export const LAB_PHASES_DATA: LabPhase[] = [
  {
    number: '01',
    title: 'Constitución',
    subtitle: 'Inicio del caso',
    description: 'Creación jurídica de la empresa, estatutos y primeros registros de capital.',
    icon: 'check_circle',
    tag: 'Fase Inicial',
    deliverables: [
      'Minuta y estatutos de S.A.S. con capital suscrito y pagado',
      'Inscripción en Cámara de Comercio y Registro Único Tributario (RUT)',
      'Apertura de cuenta bancaria y primer asiento contable de apertura',
      'Resolución de habilitación para facturación electrónica'
    ],
    practicalExercise: 'Modelarás la constitución de "Innovación Fiscal S.A.S." con 3 socios, aportes mixtos en dinero y activos fijos bajo NIIF para PYMES.',
    sampleDocument: 'Asiento de apertura NIIF: Débito Caja/Bancos 111005 ($120.000.000), Débito PPYE 152405 ($80.000.000) vs. Crédito Capital Suscrito 310505 ($200.000.000).'
  },
  {
    number: '02',
    title: 'Operación',
    subtitle: 'Dinamismo contable',
    description: 'Registro de compras, nómina, ventas, inventarios y transacciones cotidianas.',
    icon: 'receipt',
    tag: 'Ciclo Operativo',
    deliverables: [
      'Kárdex de inventarios por costo promedio ponderado',
      'Nómina con seguridad social integral y prestaciones sociales causadas',
      'Emisión de facturas de venta electrónicas con IVA y retenciones en la fuente',
      'Gestión de cartera comercial y anticipos recibidos de clientes'
    ],
    practicalExercise: 'Procesarás 45 transacciones reales de un mes de operación: compras con descuentos condicionados e incondicionados y nómina de 12 empleados.',
    sampleDocument: 'Causación de nómina con 5 centros de costos: Salarios base, auxilio de transporte no salarial, aportes parafiscales Sena/ICBF/CCF y provisión de cesantías e intereses.'
  },
  {
    number: '03',
    title: 'Obligaciones',
    subtitle: 'Calendario tributario',
    description: 'Liquidación periódica, retenciones, declaraciones y cumplimiento fiscal.',
    icon: 'rule',
    tag: 'Cumplimiento Normativo',
    deliverables: [
      'Declaración mensual de Retención en la Fuente (Formulario 350)',
      'Declaración bimestral de Impuesto a las Ventas IVA (Formulario 300)',
      'Declaración bimestral de Impuesto de Industria y Comercio ICA territorial',
      'Conciliación de cuentas de impuestos corrientes (2365, 2367, 2368, 2408)'
    ],
    practicalExercise: 'Preparar los borradores definitivos para presentación y pago en los servicios Muisca de la DIAN, aplicando la tabla de retención en la fuente vigente.',
    sampleDocument: 'Formulario 350 con ReteRenta laboral, servicios, compras y autorretención especial a la tarifa del 0.8% o 1.6% según actividad económica CIIU.'
  },
  {
    number: '04',
    title: 'Cierre',
    subtitle: 'Precisión analítica',
    description: 'Ajustes NIIF, deterioro de cartera, conciliación y cálculo del impuesto de renta.',
    icon: 'account_balance_wallet',
    tag: 'Fin de Ejercicio',
    deliverables: [
      'Cálculo de pérdidas crediticias esperadas (deterioro bajo NIIF 9 / Sección 11)',
      'Depreciación acumulada y vidas útiles contables vs. topes fiscales del E.T.',
      'Cálculo del impuesto diferido (activos y pasivos temporales)',
      'Diligenciamiento de la Conciliación Fiscal Formato 2516 v7'
    ],
    practicalExercise: 'Identificarás las 14 diferencias temporarias entre el balance contable y la declaración de renta (Formulario 110), aplicando la Tasa de Tributación Depurada (TTD).',
    sampleDocument: 'Hoja de trabajo de conciliación fiscal con registro del gasto por impuesto a las ganancias corriente ($38.500.000) e impuesto diferido crédito ($4.200.000).'
  },
  {
    number: '05',
    title: 'Informes',
    subtitle: 'Toma de decisiones',
    description: 'Análisis gerencial, emisión de estados financieros y presentación a socios.',
    icon: 'monitoring',
    tag: 'Reporte Gerencial',
    deliverables: [
      'Estado de Situación Financiera (ESF) y Estado de Resultados Integral (ERI)',
      'Estado de Flujos de Efectivo por método directo e indirecto',
      'Notas explicativas y revelaciones exigidas por el marco técnico NIIF',
      'Informe de gestión tributaria y tablero de indicadores para la Junta Directiva'
    ],
    practicalExercise: 'Diseñar el dictamen del revisor fiscal o informe del contador público y sustentar el proyecto de distribución de utilidades de la sociedad.',
    sampleDocument: 'Juego completo de Estados Financieros comparativos certificados con revelación sobre contingencias fiscales no provisionadas.'
  }
];
