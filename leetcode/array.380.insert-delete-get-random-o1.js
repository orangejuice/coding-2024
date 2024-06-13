var RandomizedSet = function () {
  this.values = []
  this.valueIndex = new Map()
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.valueIndex.has(val)) {
    return false
  } else {
    this.values.push(val)
    this.valueIndex.set(val, this.values.length - 1)
    return true
  }
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.valueIndex.has(val)) {
    const index = this.valueIndex.get(val)
    if (index === this.values.length - 1) {
      this.values.pop()
    } else {
      this.values[index] = this.values.pop()
      this.valueIndex.set(this.values[index], index)
    }
    this.valueIndex.delete(val)
    return true
  } else {
    return false
  }
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.values[Math.floor(Math.random() * this.values.length)]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */