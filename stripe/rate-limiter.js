class RateLimiter {
  constructor(limit, interval) {
    this.limit = limit // 限制的请求数
    this.interval = interval // 时间间隔(ms)
    this.requests = [] // 存储请求的时间戳
  }

  canRequest(now) {
    this.requests = this.requests.filter(time => now - time < this.interval)

    return this.requests.length < this.limit
  }

  request(now) {
    if (this.canRequest(now)) {
      this.requests.push(now)
      return true
    }
    return false
  }
}

const limiter = new RateLimiter(5, 2000)

setInterval(() => {
  const now = Date.now()
  const canRequest = limiter.request(now)
  console.log(`${now}: ${canRequest ? "Allowed" : "Rejected"}`)
}, 100)


class RateLimiter2 {
  constructor(limit, interval) {
    this.limit = limit
    this.interval = interval
    this.customerRequests = new Map() // 存储每个客户的请求记录
  }

  canRequest(customerId, now) {
    // 获取该客户的请求记录,如果没有则初始化为空数组
    const requests = this.customerRequests.get(customerId) || []

    // 清除过期的请求记录
    const validRequests = requests.filter(time => now - time < this.interval)

    // 如果当前请求数未超过限制,则允许请求
    const canRequest = validRequests.length < this.limit

    // 更新该客户的请求记录
    this.customerRequests.set(customerId, validRequests)

    return canRequest
  }

  request(customerId, now) {
    if (this.canRequest(customerId, now)) {
      const requests = this.customerRequests.get(customerId) || []
      requests.push(now)
      this.customerRequests.set(customerId, requests)
      return true
    }
    return false
  }
}


class RateLimiter3 {
  constructor(limit, interval) {
    this.limit = limit
    this.interval = interval
    this.customerRequests = new Map()
  }

  canRequest(customerId, weight, now) {
    const requests = this.customerRequests.get(customerId) || []

    const validRequests = requests.filter(({time, weight}) => now - time < this.interval)
    const remainingWeight = this.limit - validRequests.reduce((sum, {weight}) => sum + weight, 0)

    // 如果剩余权重足够当前请求的权重,则允许请求
    const canRequest = remainingWeight >= weight

    // 更新该客户的请求记录
    this.customerRequests.set(customerId, validRequests)

    return canRequest
  }

  request(customerId, weight, now) {
    if (this.canRequest(customerId, weight, now)) {
      const requests = this.customerRequests.get(customerId) || []
      requests.push({time: now, weight})
      this.customerRequests.set(customerId, requests)
      return true
    }
    return false
  }
}

// const limiter = new RateLimiter(10, 2000)
//
// console.log(limiter.request("customer1", 6, Date.now())) // false
// console.log(limiter.request("customer1", 2, Date.now())) // true
// console.log(limiter.request("customer1", 2, Date.now())) // true
//
// setTimeout(() => {
//   console.log(limiter.request("customer1", 6, Date.now())) // true
// }, 2000)
