import { get } from './utils'

const clients = async () => {
  try {
    const clients = await get(`getLateClients`, {})
    return clients
  } catch (err) {
    console.log(err)
    return new Error(err)
  }
}

export default clients
