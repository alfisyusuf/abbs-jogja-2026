import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ki64hdlp',
    dataset: 'production'
  },
  deployment: {
    appId: 'w5ph42hbj5e4ddbig62r283i',
    autoUpdates: true,
  },
})