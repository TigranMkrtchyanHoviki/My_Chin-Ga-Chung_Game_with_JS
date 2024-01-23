let chingaChung = document.querySelector(".game_result")
let players = document.querySelectorAll(".play")
let button = document.getElementById("btn")
let points = document.querySelectorAll(".points")

let signs = [ "ՄԿՐԱՏ", "ՔԱՐ", "ԹՈՒՂԹ" ]

// ՖՈՒՆԿՑԻԱ signs ԶԱՆԳՎԱԾԻ ՀԱՄԱՐ ՊԱՏԱՀԱԿԱՆ ԻՆԴԵՔՍԻ ՍՏԱՆԱԼՈՒ ՆՊԱՏԱԿՈՎ

function getIndex1 () {
    let index = Math.floor(Math.random()*(signs.length))
    
    return index
}

// ՖՈՒՆԿՑԻԱ signs ԶԱՆԳՎԱԾԻ ՀԱՄԱՐ ՊԱՏԱՀԱԿԱՆ ԻՆԴԵՔՍԻ ՍՏԱՆԱԼՈՒ ՆՊԱՏԱԿՈՎ

function getIndex2 () {
    let index = Math.floor(Math.random()*(signs.length))
    
    return index
}

// ՖՈՒՆԿՑԻԱ, ՈՐԸ ԿԱՆՉՎՈՒՄ Է ՍԿՍԻՐ ԽԱՂԸ BUTTON-Ը ՍԵՂՄԵԼՈՒՑ ՀԵՏՈ, ԵՎ ՈՐԸ ԱՇԽԱՏԱՑՆՈՒՄ Է ՈՂՋ ԽԱՂԸ

function startGame () {
    
    setTimeout(() => {
        chingaChung.innerText = "ՉԻՆ"
    }, 500)

    setTimeout(() => {
        chingaChung.innerText = "ԳԱ"
    }, 1000)

    setTimeout(() => {
        chingaChung.innerText = "ՉՈՒՆԳ"
    }, 1500)

    setTimeout (() => {
       
        let indexPlayer1 = getIndex1 ()
        let indexPlayer2 = getIndex2 ()

        players.forEach((val, index) => {
            if(index === 0) {
                val.innerText = signs[indexPlayer1]
            }else {
                val.innerText = signs[indexPlayer2]
            }
        })

        setTimeout(() => {
        
        if(players[0].innerText === "ՄԿՐԱՏ" && players[1].innerText === "ՔԱՐ" ||
           players[0].innerText === "ՔԱՐ" && players[1].innerText === "ԹՈՒՂԹ" ||
           players[0].innerText === "ԹՈՒՂԹ" && players[1].innerText === "ՄԿՐԱՏ"){
            
            chingaChung.innerText = "ԽԱՂԱՑՈՂ 2-Ը ՀԱՂԹԵՑ"
        
        }else if(players[0].innerText === "ՄԿՐԱՏ" && players[1].innerText === "ԹՈՒՂԹ" ||
                 players[0].innerText === "ՔԱՐ" && players[1].innerText === "ՄԿՐԱՏ" ||
                 players[0].innerText === "ԹՈՒՂԹ" && players[1].innerText === "ՔԱՐ"){

            chingaChung.innerText = "ԽԱՂԱՑՈՂ 1-Ը ՀԱՂԹԵՑ"

        }else {

            chingaChung.innerText = "ՈՉՈՔԻ"

        }

        setTimeout(() => {

             if(chingaChung.innerText === "ԽԱՂԱՑՈՂ 1-Ը ՀԱՂԹԵՑ") {
                console.log("խաղ 1", points[0])
                 points[0].innerText = `${+(points[0].innerText) + 1}` 
     
             }else if(chingaChung.innerText === "ԽԱՂԱՑՈՂ 2-Ը ՀԱՂԹԵՑ"){
                 console.log("խաղ 2", points[0])
                 points[1].innerText = `${+(points[1].innerText) + 1}`
     
             }

       }, 800)

     }, 1500)
    
    }, 1500)
}

// ՍԿՍԻՐ ԽԱՂԸ button-ի ՀԱՄԱՐ

button.onclick = startGame