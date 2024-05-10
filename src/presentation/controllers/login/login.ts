import { EmailValidator } from '../signup/signup-protocols'
import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError } from '../../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['email', 'password']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { email } = httpRequest.body
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      return new Promise(resolve => resolve(null))
    } catch (error) {
      return serverError(error)
    }
  }
}
