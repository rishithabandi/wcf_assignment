export class Feature {
  // Title: A short, descriptive name of the feature request.
  title: string;


  // Description: A long description of the feature request.
  description: string;


  // Client: A selection list of clients (use "Client A", "Client B", "Client C")
  client: Client;


  // tslint:disable-next-line:max-line-length
  // Client Priority: The feature's priority number according to the client (1...n). Client Priority numbers should not repeat for the given client,
  // so if a priority is set on a new feature as "1", then all other feature requests for that client should be adjusted.

  priority: number;

  // Target Date: The date that the client is hoping to have the feature.
  targetDate: string;


  // Product Area: A selection list of product areas (use 'Policies', 'Billing', 'Claims', 'Reports')
  productArea: Product;

}


export enum Client {
  ClientA = 'Client A',
  ClientB = 'Client B',
  ClientC = 'Client C',

}


export enum Product {
  Policies = 'Policies',
  Billing = 'Billing',
  Claims = 'Claims',
  Reports = 'Reports'
}

