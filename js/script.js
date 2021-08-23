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
    let frmCheck = document.getElementById("formSelect").elements;
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
});


function teste() {
    let json = {
            discAprovadas: 30,
            discPorSemestre: [5, 5, 5, 5, 5, 5, 5, 5]
        }
        //let dados = JSON.parse(json)
    console.log(json.discAprovadas + "\n" + json.discPorSemestre)
}