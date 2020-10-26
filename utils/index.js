export const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end
}

export const nullFiltering = (object) => {
  const finalObject = {}
  Object.keys(object).forEach((key) => {
    if (object[key] !== null) finalObject[key] = object[key]
  })

  return finalObject
}
