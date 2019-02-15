export function error (msg) {
  throw new Error('service api error - ' + msg)
}

export function warn (msg) {
  console.warn('service api warn - ' + msg)
}
