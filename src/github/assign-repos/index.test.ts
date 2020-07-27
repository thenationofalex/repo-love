import { AssignRepos } from '.'

const repos = ['sales', 'api', 'members']
const engineers = [
  { id: '2', real_name: 'Alex'},
  { id: '3', real_name: 'Bob'}
]

describe('AssignRepos', () => {
  it('Assigns repos to engineers', () => {
    const assign = AssignRepos(repos, engineers)
    expect(assign).toEqual(
      expect.arrayContaining([
        expect.objectContaining(
          { id: "2", name: 'Alex' },
        )
      ])
    )
  })
})
