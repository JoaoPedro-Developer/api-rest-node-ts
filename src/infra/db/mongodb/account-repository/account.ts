import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const resultId = await accountCollection.insertOne(accountData)
    const accountMongo = await MongoHelper.getCollection('accounts').findOne({ _id: resultId.insertedId })
    const id = accountMongo._id.toString()
    const { name, email, password } = accountMongo
    const account = {
      id,
      name,
      email,
      password
    }
    return new Promise(resolve => resolve(account))
  }
}
