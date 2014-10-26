var foo = [];
var N = 100;
for (var i = 1; i <= N; i++) {
	if (i % 3 == 0) {
    		foo[i] = "Crackle";
	}
	if (i % 5 == 0) {
    		if (!foo[i]) {
         			foo[i] = "Pop";
    		} else {
        			foo[i] = "CracklePop";
    		}
	}
  	if (!foo[i]) {
		foo.push(i);
  	}
}
console.log(foo);
