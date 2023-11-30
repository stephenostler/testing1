const { $ } = require('@wdio/globals')

class addCart  {
   
    get btnSubmit () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    async click () {
        await this.btnSubmit.click();
    }

    get btnCheck(){
        return $('#remove-sauce-labs-bolt-t-shirt')
    }
    open () {
        return super.open();
    }
}

module.exports = new addCart();
