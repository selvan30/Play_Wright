const { chromium,test,expect } = require("@playwright/test");
const exp = require("constants");

test('Browser Launch',async()=>{
     const browser = await chromium.launch(
        {
            headless : false,
        }
    );
    const page = await browser.newPage();
    await page.goto("https://dev-ui.ezeecargo.in/");
    const pagetitle = await page.title();
    await expect(page).toHaveTitle(pagetitle)
    console.log(pagetitle);
    const pageurl = await page.url();
    await expect(page).toHaveURL(pageurl);
    console.log(pageurl)

    })