const { expect } = require('@wdio/globals')
const addCart = require('../pageobjects/addtocart.js')


describe('Adding shirt to cart ', () => {
    it('should add shirt to cart', async () => {
        await addCart.open()
        await expect(addCart.btnCheck).toBeExisting()
    })
})