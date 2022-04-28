let gianRecebe = {lipeDeve:[], rhuanDeve:[]};
let rhuanRecebe = {lipeDeve:[], gianDeve:[]};
let lipeRecebe = {gianDeve:[], rhuanDeve:[]};


let removeritem = document.querySelector('#remover')

removeritem.addEventListener('click', () => {

        let llista = document.querySelector('#lipeRecebe')
        let rlista = document.querySelector('#rhuanRecebe')
        let glista = document.querySelector('#gianRecebe')

        if (llista.options[llista.selectedIndex] != null ){
            if(llista.options[llista.selectedIndex].text.includes('Gian')){
                alert(`O valor de que o gian devia era: ${lipeRecebe.gianDeve[Number(llista.options[llista.selectedIndex].value)]}`)
                lipeRecebe.gianDeve[Number(llista.options[llista.selectedIndex].value)] = 0
                alert(`O valor de que o gian deve agora e: ${lipeRecebe.gianDeve[Number(llista.options[llista.selectedIndex].value)]}`)
            }
            if(llista.options[llista.selectedIndex].text.includes('Rhuan')){
                alert(`O valor de que o rhuan devia era: ${lipeRecebe.rhuanDeve[Number(llista.options[llista.selectedIndex].value)]}`)
                lipeRecebe.rhuanDeve[Number(llista.options[llista.selectedIndex].value)] = 0
                alert(`O valor de que o rhuan deve agore e: ${lipeRecebe.rhuanDeve[Number(llista.options[llista.selectedIndex].value)]}`)
            }

            llista.removeChild(llista.options[llista.selectedIndex])
            

        }else if (glista.options[glista.selectedIndex] != null ){
            glista.removeChild(glista.options[glista.selectedIndex])
            
        }


        //let x = document.querySelectorAll('.selecao')
        //let selecionado = x.options[x.selectedIndex]
        //x.removeChild(selecionado)
})



function adicionar(){
    let valor = document.querySelector('#valor').value
    let ldividir = document.querySelector('input#liped')
    let gdividir = document.querySelector('input#giand')
    let rdividir = document.querySelector('input#rhuand')
    let llista = document.querySelector('#lipeRecebe')
    let rlista = document.querySelector('#rhuanRecebe')
    let glista = document.querySelector('#gianRecebe')
    var pagar = document.getElementsByName('pagou')

    if(pagar[0].checked){
        if(ldividir.checked && gdividir.checked && rdividir.checked){
            let divisao = Number(valor)/3
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
            let divisao = Number(valor)/2
            lipeRecebe.gianDeve.push(divisao)

            let item = document.createElement('option')
            item.value = lipeRecebe.gianDeve.length-1
            item.text = `Recebe ${divisao} de Gian.`
            llista.appendChild(item)

        }else if(ldividir.checked && rdividir.checked){
            let divisao = Number(valor)/2
            lipeRecebe.rhuanDeve.push(divisao)

            let item = document.createElement('option')
            item.value = lipeRecebe.rhuanDeve.length-1
            item.text = `Recebe ${divisao} de Rhuan.`
            llista.appendChild(item)

        }else{
            let divisao = Number(valor)/2
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
            let divisao = Number(valor)/3
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
            let divisao = Number(valor)/2
            gianRecebe.lipeDeve.push(divisao)

            let item = document.createElement('option')
            item.value = gianRecebe.lipeDeve.length-1
            item.text = `Recebe ${divisao} de Lipe.`
            glista.appendChild(item)

        }else if(gdividir.checked && rdividir.checked){
            let divisao = Number(valor)/2
            gianRecebe.rhuanDeve.push(divisao)

            let item = document.createElement('option')
            item.value = gianRecebe.rhuanDeve.length-1
            item.text = `Recebe ${divisao} de Rhuan.`
            glista.appendChild(item)

        }else{
            let divisao = Number(valor)/2
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
            let divisao = Number(valor)/3
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
            let divisao = Number(valor)/2
            rhuanRecebe.lipeDeve.push(divisao)

            let item = document.createElement('option')
            item.value = rhuanRecebe.lipeDeve.length-1
            item.text = `Recebe ${divisao} de Lipe.`
            rlista.appendChild(item)


        }else if(rdividir.checked && gdividir.checked){
            let divisao = Number(valor)/2
            rhuanRecebe.gianDeve.push(divisao)

            let item = document.createElement('option')
            item.value = rhuanRecebe.gianDeve.length-1
            item.text = `Recebe ${divisao} de Gian.`
            rlista.appendChild(item)

        }else{
            let divisao = Number(valor)/2
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

    /*let somar1 = 0
    let somar2 = 0

    for(let pos in rhuanRecebe.lipeDeve){
        somar1+=rhuanRecebe.lipeDeve[pos]
    }

    for(let pos in rhuanRecebe.gianDeve){
        somar2+=rhuanRecebe.gianDeve[pos]
    }

    let total = Number(somar1) + Number(somar2)
    window.alert(`O rhuan recebe ${total} e o lipe paga ${somar1} e o gian paga ${somar2}`)
    */
}


    