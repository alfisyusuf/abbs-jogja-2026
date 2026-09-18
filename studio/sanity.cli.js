import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8gsqkkhv',
    dataset: 'production'
  },
  deployment: {
    appId: 'iw2pmqpb0xuf4zh1d3dky8yd',
    autoUpdates: true,
  },
})
