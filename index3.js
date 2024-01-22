// Usando mapeamento de níveis com objeto
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

    // Mapear os intervalos de vitórias para níveis usando um objeto
    let niveis = {
        0: "Ferro",
        10: "Bronze",
        21: "Prata",
        51: "Ouro",
        81: "Diamante",
        91: "Lendário",
        101: "Imortal"
    };

    // Encontrar o nível correspondente com base no saldo de Rankeadas
    let nivel = Object.entries(niveis).find(([limite]) => vitorias < limite)?.[1] || "Imortal";

    // Retornar o resultado
    return `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`;
}

// Exemplo de uso:
let vitorias2 = 210;
let derrotas2 = 10;

let resultado2 = calcularDesempenho(vitorias2, derrotas2);
console.log(resultado2);
