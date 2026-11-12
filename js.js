

function ativarTema(tema) {

    const corpo = document.body;

    if (tema === "escuro") {

        corpo.classList.add("modo-escuro");

    } else {

        corpo.classList.remove("modo-escuro");

    }

}
