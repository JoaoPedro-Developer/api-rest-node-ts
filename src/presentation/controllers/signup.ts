import { HttpRequest, HttpResponse } from '../protocols/http'
import MissingParamError from '../errors/missing-param-error'

export class SignUpController {
  // Após o Handle e o Parametro deve-se definir o Tipo do parametro (HttpRequest) e em seguida o tipo de dado do retorno (HttpResponse)
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}
