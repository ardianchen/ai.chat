export const generateRandomString = async (digit) => {
  let respon = ''
  const possible = 'abcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < digit; i++) {
    respon += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return respon
}
