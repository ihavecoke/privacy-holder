const rules = require('./src/rule')
const utils = require('./src/utils')

module.exports = {
  mobile(rawValue = '') {
    if (rawValue.length < 7) {
      return rawValue
    }
    let prefix = ''
    let newValue = ''
    if (rawValue.indexOf('-') !== -1) {
      prefix = rawValue.split('-')[0]
      newValue = rawValue.split('-')[1]
    } else {
      newValue = rawValue
    }

    const privacyValue = rules.fragment(newValue, '****', 3, 6)
    if (prefix) {
      return [prefix, privacyValue].join('-')
    } else {
      return [privacyValue].join('-')
    }
  },
  phoneNumber(rawValue) {
    return this.mobile(rawValue)
  },
  email(rawEmail = '') {
    if (!rawEmail) return rawEmail
    const userName = rawEmail.split('@')[0]
    const suffix = rawEmail.split('@')[1]
    let holder = '*'.repeat(userName.length)

    if (userName.length > 2) {
      holder = userName.substring(0, 2)
      holder += '*'.repeat(userName.length - 2)
    }
    return `${holder}@${suffix}`
  },
  name(rawName = '') {
    if (!rawName) return rawName
    if (/[a-z]/i.test(rawName)) {
      const nameParts = utils.flatten(rawName.split(' '))
      return nameParts.length === 1 ? '*' : `*${nameParts[nameParts.length - 1]}`
    } else {
      return rawName.length === 1 ? '*' : `*${rawName.slice(-1, 1)}`
    }
  },
  idCard(rawIdCard = '') {
    return rules.partialHolder(rules.partialHolder(rawIdCard, 3, 3), 8, 6)
  },
  all(rawValue = '') {
    return '*'.repeat(rawValue.length)
  },
  ...rules,
}
