const contentful = require('contentful')
// const contentfulClient = createClient({
//   space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
// })

export default contentful.createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
})
export async function getEntries() {
  const products = await contentful.getEntries({ content_type: 'nestStoreApp' })
  return products
}
