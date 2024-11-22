import{chromium,test} from '@playwright/test';

test('Locators',async()=>{
const  browser = await chromium.launch({
    headless : false,
});
const page1 = await browser.newPage();
    await page1.goto("https://dev-ui.ezeecargo.in/");
    await Promise.all([
    page1.waitForNavigation(),
    page1.locator("//a[@href='login']").click(),
]);
    const code = page1.locator('input#opcode');
    await code.fill('rmtcargo');
    const button1 = page1.locator('button#btn-signin');
    await button1.click();
    // await page1.waitForSelector('desired_selector_after_login');
    const username =  page1.locator("input#l_email");
    await username.fill("selvan");
    const password1= await page1.waitForSelector("input#l_password",{timeout : 60000})
    // const password =  page1.locator("l_password"); 
    await password1.fill("selvan");
    const button2 =  await page1.locator("button#btn-login");
    await button2.click();
    // await page1.waitForSelector('desired_selector_after_login');
    await browser.close();

})
