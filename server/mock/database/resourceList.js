function firstUppercase (str) {
  return str[0].toUpperCase() + str.slice(1)
}

const resource = ['post', 'comment', 'reply', 'teasing']
const resources = ['posts', 'comments', 'replies', 'teasings']
const allResource = ['user', 'admin', ...resource]
const allResources = ['users', 'admins', ...resources]

module.exports = {
  allResource,
  allResources,
  AllResource: allResource.map(v => firstUppercase(v)),
  AllResources: allResources.map(v => firstUppercase(v)),
  resource,
  resources,
  Resource: resource.map(v => firstUppercase(v)),
  Resources: resources.map(v => firstUppercase(v)),
  conversionResourceWord (word) {
    const temp = word.toLowerCase()
    if (temp === 'reply' || temp === 'replies') {
      return temp === 'reply' ? word.slice(0, 1) + 'eplies' : word.slice(0, 1) + 'eply'
    } else {
      return temp[temp.length - 1] === 's' ? word.slice(0, word.length - 1) : word + 's'
    }
  },
  firstUppercase
}
