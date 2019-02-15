import { getTag } from 'utils'

if (!window.Promise) {
  window.Promise = class Promise {
    PromiseStatus = 'pending'

    PromiseValue

    onFulfilled

    onRejected

    constructor (executor) {
      const resolve = data => {
        this.PromiseStatus = 'fulfilled'
        if (this.onFulfilled) this.onFulfilled(data)
      }

      const reject = reason => {
        this.PromiseStatus = 'rejected'
        setTimeout(() => {
          try {
            this.onRejected(reason)
          } catch (e) {
            throw '(in promise) ' + reason
          }
        })
      }

      try {
        executor(resolve, reject)
      } catch (e) {
        reject(e)
      }
    }

    then (onFulfilled, onRejected) {
      if (onFulfilled) {
        if (getTag(onFulfilled) === '[object Function]') this.onFulfilled = onFulfilled
        else this.onFulfilled = x => x
      }

      this.onRejected = onRejected
    }

    catch (onRejected) {
      return this.then(undefined, onRejected)
    }
  }
}