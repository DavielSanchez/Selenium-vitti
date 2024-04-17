const { Builder, By, Key, until } = require('selenium-webdriver');


async function Eliminar_una_Novedad() {

    let Counter = 0;
    const Photo = async() => {
        await driver.takeScreenshot().then(
            function(image, err) {
                Counter = Counter + 1
                require('fs').writeFileSync(`../ScreenShots/Eliminar_una_Novedad.png`, image, 'base64');
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

        await driver.wait(until.elementsLocated(By.id('add_novedades_button')), 10000)
        let add_novedades_button = await driver.findElement(By.id('add_novedades_button'))
        await add_novedades_button.click()
        await driver.sleep(2000)

        await driver.wait(until.elementsLocated(By.id('toDelete')), 10000)
        let toDelete = await driver.findElement(By.id('toDelete'))
        await toDelete.click()
        await driver.sleep(1000)
        Photo()

    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
}
Eliminar_una_Novedad();