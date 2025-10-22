declare global {// 车辆信息接口
  interface CarInfo {
    id: string
    brand: string
    model: string
    year: number
    color: string
    plateNumber: string
  }

  // 车辆列表查询参数
  interface CarListParams {
    page: number
    pageSize: number
    brand?: string
    model?: string
  }

  // 车辆列表响应数据
  interface CarListResponse {
    list: CarInfo[]
    total: number
    page: number
    pageSize: number
  }

  interface CarApi {
    // 获取车辆列表
    getCarList: (params: CarListParams) => Promise<CarListResponse>

    // 获取车辆详情
    getCarDetail: (id: string) => Promise<CarInfo>

    // 添加车辆
    addCar: (carInfo: Omit<CarInfo, 'id'>) => Promise<CarInfo>

    // 更新车辆信息
    updateCar: (id: string, carInfo: Partial<CarInfo>) => Promise<CarInfo>

    // 删除车辆
    deleteCar: (id: string) => Promise<void>
  }
}
export { }
