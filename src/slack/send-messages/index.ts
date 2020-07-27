import _ from 'lodash'
import { SlackWebClient } from '../client'
import { IAssignedReposResponse } from '../../github/assign-repos'
import { Config } from '../../config'

const { TOKEN } = Config.SLACK

export const SendMessages = async (assignedRepos: Array<IAssignedReposResponse>): Promise<void> =>  {
  await Promise.all(
   _.map(assignedRepos, async (message: IAssignedReposResponse) => {
      const { id, name, repos } = message
      const MESSAGE_TEMPLATE = `Howdy ${name} 👋, it’s time to give some love to:\n\n${_.replace(_.toString(repos), /,/g, '\n')}`
      await SlackWebClient.chat.postMessage({
        token: TOKEN,
        channel: id,
        text: MESSAGE_TEMPLATE
      })
   })
  )
}
