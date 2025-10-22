import { http } from 'uview-pro'

export async function getUser(id: string) {
  return http.get<UserInfo>('/api/user', { id })
}
