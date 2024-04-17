const { Builder, By, Key, until } = require('selenium-webdriver');


async function Cerrar_Session() {

    let Counter = 0;
    const Photo = async() => {
        await driver.takeScreenshot().then(
            function(image, err) {
                Counter = Counter + 1
                require('fs').writeFileSync(`../ScreenShots/Cerrar_Session.png`, image, 'base64');
            }
        );
    }

    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:5173/login');
        await driver.manage().window().fullscreen()
        let Email = await driver.findElement(By.id('loginEmail'))
        await Email.sendKeys('test@gmail.com');
        let password = await driver.findElement(By.id('loginPassword'))
        await password.sendKeys('123456', Key.RETURN);
        let signIn = await driver.findElement(By.id('submit-button'))
        await signIn.click()
        let confirmButton = await driver.wait(until.elementsLocated(By.className('swal2-confirm')), 10000)
        await driver.wait(until.elementsLocated(By.id('salir')))
        let salir = await driver.findElement(By.id('salir'))
        await salir.click()

        await driver.sleep(2500)
        Photo()

    } catch (error) {
        console.error('Se produjo un error:', error);
    } finally {
        await driver.quit();
    }
}
Cerrar_Session();