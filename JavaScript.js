function AlteraLihaTabela(numLinha, pessoa) {
    numLinha--

    $("#tabelaPessoas > tbody > tr:nth(" + numLinha +") > td:nth(0)").text(pessoa.name)
    $("#tabelaPessoas > tbody > tr:nth(" + numLinha +") > td:nth(1)").text(pessoa.height + "cm")
    $("#tabelaPessoas > tbody > tr:nth(" + numLinha +") > td:nth(2)").text(pessoa.mass + "kg")
}

function BuscaPessoa(numPessoa) {
    $.ajax({
        url: "https://swapi.dev/api/people/" + numPessoa +"/",
        method: "GET"
    }).done(function(response) {
        AlteraLihaTabela(numPessoa, response)
    });
}

BuscaPessoa(1)
BuscaPessoa(2)
BuscaPessoa(3)
BuscaPessoa(4)
BuscaPessoa(5)
BuscaPessoa(6)