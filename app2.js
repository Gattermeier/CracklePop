var N = 100;
for (var i = 1; i <= N; i++) {
	var result = '';
	if (i % 3 == 0) {
    		result = "Crackle";
	}
	if (i % 5 == 0) {
		result = result + "Pop";
	}
	if (result == '') {
		result = i;
	}
	console.log(result);
}
