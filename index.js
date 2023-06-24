function selectItem(item){
    return document.querySelector(item)
}

const low = 1;
const high = 10;
const correct= Math.floor(Math.random() * (high - low) + low)

console.log(correct)

function gameRound(){
    let game=false
    for (let round = 0; round < 3; round++) {
       userGuesed= parseFloat(prompt('Guess a Number: '))

        if(userGuesed < correct){
            alert('Correct answer is greater! ')
        } else if(userGuesed === correct){
            alert('You Win!')
            game= true
            break
        } else if(userGuesed > correct){
            alert('Correct answer is smaller! ')
        }
    }
    return game
}

document.querySelector('#start').addEventListener('click', function(){
   const gameOn= gameRound()
   gameOn ? selectItem('h1').innerText= 'You Win!' : selectItem('h1').innerText= 'You Lose!'
   selectItem('#restart').style.display= 'inline-block'
   selectItem('#start').style.display= 'none'
})

document.querySelector('#restart').addEventListener('click', function(){
    const gameOn= gameRound()
    gameOn ? selectItem('h1').innerText= 'You Win!' : selectItem('h1').innerText= 'You Lose!'
 })