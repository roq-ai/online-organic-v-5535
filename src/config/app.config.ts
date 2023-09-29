interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Store Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Store Manager', 'Inventory Manager', 'Business Owner'],
  tenantName: 'Supermarket',
  applicationName: 'Online Organic Vegetables',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read supermarket information', 'Read inventory', 'Create and manage orders', 'Read discounts'],
  ownerAbilities: ['Manage user information', 'Manage supermarket details', 'Manage inventory', 'Manage orders'],
  getQuoteUrl: 'https://app.roq.ai/proposal/ed2eeff1-1d84-48ba-b810-2d5fa590f250',
};
