import { http } from 'uview-pro'

export async function getCarList(params: CarListParams) {
  return http.get<CarInfo>('/car/list', params)
}
