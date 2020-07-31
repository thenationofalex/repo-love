import { AssignRepos } from './github/assign-repos'
import { GetRepos } from './github/get-repos'
import { GetEngineers } from './slack/get-engineers'
import { SendMessages } from './slack/send-messages'

export const RepoLove = async (): Promise<void> => {
  const repos = await GetRepos()
  const engineers = await GetEngineers()
  const assignRepos =  await AssignRepos(repos, engineers)
  SendMessages(assignRepos)
}

RepoLove()
