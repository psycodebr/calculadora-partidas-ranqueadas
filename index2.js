// Usando operador ternário
function calcularDesempenho(vitorias, derrotas) {
    // Validar se as entradas são números positivos
    if (typeof vitorias !== 'number' || typeof derrotas !== 'number' || vitorias < 0 || derrotas < 0) {
        return "Por favor, forneça valores válidos para vitórias e derrotas.";
    }

    // Calcular o desempenho com base em alguma fórmula (por exemplo, percentual de vitórias)
    let totalPartidas = vitorias + derrotas;
    let percentualVitorias = (vitorias / totalPartidas) * 100;

    // Calcular o saldo de Rankeadas
    let saldoVitorias = vitorias - derrotas;

    // Determinar o nível com base no saldo de Rankeadas usando operador ternário
    let nivel = (vitorias < 10) ? "Ferro" :
                (vitorias >= 11 && vitorias <= 20) ? "Bronze" :
                (vitorias >= 21 && vitorias <= 50) ? "Prata" :
                (vitorias >= 51 && vitorias <= 80) ? "Ouro" :
                (vitorias >= 81 && vitorias <= 90) ? "Diamante" :
                (vitorias >= 91 && vitorias <= 100) ? "Lendário" :
                "Imortal";

    // Retornar o resultado
    return `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`;
}

// Exemplo de uso:
let vitorias1 = 210;
let derrotas1 = 10;

let resultado1 = calcularDesempenho(vitorias1, derrotas1);
console.log(resultado1);
