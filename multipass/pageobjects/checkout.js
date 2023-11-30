const { $ } = require('@wdio/globals')

class checkout {

    get btnSubmit2 () {
        return $('.shopping_cart_link');
    }

    get btnSubmit3 () {
        return $('[data-test="checkout"]');
    }

    get butcheck2(){
        return $('#postal-code')
    }
    
    open () {
        return super.open();
    }
}
module.exports = new checkout();