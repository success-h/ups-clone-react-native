interface Customer {
  email: string;
  name: string;
}

interface CustomerList {
  name: ID;
  value: Customer;
}

interface TrackingItems {
  customer_id: ID;
  customer: Customer;
  items: Item[];
}

interface Item {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
}

interface OrderResponse {
  value: Order;
}

interface CustomerResponse {
  name: ID;
  value: Customer;
}

interface Order {
  carrier: string;
  createdAt: string;
  shippingCost: number;
  trackingId: string;
  trackingItems: TrackingItems;
  Lat: number;
  Lng: strong;
  Address: string;
  City: string;
}
