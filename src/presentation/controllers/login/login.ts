import { EmailValidator } from '../signup/signup-protocols'
import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ['email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    const { email } = httpRequest.body
    this.emailValidator.isValid(email)
    return new Promise(resolve => resolve(null))
  }
}
