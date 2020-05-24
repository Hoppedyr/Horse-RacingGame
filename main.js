
spadesCounter = 1;
diamondsCounter = 1;
heartsCounter = 1;
clubsCounter = 1;

two = false;
three = false;
four = false;
five = false;
six = false;
seven = false;
eight = false;
nine = false;
ten = false;

moveBack = [];
pickedCard = [];
counter = 0


shuffleArray = [];
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



cardArray.forEach(element => {
    pickedCard.push(false);
});

for (let i = 0; i < 52; i++) {
    let randomCard = Math.floor(Math.random() * 51)  
    if(pickedCard[randomCard] == false){
        pickedCard[randomCard] == true;
        shuffleArray[i] = cardArray[randomCard]
    } else {
        i--
    }
}

for(let i = 0; i < 10; i++){
    moveBack.push(shuffleArray[i])
    counter++
}

console.log(shuffleArray);
console.log(moveBack);




$("#start").click(function () {
    var inteval = setInterval(() => {
        console.log(moveBack)
        if (game() != 'gameOver') {
            checkMoveBack()
        } else {
            clearInterval(inteval);
            reset()
        }
    }, 1500)
});


function game() {

    let randomNum = Math.floor(Math.random()* 51)
    cardArray[randomNum]

    if(cardArray[randomNum] != null){
    console.log(cardArray[randomNum].suit)
    
    shuffleArray[counter]


    //$('#text').remove()
    switch (cardArray[randomNum].suit) {
        case 'spades':
            var cardToMove = 'spades'
            $(`#${cardToMove}` + spadesCounter).css('opacity', 0)
            spadesCounter++
            $(`#${cardToMove}` + spadesCounter).css('opacity', 1)
            if ($(`#${cardToMove}` + spadesCounter).length == 0) {
                alert(`${cardToMove} WON!`)
                return 'gameOver'
            }
            $('#card_move_spades').append("<p id='text'>spades moves</p>");
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
            $('#card_move_diamonds').append("<p id='text'>diamonds moves</p>");
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
            $('#card_move_hearts').append("<p id='text'>hearts moves</p>");
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
            $('#card_move_clubs').append("<p id='text'>clubs moves</p>");
            break;
    }
}else{
    cardArray[randomNum] == null;
}
}


function checkMoveBack() {
    if (spadesCounter >= 2 && diamondsCounter >= 2 && heartsCounter >= 2 && clubsCounter >= 2 && two != true) {
        two = true;
        let cardMovedBack = moveBack()
        $('#two').append(`<span class='show_moved_back'>${cardMovedBack}</span>`);
    }
    if (spadesCounter >= 3 && diamondsCounter >= 3 && heartsCounter >= 3 && clubsCounter >= 3 && three != true) {
        three = true;
        let cardMovedBack = moveBack()
        $('#three').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);
    }
    if (spadesCounter >= 4 && diamondsCounter >= 4 && heartsCounter >= 4 && clubsCounter >= 4 && four != true) {
        four = true;
        let cardMovedBack = moveBack()
        $('#four').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);
    }
    if (spadesCounter >= 5 && diamondsCounter >= 5 && heartsCounter >= 5 && clubsCounter >= 5 && five != true) {
        five = true;
        let cardMovedBack = moveBack()
        $('#five').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);
    }
    if (spadesCounter >= 6 && diamondsCounter >= 6 && heartsCounter >= 6 && clubsCounter >= 6 && six != true) {
        six = true;
        let cardMovedBack = moveBack()
        $('#six').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);
    }
    if (spadesCounter >= 7 && diamondsCounter >= 7 && heartsCounter >= 7 && clubsCounter >= 7 && seven != true) {
        seven = true;
        let cardMovedBack = moveBack()
        $('#seven').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);
    }
    if (spadesCounter >= 8 && diamondsCounter >= 8 && heartsCounter >= 8 && clubsCounter >= 8 && eight != true) {
        eight = true;
        let cardMovedBack = moveBack()
        $('#eight').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);
    }
    if (spadesCounter >= 9 && diamondsCounter >= 9 && heartsCounter >= 9 && clubsCounter >= 9 && nine != true) {
        nine = true;
        let cardMovedBack = moveBack()
        $('#nine').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);
    }
    if (spadesCounter >= 10 && diamondsCounter >= 10 && heartsCounter >= 10 && clubsCounter >= 10 && ten != true) {
        ten = true;
        let cardMovedBack = moveBack()
        $('#ten').append(`<div class='show_moved_back'>${cardMovedBack}</div>`);
    }
}

function moveBack() {
    let card = Math.floor(Math.random() * 4);
    switch (card) {
        case 0:
            var cardToMove = 'spades'
            $(`#${cardToMove}` + spadesCounter).css('opacity', 0)
            spadesCounter--
            $(`#${cardToMove}` + spadesCounter).css('opacity', 1)
            return cardToMove
            break;
        case 1:
            var cardToMove = 'diamonds'
            $(`#${cardToMove}` + diamondsCounter).css('opacity', 0)
            diamondsCounter--
            $(`#${cardToMove}` + diamondsCounter).css('opacity', 1)
            return cardToMove
            break;
        case 2:
            var cardToMove = 'hearts'
            $(`#${cardToMove}` + heartsCounter).css('opacity', 0)
            heartsCounter--
            $(`#${cardToMove}` + heartsCounter).css('opacity', 1)
            return cardToMove
            break;
        case 3:
            var cardToMove = 'clubs'
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




    