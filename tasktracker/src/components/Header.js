import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd}) => {

  return (
    <header className='header'>
        <h1 class="app-header">{title}</h1>
        <Button 
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd} />

    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string,
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'lightblue'
}

export default Header
