import React from 'react'

const userRducer = (action, state) => {
  return { ...state }
  throw new Error(`No Matching "${action.type}" - action type`)
}
export default userRducer
