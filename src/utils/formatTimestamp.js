function getInfo (date) {
  return [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ]
}

const tips = ['年前', '月前', '天前', '小时前', '分钟前', '秒前']

export default function formatTimestamp (timestamp) {
  if (typeof timestamp !== 'number') throw new TypeError('timestamp must be a number')
  timestamp = String(timestamp).length === 13 ? timestamp : timestamp * 1000

  const targetDateInfo = getInfo(new Date(timestamp))
  const currentDateInfo = getInfo(new Date())

  for (let i = 0, len = targetDateInfo.length; i < len; i++) {
    if (targetDateInfo[i] < currentDateInfo[i]) {
      return currentDateInfo[i] - targetDateInfo[i] + tips[i]
    }
  }

  return '刚刚'
}
