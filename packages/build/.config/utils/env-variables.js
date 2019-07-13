const stringToBoolean = require('boolean')
const packagesProperties = require('./packages-properties')

const pwd = process.env.PWD || process.env['PWD'] || ''
const packageProperties =
  packagesProperties.find(({ packageDirectoryName }) => pwd.endsWith(packageDirectoryName)) || {}

// it will be used when ide-tools try to run this code. i must specify packageDirectoryName or else,
// we will get errors in other files in this package.
// also, the value i specify here won't be used by the ide so it's just a valid value, not more then that.
const defaultPackageDirectoryName = 'utils'

const packageDirectoryName =
  process.env.FOLDER || process.env['FOLDER'] || packageProperties.packageDirectoryName || defaultPackageDirectoryName

const isCI = stringToBoolean(process.env.CI || process.env['CI'])

module.exports = {
  packageDirectoryName,
  isCI,
}
