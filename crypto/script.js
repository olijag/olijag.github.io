// ================== CONSTANTS, VARIBALES, LETS ================== 
const TOTAL_EQUITY = document.getElementById("TOTAL_EQUITY");
const CURRENCY = "USD";
const SHOW_USER_LEVEL = document.getElementById("SHOW-USER-LEVEL");

// =======  WALLET BALANCE =======

let wallet_balance = 100;

// ======= LEVEL =======

let user_exp = 100; 
let user_level = user_exp / 100; 



// ==================   ==================

function show_wallet_balance(){
    wallet_balance.toFixed(2);
    TOTAL_EQUITY.innerText =  wallet_balance.toLocaleString('en-US', {style: 'currency', currency: 'USD'}) + " " + CURRENCY;
}

show_wallet_balance();


function show_user_level(){
    SHOW_USER_LEVEL.innerText = user_level;
}

show_user_level();





