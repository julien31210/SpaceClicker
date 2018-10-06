var score = 0;
var bonus = 0;
var usine = 0;
var prixusine = 15;
var prixbonus = 10;
var bank = 0;

$('#button').click(function(){	
	console.log('bank', bank);
	score +=bonus;
	bank += bonus;
	$("#score").text(score);
	$("#banque").text(bank);
});


$('#bonus').click(function(){
	if (bank >= prixbonus) {
		bonus += 1;
		bank -= 10;
		prixbonus *=2 ;
	}
	bonus += 1;
});

$('#usine').click(function(){		//quand on clique sur usine	
	if (bank >= prixusine) {		//si la variable bank est supérieur ou égal à 15
		usine += 1;					//incrémenter usine de +1
		bank -= 15;					//et soustraire 15 point à la banque
		prixusine *=2 ;
		$("#banque").text(bank);
	}
});

setInterval(function(){	
	score += usine;
	bank += usine;
	$("#score").text(score);		
	$("#banque").text(bank);		
}, 1000);