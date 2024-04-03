
describe('Покупка нового фото для тренера', function () {
    
    it('е2е покупка фото тренера', function () {
        cy.visit('https://pokemonbattle.me/login');                                                  // вход на сайт
        cy.get(':nth-child(1) > .auth__input').type('kluge@bk.ru');                                  // ввод логина
        cy.get('#password').type('Qwerty12');                                                        // ввод пароля
        cy.get('.auth__button').click();                                                             // клик войти
        cy.get('.header__btns > [href="/shop"]').click();                                            // клик магазин
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();    // клик на не купленное фото
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('0000000000000000');    // ввод номера карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1230');                                   // ввод срока действия
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                  // ввод cvc
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('QWERTY ASDFG');                 // ввод фи
        cy.get('.pay-btn').click();                                                                  // клик оплатить
        cy.get('#cardnumber').type('56456');                                                         // ввод смс
        cy.get('.payment__submit-button').click();                                                   // клик оплатить
        cy.get('.payment__font-for-success').should('be.visible');                                   // окно успеха видим
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');                     // сообщение об успехе есть
        cy.get('.payment__adv').click();                                                             // клик в магазин
         })
})
