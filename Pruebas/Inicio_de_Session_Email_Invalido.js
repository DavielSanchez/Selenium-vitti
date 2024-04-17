const { Builder, By, Key, until } = require('selenium-webdriver');


async function Inicio_de_Session_Email_Invalido() {

    let Counter = 0;
    const Photo = async() => {
        await driver.takeScreenshot().then(
            function(image, err) {
                Counter = Counter + 1
                require('fs').writeFileSync(`../ScreenShots/Inicio_de_Session_Email_Invalido.png`, image, 'base64');
            }
        );
    }

    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:5173/login');
        let Email = await driver.findElement(By.id('loginEmail'))
        await Email.sendKeys('admin.com');
        let password = await driver.findElement(By.id('loginPassword'))
        await password.sendKeys('1234567', Key.RETURN);
        let signIn = await driver.findElement(By.id('submit-button'))
        await signIn.click()
        await driver.sleep(2000)
        Photo()

    } catch (error) {
        console.error('Se produjo un error:', error);
    } finally {
        await driver.quit();
    }
}
Inicio_de_Session_Email_Invalido();