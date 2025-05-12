import AddRoutePage from "../../page_objects/route/add_route_page";
import AddServicePage from "../../page_objects/service/add_service_page";

describe("Add Route Test", () => {
    let addRoutePage, addServicePage
    before(function () {
        cy.fixture('add_route.json').then(function(data) {
            this.fixtureData = data;
            cy.log(this.fixtureData.url);
            addRoutePage = new AddRoutePage(this.fixtureData.url)
        })
        cy.fixture('add_service.json').then(function(serviceData){
            this.serviceFixtureData = serviceData
            addServicePage = new AddServicePage(this.serviceFixtureData.url)
            addServicePage.addService(this.serviceFixtureData.upstreamURL, this.serviceFixtureData.serviceName)
        })
    });
    
    beforeEach(function () {
        addRoutePage.visit();
    });

    it("should add route successfully when given routeName", function () {
        // todo: add route
    })
    
    //add more sccenarios
})