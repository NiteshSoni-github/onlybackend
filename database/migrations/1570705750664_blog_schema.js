'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BlogSchema extends Schema {
  up () {
    this.create('blogs', (table) => {
      table.increments()
      table.string('title', 254).notNullable()
      table.string('category', 254).notNullable()
      table.string('image', 254)
      table.text('content')
      table.string('discription', 1000)
      table.string('authorName', 254)
      table.string('authorId', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('blogs')
  }
}

module.exports = BlogSchema
