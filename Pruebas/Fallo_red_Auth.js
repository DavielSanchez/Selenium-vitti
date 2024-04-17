const { Builder, By, Key, until } = require('selenium-webdriver');


async function Fallo_red_Auth() {

    let Counter = 0;
    const Photo = async() => {
        await driver.takeScreenshot().then(
            function(image, err) {
                Counter = Counter + 1
                require('fs').writeFileSync(`../ScreenShots/Fallo_red_Auth.png`, image, 'base64');
            }
        );
    }

    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:5173/login');
        let Email = await driver.findElement(By.id('loginEmail'))
        await Email.sendKeys('admin@gmail.com');
        let password = await driver.findElement(By.id('loginPassword'))
        await password.sendKeys('123456', Key.RETURN);
        let signIn = await driver.findElement(By.id('submit-button'))
        await signIn.click()

        await driver.sleep(1000)
        Photo()

    } catch (error) {
        console.error('Se produjo un error:', error);
    } finally {
        await driver.quit();
    }
}
Fallo_red_Auth();