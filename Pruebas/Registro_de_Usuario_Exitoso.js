const { Builder, Key, By, until } = require('selenium-webdriver');


async function Registro_de_Usuario_Exitoso() {

    let Counter = 0;
    const Photo = async() => {
        await driver.takeScreenshot().then(
            function(image, err) {
                Counter = Counter + 1
                require('fs').writeFileSync(`../ScreenShots/Registro_de_Usuario_Exitoso.png`, image, 'base64');
            }
        );
    }

    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:5173/login');
        let signUp = await driver.findElement(By.id('signUp'))
        await signUp.click()

        let Name = await driver.findElement(By.id('newUserName'))
        await Name.sendKeys(`${Math.random()}`)
        let Email = await driver.findElement(By.id('newUserEmail'))
        await Email.sendKeys(`${Math.random()}@gmail.com`);
        let password = await driver.findElement(By.id('newUserPassword'))
        await password.sendKeys('123456', Key.RETURN);
        let register = await driver.findElement(By.id('register-button'))
            // await register.click()
        await driver.sleep(2000)
        let confirmButton = await driver.wait(until.elementsLocated(By.className('swal2-confirm')), 10000)
        Photo()


    } catch (error) {
        console.error('Se produjo un error:', error);
    } finally {
        await driver.quit();
    }
}
Registro_de_Usuario_Exitoso();