let gianRecebe = {lipeDeve:[], rhuanDeve:[]};
let rhuanRecebe = {lipeDeve:[], gianDeve:[]};
let lipeRecebe = {gianDeve:[], rhuanDeve:[]};


let adicionaritem = document.querySelector('#adicionar')
let removeritem = document.querySelector('#remover')
let limpar = document.querySelector('#limpar')

removeritem.addEventListener('click', () => {



        let llista = document.querySelector('#lipeRecebe')
        let rlista = document.querySelector('#rhuanRecebe')
        let glista = document.querySelector('#gianRecebe')

        if (llista.options[llista.selectedIndex] != null ){
            if(llista.options[llista.selectedIndex].text.includes('Gian')){
                lipeRecebe.gianDeve[Number(llista.options[llista.selectedIndex].value)] = 0
            }
            if(llista.options[llista.selectedIndex].text.includes('Rhuan')){
                lipeRecebe.rhuanDeve[Number(llista.options[llista.selectedIndex].value)] = 0
            }

            llista.removeChild(llista.options[llista.selectedIndex])
            

        }if (glista.options[glista.selectedIndex] != null ){

            if(glista.options[glista.selectedIndex].text.includes('Lipe')){
                gianRecebe.lipeDeve[Number(glista.options[glista.selectedIndex].value)] = 0
            }
            if(glista.options[glista.selectedIndex].text.includes('Rhuan')){
                gianRecebe.rhuanDeve[Number(glista.options[glista.selectedIndex].value)] = 0
            }

            glista.removeChild(glista.options[glista.selectedIndex])
            
        }
        if(rlista.options[rlista.selectedIndex] != null ){
            if(rlista.options[rlista.selectedIndex].text.includes('Lipe')){
                rhuanRecebe.lipeDeve[Number(rlista.options[rlista.selectedIndex].value)] = 0
            }
            if(rlista.options[rlista.selectedIndex].text.includes('Gian')){
                rhuanRecebe.gianDeve[Number(rlista.options[rlista.selectedIndex].value)] = 0
            }

            rlista.removeChild(rlista.options[rlista.selectedIndex])
        }
        calcular()

})



adicionaritem.addEventListener('click', () => {
    let valor = document.querySelector('#valor').value
    let ivalor = document.querySelector('#valor')
    let ldividir = document.querySelector('input#liped')
    let gdividir = document.querySelector('input#giand')
    let rdividir = document.querySelector('input#rhuand')
    let llista = document.querySelector('#lipeRecebe')
    let rlista = document.querySelector('#rhuanRecebe')
    let glista = document.querySelector('#gianRecebe')
    var pagar = document.getElementsByName('pagou')

    if(pagar[0].checked){
        if(ldividir.checked && gdividir.checked && rdividir.checked){
            let divisao = (Number(valor)/3).toFixed(2)

            lipeRecebe.gianDeve.push(divisao)
            lipeRecebe.rhuanDeve.push(divisao)

            let item = document.createElement('option')
            let item2 = document.createElement('option')
            item.value = lipeRecebe.gianDeve.length-1
            item2.value = lipeRecebe.rhuanDeve.length-1
            item.text = `Recebe ${divisao} de Gian.`
            item2.text = `Recebe ${divisao} de Rhuan.`
            llista.appendChild(item)
            llista.appendChild(item2)

        }else if(ldividir.checked && gdividir.checked){
            let divisao = (Number(valor)/2).toFixed(2)

            lipeRecebe.gianDeve.push(divisao)

            let item = document.createElement('option')
            item.value = lipeRecebe.gianDeve.length-1
            item.text = `Recebe ${divisao} de Gian.`
            llista.appendChild(item)

        }else if(ldividir.checked && rdividir.checked){
            let divisao = (Number(valor)/2).toFixed(2)

            lipeRecebe.rhuanDeve.push(divisao)

            let item = document.createElement('option')
            item.value = lipeRecebe.rhuanDeve.length-1
            item.text = `Recebe ${divisao} de Rhuan.`
            llista.appendChild(item)

        }else{
            let divisao = (Number(valor)/2).toFixed(2)

            lipeRecebe.rhuanDeve.push(divisao)
            lipeRecebe.gianDeve.push(divisao)

            let item = document.createElement('option')
            let item2 = document.createElement('option')
            item.value = lipeRecebe.gianDeve.length-1
            item2.value = lipeRecebe.rhuanDeve.length-1
            item.text = `Recebe ${divisao} de Gian.`
            item2.text = `Recebe ${divisao} de Rhuan.`
            llista.appendChild(item)
            llista.appendChild(item2)
            
        }

    }else if(pagar[1].checked){
        if(gdividir.checked && ldividir.checked && rdividir.checked){
            let divisao = (Number(valor)/3).toFixed(2)

            gianRecebe.lipeDeve.push(divisao)
            gianRecebe.rhuanDeve.push(divisao)

            let item = document.createElement('option')
            let item2 = document.createElement('option')
            item.value = gianRecebe.lipeDeve.length-1
            item2.value = gianRecebe.rhuanDeve.length-1
            item.text = `Recebe ${divisao} de Lipe.`
            item2.text = `Recebe ${divisao} de Rhuan.`
            glista.appendChild(item)
            glista.appendChild(item2)

        }else if(gdividir.checked && ldividir.checked){
            let divisao = (Number(valor)/2).toFixed(2)

            gianRecebe.lipeDeve.push(divisao)

            let item = document.createElement('option')
            item.value = gianRecebe.lipeDeve.length-1
            item.text = `Recebe ${divisao} de Lipe.`
            glista.appendChild(item)

        }else if(gdividir.checked && rdividir.checked){
            let divisao = (Number(valor)/2).toFixed(2)

            gianRecebe.rhuanDeve.push(divisao)

            let item = document.createElement('option')
            item.value = gianRecebe.rhuanDeve.length-1
            item.text = `Recebe ${divisao} de Rhuan.`
            glista.appendChild(item)

        }else{
            let divisao = (Number(valor)/2).toFixed(2)

            gianRecebe.rhuanDeve.push(divisao)
            gianRecebe.lipeDeve.push(divisao)

            let item = document.createElement('option')
            let item2 = document.createElement('option')
            item.value = gianRecebe.lipeDeve.length-1
            item2.value = gianRecebe.rhuanDeve.length-1
            item.text = `Recebe ${divisao} de Lipe.`
            item2.text = `Recebe ${divisao} de Rhuan.`
            glista.appendChild(item)
            glista.appendChild(item2)
    
        }

    }else{
        if(rdividir.checked && ldividir.checked && gdividir.checked){
            let divisao = (Number(valor)/3).toFixed(2)

            rhuanRecebe.lipeDeve.push(divisao)
            rhuanRecebe.gianDeve.push(divisao)

            let item = document.createElement('option')
            let item2 = document.createElement('option')
            item.value = rhuanRecebe.lipeDeve.length-1
            item2.value = rhuanRecebe.gianDeve.length-1
            item.text = `Recebe ${divisao} de Lipe.`
            item2.text = `Recebe ${divisao} de Gian.`
            rlista.appendChild(item)
            rlista.appendChild(item2)

        }else if(rdividir.checked && ldividir.checked){
            let divisao = (Number(valor)/2).toFixed(2)

            rhuanRecebe.lipeDeve.push(divisao)

            let item = document.createElement('option')
            item.value = rhuanRecebe.lipeDeve.length-1
            item.text = `Recebe ${divisao} de Lipe.`
            rlista.appendChild(item)


        }else if(rdividir.checked && gdividir.checked){
            let divisao = (Number(valor)/2).toFixed(2)

            rhuanRecebe.gianDeve.push(divisao)

            let item = document.createElement('option')
            item.value = rhuanRecebe.gianDeve.length-1
            item.text = `Recebe ${divisao} de Gian.`
            rlista.appendChild(item)

        }else{
            let divisao = (Number(valor)/2).toFixed(2)

            rhuanRecebe.gianDeve.push(divisao)
            rhuanRecebe.lipeDeve.push(divisao)

            let item = document.createElement('option')
            let item2 = document.createElement('option')
            item.value = rhuanRecebe.lipeDeve.length-1
            item2.value = rhuanRecebe.gianDeve.length-1
            item.text = `Recebe ${divisao} de Lipe.`
            item2.text = `Recebe ${divisao} de Gian.`
            rlista.appendChild(item)
            rlista.appendChild(item2)

        }
    }

    ivalor.value = ''
    ivalor.focus()
    calcular()

})

function calcular(){
    let lipegian = somar(lipeRecebe.gianDeve) 
    let liperhuan = somar(lipeRecebe.rhuanDeve) 
    let gianrhuan = somar(gianRecebe.rhuanDeve)
    let gianlipe = somar(gianRecebe.lipeDeve)
    let rhuanlipe = somar(rhuanRecebe.lipeDeve)
    let rhuangian = somar(rhuanRecebe.gianDeve)
    let res = document.querySelector('#resultado')
    let res2 = document.querySelector('#resultado2')
    let res3 = document.querySelector('#resultado3')
    

    if(liperhuan>=rhuanlipe){
        res.innerHTML = `Rhuan => Lipe ${liperhuan-rhuanlipe}`
    }
    if(rhuanlipe>liperhuan){
        res.innerHTML = `Lipe => Rhuan ${rhuanlipe-liperhuan}`
    }
    if(lipegian>=gianlipe){
        res2.innerHTML = `Gian => Lipe ${lipegian-gianlipe}`
    }
    if(gianlipe>lipegian){
        res2.innerHTML = `Lipe => Gian ${gianlipe-lipegian}`
    }
    if(gianrhuan>=rhuangian){
        res3.innerHTML = `Rhuan => Gian ${gianrhuan-rhuangian}`
    }
    if(rhuangian>gianrhuan){
        res3.innerHTML = `Gian => Rhuan ${rhuangian-gianrhuan}`
    }
    

}

limpar.addEventListener('click', () =>{
    location.reload()
})


function somar(array){
    let soma = 0
    let i = 0
    for(i in array ) {
        soma += Number(array[i])
    }

    return soma
}