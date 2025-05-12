import BasePage from '../base_page';
export default class AddServicePage extends BasePage {

  constructor(url) {
    super(url)

    this.elements = {
      input: {
        serviceName: '[data-testid="gateway-service-name-input"]',
        tags: '[data-testid="gateway-service-tags-input"]',
        upstreamURL: '[data-testid="gateway-service-url-input"]',
        retries: '',
        connectionTimeout: '',
        writeTimeout: '',
        readTimeout: '',
        clientCertificate: '',
        caCertificates: '',
        protocol: '',
        host: '',
        path: '',
        port: ''
      },
      button: {
        save: '[data-testid="service-create-form-submit"]',
        cancel: '[data-testid="service-create-form-submit"]',
        viewConfiguration: '[data-testid="service-create-form-view-configuration"]',
        viewAdvancedFields: '[data-testid="collapse-trigger-content"]'
      },
      check: {
        protocolHostPortPath: '[data-testid="gateway-service-protocol-radio"]',
        tlsVerify: ""
      }
    }
  }

  /**
   * type service name
   * @param {string} serviceName service name
   */
  typeServiceName(serviceName) {
    cy.get(this.elements.input.serviceName)
      .clear()
      .type(serviceName)
      .should('have.value', serviceName);
    return this;
  }

  /**
   * type tags
   * @param {string}  tags
   */
  typeTags(tags) {
    cy.get(this.elements.input.tags)
      .clear()
      .type(tags)
      .should('have.value', tags);
    return this;
  }

  typeUpstreamURL(upstreamURL) {
    cy.get(this.elements.input.upstreamURL)
      .clear()
      .type(upstreamURL)
      .should('have.value', upstreamURL);
    return this;
  }

  /**
   * Click save button
   */
  clickSave() {
    cy.get(this.elements.button.save).click();
    return this;
  }

  /**
   * Click cancel button
   */
  clickCancel() {
    cy.get(this.elements.button.cancel).click();
    return this;
  }

  clickviewConfiguration() {
    cy.get(this.elements.button.viewConfiguration).click();
    return this;
  }

    
  /**
   * add new service
   * @param {string} 
   * @param {string} password 密码
   */
  addService(upstreamURL, serviceName, tags) {
    let actions = []
    if(serviceName != undefined) {
      actions.push(() => this.typeServiceName(serviceName))
    }
    if(tags != undefined) {
      actions.push(() => this.typeTags(tags))
    }
    if(upstreamURL != undefined) {
      actions.push(() => this.typeUpstreamURL(upstreamURL))
    }

    console.log('actions', actions)

    actions.forEach(action => action())

    this.clickSave()

    return this
  }

  cancelService(upstreamURL, serviceName, tags) {
    this.typeServiceName(serviceName)
      .typeTags(tags)
      .typeUpstreamURL(upstreamURL)
      .clickSave();
    return this;
  }

  viewConfiguration() {
    this.typeServiceName(serviceName)
      .typeTags(tags)
      .typeUpstreamURL(upstreamURL)
      .clickviewConfiguration();
    return this;
  }

}