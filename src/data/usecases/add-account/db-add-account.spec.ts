import { DbAddAccount } from './db-add-account'

describe('', () => {
  test('Should return Encrypter with correct', async () => {
    class EncrypterStub {
      async encrypt (value: string): Promise<string> {
        return new Promise(resolve => resolve('hashed_password'))
      }
    }
    const encrypterStub = new EncrypterStub()
    const sut = new DbAddAccount(encrypterStub)
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const dataAccount = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await sut.add(dataAccount)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
