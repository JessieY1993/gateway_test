import BasePage from './base-page';
export default class AddRoutePage extends BasePage {

  constructor(url) {
    super(url)

    this.elements = {
      input: {
        routeName: '[data-testid="route-form-name"]',
        tags: '[data-testid="route-form-tags"]',
        upstreamURL: '',
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
        save: '',
        cancel: '',
        viewConfiguration: '',
        viewAdvancedFields: ''
      },
      check: {
        protocolHostPortPath: '',
        tlsVerify: ''
      },
      select: {
        service: {
            name: "[data-testid='route-form-service-id']",
            options: {

            }
        },
        protocols: {
            name: '[data-testid="route-form-protocols"]',
            options: {
                grpc: '[data-testid="select-item-grpc"]',
                https: '[data-testid="select-item-http,https"]'
            }
        }
      }
    }
  }

  /**
   * type route name
   * @param {string} routeName service name
   */
  typeRouteName(serviceName) {
    cy.get(this.elements.input.routeName)
      .clear()
      .type(routeName)
      .should('have.value', routeName);
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
  addService(serviceName, tags, upstreamURL) {
    this.typeServiceName(serviceName)
      .typeTags(tags)
      .typeUpstreamURL(upstreamURL)
      .clickSave();
    return this;
  }

  cancelService(serviceName, tags, upstreamURL) {
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