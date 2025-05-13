import AddRoutePage from "../../page_objects/route/add_route_page";
import AddServicePage from "../../page_objects/service/add_service_page";

describe("Add Route Test", () => {
    let addRoutePage, addServicePage
    before(function () {
        cy.fixture('route/add_route.json').then(function(data) {
            this.fixtureData = data;
            cy.log(this.fixtureData.url);
            addRoutePage = new AddRoutePage(this.fixtureData.url)
        })
    });
    
    beforeEach(function () {
        addRoutePage.visit();
    });

    context("Functional Test", () => {

    })


    context("Negative Test", () => {
        
    })
})