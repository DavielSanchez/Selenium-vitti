const { Builder, By, Key, until } = require('selenium-webdriver');


async function Ver_Contactos() {

    let Counter = 0;
    const Photo = async() => {
        await driver.takeScreenshot().then(
            function(image, err) {
                Counter = Counter + 1
                require('fs').writeFileSync(`../ScreenShots/Ver_Contactos.png`, image, 'base64');
            }
        );
    }

    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:5173/');
        await driver.wait(until.elementsLocated(By.id('contactus')))
        let contactus = await driver.findElement(By.id('contactus'))
        await contactus.click()
        await driver.sleep(2000)
        Photo()

    } catch (error) {
        console.error('Se produjo un error:', error);
    } finally {
        await driver.quit();
    }
}
Ver_Contactos();