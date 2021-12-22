import React from 'react'

const AddPurchase = (props) => {
    const purchaseInfo = props.location.search.split(/[=&?]+/)
    console.log(purchaseInfo)
    
    return (
      <div style={{marginTop: '80px'}}>
        Su compra está siendo procesada
      </div>
    )
}

export default AddPurchase