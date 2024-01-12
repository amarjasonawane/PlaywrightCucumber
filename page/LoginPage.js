const {test, expect} = require('@playwright/test');
const path = require('path');
require('dotenv').config({
    path:path.join(__dirname,'../.env')

})

class LoginPage{
    async navigate(){
        await global.page.goto(process.env.WEB_URL);
    }
    async enterUserName(){
        await global.page.locator('id=username').fill(process.env.WEB_USERNAME);
    }
    async enterPassword(){
        await global.page.locator('id=password').fill(process.env.WEB_PASSWORD);
    }
    async clickOnLoginButton(){
        await global.page.locator('//input[@name="login"]').click();
    }
    async verifyTitle(){
        await expect(global.page).toHaveTitle('Adactin.com - Search Hotel');
    }
}

module.exports={LoginPage}