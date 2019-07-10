import React from 'react'
import PropTypes from 'prop-types'


const Product = ({price,quantity,title})=>(
    <div>
        {title}:￥{price} {quantity?`* ${quantity}`:null}
    </div>
)

Product.propTypes={
    price:PropTypes.number,
    quantity:PropTypes.number,
    title:PropTypes.string
}

export default Product