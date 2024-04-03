
describe('Тестирование логина', function () {
    
    it('1. Правильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');                                       // вход на сайт
        cy.get('#loginButton').should('be.disabled');                               // кнопка войти не доступна
        cy.get('#mail').type('german@dolnikov.ru');                                 // ввод правильного логина
        cy.get('#loginButton').should('be.disabled');                               // кнопка войти не доступна
        cy.get('#pass').type('iLoveqastudio1');                                     // ввод правильного пароля
        cy.get('#loginButton').should('be.enabled');                                // кнопка войти доступна
        cy.get('#loginButton').click();                                             // клик по кнопке войти
        cy.get('#messageHeader').should('be.visible');                              // видим текст
        cy.get('#messageHeader').contains('Авторизация прошла успешно');            // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');              // видим крестик
         })

    it('2. Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');                                       // вход на сайт
        cy.get('#forgotEmailButton').click();                                       // клик на забыл пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');                           // ввод почты для восстановления
        cy.get('#restoreEmailButton').click();                                      // клик на отправить код
        cy.get('#messageHeader').should('be.visible');                              // видим текст
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');    // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');              // видим крестик        
        })

    it('3. Правильный логин, НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/');                                       // вход на сайт
        cy.get('#loginButton').should('be.disabled');                               // кнопка войти не доступна
        cy.get('#mail').type('german@dolnikov.ru');                                 // ввод правильного логина
        cy.get('#loginButton').should('be.disabled');                               // кнопка войти не доступна
        cy.get('#pass').type('iLoveqastudio1123');                                  // ввод НЕправильного пароля
        cy.get('#loginButton').should('be.enabled');                                // кнопка войти доступна
        cy.get('#loginButton').click();                                             // клик по кнопке войти
        cy.get('#messageHeader').should('be.visible');                              // видим текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет');          // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');              // видим крестик
        })

    it('4. НЕправильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');                                       // вход на сайт
        cy.get('#loginButton').should('be.disabled');                               // кнопка войти не доступна
        cy.get('#mail').type('test@gmail.com');                                     // вводим НЕправильный логин
        cy.get('#loginButton').should('be.disabled');                               // кнопка войти не доступна
        cy.get('#pass').type('iLoveqastudio1');                                     // ввод правильного пароля
        cy.get('#loginButton').should('be.enabled');                                // кнопка войти доступна
        cy.get('#loginButton').click();                                             // клик по кнопке войти
        cy.get('#messageHeader').should('be.visible');                              // видим текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет');          // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');              // видим крестик
        })

    it('5. Логин без @, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');                                       // вход на сайт
        cy.get('#loginButton').should('be.disabled');                               // кнопка войти не доступна
        cy.get('#mail').type('germandolnikov.ru');                                  // ввод логина без @
        cy.get('#loginButton').should('be.disabled');                               // кнопка войти не доступна
        cy.get('#pass').type('iLoveqastudio1');                                     // ввод правильного пароля
        cy.get('#loginButton').should('be.enabled');                                // кнопка войти доступна
        cy.get('#loginButton').click();                                             // клик по кнопке войти
        cy.get('#messageHeader').should('be.visible');                              // видим текст
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');    // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');              // видим крестик
        })

    it('6. Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');                                       // вход на сайт
        cy.get('#loginButton').should('be.disabled');                               // кнопка войти не доступна
        cy.get('#mail').type('GerMan@Dolnikov.ru');                                 // ввод правильного логина с большими буквами
        cy.get('#loginButton').should('be.disabled');                               // кнопка войти не доступна
        cy.get('#pass').type('iLoveqastudio1');                                     // ввод правильного пароля
        cy.get('#loginButton').should('be.enabled');                                // кнопка войти доступна
        cy.get('#loginButton').click();                                             // клик по кнопке войти
        cy.get('#messageHeader').should('be.visible');                              // видим текст
        cy.get('#messageHeader').contains('Авторизация прошла успешно');            // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');              // видим крестик
        })
})
