const redis = require('redis')

const client = redis.createClient({
  url: 'redis://localhost:6379' // Ajusta la URL según tu configuración de Redis
})

client.connect()

client
  .flushAll()
  .then(() => {
    console.log('Redis cache cleared')
    client.quit()
  })
  .catch((err: any) => {
    console.error('Error clearing Redis cache:', err)
    client.quit()
  })
