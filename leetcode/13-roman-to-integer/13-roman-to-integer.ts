function romanToInt(romanNumber: string): number {
	let valorTotal: number = 0;

	const algarismos: Record<string, number> = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	const casosEspeciais: Record<string, number> = {
		IV: 4,
		IX: 9,
		XL: 40,
		XC: 90,
		CD: 400,
		CM: 900,
	};

	for (let index: number = 0; index < romanNumber.length; index++) {
		let valorDuplo: string = romanNumber[index] + romanNumber[index + 1];

		if (casosEspeciais[valorDuplo] !== undefined) {
			let valorAtual: number = casosEspeciais[valorDuplo];
			if (valorAtual !== undefined) {
				valorTotal += valorAtual;
                index++
			}
		} else {
			let valorAtual: number = algarismos[romanNumber[index]];
			if (valorAtual !== undefined) {
				valorTotal += valorAtual;
			}
		}
	}

	return valorTotal;
}