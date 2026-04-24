const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const guesses = document.querySelector(".guesses");
const restartBtn = document.querySelector(".restartBtn");


let answer = Math.floor( Math.random()*100 )+1 ;
console.log("隨機數字是否會介於1~100：", answer) ;

let countNum =0;   //廣域變數
function checkGuess() {
    countNum++;
    count.textContent = "猜測次數："+countNum;
    //guessField.focus();       //游標焦點預設在輸入欄位裡
    const userGuess = Number(guessField.value);  //取得欄位值，並轉為數字
    if  (  answer === userGuess ) {
        result.textContent = "猜測結果：Congratulations!" ;
        setGameOver();
    }
    else if ( answer  > userGuess ) {
        result.textContent = "猜測結果：數字太小!" ;
    }
    else if ( answer  <  userGuess ) {
        result.textContent = "猜測結果：數字太大!";
    }
    guesses.textContent += userGuess + " ";  

}

function setGameOver() {
        guessField.disabled = true; //停止輸入功能
        guessSubmit.disabled = true;    //停止按鈕功能
        result.textContent += "遊戲結束";
        result.style.backgroundColor="red";
        alert("遊戲結束");
}

function initGame() {
    // 1. 重設計數器
    countNum = 0;
    count.textContent = "猜測次數：0";

    // 2. 重新產生 1~100 的隨機數字
    answer = Math.floor(Math.random() * 100) + 1;
    console.log("新遊戲的隨機數字：", answer);

    // 3. 清除所有顯示文字
    result.textContent = "猜測結果：";
    guesses.textContent = "";

    // 4. 恢復樣式 (如果之前變紅色的話)
    result.style.backgroundColor = "";

    // 5. 啟用輸入欄位與按鈕，並清空輸入框
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";

    // 6. 讓游標自動回到輸入框，方便玩家直接輸入
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);   //當按鈕被點擊，執行函式
restartBtn.addEventListener("click", initGame);


