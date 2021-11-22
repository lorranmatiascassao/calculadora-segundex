    var xPm = (xA + xB) / 2;
    var yPm = (yA + yB) / 2;


function calcularCoeficiente(){
    var xA = Number(document.getElementById("xA").value;
    var yA = Number(document.getElementById("xA").value;
    var xB = Number(document.getElementById("xA").value;
    var yB = Number(document.getElementById("xA").value;

    var parteSuperior = yA - yB;
    var parteInferior = xA - xB;
    var m = parteSuperior / parteInferior
    document.getElementById("display").value = `m = ${m}`;
}

function calcularEquacaoReta(){
    var xA = Number(document.getElementById("xA").value;
    var yA = Number(document.getElementById("xA").value;
    var xB = Number(document.getElementById("xA").value;
    var yB = Number(document.getElementById("xA").value;

    var mat = [
        [xA, xB, 1, xA],
        [yA, yB, 1, yA]
    ]


    var n1 = ((-1 * mat[0][1]) * mat[1][0]);
    var x1 = ((-1 * mat[0][2]) * mat[1][0]);
    var y1 = ((-1 * mat[0][3]) * mat[1][0]);

    var n2 = mat[0][0]) * mat[1][1]);
    var x2 = mat[0][1]) * mat[1][2]);
    var y2 = mat[0][1]) * mat[1][3]);

    var somaX = x1 + x2;
    var somaY = y1 + y2;
    var somaN = n1 + n2;

    document.getElementById("display").value = `$[somaX]x $[somaY]y $[somaN]n = 0` 


    



