const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const loginPage = require('../pageobjects/login.page')
const addCart = require('../pageobjects/addtocart.js')

describe('My Login application', () => {
    it('should not login', async () => {
        await LoginPage.open()

        await LoginPage.login('sstandardhue', 'secret_sauce')
        await expect(loginPage.badlogin).toBeExisting()
    })
})

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(loginPage.pagecheck).toBeExisting()
    })
})

describe('Adding shirt to cart ', () => {
    it('should add shirt to cart', async () => {
        await addCart.open()
        await expect(addCart.btnCheck).toBeExisting()
    })
})