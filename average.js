function avg(scores){
	
	var total = 0;
	
	scores.forEach(function(score){
		total+=score;
	});
	
	var answer = total/scores.length;
		
	return Math.round(answer);
}

var score = [90,98,89,100,100,86,94];
console.log(avg(score));

var score2 = [40,65,77,82,80,54,73,63,95,49];
console.log(avg(score2));
