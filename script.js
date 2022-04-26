let gianRecebe = {lipeDeve:[], rhuanDeve:[]};
let rhuanRecebe = {lipeDeve:[], gianDeve:[]};
let lipeRecebe = {gianDeve:[], rhuanDeve:[]};


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
            item.text = `Recebe ${divisao} de Gian e de Rhuan.`
            llista.appendChild(item)

        }else if(ldividir.checked && gdividir.checked){
            let divisao = Number(valor)/2
            lipeRecebe.gianDeve.push(divisao)

            let item = document.createElement('option')
            item.text = `Recebe ${divisao} de Gian.`
            llista.appendChild(item)

        }else if(ldividir.checked && rdividir.checked){
            let divisao = Number(valor)/2
            lipeRecebe.rhuanDeve.push(divisao)

            let item = document.createElement('option')
            item.text = `Recebe ${divisao} de Rhuan.`
            llista.appendChild(item)

        }else{
            let divisao = Number(valor)/2
            lipeRecebe.rhuanDeve.push(divisao)
            lipeRecebe.gianDeve.push(divisao)

            let item = document.createElement('option')
            item.text = `Recebe ${divisao} de Gian e de Rhuan.`
            llista.appendChild(item)
            
        }
    }else if(pagar[1].checked){
        if(gdividir.checked && ldividir.checked && rdividir.checked){
            let divisao = Number(valor)/3
            gianRecebe.lipeDeve.push(divisao)
            gianRecebe.rhuanDeve.push(divisao)
        }else if(gdividir.checked && ldividir.checked){
            let divisao = Number(valor)/2
            gianRecebe.lipeDeve.push(divisao)
        }else if(gdividir.checked && rdividir.checked){
            let divisao = Number(valor)/2
            gianRecebe.rhuanDeve.push(divisao)
        }else{
            let divisao = Number(valor)/2
            gianRecebe.rhuanDeve.push(divisao)
            gianRecebe.lipeDeve.push(divisao)
        }
    }else{
        if(rdividir.checked && ldividir.checked && gdividir.checked){
            let divisao = Number(valor)/3
            rhuanRecebe.lipeDeve.push(divisao)
            rhuanRecebe.gianDeve.push(divisao)
        }else if(rdividir.checked && ldividir.checked){
            let divisao = Number(valor)/2
            rhuanRecebe.lipeDeve.push(divisao)
        }else if(rdividir.checked && gdividir.checked){
            let divisao = Number(valor)/2
            rhuanRecebe.gianDeve.push(divisao)
        }else{
            let divisao = Number(valor)/2
            rhuanRecebe.gianDeve.push(divisao)
            rhuanRecebe.lipeDeve.push(divisao)
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


    