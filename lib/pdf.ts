import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function downloadCvAsPdf(elementId: string, filename = 'cv.pdf') {
  const element = document.getElementById(elementId);
  if (!element) throw new Error('CV preview not found');

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true
  });
  const imageData = canvas.toDataURL('image/png');

  const pdf = new jsPDF('p', 'pt', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
  const width = canvas.width * ratio;
  const height = canvas.height * ratio;

  const x = (pageWidth - width) / 2;
  const y = (pageHeight - height) / 2;

  pdf.addImage(imageData, 'PNG', x, y, width, height);
  pdf.save(filename);
}
