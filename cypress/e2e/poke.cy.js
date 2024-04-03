
describe('Тестирование главной гугла', function () {
   it('Проверка, что при поиске VK в выдаче есть сайт ВК', function () {
        cy.visit('https://google.com');
        cy.get("input[type='text']").type('VK').type('{enter}');
        cy.contains('https://www.vk.com');
    })
})
