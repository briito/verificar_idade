
function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    // var res = document.getElementById('res')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] confira os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        // res.innerHTML = `Idade Calculada: ${idade}`
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {

            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','img/crianca_menino.jpg')
            } else if( idade < 21){
                //Adolescente
                img.setAttribute('src','img/adolescente_menino.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','img/homem_adulto.jpg')
            }else{
                //Idoso
                img.setAttribute('src','img/homem_idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','img/crianca_menina.jpg')
            } else if( idade < 21){
                //Adolescente
                img.setAttribute('src','img/adolescente_menina.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','img/mulher_adulta.png')
            }else{
                //Idoso
                img.setAttribute('src','img/mulher_idosa.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}