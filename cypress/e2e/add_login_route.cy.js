describe('add login route test', () => {
  it('should add login route successful', () => {
    cy.visit('http://localhost:8002/default/routes')
    cy.contains(' New route').click()
    cy.contains('Create Route').should('be.visible')
    cy.get('[placeholder="Enter a unique name"]').clear().type('test')
    cy.get('[placeholder="Select a service"]').click().select('login_service')
    cy.get('[placeholder="Enter a path"]').type('test1')
    cy.contains('Save').click()
    cy.contains('schema violation (paths.1: should start with: / (fixed path) or ~/ (regex path))').should('be.visible')
    cy.get('[placeholder="Enter a path"]').clear().type('/test')
    cy.contains('Save').click()
    cy.contains('Route "test" successfully created!').should('be.visible')
  })
})

describe('input repeated route name', () => {
  it('should delete service successful', () => {
   
  })
})

describe('delete created services', () => {
  it('should delete service successful', () => {
   
  })
})

describe('add service with no service name', () => {
  it('should add login service successful', () => {
   
  })
})

// describe('delete created services', () => {
//   it('should delete service successful', () => {
//     cy.visit('http://localhost:8002/default/services')
//     cy.contains(" New gateway service").click()
//     cy.get('[placeholder="Enter a URL"]').clear().type('http://localhost:8002/login')
//     cy.contains('Save').click()
//     cy.contains('/Gateway Service "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}" successfully created!/').should('be.visible')
//     cy.contains('login_service').should('be.visible')
//   })
// })