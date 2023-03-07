import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  // Após o Handle e o Parametro deve-se definir o Tipo do parametro (HttpRequest) e em seguida o tipo de dado do retorno (HttpResponse)
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }
  }
}
