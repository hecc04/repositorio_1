function submitRatings() {
    // Obter os valores das avaliações
    const ratings = {
        "Asador Etxebarri": document.getElementById("rating-etxebarri").value,
        "Table by Bruno Verjus": document.getElementById("rating-verjus").value,
        "DiverXo": document.getElementById("rating-diverxo").value,
        "Maido": document.getElementById("rating-maido").value,
        "Atomix": document.getElementById("rating-atomix").value,
        "Quintonil": document.getElementById("rating-quintonil").value,
        "Alchemist": document.getElementById("rating-alchemist").value,
        "Gaggan": document.getElementById("rating-gaggan").value,
        "Don Julio": document.getElementById("rating-don-julio").value
    };

    let resultText = "<h3>Avaliações Enviadas:</h3><ul>";
    
    let allRated = true;

    for (const [restaurant, rating] of Object.entries(ratings)) {
        if (rating === "") {
            allRated = false;
            resultText += `<li>${restaurant}: Não avaliado</li>`;
        } else {
            resultText += `<li>${restaurant}: ${rating} estrelas</li>`;
        }
    }

    resultText += "</ul>";

    if (allRated) {
        resultText += "<p>Obrigado por suas avaliações!</p>";
    } else {
        resultText += "<p>Por favor, avalie todos os restaurantes.</p>";
    }

    // Exibir os resultados
    document.getElementById("result").innerHTML = resultText;
}
