import _ from 'lodash'
import { Octokit } from '@octokit/core'
import { Config } from '../../config'

const { GITHUB: { TOKEN, ORG_NAME} } = Config

export const GetRepos = async (): Promise<Array<string>> => {
  const octokit = new Octokit({ auth: TOKEN })
  const { data } = await octokit.request("GET /orgs/:org/repos", {
    org: ORG_NAME,
    type: 'private'
  })
  .catch(e => {
    throw Error(e)
  })

  return _.map(data, 'full_name')
}
