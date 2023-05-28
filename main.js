function calcular(){
    var capital = document.getElementById("capital").value;
    var years = document.getElementById("years").value;
    var interest = document.getElementById("interest").value;
    var compound = document.getElementById("result");

    capital = parseFloat(capital);
    years = parseFloat(years);
    interest = parseFloat(interest);

    var result = capital;
    for (i = 1; i <= years; i++) {
        result = result + (interest * result) / 100;
    }

    result = result.toFixed(3)

    compound.innerHTML = `
    <p>El resultado es: ${result}</p>
    `;
}
