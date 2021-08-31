let discPorSemestre = []
var horasFeitas = 0
var horasRestantes = 0

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

    // Recupera a quantidade de disciplinas obrigatórias aprovadas
    for (let i = 1; i < 9; i++) {

        // Ignora os semestres que não tenham algo marcado
        var str = controle.replace(controle[8], i)
        if (document.querySelectorAll('#' + str + ' .btn-check:checked').length == 0) {
            break
        }

        // Adiciona na lista e na contagem
        discPorSemestreAtual.push(document.querySelectorAll('#' + str + ' .btn-check:checked').length)
        discAprovadas += document.querySelectorAll('#' + str + ' .btn-check:checked').length
    }
    console.log('discAprovadas', discAprovadas);
    console.log('discPorSemestreAtual', discPorSemestreAtual);

    // Recupera a quantidade de disciplinas optativas aprovadas
    var discOptativas = document.querySelectorAll('#accordionExample2 .btn-check:checked').length
    console.log('discOptativas', discOptativas);
    discAprovadas += discOptativas

    for (let i = 0; i < discPorSemestreAtual.length; i++) {
        if (discPorSemestreAtual[i] <= 3) {
            var v = 5 - discPorSemestreAtual[i]
            if (discOptativas < v) {
                discPorSemestreAtual[i] += discOptativas
                discOptativas = 0
            } else {
                discPorSemestreAtual[i] += v
                discOptativas -= v
            }
        }
    }

    console.log('discAprovadas', discAprovadas);
    console.log(("discPorSemestre", discPorSemestreAtual));

    var discRestantes = 41 - discAprovadas
    discPorSemestre = discPorSemestreAtual

    // Somar as horas feitas
    for (let i = 0; i < discPorSemestre.length; i++) {
        horasFeitas += discPorSemestre[i] * 64
    }

    horasFeitas += (64 + 192)
    horasRestantes = 2880 - horasFeitas

    var semestresRestante = Math.round(discRestantes / 5)
    var discPorSemestreRestante = Math.round(discRestantes / semestresRestante)
    var controleDisciplinas = discRestantes
    for (let i = 0; i < semestresRestante; i++) {

        if (controleDisciplinas < 6) {
            discPorSemestre.push(controleDisciplinas)
        } else {
            discPorSemestre.push(6)
            controleDisciplinas -= 6
        }
    }

    // Preencher a lista com zero
    for (let i = 0; i < 12; i++) {
        if (discPorSemestre[i] == null) {
            discPorSemestre.push(0)
        }
    }

    // Inserir dados no HTML
    var prog = parseInt(((discAprovadas * 64 + 64 + 192) / 2880) * 100);
    document.getElementById("formulario").style.display = "none";
    document.getElementById("relatorio").style.display = "block";

    document.getElementById("discConluidas").innerHTML = discAprovadas;
    document.getElementById("porcProgresso").innerHTML = prog + "%";
    document.getElementById("porcBarra").style.width = prog + "%";
    document.getElementById("discRestantes").innerHTML = discRestantes;

    document.getElementById('horasCompletas').innerHTML = horasFeitas + "h"
    document.getElementById('horasRestantes').innerHTML = horasRestantes + "h"


    // Area Chart Example
    var ctx = document.getElementById("myAreaChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1º semestre", "2º semestre", "3º semestre", "4º semestre", "5º semestre", "6º semestre", "7º semestre", "8º semestre", "9º semestre", "10º semestre", "11º semestre", "12º semestre"],
            datasets: [{
                label: "Disciplinas",
                lineTension: 0.2,
                backgroundColor: "rgba(255, 119, 46, 0.2)",
                borderColor: "#FF772E",
                pointRadius: 3,
                pointBackgroundColor: "#FF772E",
                pointBorderColor: "#FF772E",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "#FF772E",
                pointHoverBorderColor: "#FF772E",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: discPorSemestre,
            }],
        },
        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 25,
                    top: 15,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 12,
                        fontColor: "rgba(255,255,255,1)"
                    }
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 7,
                        padding: 10,
                        fontColor: "rgba(255,255,255,1)",
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            return number_format(value);
                        }
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
            },
            legend: {
                display: true
            },
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                intersect: false,
                mode: 'index',
                caretPadding: 10,
                callbacks: {
                    label: function(tooltipItem, chart) {
                        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                        return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
                    }
                }
            }
        }
    });


    // Pie Chart Example
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Horas completadas", "Horas restantes"],
            datasets: [{
                data: [horasFeitas, horasRestantes],
                backgroundColor: ['#FF772E', '#F6D467'],
                hoverBackgroundColor: ['#FF772E', '#F6D467'],
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                xPadding: 15,
                yPadding: 15,
                displayColors: true,
                caretPadding: 10,
            },
            legend: {
                display: false
            },
            cutoutPercentage: 50,
        },
    });
});

function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}