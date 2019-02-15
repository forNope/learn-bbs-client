export default function mapCategory (category) {
  const categoryMap = {
    'married': '婚姻',
    'work': '工作',
    'money': '金钱',
    'study': '学习',
    'family': '家庭',
    'healthy': '健康',
    'other': '其他'
  }

  let result = categoryMap[category]

  if (!result) {
    Object
      .keys(categoryMap)
      .forEach(v => {
        if (categoryMap[v] === category) result = v
      })
  }

  return result
}
