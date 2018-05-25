function getInteriorAleatorioEntre(min, max) {
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}

console.log(getInteriorAleatorioEntre(10, 20));

let opcao = 0;

while (opcao != -1) {
	opcao = getInteriorAleatorioEntre(-1, 10);
	console.log(`Opção escolhida foi ${opcao}`);
}

console.log('VLW FLW xD');