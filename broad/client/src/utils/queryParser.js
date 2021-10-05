export const generateQueryString = (obj) => {
  let queryString = ""
  let counter = 0
  const numberOfKeys = Object.keys(obj).length - 1
  console.log(numberOfKeys)

  for (let key in obj) {
    queryString += key + "=" + obj[key]
    if (counter < numberOfKeys) queryString += "&"
    counter++
  }

  return queryString
}