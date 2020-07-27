import _ from 'lodash'
import { WebAPICallResult } from '@slack/web-api'
import { SlackWebClient } from '../client'
import { Config } from '../../config'

const { TOKEN, CHANNEL_ID } = Config.SLACK

export interface IGetEngineersResponse {
  id?: string
  real_name?: string
}

interface IGetEngineersMembers extends WebAPICallResult {
  members?: string[]
}

interface IGetEngineersName extends WebAPICallResult {
  user: IGetEngineersResponse
}

export const GetEngineers = async (): Promise<Array<IGetEngineersResponse>> => {

  const slackEngineers = (await SlackWebClient.conversations.members({
    token: TOKEN,
    channel: CHANNEL_ID
  })) as IGetEngineersMembers

  if (slackEngineers.ok) {

    const listOfEnginners = await Promise.all(
      _.map(slackEngineers.members, async (member: string) => {
        const slackEngineersName = (await SlackWebClient.users.info({
          token: TOKEN,
          user: member
        })) as IGetEngineersName

        return {
          id: slackEngineersName.user.id,
          real_name: slackEngineersName.user.real_name
        }
      })
    )

    return listOfEnginners
  }

  throw new Error('No slack users found')
}
