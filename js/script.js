var obrigatorias = ["SMD0094 - Introdução a Sistemas e Mídias Digitais",
    "SMD0088 - Autoração Multimídia I",
    "SMD0089 - Desenho I",
    "SMD0091 - História do Design",
    "SMD0095 - Programação I",
    "SMD0107 - Cognição e Tecnologias Digitais",
    "SMD0093 - Narrativas Multimídia",
    "SMD0096 - Programação II",
    "SMD0105 - Comunicação Visual I",
    "SMD0106 - Mamtemática Aplicada à Multimídia I",
    "SMD0015 - Design de Interfaces Gráficas",
    "SMD0092 - Projeto Integrado I",
    "SMD0097 - Autoração Multimídia II",
    "SMD0108 - Interação Humano-Computador I",
    "SMD0109 - Introdução à Cibercultura",
    "SMD0102 - Metodologia de Pesquisa Científica",
    "SMD0025 - Ética e Política Autoral",
    "SMD0100 - Gestão de Projetos Multimídia",
    "SMD0101 - Projeto Integrado II",
    "SMD0111 - Projeto de Trabalho Final",
    "SMD0077 - Trabalho de Conclusão de Curso",
    "SMD0103 - Seminários em Multimídia"
];

var select = document.getElementById("selecSemestre").addEventListener('change', function() {
    document.getElementById("formulario").style.display = "block";
    var adicionarDisciplinas = "";

    if (parseInt(this.value) == 1) {
        for (let i = 0; i < obrigatorias.length; i++) {
            if (i < 5) {
                adicionarDisciplinas += "<div><input type='checkbox' checked><label> " + obrigatorias[i] + "</label></div>";
            } else {
                adicionarDisciplinas += "<div><input type='checkbox'><label> " + obrigatorias[i] + "</label></div>";
            }
        }
    } else if (parseInt(this.value) == 2) {
        for (let i = 0; i < obrigatorias.length; i++) {
            if (i < 10) {
                adicionarDisciplinas += "<div><input type='checkbox' checked><label> " + obrigatorias[i] + "</label></div>";
            } else {
                adicionarDisciplinas += "<div><input type='checkbox'><label> " + obrigatorias[i] + "</label></div>";
            }
        }
    } else if (parseInt(this.value) == 3) {
        for (let i = 0; i < obrigatorias.length; i++) {
            if (i < 15) {
                adicionarDisciplinas += "<div><input type='checkbox' checked><label> " + obrigatorias[i] + "</label></div>";
            } else {
                adicionarDisciplinas += "<div><input type='checkbox'><label> " + obrigatorias[i] + "</label></div>";
            }
        }
    } else if (parseInt(this.value) == 4 || parseInt(this.value) == 5) {
        for (let i = 0; i < obrigatorias.length; i++) {
            if (i < 16) {
                adicionarDisciplinas += "<div><input type='checkbox' checked><label> " + obrigatorias[i] + "</label></div>";
            } else {
                adicionarDisciplinas += "<div><input type='checkbox'><label> " + obrigatorias[i] + "</label></div>";
            }
        }
    } else if (parseInt(this.value) == 6) {
        for (let i = 0; i < obrigatorias.length; i++) {
            if (i < 18) {
                adicionarDisciplinas += "<div><input type='checkbox' checked><label> " + obrigatorias[i] + "</label></div>";
            } else {
                adicionarDisciplinas += "<div><input type='checkbox'><label> " + obrigatorias[i] + "</label></div>";
            }
        }
    } else if (parseInt(this.value) == 7) {
        for (let i = 0; i < obrigatorias.length; i++) {
            if (i < 20) {
                adicionarDisciplinas += "<div><input type='checkbox' checked><label> " + obrigatorias[i] + "</label></div>";
            } else {
                adicionarDisciplinas += "<div><input type='checkbox'><label> " + obrigatorias[i] + "</label></div>";
            }
        }
    } else if (parseInt(this.value) >= 8) {
        for (let i = 0; i < obrigatorias.length; i++) {
            adicionarDisciplinas += "<div><input type='checkbox' checked><label> " + obrigatorias[i] + "</label></div>";
        }
    }

    document.getElementById("formSelect").innerHTML = adicionarDisciplinas;
});

document.getElementById("btnProgresso").addEventListener('click', function() {
    let frmCheck = document.getElementById("formSelect").elements;
    let contDiscp = 0;
    for (i = 0; i < frmCheck.length; i++) {
        if (frmCheck[i].checked) {
            contDiscp++;
        }
    }
    var horas = (contDiscp * 64 + 64 + 192) + " horas";
    var prog = parseInt(((contDiscp * 64) / 2880) * 100);
    var disc = (2880 - contDiscp * 64) / 64;
    document.getElementById("semestre").style.display = "none";
    document.getElementById("formulario").style.display = "none";
    document.getElementById("relatorio").style.display = "block";

    document.getElementById("horasFeitas").innerHTML = horas;
    document.getElementById("porcProgresso").innerHTML = prog + "%";
    document.getElementById("porcBarra").style.width = prog + "%";
    document.getElementById("discProgresso").innerHTML = disc;
});