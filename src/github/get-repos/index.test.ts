import nock from 'nock'
import { GetRepos } from '.'
import { Config } from '../../config'

nock.disableNetConnect()

beforeEach(() => {
  jest.resetModules()
})

describe('GetRepos', () => {
  it('Fetches a list of repos from Github', async () => {
    nock('https://api.github.com')
      .get(`/orgs/${Config.GITHUB.ORG_NAME}/repos?type=private`)
      .reply(200, {
        data: {
          "id": 1296269,
          "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
          "name": "Hello-World",
          "full_name": "octocat/Hello-World",
          "etc": "etc"
        }
      })

    const get = await GetRepos()
    expect(get[0]).toBe('octocat/Hello-World')
  })
})
