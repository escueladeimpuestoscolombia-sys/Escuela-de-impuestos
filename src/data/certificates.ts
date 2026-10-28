import { CertificateRecord } from '../types.ts';

export const DEMO_CERTIFICATES: CertificateRecord[] = [
  {
    code: 'DEMO-0001',
    studentName: 'Estudiante de demostración',
    idNumber: 'NO-APLICA',
    program: 'Programa ficticio para vista previa',
    issueDate: 'Sin validez académica',
    hours: 0,
    status: 'Demostración (no válido)',
    digitalHash: 'SIN FIRMA REAL — SOLO DEMOSTRACIÓN',
    institution: 'Registro ficticio de interfaz'
  }
];
