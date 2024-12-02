import React from 'react'
import { useParams } from 'react-router-dom'

import ProductWrap from '../components/ProductWrap/ProductWrap'





const SinglePage = () => {

    const { id } = useParams()

    const Products = Products.find(item.id === Number(id))

    
  return (
    <>
    <ProductWrap product={product}/>
    </>
  )
}

export default SinglePage