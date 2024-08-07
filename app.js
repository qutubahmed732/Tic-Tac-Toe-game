console.log(`Welcome To Tic Tac Toe`);

let turn = "x";
let gameover = false


// function to change the turn
const changeTurn = () => {
    return turn === "x" ? "0" : "x"
}


// function to check for a win

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 3, 5, 0],
        [3, 4, 5, 3, 15, 0],
        [6, 7, 8, 3, 25, 0],
        [0, 3, 6, -7, 15, 90],
        [1, 4, 7, 3, 15, 90],
        [2, 5, 8, 13, 15, 90],
        [0, 4, 8, 4, 15, 44],
        [2, 4, 6, 4, 15, 134],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.line').style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
            gameover = true;
        }
    })
}

//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }

        }
    })
})


//  Add on listner to reset button
reset.addEventListener('click', () => {
    // let boxtext = document.getElementsByClassName('boxtext')
    // Array.from(boxtext).forEach(element => {
    //     element.innerText = ""
    // })
    // turn = "x";
    // gameover = false;
    // document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
    location.reload();
})