// para escribir archivos CSV
import { createObjectCsvWriter } from 'csv-writer';

export async function writeOrdersCsv(filename, rows) {
  const csvWriter = createObjectCsvWriter({
    path: filename,
    header: [
      { id: 'id', title: 'ID' },
      { id: 'status', title: 'STATUS' },
      { id: 'total', title: 'TOTAL' },
      { id: 'customerEmail', title: 'CUSTOMER_EMAIL' }
    ]
  });
  await csvWriter.writeRecords(rows);
  return filename;
}
