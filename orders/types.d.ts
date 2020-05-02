declare module "Orders" {
  type DeliveryInfo = {
    paymentMethod: string;
    deliveryAddress: string;
    deliveryType: "asap" | "date";
    deliveryDate: Date;
    porch: string;
    floor: string;
    apart: string;
    notes: string;
    change: string;
  };

  type Product = {
    id: string;
    name: string;
    price: number;
    unit: "шт" | "кг";
    unitValue: number;
  };

  type Order = {
    id: string;
    data: {
      number?: string;
      deliveryInfo: DeliveryInfo;
      summarize: {
        productsCost: number;
        deliveryCost: number;
        totalCost: number;
      };
      products: Product[];
      createdAt?: import("@react-native-firebase/firestore").FirebaseFirestoreTypes.Timestamp;
    };
  };

  type OrdersState = {
    data: Order[] | null;
    loading: boolean;
    error: boolean;
  };
}
