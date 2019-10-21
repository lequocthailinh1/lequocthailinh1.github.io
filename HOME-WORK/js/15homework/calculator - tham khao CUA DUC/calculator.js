$(function() {

//============ Declare variables
let $screen = $(".screen");
let $wrapper = $(".wrapper");

//============ Binding event
$wrapper.on("click", function (event) {
	switch (event.target.id) {
		case "AC":
			clearContent();
			break;
		case "sqr":
			sqrCalc();
			break;
		case "factorial":
			factorialCalc();
			break;
		case "sqrt":
			sqrtCalc();
			break;
		case "percent":
			percentCalc();
			break;
		case "equal":
			evaluate();
			break;
		default:
			displayContent(event);
			break;
	}
});

//=================== FUNCTION

function displayContent(event) {
 	$screen.text($screen.text() + $(event.target).text());
}

function clearContent() {
	$screen.text("");
}

function evaluate() {
	let screen_text = $screen.text();
	//viết cho dấu ÷
	screen_text = screen_text.replace(/÷/g, "/"); //dùng RegEx để thay tất cả dấu ÷, thay vì chỉ thay được 1 dấu ÷ 

	//viết cho dấu ×
	screen_text = screen_text.replace(/×/g, "*");
	
	try {
	 	eval(screen_text);
	 } catch(e) {
	 	alert("Ông phá máy rồi!");
	 	$screen.text("");
	 }

	$screen.css('animation', '0.75s fadeIn');
	$screen.text(eval(screen_text));
	
	setTimeout(function() {
		$screen.css('animation', '');
	}, 500);
	
}

function sqrCalc() {
	let screen_text = $screen.text();
	let result = eval(screen_text * screen_text);
	
	$screen.css('animation', '0.75s fadeIn');
	$screen.text(result);

	setTimeout(function() {
		$screen.css('animation', '');
	}, 500);

	ongPhaMayRoi();
}

function factorialCalc() {
	let screen_text = $screen.text();

	$screen.css('animation', '0.75s fadeIn');

	let result = 1;
	let input = Number(screen_text);

	if (screen_text === "0") $screen.text("1");
	else if (input > 0 && Number.isInteger(input)) {

		for (let i = 1; i <= input; i++) {
			result *= i;
		}
		$screen.text(result);
		setTimeout(function() {
			$screen.css('animation', '');
		}, 500);

	} else {
		alert("Ông phá máy rồi!");
		$screen.text("");
	}
}

function sqrtCalc() {
	let result = Math.sqrt($screen.text());

	$screen.css('animation', '0.75s fadeIn');
	$screen.text(result);

	setTimeout(function() {
		$screen.css('animation', '');
	}, 500);

	ongPhaMayRoi();
}

function percentCalc() {
	let result = $screen.text() / 100;

	$screen.css('animation', '0.75s fadeIn');
	$screen.text(result);

	setTimeout(function() {
		$screen.css('animation', '');
	}, 500);
	ongPhaMayRoi();
}

function ongPhaMayRoi() {
	if (!eval($screen.text())) {
		alert("Ông phá máy rồi!");
		$screen.text("");
	}
}


//======================
//Thêm chức năng ấn số trên bàn phím máy tính

$(document).on('keydown', function(event) {
	if (event.key == 0 && event.key != ' ') $screen.text($screen.text() + event.key);
	
	for (let i = 1; i <= 9; i++) {
		if (event.key == i) $screen.text($screen.text() + event.key);
	}

	switch (event.key) {
		case '+':
		case '-':
		case '*':
		case '/':
		case '.':
			$screen.text($screen.text() + event.key);
	}

	if (event.key == '=' || event.key == 'Enter') evaluate();

	if (event.key == 'Backspace') {
		let arr = $screen.text().split('');

		arr.pop(); // vứt phần tử cuối đi

		$screen.text(arr.join(''));
	}
});

});