var agora = new Date()
var diaSem = agora.getDay()
var data = agora.getDate()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch (diaSem) {
    case 0:
        console.log(`Domingo dia ${data}`)
        break
    case 1:
        console.log(`Segunda dia ${data}`)
        break
    case 2:
        console.log(`Terça dia ${data}`)
        break
    case 3:
        console.log(`Quarta dia ${data}`)
        break
    case 4:
        console.log(`Quinta dia ${data}`)
        break
    case 5:
        console.log(`Sexta dia ${data}`)
        break
    case 6:
        console.log(`Sábado dia ${data}`)
        break
    default:
        console.log('[ERRO]')
        break
}
