import { request } from "./request"

export function getHomeMutilData() {
  return request({
    url: "/home/multidata"
  })
}