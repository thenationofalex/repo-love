import { WebClient } from '@slack/web-api'
import { Config } from '../../config'

const token = Config.SLACK.TOKEN

export const SlackWebClient = new WebClient(token)
