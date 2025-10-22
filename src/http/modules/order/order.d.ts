declare global {
  interface OrderInfo {
    id: string
    orderNo: string
    userId: string
    amount: number
    status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled'
    createTime: string
    updateTime: string
  }

  // 订单列表查询参数
  interface OrderListParams {
    page: number
    pageSize: number
    status?: string
    userId?: string
  }

  // 订单列表响应数据
  interface OrderListResponse {
    list: OrderInfo[]
    total: number
    page: number
    pageSize: number
  }

}
export { }
