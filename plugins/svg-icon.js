const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('~/assets/icons/svg', false, /\.svg$/)
requireAll(req)
