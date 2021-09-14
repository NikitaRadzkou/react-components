import React from "react"
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './ButtonGroup.css'

const ButtonGroup = ({
  children, className, vertical, ...args
}) => {

  const classes = classNames(
    'btn-group',
    className,
    {vertical}
  )

  return(
    <div
      className={classes}
      {...args}
    >
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
  vertical: PropTypes.bool
}

ButtonGroup.defaultProps = {
  children: null,
  classNames: '',
  vertical: false

}

export default ButtonGroup