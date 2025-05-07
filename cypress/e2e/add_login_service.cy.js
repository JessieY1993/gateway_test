describe('add login service test', () => {
  it('should add login service successful', () => {
    cy.visit('http://localhost:8002/default/services')
    cy.contains(" New gateway service").click()
    cy.get('[placeholder="Enter a unique name"]').clear().type('login service')
    cy.contains('The name can be any string containing characters, letters, numbers, or the following characters: ., -, _, or ~. Do not use spaces.').should('be.visible')
    cy.get('[placeholder="Enter a unique name"]').clear().type('login_service')
    // cy.get('[placeholder="Enter a list of tags separated by comma"]').type('test;123,test1')
    cy.get('[placeholder="Enter a URL"]').type('test')
    cy.contains('Save').click()
    cy.contains("Failed to construct 'URL': Invalid URL").should('be.visible')
    cy.get('[placeholder="Enter a URL"]').clear().type('test:33')
    cy.contains('Save').click()
    cy.contains('3 schema violations (host: required field missing; path: should start with: /; protocol: expected one of: grpc, grpcs, http, https, tcp, tls, tls_passthrough, udp, ws, wss)').should('be.visible')
    cy.get('[placeholder="Enter a URL"]').clear().type('http://localhost:8002/login')
    cy.contains('Save').click()
    cy.contains('Gateway Service "login_service" successfully created!').should('be.visible')
    cy.contains('login_service').should('be.visible')
    cy.contains('http://localhost:8002/login').should('be.visible')
    cy.contains('Back').click()
    cy.get('b[text()="login_service"]').should('be.visible')
  })
})

describe('delete created services', () => {
  it('should delete service successful', () => {
    cy.visit('http://localhost:8002/default/services')
    cy.contains(" New gateway service").click()
    cy.get('[placeholder="Enter a URL"]').clear().type('http://localhost:8002/login')
    cy.contains('Save').click()
    cy.contains('/Gateway Service "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}" successfully created!/').should('be.visible')
    cy.contains('login_service').should('be.visible')
  })
})

describe('add service with no service name', () => {
  it('should add login service successful', () => {
    cy.visit('http://localhost:8002/default/services')
    cy.contains(" New gateway service").click()
    cy.get('[placeholder="Enter a URL"]').clear().type('http://localhost:8002/login')
    cy.contains('Save').click()
    cy.contains('/Gateway Service "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}" successfully created!/').should('be.visible')
    cy.contains('login_service').should('be.visible')
    cy.contains('Back').click()
    cy.get('b[text()="login_service"]').should('be.visible')
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