export const searchById = (id, data) => {
  if (id && data.length) {
    return data.find((search) => search.id === id)
  }
}