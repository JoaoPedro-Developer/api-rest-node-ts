import { HttpRequest, HttpResponse } from '../protocols/http'
import MissingParamError from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  // Após o Handle e o Parametro deve-se definir o Tipo do parametro (HttpRequest) e em seguida o tipo de dado do retorno (HttpResponse)
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
