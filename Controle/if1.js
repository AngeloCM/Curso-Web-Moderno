function soBoaNoticia(nota) {
	if (nota >= 7) {
		console.log('Aee krloooo tiro ' + nota +'!!'); 
	} else {
		console.log('Viiiish tiro '+ nota +'!!'); 
	}
}

soBoaNoticia(5);
soBoaNoticia(10);
console.log('---------------');
function seForVerdadeiroEuFalo(valor) {
	if (valor) {
		console.log('É verdade...' + valor)
	}
}

seForVerdadeiroEuFalo();
seForVerdadeiroEuFalo(null);
seForVerdadeiroEuFalo(undefined);
seForVerdadeiroEuFalo(NaN);
seForVerdadeiroEuFalo('');
seForVerdadeiroEuFalo(0);
seForVerdadeiroEuFalo(-1);
seForVerdadeiroEuFalo(' ');
seForVerdadeiroEuFalo('?');
seForVerdadeiroEuFalo([]);
seForVerdadeiroEuFalo([1, 2]);
seForVerdadeiroEuFalo({});
