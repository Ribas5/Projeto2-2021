var select = document.getElementById("selecSemestre").addEventListener('change', function() {
    document.getElementById("formulario").style.display = "block";
    var disciplinasChecked = document.getElementsByName("disciplinasObrigatorias");

    if (parseInt(this.value) == 1) {
        for (let i = 0; i < 5; i++) {
            disciplinasChecked[i].checked = true;
        }
    } else if (parseInt(this.value) == 2) {
        for (let i = 0; i < 10; i++) {
            disciplinasChecked[i].checked = true;
        }
    } else if (parseInt(this.value) == 3) {
        for (let i = 0; i < 15; i++) {
            disciplinasChecked[i].checked = true;
        }
    } else if (parseInt(this.value) == 4) {
        for (let i = 0; i < 22; i++) {
            disciplinasChecked[i].checked = true;
        }
    } else if (parseInt(this.value) == 5) {
        for (let i = 0; i < 26; i++) {
            disciplinasChecked[i].checked = true;
        }
    } else if (parseInt(this.value) == 6) {
        for (let i = 0; i < 28; i++) {
            disciplinasChecked[i].checked = true;
        }
    } else if (parseInt(this.value) == 7) {
        for (let i = 0; i < 30; i++) {
            disciplinasChecked[i].checked = true;
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