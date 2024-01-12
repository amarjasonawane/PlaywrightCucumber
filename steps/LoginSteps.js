const {When, Then} = require('@cucumber/cucumber');
const {LoginPage} = require('../page/LoginPage');
let lp = new LoginPage();

When('User is on Login Page', async()=>{
    await lp.navigate();
})

When('User enters username',async()=>{
    await lp.enterUserName();
})

When('User enters password',async()=>{
    await lp.enterPassword();
})

When('User clicks on login button',async()=>{
    await lp.clickOnLoginButton();
})

Then('User verifies Title',async()=>{
    await lp.verifyTitle();
})