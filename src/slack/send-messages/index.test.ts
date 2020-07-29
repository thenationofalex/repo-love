import {
  MockedWebClient,
  MockWebClient,
} from '@slack-wrench/jest-mock-web-client'

import { SendMessages } from '.'



describe('SendMessages', () => {
  let client: MockWebClient

  beforeEach(() => {
    // MockedWebClient.mockClear()
    client = MockedWebClient.mock.instances[0]
  })

  it('Sends message to slack', async () => {

    await SendMessages([
      {
        id: '1',
        name: 'repo',
        repos: ['repo-love']
      }
    ])

    const expectMessage = 'Howdy repo 👋, it’s time to give some love to:\n\nrepo-love'

    expect(client.chat.postMessage).toHaveBeenCalledWith(
      expect.objectContaining({text: expectMessage})
    )
  })
})
