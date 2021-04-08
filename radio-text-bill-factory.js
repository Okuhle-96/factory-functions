
function totalBill(){

    // get the text from the textarea in the DOM
    
    var theBillTotal = 0;
    var theSmsTotal = 0;
    var theCallTotal = 0;

    function getCallCost(){
        return theCallTotal;
    }

    function getSmsCost(){
        return theSmsTotal;
    }


    function getBillString(bill){

        var billString = bill.trim();

        if (billString === "sms"){
            theSmsTotal = theSmsTotal += 0.75;
            theBillTotal += 0.75;
            
        }else if(billString === "call"){
            theCallTotal = theCallTotal += 2.75;
            theBillTotal += 2.75;
          
        }
        console.log(theCallTotal);

    }



    // call the function that calculate the total

    function getBillTotal(){

        // theBillTotal = theCallTotal + theSmsTotal;
        // theBillTotal.toFixed(2);
        return theBillTotal;
        
        
    }

    // display the totals

    return {
       getBillString,
       getBillTotal,

       getCallCost,
       getSmsCost
    }


}




        
    


