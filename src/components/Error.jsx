import React from 'react'

const error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
        {children}
    </div>
  )
}

export default error













//Forma comun de pasar los errores
//const error = ({mensaje}) => {
//  return (
//    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
//        <p>{mensaje}</p>
//    </div>
//  )
//}

//export default error