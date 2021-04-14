describe('The Calculate Bill Function', function(){
    it('should return total amount for 4 calls made', function(){
      assert.equal(calculateTotalPhoneBill("call, call, call, call"), 11.00); 
    });

    it('should return total amount for 4 smses sent', function(){
      assert.equal(calculateTotalPhoneBill("sms, sms, sms, sms"), 3.00); 
    });

    it('should return total amount for 6 calls made and 6 smses sent', function(){
      assert.equal(calculateTotalPhoneBill("sms, call, sms, call, sms, call, sms, call,sms, call, sms, call"), 21.00); 
    });

    it('should return 0 if there are no calls or smses made', function(){
      assert.equal(calculateTotalPhoneBill(""), 0.00); 
    });


})