const { webpackDevelopmentAlias, webpackOtherAlias, webpackProdAlias } = require('../utils/paths-resolving-strategies')

module.exports = ({ isDevelopmentMode, paths: { resolveModulesPathsArray }, constants: {} }) => {
  const baseAlias = isDevelopmentMode ? webpackDevelopmentAlias : webpackProdAlias
  return {
    extensions: ['.js', '.sass', '.json', '.ts', '.tsx'],
    modules: resolveModulesPathsArray,
    alias: {
      ...baseAlias,
      ...webpackOtherAlias,
      ...(isDevelopmentMode && { 'react-dom': '@hot-loader/react-dom' }),
    },
  }
}
