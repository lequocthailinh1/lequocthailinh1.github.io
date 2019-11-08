$(function() {
	let validateType = {
		name: function(el) {
			return /^\s*[a-zA-Z,\s]+\s*$/.test(el.val().trim());
		},
		phone: function(el) {
			return (/^\d+$/.test(el.val().trim()) && el.val().length >= 9);
		},
		email: function(el) {
			return /[^@]+@[^@]+/.test(el.val().trim());
		}
	};

	$('#name, #phone, #email').on('blur', function() {
		if ( validateType[$(this).data('type')]($(this))) validSignal($(this));
		else invalidSignal($(this));
	});

	$('form').on('submit', function(event) {
		let isInputValid = {};
		let isFormValid;

		$('#name, #phone, #email').each(function(index, el) {
			let type = $(el).data('type');
			if (validateType[type]($(el))) {
				validSignal($(el));
				isInputValid[type] = true;
			} else {
				invalidSignal($(el));
				isInputValid[type] = false;
			}
		});

		//lặp qua object valid, valid sẽ có dạng kiểu
		//{name: true, phone: false, email: true}
		console.log(isInputValid);

		for (let field in isInputValid) {
			//Nếu thằng nào false 1 cái là form sẽ false luôn (nên break luôn, không cần lặp tiếp)
			if (isInputValid[field] === false) {
				isFormValid = false;
				//thằng nào false thì focus vào thằng đó, xong break luôn
				$(`#${field}`).focus();
				break;
			}
			//Nếu không có thằng nào false thì form sẽ true
			isFormValid = true;
		}
		console.log(`isFormValid? ${isFormValid}`);

		//nếu form false thì ngăn ko cho submit
		if (isFormValid === false) event.preventDefault();
		//form true thì alert thành công
		else alert('Submit thành công');
	});

	function invalidSignal(el) {
		$(el).css('border-color', '#ed1c23');
		$(el).next('span').show();
		$(el).next('span').next('span').hide();
	}

	function validSignal(el) {
		$(el).css('border-color', '#bdbdbd');
		$(el).next('span').hide();
		$(el).next('span').next('span').show();
	}


//Tính số ký tự còn lại	
	$('textarea').on('focus', function() {
		$('#left').css('opacity', '1');
	});

	$('textarea').on('blur', function() {
		$('#left').css('opacity', '0');
	});

	$('textarea').on('input', function() {
		let left = 140 - $(this).val().length;
		$('#left').text(left);
	});
});

