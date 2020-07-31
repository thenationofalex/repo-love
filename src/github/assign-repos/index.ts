import _ from 'lodash'
import { IGetEngineersResponse } from '../../slack/get-engineers'

export interface IAssignedReposResponse {
  id: string
  name: string
  repos: Array<string>
}

export const AssignRepos = async (repos: string[], engineers: Array<IGetEngineersResponse>): Promise<Array<IAssignedReposResponse>> =>
  _.chain(repos)
    .shuffle()
    .chunk(_.ceil((_.size(repos) / _.size(engineers))))
    .map((repoChunk, idx: number) => ({
      'id': engineers[idx].id,
      'name': engineers[idx].real_name,
      'repos': repoChunk
    }))
    .value()
