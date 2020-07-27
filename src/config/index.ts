import 'dotenv-defaults/config'

const { env } = process

export const Config = {
  GITHUB: {
    TOKEN: env.GITHUB_TOKEN,
    ORG_NAME: env.GITHUB_ORG_NAME
  },
  SLACK: {
    TOKEN: env.SLACK_TOKEN,
    CHANNEL_ID: env.SLACK_CHANNEL_ID
  },
}
