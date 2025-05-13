import BasePage from '../base_page';
export default class ServiceHomePage extends BasePage {

  constructor(url) {
    super(url)

    this.elements = {
      button: {
        newServiceEmpty: '[data-testid="empty-state-action"]',
        newServiceInList: '[data-testid="toolbar-add-gateway-service"]',
      },
      list: {
        tdActions: 'table tbody tr td:last-child',
        actionBtn: '[data-testid="row-actions-dropdown-trigger"]',
        actionDelete: '[data-testid="action-entity-delete"]'
      },
      dialog: {
        deleteConfirmText: '.confirmation-text',
        confirmInput: '[data-testid="confirmation-input"]',
        confirmBtn: '[data-testid="modal-action-button"]'
      }
    } 
  }

  deleteAllService() {

    cy.skipIfNotExists(this.elements.list.tdActions)
      .should('exist')
      .find(this.elements.list.actionBtn).each(($btn) => {
        cy.wrap($btn)
          .scrollIntoView()
          .should('be.visible')
          .click();
  
        cy.clickButton(this.elements.list.actionDelete)
        
        cy.typeTextForInput(this.elements.dialog.deleteConfirmText, this.elements.dialog.confirmInput, (text) => text.slice(1, -1))
  
        cy.clickButton(this.elements.dialog.confirmBtn)
      });
  }
}