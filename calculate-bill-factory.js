function calculateTotalPhoneBill(billString){

    var theBillTotal = 0;

    var bill = billString.split(',');
    
    
    for(var i = 0; i < bill.length; i++){

        var callSmsBill = bill[i].trim();

        if (callSmsBill === "sms"){

            theBillTotal = theBillTotal += 0.75;

        }else if (callSmsBill === "call"){
            
            theBillTotal = theBillTotal += 2.75;
        }
    } 
        return "R" + theBillTotal;
    
}
