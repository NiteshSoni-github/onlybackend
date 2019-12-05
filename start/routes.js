'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.post('/register', 'UserController.register')
Route.post('/login', 'UserController.login')
Route.post('/publishblog', 'BlogController.publishblog')
Route.get('/getAllBlogData', 'BlogController.getAllBlogData')
Route.get('/getParticularBlogData', 'BlogController.getParticularBlogData')
Route.post('/testing', 'BlogController.testing')
Route.get('/getUserData', 'UserController.getUserData')
Route.post('/updateProfile','UserController.updateProfile')
Route.post('/draftblog','BlogController.draftblog')
Route.get('/getUserBlogs','BlogController.getUserBlogs');
Route.delete('/deletedraft','BlogController.deletedraft');
Route.delete('/deletePublished','BlogController.deletePublished');
