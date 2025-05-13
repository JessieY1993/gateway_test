// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//command: input
Cypress.Commands.add('typeTextForInput', (textSelector, inputSelector, handleText) => {
    cy.get(textSelector).invoke('text').then((text) => {
        let typeText = handleText(text)
        cy.get(inputSelector).type(typeText);
    });
});

//command: button
Cypress.Commands.add('clickButton', (buttonSelector) => {
    cy.get(buttonSelector)
      .should('be.visible')
      .click()

});

//command: have text
Cypress.Commands.add('haveText', (textSelector, expectText) => {
    cy.get(textSelector).should('have.text', expectText)
});

//command: contain text 
Cypress.Commands.add('matchText', (textSelector, regx) => {
    cy.get(textSelector).should('match', regx)
});

//command: random
Cypress.Commands.add('generateRandom', (length = 8, type = 'alphanumeric') => {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    
    let pool = '';
    if (type === 'alphabetic') pool = alphabets;
    else if (type === 'numeric') pool = numbers;
    else pool = alphabets + alphabets.toUpperCase() + numbers;
  
    return Array.from({ length }, () => 
      pool[Math.floor(Math.random() * pool.length)]
    ).join('');
  });

//command: element exist
Cypress.Commands.add('skipIfNotExists', (selector) => {
    cy.get('body').then(($body) => {
      if ($body.find(selector).length === 0) {
        Cypress.runner.stop(); // 停止当前测试用例
      }
      return cy.get(selector);
    });
  });
