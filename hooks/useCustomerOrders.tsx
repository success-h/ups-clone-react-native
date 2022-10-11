import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/Queries";

interface useCustomerOrdersProps {}

export const useCustomerOrders = ({}: useCustomerOrdersProps) => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  return;
};
