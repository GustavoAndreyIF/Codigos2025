function longestCommonPrefix(strs: string[]): string {
	for (let i = 0; i < strs.length; i++) {
		if (strs[i].length === 0) {
			return "";
		}
	}

	let menorTamanho: number = Math.min(...strs.map((str) => str.length));

	let palavra: string = strs[0];
	let prefixFinal: string = "";

	for (let i = 0; i <= menorTamanho; i++) {
		if (strs.every((str) => str.slice(0, i) === palavra.slice(0, i)))
			prefixFinal = palavra.slice(0, i);
	}
	return prefixFinal;
}
