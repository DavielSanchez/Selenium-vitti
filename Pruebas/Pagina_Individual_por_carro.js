const { Builder, By, Key, until } = require('selenium-webdriver');


async function Pagina_Individual_por_carro() {

    let Counter = 0;
    const Photo = async() => {
        await driver.takeScreenshot().then(
            function(image, err) {
                Counter = Counter + 1
                require('fs').writeFileSync(`../ScreenShots/Pagina_Individual_por_carro.png`, image, 'base64');
            }
        );
    }

    let driver = await new Builder().forBrowser('chrome').build();


    try {
        await driver.get('http://localhost:5173/admin');
        await driver.manage().window().maximize()
        let Email = await driver.findElement(By.id('loginEmail'))
        await Email.sendKeys('admin@gmail.com');
        let password = await driver.findElement(By.id('loginPassword'))
        await password.sendKeys('123456', Key.RETURN);
        let signIn = await driver.findElement(By.id('submit-button'))
        await signIn.click()
        let confirmButton = await driver.wait(until.elementsLocated(By.className('swal2-confirm')), 10000)
        await driver.sleep(4000)
        await driver.wait(until.elementsLocated(By.id('add_populares_button')), 10000)
        let add_populares_button = await driver.findElement(By.id('add_populares_button'))
        await add_populares_button.click()
        await driver.wait(until.elementsLocated(By.id('3')), 10000)
        let Car = await driver.findElement(By.id('3'))
        await Car.click()
        await driver.wait(until.elementsLocated(By.id('reload')), 10000)
        let reload = await driver.findElement(By.id('reload'))
        await reload.click()
        await driver.wait(until.elementsLocated(By.id('avanzar')), 10000)
        let avanzar = await driver.findElement(By.id('avanzar'))
        await avanzar.click()

        await driver.sleep(2000)
        Photo()

    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
}
Pagina_Individual_por_carro();