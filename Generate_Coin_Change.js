// Generate Coin ChangeImplement ​generateCoinChange(cents)​ that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins. Console.log the result.40

function ChangeImplement(cents){
    const roundNum = num => Math.round(100*num)/100
    const remainNum = (remainder,coinNames,coinNum) =>
    {
        if (remainder % coinNum == 0){
            var coin = remainder / coinNum;
            console.log(coin, coinNames)
            remainder = 0
            return remainder;
        }
        else {
            var coins = Math.floor(remainder / coinNum)
            console.log(coins, coinNames)
            
            // remainder after coins
            remainder = roundNum(remainder - (coins * coinNum))
            if (remainder){
                // console.log("remainder is",remainder);
                return remainder;
            }
            else{
                return 0;
            }
        }
    }

    coins = [
        {coin:"quarter(s)", amount:0.25},
        {coin:"dime(s)", amount:0.10},
        {coin:"nickel(s)", amount:0.05},
        {coin:"penny(ies)", amount:0.01}
    ]
    var remainder = cents

    for(var i = 0; i < coins.length; i++){

        if(remainder > 0){
            // console.log(coins[i].coin, coins[i].amount)
            remainder = remainNum(remainder,coins[i].coin,coins[i].amount)
        }
        else if(remainder == 0){
            return "done"
        }
        else{
            return "done"
        }
    }    
}

ChangeImplement(0.91);
ChangeImplement(5.2)