import AddServicePage from "../../page_objects/service/add_service_page";
import ServiceHomePage from "../../page_objects/service/service_home_page";
import ServiceDetailPage from "../../page_objects/service/service_detail_page";

describe("Add Service Test", () => {
    let addServicePage
    before(function () {
        cy.fixture('service/add_service.json').then(function(data) {
            this.fixtureData = data;
            cy.log(this.fixtureData.url);
            addServicePage = new AddServicePage(this.fixtureData.url)
        })
    });
    
    beforeEach(function () {
        addServicePage.visit();
    });

    context("Functional Test", () => {
        it("should add service successfully when given serviceName and upstreamURL", function () {
            // cy.task('log', this.fixtureData);
            let serviceName = this.fixtureData.serviceName
            addServicePage.addService(this.fixtureData.upstreamURL, serviceName)
    
            let serviceDetail = new ServiceDetailPage()
            // Check
            let uuidRegx = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
            cy.matchText(serviceDetail.elements.labelText.serviceId, uuidRegx)
            cy.haveText(serviceDetail.elements.labelText.serviceName, serviceName)
            //to check all config items...
    
        })
    
        it("should add service successfully when only given upstreamURL", function() {
        })
    
        it("should add service successfully when given upstreamURL, serviceName and tags", function() {
        })
    
        it("should add service successfully when given protocol and host", function() {
        })
    
        it("should add service successfully when given protocol and host", function() {
        })
    
        it("should add service successfully when config advanced fields", function() {
        })
    
        it("view configuration", function() {
        })
    
    
        it("should cancel service successfully", function() {
        })
    })

    context("Negative Test", () => {
        it("should add service failed when not given upstreamURL", function () {
            
        })
    
        it("should add service failed when given exist serviceName", function () {
                
        })
    
        it("should add service failed when not given protocol and host", function () {
                
        })
    } )

    after(function (){
        cy.fixture('service/service_home.json').then(function(data) {
            cy.task('log', data)
            let serviceHomePage = new ServiceHomePage(data.url)
            serviceHomePage.visit()
            serviceHomePage.deleteAllService()
        })
       
    })
})