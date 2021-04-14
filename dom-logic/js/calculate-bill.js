
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");
var billStringElement = document.querySelector(".billString");

function totalPhoneBill() {

    var totalBill = calculateTotalPhoneBill(billStringElement.value)

    billTotalElement.innerHTML = totalBill.toFixed(2);

    if (totalBill >= 20 && totalBill < 30) {
        document.querySelector(".total").classList.add("warning");
        }else if (totalBill >= 30) {
            document.querySelector(".total").classList.remove("warning");
            document.querySelector(".total").classList.add("danger");
        }if(totalBill < 20){
          document.querySelector(".total").classList.remove("warning");
            document.querySelector(".total").classList.remove("danger");    
        }else if(totalBill < 30){
          document.querySelector(".total").classList.add("warning");
            document.querySelector(".total").classList.remove("danger");    
        }
}
calculateBtnElement.addEventListener('click', totalPhoneBill);
