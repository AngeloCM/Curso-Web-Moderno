const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var x in nums){
	if (x == 5) {
		break;	
	}
	console.log(`indice ${x} = ${nums[x]}`)
}

for (var y in nums) {
	if (y == 5) {
		continue;
	}
	console.log(`indice ${y} = ${nums[y]}`)
}

externo: {
	for (var a in nums) {
		
		for (var b in nums) {
			if (a == 2 && b == 3) {
				break externo;
			}
			console.log(`Indices[${a},${b}]`);
		}
	}
}