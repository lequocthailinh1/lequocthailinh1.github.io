
$(".form0").on("submit", function(){
	var kq = true;
	if ($("#firstName").val()==""){
		$(".efn").show();
		$("#firstName").css({
			"border-color": "red",
		})
		kq = false;
	}else {
		$(".efn").hide();
		$("#firstName").css({
			"border-color": "initial",
		})
	}

	if ($("#lastName").val()==""){
		$(".eln").show();
		$("#lastName").css({
			"border-color": "red",
		})
		kq = false;
	}else {
		$(".eln").hide();
		$("#lastName").css({
			"border-color": "initial",
		})
	}

	if (($("#userName").val()=="")||($("#userName").val().match(/^[a-z0-9._-]{8,30}$/) == null)){
		$(".eun").show();
		$("#userName").css({
			"border-color": "red",
		})
		kq = false;
	}
	else {
		$(".eun").hide();
		$("#userName").css({
			"border-color": "initial",
		})
	}

	if (($("#password").val()=="")||($("#password").val().match(/^(?=.*\d).{4,16}$/)==null)){
		$(".epas").show();
		$("#password").css({
			"border-color": "red",
		})
		kq = false;
	}else {
		$(".epas").hide();
		$("#password").css({
			"border-color": "initial",
		})
	}

	if (($("#confirm").val()=="")||($("#confirm").val()!= $("#password").val())){
		$(".ecf").show();
		$("#confirm").css({
			"border-color": "red",
		})
		$("#password").val("")
		$("#confirm").val("")
		kq = false;
	}else {
		$(".ecf").hide();
		$("#confirm").css({
			"border-color": "initial",
		})
	}

	return kq
})
