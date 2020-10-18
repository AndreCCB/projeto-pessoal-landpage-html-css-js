function Deus(){
	limpar();
	document.getElementById("Deus").classList.add('border-menu');
	document.getElementById("cor-D").classList.add('p');
}
function filho(){
	rmarcador();
	limpar();
	document.getElementById("filho").classList.add('border-menu');
	document.getElementById("cor-F").classList.add('p');
}
function espirito(){
	rmarcador();
	limpar();
	document.getElementById("espirito").classList.add('border-menu');
	document.getElementById("cor-E").classList.add('p');
}
function graca(){
	limpar();
	rmarcador();
	document.getElementById("graca").classList.add('border-menu');
	document.getElementById("cor-G").classList.add('p');
}
function salvacao(){
	limpar();
	rmarcador();
	document.getElementById("salvacao").classList.add('border-menu');
	document.getElementById("cor-S").classList.add('p');
}
function limpar(){
	document.getElementById("Deus").classList.remove('border-menu');
	document.getElementById("salvacao").classList.remove('border-menu')
	document.getElementById("filho").classList.remove('border-menu');
	document.getElementById("espirito").classList.remove('border-menu');
	document.getElementById("graca").classList.remove('border-menu');
	document.getElementById("salvacao").classList.remove('border-menu');
	document.getElementById("cor-D").classList.remove('p');
	document.getElementById("cor-F").classList.remove('p');
	document.getElementById("cor-E").classList.remove('p');
	document.getElementById("cor-G").classList.remove('p');
	document.getElementById("cor-S").classList.remove('p');
	document.getElementById("cor-D").classList.add('preto');
}
function rmarcador(){
	document.getElementById("Deus").classList.remove('home');
}
