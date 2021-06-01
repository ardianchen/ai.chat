import app from './app.js'

const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV

app.listen(PORT, () => {
  console.log(`[App] Listening on http://localhost:${PORT} in ${ENV} environment`)
})
