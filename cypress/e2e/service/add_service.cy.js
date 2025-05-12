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

    it("should add service successfully when given serviceName and upstreamURL", function () {
        cy.task('log', this.fixtureData);
        addServicePage.addService(this.fixtureData.upstreamURL, this.fixtureData.serviceName)
    })

    it("should add service successfully when only given upstreamURL", function() {

    })

    it("should add service successfully when only given upstreamURL", function() {

    })

    it("should cancel service successfully", function() {

    })

    //... add functional cases

    after(function (){
        //todo: data cleaning
    })
})