'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DraftblogSchema extends Schema {
  up () {
    this.create('draftblogs', (table) => {
      table.increments()
      table.string('title', 254).notNullable()
      table.string('category', 254).notNullable()
      table.string('image', 254)
      table.text('content')
      table.string('discription', 1000)
      table.string('authorId', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('draftblogs')
  }
}

module.exports = DraftblogSchema
