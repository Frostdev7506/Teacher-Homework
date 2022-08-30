const data = document.getElementById("data");

var opt = {
  margin: 1,
  filename: "VIII B.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 1 },
  pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
};

function generatepdf() {
  html2pdf().set(opt).from(data).save();
}
