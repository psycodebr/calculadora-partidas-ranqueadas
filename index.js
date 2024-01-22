// calcular estatisticas de vitórias de partidas ranqueadas
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

    // Determinar o nível com base no saldo de Rankeadas
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornar o resultado
    return `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`;
}

// Exemplo de uso:
let vitorias = 210;
let derrotas = 10;

let resultado = calcularDesempenho(vitorias, derrotas);
console.log(resultado);