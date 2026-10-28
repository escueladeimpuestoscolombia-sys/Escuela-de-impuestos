export interface Seminar {
  id: string;
  number: string;
  title: string;
  category: 'renta' | 'dian' | 'regimen';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  hours: string;
  modality: string;
  topics: string[];
  targetAudience: string;
}

export interface LabPhase {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tag: string;
  deliverables: string[];
  practicalExercise: string;
  sampleDocument: string;
}

export interface CertificateRecord {
  code: string;
  studentName: string;
  idNumber: string;
  program: string;
  issueDate: string;
  hours: number;
  status: 'Vigente y Verificado' | 'En Trámite' | 'Demostración (no válido)';
  digitalHash: string;
  institution: string;
}
