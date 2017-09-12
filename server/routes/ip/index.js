import { send } from 'micro'
import ip from 'ip'

export const get = async (req, res) => {
  send(res, 200, ip.address())
}
