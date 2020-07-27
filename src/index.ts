import { AssignRepos } from './github/assign-repos'
import { GetRepos } from './github/get-repos'
import { GetEngineers } from './slack/get-engineers'
import { SendMessages } from './slack/send-messages'

export const RepoLove = async (): Promise<void> => {
  const getRepos = await GetRepos()
  const getEngineers = await GetEngineers()
  const assignRepos = AssignRepos(getRepos, getEngineers)
  SendMessages(assignRepos)
}

RepoLove()
