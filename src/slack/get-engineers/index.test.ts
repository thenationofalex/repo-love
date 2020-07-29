import {
  MockedWebClient,
  MockWebClient,
} from '@slack-wrench/jest-mock-web-client'

import { GetEngineers } from '.'

const SLACK_MEMBER_ID = 'U02XBECGF'
const SLACK_NAME = 'REPO_LOVE'

describe('GetEngineers', () => {
  let client: MockWebClient

  beforeEach(() => {
    // MockedWebClient.mockClear()
    client = MockedWebClient.mock.instances[0]
  })

  it('Fetches a list of engineers from slack', async () => {
    client.conversations.members.mockResolvedValue({
      ok: true,
      members: [
        SLACK_MEMBER_ID
      ]
    })
    client.users.info.mockResolvedValue({
      ok: true,
      user: {
        id: SLACK_MEMBER_ID,
        real_name: SLACK_NAME
      }
    })

    const getEngineers = await GetEngineers()

    expect(getEngineers[0]).toEqual({ id: SLACK_MEMBER_ID, real_name: SLACK_NAME })
  })
})
