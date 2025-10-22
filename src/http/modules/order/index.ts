import { http } from 'uview-pro'

export async function getOrderList(params: OrderListParams) {
  return http.get<OrderListResponse>('/order/list', params)
}
