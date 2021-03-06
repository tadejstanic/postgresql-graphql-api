import { Model } from 'rawmodel'

export default class Book extends Model {

  created_at?: string
  updated_at?: string

  id: number
  name: string
  user_id: number

  constructor (data = {}) {
    super(data)

    this.defineField('id')

    this.defineField('user_id', {
      validate: [
        {
          validator: 'presence',
          message: 'must be present'
        }
      ]
    })

    this.defineField('name',
      {
        validate: [
          {
            validator: 'presence',
            message: 'must be present'
          }
        ]
      })
    this.populate(data)
  }

  createTimestamps () {
    const now = new Date().toUTCString()
    this.created_at = now
    this.updated_at = now
  }

  updateTimestamps () {
    const now = new Date().toUTCString()
    this.updated_at = now
  }
}
