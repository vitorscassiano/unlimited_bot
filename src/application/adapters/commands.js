const { buildBossObject, buildRollObject } = require("../services")

const bossHandler = bossObject => {}
const rollHandler = () => {}

const parseContent = content => {
    const contentList = content.split(" ")

    try {
        switch(contentList[0]) {
            case "+boss":
                let contentObj = buildBossObject(contentList)
                return toEveryone(`Pessoal, nasceu ${contentObj.boss} no ${contentObj.server}, vamos atacar mais tarde, fiquem ligados!`)
                break;
            case "+roll":
                let roll = buildRollObject(contentList)
                return `O vencedor foi o número **${roll.winner}**, parabéns, você ganhou: **${roll.item}**!`
                break;
            default:
                return
        }
    } catch(e) {
        const command = contentList[0]
        console.info({ e, command })
        if(command === "+boss"){
            return `Comando inválido, tente: +boss **boss-name** **server-name**`
        } else if(command === "+roll") {
            return `Comando inválido, tente: +roll **tempo-segundos** **quantidade-players** **item-sorteio**`
        } else {
            return "Comando desconhecido!"
        }
    }
}

const toEveryone = content => {
    return `@everyone ${content}`
}

module.exports = {
    parseContent,
    toEveryone,
}
