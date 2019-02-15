function bubble (arr, sortFn = (a, b) => a > b) {
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    for (let k = i + 1, len = arr.length; k < len; k++) {
      const a = arr[i]
      const b = arr[k]

      if (sortFn(a, b)) {
        [arr[i], arr[k]] = [arr[k], arr[i]]
      }
    }
  }

  return arr
}

module.exports = function (data, mode = 'hot') {
  mode === 'hot'
    ? bubble(data, (a, b) => b.agreeNum > a.agreeNum)
    : bubble(data, (a, b) => b.createDate > a.createDate)

  return data
}