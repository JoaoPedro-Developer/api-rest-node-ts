import { HttpResponse } from './http'

export interface Authentication {
  auth (email: string, password: string): Promise<HttpResponse>
}
