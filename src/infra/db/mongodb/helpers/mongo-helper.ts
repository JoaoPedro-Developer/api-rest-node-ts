import { MongoClient } from 'mongodb'

export const MongoHelper = {
  clientMongo: null as MongoClient,
  async connect (url: string) {
    this.clientMongo = await MongoClient.connect(process.env.MONGO_URL)
  },

  async disconnect (): Promise<void> {
    await this.clientMongo.close()
  }
}
