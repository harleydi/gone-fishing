const prompt = require('prompt-sync')({sigint: true})
let names = ['Black Panther', 'Black Widow', 'Iron Man', 'Thor', 'Captain America', 'Gamora']
let myCards = []
let totalPower = 0
let totalValue = 0
let turns = 0
let time = 6


function pickSuperhero(arr) {
    // console.log(`You have (x) cards. Totaling (x) power and (x) value!`)
    let card = {
        name: '',
        power: 0,
        value: 0
    }
    card.name = arr[Math.floor(Math.random() * arr.length)]
    card.power = Math.ceil(Math.random() * 10)
    card.value = Math.ceil(Math.random() * 8)
    return card
}



function game() {
    console.log('Welcome to Special Card Picker. You have six hours to pick cards. Choose wisely!')
    
    while (turns <= 7) {
        let card = pickSuperhero(names)
        if (time < 12) {
            console.log('\n')
            console.log('==========================================')
            console.log('\n')
            console.log(`The time is ${time}am! You have: `)
            console.log(`${myCards.length} cards, ${totalPower} power, $${totalValue} value`)
            console.log('\n')
            console.log(`Random pick '${card.name}' with ${card.power} power, valued at $${card.value}`)
            console.log('\n')
            if ((totalPower + card.power) > 20) {
                console.log('This card would put you over 20power. This card will be released!')
                console.log('\n')
                let release = prompt('Press [enter] to continue> ')
                time++
                continue
            }
            let action = prompt('[c]ollet card or [r]e-Pick card> ')
            console.log('\n')
            if (action === 'c') {
                myCards.push(card)
                console.log('You collected that card!')
                time++
                totalPower += card.power
                totalValue += card.value
            } else if (action === 'r') {
                console.log('You choose to repick')
                time++
            }
        } else if (time === 12) {
            console.log('\n')
            console.log('==========================================')
            console.log('\n')
            console.log('The time is 12pm! Times Up!')
            console.log('\n')
            console.log(`You collected ${myCards.length} cards`)
            for (let i = 0; i < myCards.length; i++) {
                console.log(`* ${myCards[i].name}, ${myCards[i].power} power, $${myCards[i].value}`)
            }
            console.log('\n')
            console.log('Total power: ' + totalPower)
            console.log('Total value: $' + totalValue)
            break;
        }
    }
}



game()