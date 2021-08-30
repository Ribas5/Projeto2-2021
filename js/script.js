var select = document.getElementById("selecSemestre").addEventListener('change', function() {
    document.getElementById("formulario").style.display = "block";
    var disciplinasChecked = document.getElementsByName("disciplinasObrigatorias");

    if (parseInt(this.value) == 1) {
        for (let i = 0; i < disciplinasChecked.length; i++) {
            if (i < 5) {
                disciplinasChecked[i].checked = true;
            } else {
                disciplinasChecked[i].checked = false;
            }
        }
    } else if (parseInt(this.value) == 2) {
        for (let i = 0; i < disciplinasChecked.length; i++) {
            if (i < 10) {
                disciplinasChecked[i].checked = true;
            } else {
                disciplinasChecked[i].checked = false;
            }
        }
    } else if (parseInt(this.value) == 3) {
        for (let i = 0; i < disciplinasChecked.length; i++) {
            if (i < 15) {
                disciplinasChecked[i].checked = true;
            } else {
                disciplinasChecked[i].checked = false;
            }
        }
    } else if (parseInt(this.value) == 4) {
        for (let i = 0; i < disciplinasChecked.length; i++) {
            if (i < 22) {
                disciplinasChecked[i].checked = true;
            } else {
                disciplinasChecked[i].checked = false;
            }
        }
    } else if (parseInt(this.value) == 5) {
        for (let i = 0; i < disciplinasChecked.length; i++) {
            if (i < 26) {
                disciplinasChecked[i].checked = true;
            } else {
                disciplinasChecked[i].checked = false;
            }
        }
    } else if (parseInt(this.value) == 6) {
        for (let i = 0; i < disciplinasChecked.length; i++) {
            if (i < 28) {
                disciplinasChecked[i].checked = true;
            } else {
                disciplinasChecked[i].checked = false;
            }
        }
    } else if (parseInt(this.value) == 7) {
        for (let i = 0; i < disciplinasChecked.length; i++) {
            if (i < 30) {
                disciplinasChecked[i].checked = true;
            } else {
                disciplinasChecked[i].checked = false;
            }
        }
    } else if (parseInt(this.value) >= 8) {
        for (let i = 0; i < disciplinasChecked.length; i++) {
            disciplinasChecked[i].checked = true;
        }
    }

});

document.getElementById("btnProgresso").addEventListener('click', function() {
    var discPorSemestreAtual = []
    var discAprovadas = 0
    var controle = 'semestre0'

    // Recupera a quantidade de disciplinas aprovadas até o 4o semestre
    for (let i = 1; i < 5; i++) {
        var str = controle.replace(controle[8], i)
        if (document.querySelectorAll('#' + str + ' .btn-check:checked').length == 0) {
            break
        }
        discPorSemestreAtual.push(document.querySelectorAll('#' + str + ' .btn-check:checked').length)
        discAprovadas += document.querySelectorAll('#' + str + ' .btn-check:checked').length
    }
    console.log('discPorSemestreAtual', discPorSemestreAtual);

    // Recupera a quantidade de todas as disciplinas aprovadas
    let frmCheck = document.getElementById("formSelect").elements;
    let contDiscp = 0;
    for (i = 0; i < frmCheck.length; i++) {
        if (frmCheck[i].checked) {
            contDiscp++;
        }
    }

    // Disciplinas 'optativas'
    var discOptativas = contDiscp - discAprovadas
    console.log('discOptativas', discOptativas);
    var v = parseInt(discOptativas / 5)
    console.log('v', v);
    if (v > 1 && discOptativas % 5 == 0) {
        var controle = 0
    } else {
        if (discOptativas % 5 == 0) {
            discPorSemestreAtual.push(5)
        } else {
            discPorSemestreAtual.push(5)
            discPorSemestreAtual.push(discOptativas % 5)
        }
    }

    sessionStorage.setItem("discPorSemestreAtual", discPorSemestreAtual)
    console.log(("discPorSemestre", discPorSemestreAtual));

    var discRestantes = 41 - discAprovadas
    var discPorSemestre = discPorSemestreAtual

    // Verifica se os semestres que faltam são menor que 8
    var semestresRestante = 0
    if (discPorSemestre.length < 8) {
        semestresRestante = 8 - discPorSemestre.length
        console.log('semestresRestante', semestresRestante);

        // Disciplinas que precisam ser feitas por semestre para se formar no tempo
        var discPorSemestreRestante = discRestantes / semestresRestante
        console.log('discPorSemestreRestante', discPorSemestreRestante);

        // Adicionando na lista
        for (let i = 0; i < semestresRestante; i++) {
            discPorSemestre.push(discPorSemestreRestante)
        }
        console.log('discPorSemestre', discPorSemestre);
    }

    sessionStorage.setItem("discPorSemestre", discPorSemestre)

    var prog = parseInt(((discAprovadas * 64 + 64 + 192) / 2880) * 100);
    document.getElementById("formulario").style.display = "none";
    document.getElementById("relatorio").style.display = "block";

    document.getElementById("discConluidas").innerHTML = discAprovadas;

    document.getElementById("porcProgresso").innerHTML = prog + "%";
    document.getElementById("porcBarra").style.width = prog + "%";

    document.getElementById("discRestantes").innerHTML = discRestantes;

    //discPorSemestreAtual.push(document.querySelectorAll('#teste .btn-check:checked'))
    //let c = document.querySelectorAll('#teste .btn-check:checked')





    /*let frmCheck = document.getElementById("formSelect").elements;
    let contDiscp = 0;
    for (i = 0; i < frmCheck.length; i++) {
        if (frmCheck[i].checked) {
            contDiscp++;
        }
    }
    var horas = (contDiscp * 64 + 64 + 192) + " horas";
    var prog = parseInt(((contDiscp * 64 + 64 + 192) / 2880) * 100);
    var disc = (2880 - contDiscp * 64 - 64 - 192) / 64;
    document.getElementById("semestre").style.display = "none";
    document.getElementById("formulario").style.display = "none";
    document.getElementById("relatorio").style.display = "block";

    document.getElementById("horasFeitas").innerHTML = horas;
    document.getElementById("porcProgresso").innerHTML = prog + "%";
    document.getElementById("porcBarra").style.width = prog + "%";
    document.getElementById("discProgresso").innerHTML = disc;
    */
});

function progressoPDF() {
    // Convertendo o JSON para objeto
    let json = '{ "discAprovadas": 24, "discPorSemestre": [5, 5, 6, 4, 4] }'
    let dados = JSON.parse(json)

    sessionStorage.setItem("discPorSemestreAtual", dados.discPorSemestre)

    var discRestantes = 41 - dados.discAprovadas

    // Verifica se os semestres que faltam são menor que 8
    var semestresRestante = dados.discPorSemestre.length
    if (dados.discPorSemestre.length < 8) {
        semestresRestante = 8 - dados.discPorSemestre.length

        // Disciplinas que precisam ser feitas por semestre para se formar no tempo
        var discPorSemestreRestante = discRestantes / semestresRestante

        // Adicionando na lista
        for (let i = 0; i < semestresRestante; i++) {
            dados.discPorSemestre.push(discPorSemestreRestante)
        }
    }

    sessionStorage.setItem("discPorSemestre", dados.discPorSemestre)

    var prog = parseInt(((dados.discAprovadas * 64 + 64 + 192) / 2880) * 100);

    document.getElementById("discConluidas").innerHTML = dados.discAprovadas;

    document.getElementById("porcProgresso").innerHTML = prog + "%";
    document.getElementById("porcBarra").style.width = prog + "%";

    document.getElementById("discRestantes").innerHTML = discRestantes;
}