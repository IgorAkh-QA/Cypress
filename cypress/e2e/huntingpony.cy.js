
describe('Пользовательский путь HuntingPony', function () {
    it('Главная страница---Оформление', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[data-index="5"] > .header__collections-controls > .header__collections-link').should('be.visible').click();
         cy.get('.page-headding').contains('Аксессуары');
         cy.scrollTo(0, 1100);
         cy.get('[data-product-id="341567264"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.get('.widget-type_widget_v4_product_6_be1f05c476e426acbde77e7eaba79a87 > .layout__content').contains('В корзину');
         cy.wait(1000);
         cy.get('.add-cart-counter__btn').should('be.visible').click();
         cy.wait(2000);
         cy.get('.micro-alert-item').contains('Товар добавлен в корзину');
         cy.get('.header__cart').click();
         cy.get('main > .layout > .layout__content').contains('Корзина');
         cy.get('main > .layout > .layout__content').contains('Сумочка');
         cy.get('.cart-controls > .button').should('be.visible').and('be.enabled').click();


     })
 })
 