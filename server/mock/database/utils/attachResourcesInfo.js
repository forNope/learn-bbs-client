module.exports = function (data, user) {
  data = Array.isArray(data) ? data : [data]
  
  data.forEach(item => {
    item.isAgree = false
    item.isDisagree = false
  })

  if (user) {
    data.forEach(item => {
      const resources = item.category ? 'posts' : item.postId ? 'comments' : 'replies'
      const agreeTable = db.perRecord[resources].agree[user.id]
      const disagreeTable = db.perRecord[resources].disagree[user.id]

      item.isAgree = !!agreeTable && agreeTable.includes(item.id)
      item.isDisagree = !!disagreeTable && disagreeTable.includes(item.id)
    })
  }

  return data
}