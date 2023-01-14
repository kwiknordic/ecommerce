import { productDataItem } from "../types/productData.js";

export function getUniquesOfProp(collection: productDataItem[], key: keyof productDataItem) {
  if (!collection || collection.length === 0) return null
  if (!collection.at(0)[key]) return null

  const uniqueCollection = new Set()

  collection.forEach((item: productDataItem) => {
    if (!item[key]) return
    uniqueCollection.add(item[key])
  })

  return uniqueCollection
}