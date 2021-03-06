import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import HomePage from '../../home/HomePage'
import BooksPage from '../../books/BooksPage'
import EditBookPage from '../../books/EditBookPage'
import AuthorsPage from '../../authors/AuthorsPage'
import CreateBookPage from '../../books/CreateBookPage'
import DeleteBookPage from '../../books/DeleteBookPage'
import BookDetails from '../../books/BookDetails'
import ProfilePage from '../../users/profile/ProfilePage'
import LoginPage from '../../users/LoginPage'
import RegisterPage from '../../users/RegisterPage'
import Logout from '../../users/Logout'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/books-library/' component={HomePage} />
    <Route path='/books-library/home' component={HomePage} />
    <Route path='/books-library/login' component={LoginPage} />
    <Route path='/books-library/register' component={RegisterPage} />
    <PrivateRoute path='/books-library/books' component={BooksPage} />
    <PrivateRoute path='/books-library/authors' component={AuthorsPage} />
    <PrivateRoute path='/books-library/book-details/:id' component={BookDetails} />
    <PrivateRoute path='/books-library/edit-book/:id' component={EditBookPage} />
    <PrivateRoute path='/books-library/delete-book/:id' component={DeleteBookPage} />
    <PrivateRoute path='/books-library/create-book' component={CreateBookPage} />
    <PrivateRoute path='/books-library/logout' component={Logout} />
    <PrivateRoute path='/books-library/profile' component={ProfilePage} />
  </Switch>
)

export default Routes
