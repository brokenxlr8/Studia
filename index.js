const params = new URLSearchParams(window.location.search);

const livro = params.get("livro");

const viewer = document.getElementById("pdfViewer");

if(livro){

const arquivo = encodeURIComponent(livro);

const urlBase =
window.location.origin +
window.location.pathname.replace("leitor.html","");

viewer.src =
"https://mozilla.github.io/pdf.js/web/viewer.html?file=" +
urlBase +
"livros/" +
arquivo;

}
