window.addEventListener("load", function(event) {

        /* Challenge 1 :your age in days */
        function ageInDays() {
            var birtYear = prompt('What Year You Born...');
            let currentYear = new Date().getFullYear();
            var ageInDayss = (currentYear - birtYear) * 365;
            var h1 = document.createElement("h1");
            var textAnswer = document.createTextNode(`You are ${ageInDayss} Days Old `);
            h1.setAttribute('id', 'ageInDays');
            h1.appendChild(textAnswer);
            document.getElementById("flex-box-result").appendChild(h1);
        };

        function removefunction() {
            document.getElementById('ageInDays').remove();
        };
        var btnClickmeId = document.getElementById("clickme");
        btnClickmeId.addEventListener("click", ageInDays);
        var resetbutonId = document.getElementById("reset");
        resetbutonId.addEventListener("click", removefunction);
    })
    /*  Challange 2: Cat Generator  */

function catgen() {
    var img = document.createElement("img");
    var div = document.getElementById("CatGenTargetDiv");
    img.src = "./img/tenor.gif";
    div.appendChild(img);

}
// window.addEventListener("load", function(event) {

/*  Challange 3:  Rock,Paper,Scissors */
function RockPaperScissor(yourChoice) {
    var HumanChoice;
    var BotChoice;
    HumanChoice = yourChoice.id;
    BotChoice = numberToChoice(rendToRpsInt());
    result = decideWinner(HumanChoice, BotChoice) /* [0,1]  it mens Human lost*/
    Message = finalMessage(result) //you won
    rpsFrontEnd(yourChoice.id, BotChoice, Message);
    // console.log(HumanChoice);
    // console.log(BotChoice);
    // console.log(result);
    // console.log(Message);

};


function rendToRpsInt() {

    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDataBase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    }
    var yourScore = rpsDataBase[yourChoice][computerChoice];
    var computerScore = rpsDataBase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage(yourScore, computerScore) {
    if (yourScore[0] === 0) {
        return { 'Message': 'You Lose', 'color': 'red' };

    } else if (yourScore[0] === 0.5) {
        return { 'Message': 'You Tied', 'color': 'yellow' };
    } else {
        return { 'Message': 'You Won', 'color': 'green' };
    }
}

function rpsFrontEnd(HumanImageChoice, BotImageChoice, finalMessage) {
    var ImagesDataBase = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src

        }
        /* remove all imagess */
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var HumanDiv = document.createElement("div");
    var BotDiv = document.createElement("div");
    var messageDiv = document.createElement("div");
    HumanDiv.innerHTML = "<img src='" + ImagesDataBase[HumanImageChoice] + "'height=150 width=150 style='box-shadow: 3px 3px 20px 3px #1c5ca0'>"
    BotDiv.innerHTML = "<img src='" + ImagesDataBase[BotImageChoice] + "'height=150 width=150 style='box-shadow: 3px 3px 20px 3px red'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + ";font-size: 86px;font-family: system-ui;'>" + finalMessage['Message'];
    "</h1>";
    document.getElementById('flex-box-rps-div').appendChild(BotDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(HumanDiv);
}
/* Challange 4: Change the color of all buttons  */
window.addEventListener("load", function(event) {
    window.all_buttons = document.getElementsByTagName('button');
    // console.log(all_buttons);
    // console.log(all_buttons.length);
    window.copyAllButton = [];
    for (let i = 0; i < (all_buttons.length); i++) {
        copyAllButton.push(all_buttons[i].classList[1]);
    }
})

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonRed();
    } else if (buttonThingy.value === 'green') {
        buttonGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonReset();
    } else if (buttonThingy.value === 'random') {
        randomColor();
    }
};

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
};

function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
};

function buttonReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButton[i]);

    }
}

function randomColor() {
    var Choice = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(Choice[Math.floor(Math.random() * 4)]);
    }
}

/* Challange 5: Blackjack */
addEventListener('load', function(event) {
    let BlackJackGame = {
        'you': { 'scoreSpan': '#yourBlackJackResult', 'div': '#your-box', 'score': 0 },
        'dealer': { 'scoreSpan': '#dealerBlackJackResult', 'div': '#dealer-box', 'score': 0 },
        'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'],
        'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q': 10, 'J': 10, 'A': [1, 11] },
        'wins': 0,
        'losses': 0,
        'draw': 0,
        'isStand': false,
        'turnsOver': false,


    }
    const YOU = BlackJackGame['you'];
    const DEALER = BlackJackGame['dealer'];
    const hitSound = new Audio('./BlackJack/sounds/swish.m4a');
    const WinSound = new Audio('./BlackJack/sounds/cash.mp3');
    const LostSound = new Audio('./BlackJack/sounds/aww.mp3');

    function blackjackhit() {
        if (BlackJackGame['isStand'] === false) {

            var card = randomCard();
            showCard(card, YOU);
            // showCard(card, DEALER);
            updateScore(card, YOU);
            showScore(YOU);
            // console.log(YOU['score']);

        }
    }

    function randomCard() {
        let randomIndex = Math.floor(Math.random() * 13);
        return BlackJackGame['cards'][randomIndex];
    }

    function showCard(card, activePlayer) {
        if (activePlayer['score'] <= 21) {
            let cardImage = document.createElement('img');
            cardImage.src = `./BlackJack/images/${card}.png`;

            document.querySelector(activePlayer['div']).appendChild(cardImage);
            hitSound.play();
        }
    }

    function blackjackDeal() {
        // let winner = computeWinner();
        // showWinner(winner);
        // // showWinner(computeWinner());
        if (BlackJackGame['turnsOver'] === true) {
            BlackJackGame['isStand'] = false;
            let yourImage = document.querySelector("div#your-box").querySelectorAll('img');
            let dealerImage = document.querySelector("div#dealer-box").querySelectorAll('img');
            for (let i = 0; i < yourImage.length; i++) {
                yourImage[i].remove();
            }
            for (let i = 0; i < dealerImage.length; i++) {
                dealerImage[i].remove();
            }
            YOU['score'] = 0;
            DEALER['score'] = 0;
            document.querySelector('#yourBlackJackResult').textContent = 0;
            document.querySelector('#yourBlackJackResult').style.color = 'white';
            document.querySelector('#dealerBlackJackResult').textContent = 0;
            document.querySelector('#dealerBlackJackResult').style.color = 'white';
            document.querySelector('#BlackJackResult').textContent = "Let's Play";
            document.querySelector('#BlackJackResult').style.color = "black";
            BlackJackGame['turnsOver'] = true;
        }
    }

    function updateScore(card, activePlayer) {
        /* if addning 11 keeps me below 21 add 11 otherwise add */
        if (card === 'A') {
            if (activePlayer['score'] += BlackJackGame['cardsMap'][card][1] <= 21) {
                activePlayer['score'] += BlackJackGame['cardsMap'][card][1];
            } else {
                activePlayer['score'] += BlackJackGame['cardsMap'][card][0];
            }
        } else {
            activePlayer['score'] += BlackJackGame['cardsMap'][card];
        }
        // activePlayer['score'] += BlackJackGame['cardsMap'][card];
    }

    function showScore(activePlayer) {
        if (activePlayer['score'] > 21) {
            document.querySelector(activePlayer['scoreSpan']).textContent = "BUST !";
            document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
        } else {

            document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function dealerLogic() {

        BlackJackGame['isStand'] = true;
        while (DEALER['score'] < 16 && BlackJackGame['isStand'] === true) {
            let card = randomCard();
            showCard(card, DEALER);
            updateScore(card, DEALER);
            showScore(DEALER);
            await sleep(1000);
        }


        BlackJackGame['turnsOver'] = true;
        let winner = computeWinner();
        showWinner(winner);


    }


    /* compute winner and  return who just won  */
    /* update the win losses or draw  */
    function computeWinner() {
        let winner;
        if (YOU['score'] <= 21) {
            /* condition: higher score then dealer or when busts but you re  */
            if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
                BlackJackGame['wins']++;
                winner = YOU;
            } else if (YOU['score'] < DEALER['score']) {
                BlackJackGame['losses']++;
                winner = DEALER;
            } else if (YOU['score'] === DEALER['score']) {
                BlackJackGame['draw']++;
            }
            /* condition when user bust but Dealer not */
        } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
            BlackJackGame['wins']++;
            winner = DEALER;
            /* condition: both are bust */
        } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
            BlackJackGame['draw']++;
        }


        return winner;
    }

    function showWinner(winner) {
        let message, messageColor;
        if (BlackJackGame['turnsOver'] === true) {
            if (winner === YOU) {
                document.getElementById('wins').textContent = BlackJackGame['wins'];
                message = 'You Won !';
                messageColor = 'green';
                WinSound.play();
            } else if (winner === DEALER) {
                document.getElementById('losses').textContent = BlackJackGame['losses'];
                message = 'You Loss !';
                messageColor = 'red';
                LostSound.play();
            } else {
                document.getElementById('draws').textContent = BlackJackGame['draw'];
                message = 'You draw';
                messageColor = 'black';
            }
            document.querySelector('#BlackJackResult').textContent = message;
            document.querySelector('#BlackJackResult').style.color = messageColor;

        }
    }
    document.getElementById('Blackjack-hit-button').addEventListener('click', blackjackhit);
    document.getElementById('Blackjack-deal-button').addEventListener('click', blackjackDeal);
    document.getElementById('Blackjack-stand-button').addEventListener('click', dealerLogic);
})