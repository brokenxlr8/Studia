let params = new URLSearchParams(window.location.search);
let livro = params.get("livro");

let viewer = document.getElementById("pdfViewer");

viewer.src = "livros/" + livro;
