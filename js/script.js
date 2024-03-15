window.addEventListener("load", () => {


    selector = document.getElementById("selector");
    result = document.getElementById("result");


    selector.addEventListener("change", () => {
        result.innerHTML = "";

        function fazerSwitch(option) {

            switch (option) {
                case "option1":
                    fetch('file.json')
                        .then(response => response.json())
                        .then(conteudo => {

                            conteudo.forEach(element => {
                                result.innerHTML += `${element.nome}: ${element.notaBim1} (bimestre 1) e ${element.notaBim2} (bimestre 2) = ${element.notaBim1 + element.notaBim2}; <br>`;
                            });

                        });
                    break;
                case "option2":
                    fetch('file.json')
                        .then(response => response.json())
                        .then(conteudo => {

                            conteudo.forEach(element => {
                                if (element.sexo === 'M') {
                                    result.innerHTML += `${element.nome}: ${element.notaBim1} (bimestre 1) e ${element.notaBim2} (bimestre 2) = ${element.notaBim1 + element.notaBim2}; <br>`;
                                }
                            });
                        });
                    break;
                case "option3":
                    fetch('file.json')
                        .then(response => response.json())
                        .then(conteudo => {

                            conteudo.forEach(element => {
                                if (element.sexo === 'F') {
                                    result.innerHTML += `${element.nome}: ${element.notaBim1} (bimestre 1) e ${element.notaBim2} (bimestre 2) = ${element.notaBim1 + element.notaBim2}; <br>`;
                                }
                            });
                        });
                    break;
                case "option4":
                    fetch('file.json')
                        .then(response => response.json())
                        .then(conteudo => {

                            conteudo.forEach(element => {
                                if (element.notaBim1 + element.notaBim2 >= 60) {
                                    result.innerHTML += `${element.nome}: ${element.notaBim1} (bimestre 1) e ${element.notaBim2} (bimestre 2) = ${element.notaBim1 + element.notaBim2}; <br>`;
                                }
                            });
                        });
                    break;
                case "option5":
                    fetch('file.json')
                        .then(response => response.json())
                        .then(conteudo => {

                            conteudo.forEach(element => {
                                if (element.notaBim1 + element.notaBim2 < 60) {
                                    result.innerHTML += `${element.nome}: ${element.notaBim1} (bimestre 1) e ${element.notaBim2} (bimestre 2) = ${element.notaBim1 + element.notaBim2}; <br>`;
                                }
                            });
                        });
                    break;
                case "option6":
                    fetch('file.json')
                        .then(response => response.json())
                        .then(conteudo => {
                            resposta = conteudo.every(element => element.notaBim1 + element.notaBim2 >= 60);
                            if (resposta) result.innerHTML = "Verdadeiro.";
                            else {
                                result.innerHTML = "Falso.<br><br>Alunos reprovados :<br>";
                                option = "option5";
                                fazerSwitch(option);
                            }
                        });
                    break;
                case "option7":
                    fetch('file.json')
                        .then(response => response.json())
                        .then(conteudo => {

                            notaTotal = conteudo.reduce((total, element) => total += element.notaBim1 + element.notaBim2, 0);
                            result.innerHTML = (notaTotal / conteudo.length).toFixed(2);
                        });
                    break;
                default:
                    break;
            }
        }
        option = selector.options[selector.selectedIndex].value;
        fazerSwitch(option);

    });

});