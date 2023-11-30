const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const loginPage = require('../pageobjects/login.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(loginPage.pagecheck).toBeExisting()
    })
})
describe('My Login application', () => {
    it('should not login', async () => {
        await LoginPage.open()

        await LoginPage.login('sstandardhue', 'secret_sauce')
        await expect(loginPage.badlogin).toBeExisting()
    })
})