
spadesCounter = 1;
diamondsCounter = 1;
heartsCounter = 1;
clubsCounter = 1;

penaltyCards = [];
pentalties = 9;

randomness = 10000000;

pickedCard = [];
deckIndex = 0

// Allocate array for the shuffled deck

cardArray = [
{
    "suit": "hearts",
    "value": 2
},
{
    "suit": "hearts",
    "value": 3
},
{
    "suit": "hearts",
    "value": 4
},
{
    "suit": "hearts",
    "value": 5
},
{
    "suit": "hearts",
    "value": 6
},
{
    "suit": "hearts",
    "value": 7
},
{
    "suit": "hearts",
    "value": 8
},
{
    "suit": "hearts",
    "value": 9
},
{
    "suit": "hearts",
    "value": 10
},
{
    "suit": "hearts",
    "value": "J"
},
{
    "suit": "hearts",
    "value": "Q"
},
{
    "suit": "hearts",
    "value": "K"
},
{
    "suit": "hearts",
    "value": "A"
},
{
    "suit": "diamonds",
    "value": 2
},
{
    "suit": "diamonds",
    "value": 3
},
{
    "suit": "diamonds",
    "value": 4
},
{
    "suit": "diamonds",
    "value": 5
},
{
    "suit": "diamonds",
    "value": 6
},
{
    "suit": "diamonds",
    "value": 7
},
{
    "suit": "diamonds",
    "value": 8
},
{
    "suit": "diamonds",
    "value": 9
},
{
    "suit": "diamonds",
    "value": 10
},
{
    "suit": "diamonds",
    "value": "J"
},
{
    "suit": "diamonds",
    "value": "Q"
},
{
    "suit": "diamonds",
    "value": "K"
},
{
    "suit": "diamonds",
    "value": "A"
},
{
    "suit": "clubs",
    "value": 2
},
{
    "suit": "clubs",
    "value": 3
},
{
    "suit": "clubs",
    "value": 4
},
{
    "suit": "clubs",
    "value": 5
},
{
    "suit": "clubs",
    "value": 6
},
{
    "suit": "clubs",
    "value": 7
},
{
    "suit": "clubs",
    "value": 8
},
{
    "suit": "clubs",
    "value": 9
},
{
    "suit": "clubs",
    "value": 10
},
{
    "suit": "clubs",
    "value": "J"
},
{
    "suit": "clubs",
    "value": "Q"
},
{
    "suit": "clubs",
    "value": "K"
},
{
    "suit": "clubs",
    "value": "A"
},
{
    "suit": "spades",
    "value": 2
},
{
    "suit": "spades",
    "value": 3
},
{
    "suit": "spades",
    "value": 4
},
{
    "suit": "spades",
    "value": 5
},
{
    "suit": "spades",
    "value": 6
},
{
    "suit": "spades",
    "value": 7
},
{
    "suit": "spades",
    "value": 8
},
{
    "suit": "spades",
    "value": 9
},
{
    "suit": "spades",
    "value": 10
},
{
    "suit": "spades",
    "value": "J"
},
{
    "suit": "spades",
    "value": "Q"
},
{
    "suit": "spades",
    "value": "K"
},
{
    "suit": "spades",
    "value": "A"
}
]
shuffledDeck = cardArray;

// Populate pickedCard array with booleans
cardArray.forEach(element => {
    pickedCard.push(new Boolean(false));
});

// Shuffle the deck and populate the shuffled deck
let i = 0;
while (i < randomness) {
    let randomCard0 = Math.floor(Math.random() * 52)
    let randomCard1 = Math.floor(Math.random() * 52)

    let tempCard = shuffledDeck[randomCard0];
    shuffledDeck[randomCard0] = shuffledDeck[randomCard1]
    shuffledDeck[randomCard1] = tempCard
    
    i++;
}

// Select the first 9 cards of the shuffled deck for penalty cards
for(let i = 0; i < pentalties; i++){
    penaltyCards.push(shuffledDeck[i])
    deckIndex++
}

console.log(shuffledDeck);
console.log(penaltyCards);



$("#start").click(function () {
    var inteval = setInterval(() => {
        console.log(penaltyCards)
        console.log(spadesCounter);
        console.log(heartsCounter);
        console.log(diamondsCounter);
        console.log(clubsCounter);

        if (game() != 'gameOver') {
            checkForPenalty()
            deckIndex++;
        } else {
            clearInterval(inteval);
            reset()
        }
    }, 1500)
});


function game() {
    //$('#text').remove()
    switch (shuffledDeck[deckIndex].suit) {
        case 'spades':
            var cardToMove = 'spades'
            $(`#${cardToMove}` + spadesCounter).css('opacity', 0)
            spadesCounter++
            $(`#${cardToMove}` + spadesCounter).css('opacity', 1)
            if ($(`#${cardToMove}` + spadesCounter).length == 0) {
                alert(`${cardToMove} WON!`)
                return 'gameOver'
            }
            $('#card_move_spades').append(`<p id='text'>${shuffledDeck[deckIndex].value} of ${shuffledDeck[deckIndex].suit}</p>`);
            break;
        case 'diamonds':
            var cardToMove = 'diamonds'
            $(`#${cardToMove}` + diamondsCounter).css('opacity', 0)
            diamondsCounter++
            $(`#${cardToMove}` + diamondsCounter).css('opacity', 1)
            if ($(`#${cardToMove}` + diamondsCounter).length == 0) {
                alert(`${cardToMove} WON!`)
                return 'gameOver'
            }
            $('#card_move_diamonds').append(`<p id='text'>${shuffledDeck[deckIndex].value} of ${shuffledDeck[deckIndex].suit}</p>`);
            break;
        case 'hearts':
            var cardToMove = 'hearts'
            $(`#${cardToMove}` + heartsCounter).css('opacity', 0)
            heartsCounter++
            $(`#${cardToMove}` + heartsCounter).css('opacity', 1)
            if ($(`#${cardToMove}` + heartsCounter).length == 0) {
                alert(`${cardToMove} WON!`)
                return 'gameOver'
            }
            $('#card_move_hearts').append(`<p id='text'>${shuffledDeck[deckIndex].value} of ${shuffledDeck[deckIndex].suit}</p>`);
            break;
        case 'clubs':
            var cardToMove = 'clubs'
            $(`#${cardToMove}` + clubsCounter).css('opacity', 0)
            clubsCounter++
            $(`#${cardToMove}` + clubsCounter).css('opacity', 1)
            if ($(`#${cardToMove}` + clubsCounter).length == 0) {
                alert(`${cardToMove} WON!`)
                return 'gameOver'
            }
            $('#card_move_clubs').append(`<p id='text'>${shuffledDeck[deckIndex].value} of ${shuffledDeck[deckIndex].suit}</p>`);
            break;
    }
}


function checkForPenalty() {
    // In reverse order go through the penalty positions
    if (spadesCounter >= 10 && diamondsCounter >= 10 && heartsCounter >= 10 && clubsCounter >= 10 && penaltyCards[8] != null) {
        let cardMovedBack = moveBack(penaltyCards[8])
        // Remove the card from the penalty stack
        penaltyCards[8] = null;
        $('#ten').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);

    } else if (spadesCounter >= 9 && diamondsCounter >= 9 && heartsCounter >= 9 && clubsCounter >= 9 && penaltyCards[7] != null) {
        let cardMovedBack = moveBack(penaltyCards[7])
        // Remove the card from the penalty stack
        penaltyCards[7] = null;
        $('#nine').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);

    } else if (spadesCounter >= 8 && diamondsCounter >= 8 && heartsCounter >= 8 && clubsCounter >= 8 && penaltyCards[6] != null) {
        let cardMovedBack = moveBack(penaltyCards[6])
        // Remove the card from the penalty stack
        penaltyCards[6] = null;
        $('#eight').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);

    } else if (spadesCounter >= 7 && diamondsCounter >= 7 && heartsCounter >= 7 && clubsCounter >= 7 && penaltyCards[5] != null) {
        let cardMovedBack = moveBack(penaltyCards[5])
        // Remove the card from the penalty stack
        penaltyCards[5] = null;
        $('#seven').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);

    } else if (spadesCounter >= 6 && diamondsCounter >= 6 && heartsCounter >= 6 && clubsCounter >= 6 && penaltyCards[4] != null) {
        let cardMovedBack = moveBack(penaltyCards[4])
        // Remove the card from the penalty stack
        penaltyCards[4] = null;
        $('#six').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);

    } else if (spadesCounter >= 5 && diamondsCounter >= 5 && heartsCounter >= 5 && clubsCounter >= 5 && penaltyCards[3] != null) {
        let cardMovedBack = moveBack(penaltyCards[3])
        // Remove the card from the penalty stack
        penaltyCards[3] = null;
        $('#five').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);

    } else if (spadesCounter >= 4 && diamondsCounter >= 4 && heartsCounter >= 4 && clubsCounter >= 4 && penaltyCards[2] != null) {
        let cardMovedBack = moveBack(penaltyCards[2])
        // Remove the card from the penalty stack
        penaltyCards[2] = null;
        $('#four').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);

    } else if (spadesCounter >= 3 && diamondsCounter >= 3 && heartsCounter >= 3 && clubsCounter >= 3 && penaltyCards[1] != null) {
        let cardMovedBack = moveBack(penaltyCards[1])
        // Remove the card from the penalty stack
        penaltyCards[1] = null;
        $('#three').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);

    } else if (spadesCounter >= 2 && diamondsCounter >= 2 && heartsCounter >= 2 && clubsCounter >= 2 && penaltyCards[0] != null) {
        let cardMovedBack = moveBack(penaltyCards[0])
        // Remove the card from the penalty stack
        penaltyCards[0] = null;
        $('#two').append(`<span class='show_moved_back'>${cardMovedBack}</span>`);
    }
}

function moveBack(penaltyCard) {
    console.log(penaltyCard.value + " - " +  penaltyCards.suit);
    
    //let card = Math.floor(Math.random() * 4);
    switch (penaltyCard.suit) {
        case 'spades':
            var cardToMove = penaltyCard.value + ' of ' + penaltyCard.suit;
            $(`#${cardToMove}` + spadesCounter).css('opacity', 0)
            spadesCounter--
            $(`#${cardToMove}` + spadesCounter).css('opacity', 1)
            return cardToMove
            break;
        case 'diamonds':
            var cardToMove = penaltyCard.value + ' of ' + penaltyCard.suit;
            $(`#${cardToMove}` + diamondsCounter).css('opacity', 0)
            diamondsCounter--
            $(`#${cardToMove}` + diamondsCounter).css('opacity', 1)
            return cardToMove
            break;
        case 'hearts':
            var cardToMove = penaltyCard.value + ' of ' + penaltyCard.suit;
            $(`#${cardToMove}` + heartsCounter).css('opacity', 0)
            heartsCounter--
            $(`#${cardToMove}` + heartsCounter).css('opacity', 1)
            return cardToMove
            break;
        case 'clubs':
            var cardToMove = penaltyCard.value + ' of ' + penaltyCard.suit;
            $(`#${cardToMove}` + clubsCounter).css('opacity', 0)
            clubsCounter--
            $(`#${cardToMove}` + clubsCounter).css('opacity', 1)
            return cardToMove
            break;
    }
}

function reset() {
    $(`#spades` + spadesCounter).css('opacity', 0)
    $(`#diamonds` + diamondsCounter).css('opacity', 0)
    $(`#hearts` + heartsCounter).css('opacity', 0)
    $(`#clubs` + clubsCounter).css('opacity', 0)

    spadesCounter = 1;
    diamondsCounter = 1;
    heartsCounter = 1;
    clubsCounter = 1;

    $(`#spades` + spadesCounter).css('opacity', 1)
    $(`#diamonds` + diamondsCounter).css('opacity', 1)
    $(`#hearts` + heartsCounter).css('opacity', 1)
    $(`#clubs` + clubsCounter).css('opacity', 1)

    $('#card_move_clubs').remove()
    $('#card_move_diamonds').remove()
    $('#card_move_hearts').remove()
    $('#card_move_spades').remove()

    $('.show_moved_back').remove()
}




    