import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Routes from './components/routes'

render(<Router history={browserHistory} routes={Routes} />, document.querySelector('main'))
console.log('welcome to css-sass-comparison')
