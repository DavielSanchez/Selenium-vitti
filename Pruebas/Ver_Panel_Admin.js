const { Builder, By, Key, until } = require('selenium-webdriver');


async function Ver_Panel_Admin() {

    let Counter = 0;
    const Photo = async() => {
        await driver.takeScreenshot().then(
            function(image, err) {
                Counter = Counter + 1
                require('fs').writeFileSync(`../ScreenShots/Ver_Panel_Admin.png`, image, 'base64');
            }
        );
    }

    let driver = await new Builder().forBrowser('chrome').build();


    try {
        await driver.get('http://localhost:5173/panel_admin');
        await driver.manage().window().maximize()

        await driver.sleep(2000)
        Photo()

    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
}
Ver_Panel_Admin();