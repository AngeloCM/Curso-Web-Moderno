// par nome/valor

const saudacao = 'Opa'; //contexto 1

function exec() {
	const saudacao = 'Falaa';
	return saudacao;
}

// Objetos = grupos de nome/valor

const cliente = {
	nome: 'Angelo',
	idade: '22',
	peso: '1.75kg',
	endereco: {
		logradouro: 'Rua Alvarenga Peixoto',
		numero: 134
	}
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
