var soma = document.querySelector('#btn')

function mediar(){
	a = Number(document.getElementById('n1').value)
	b = Number(document.getElementById('n2').value)
    c = Number(document.getElementById('n3').value)
    d = Number(document.getElementById('n4').value)

    soma = a + b + c + d
    media=soma/4

	resp.innerText = `A media dos valores = ${media}`
}
soma.addEventListener('click',mediar)


