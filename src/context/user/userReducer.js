const userRducer = (action, state) => {
  return { ...state }
  // eslint-disable-next-line no-unreachable
  throw new Error(`No Matching "${action.type}" - action type`)
}
export default userRducer
