import AddServicePage from "../../page_objects/service/add_service_page";

describe("Add Service Test", () => {
    let addServicePage
    before(function () {
        cy.fixture('add_service.json').then(function(data) {
            this.fixtureData = data;
            cy.log(this.fixtureData.url);
            addServicePage = new AddServicePage(this.fixtureData.url)
        })
    });
    
    beforeEach(function () {
        addServicePage.visit();
    });

    context("Add Service Error Validation", () => {
        it("should add service failed when not given upstreamURL", function () {
            
        })

       // add negative cases...
    })

    after(function (){
        //todo: data cleaning
    })
})