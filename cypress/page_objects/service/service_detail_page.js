import BasePage from '../base_page';
export default class ServiceDetailPage extends BasePage {

  constructor(url) {
    super(url)

    this.elements = {
        labelText: {
          serviceId: '[data-testid="id-property-value"] .copy-text.monospace',
          serviceName: '[data-testid="name-property-value"] .attrs-data-text'
        }
    }
  }
}