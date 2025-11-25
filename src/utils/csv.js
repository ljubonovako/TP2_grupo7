// Para escribir el CSV

import { createObjectCsvWriter } from 'csv-writer';
import fs from 'fs/promises';
import path from 'path';

export async function exportOrdersToCsv(rows) {
  // Carpeta donde se guardan los CSV
  const exportDir = path.resolve('exports');
  await fs.mkdir(exportDir, { recursive: true });

  // Timestamp seguro para usar en nombres de archivo
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filePath = path.join(exportDir, `orders_${timestamp}.csv`);

  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: [
      { id: 'id', title: 'ORDER_ID' },
      { id: 'status', title: 'STATUS' },
      { id: 'total', title: 'TOTAL' },
      { id: 'customerEmail', title: 'CUSTOMER_EMAIL' },
      { id: 'createdAt', title: 'CREATED_AT' }
    ]
  });

  await csvWriter.writeRecords(rows);

  return filePath;
}
