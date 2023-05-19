describe('Авторизация', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.visible').click();
        cy.get('#message').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
        cy.reload(true)
         });
         it('Верный логин, верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').should('be.visible').click();
            cy.get('#forgotForm').contains('Восстановите пароль');
            cy.get('#mailForgot').type('New@mail.com');
            cy.get('#restoreEmailButton').should('be.visible').and('be.enabled').click();
            cy.get('#message').contains('Успешно отправили пароль на e-mail');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
            cy.reload(true)
         });
         it('Верный логин, НЕверный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('111111111');
            cy.get('#loginButton').should('be.visible').and('be.enabled').click();
            cy.get('#message').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
            cy.reload(true)
             });
        it('Неверный логин, верный пароль', function () {
            cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('11111@mail.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').should('be.visible').and('be.enabled').click();
                cy.get('#message').contains('Такого логина или пароля нет');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
                cy.reload(true)
        });
        it('Ошибка валидации имейл', function () {
            cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('germandolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').should('be.visible').and('be.enabled').click();
                cy.get('#message').contains('Нужно исправить проблему валидации');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
                cy.reload(true)
        });
        it('Приведение логина к строчным', function () {
            cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.visible').click();
        cy.get('#message').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').click();
        })

})
