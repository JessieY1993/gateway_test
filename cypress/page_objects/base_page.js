export default class BasePage {
    constructor(url) {
      this.url = url
    }

    visit() {
      cy.visit(this.url)
    }

    //Put common methods 
  }