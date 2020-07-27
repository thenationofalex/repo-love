import { RepoLove } from './index'

exports.handler = async (): Promise<void> => {
  await RepoLove()
}
