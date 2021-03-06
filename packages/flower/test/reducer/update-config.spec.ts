import { Flow, FlowState, parse, reducer, updateConfigActionCreator } from '@flower/index'

const state = (state: FlowState) => state

describe('updateConfig', () => {
  it('1 - update config', () => {
    const initialState = {
      splitters: { extends: 'delimiter1' },
      flows: [],
      activeFlows: [],
      finishedFlows: [],
      advanced: [],
    }
    const configuration = parse({
      splitters: {
        extends: '/',
      },
      flows: ['a'],
    })
    const action = updateConfigActionCreator({ payload: configuration })
    expect(reducer(initialState, action)).toEqual(
      state({
        splitters: {
          extends: '/',
        },
        flows: configuration.flows,
        activeFlows: [],
        finishedFlows: [],
        advanced: [],
      }),
    )
  })

  it('2 - assert that the activeFlows and finishedFlows are not modified', () => {
    const configuration = parse({
      splitters: {
        extends: '/',
      },
      flows: ['a', 'b'],
    })
    const action = updateConfigActionCreator({ payload: configuration })
    const initialState = state({
      splitters: { extends: 'delimiter1' },
      flows: configuration.flows.slice(1),
      activeFlows: [
        {
          id: 'id1',
          flowName: 'a',
          flowId: 'id2',
          queue: [],
          graphConcurrency: [
            {
              concurrencyCount: 0,
              requestIds: [],
            },
          ],
        },
      ],
      finishedFlows: [
        {
          id: 'id2',
          flowName: 'a',
          flowId: 'id2',
          queue: [],
          graphConcurrency: [
            {
              concurrencyCount: 0,
              requestIds: [],
            },
          ],
        },
      ],
      advanced: [],
    })
    expect(reducer(initialState, action)).toEqual(
      state({
        splitters: {
          extends: '/',
        },
        flows: configuration.flows,
        activeFlows: [
          {
            id: 'id1',
            flowName: 'a',
            flowId: 'id2',
            queue: [],
            graphConcurrency: [
              {
                concurrencyCount: 0,
                requestIds: [],
              },
            ],
          },
        ],
        finishedFlows: [
          {
            id: 'id2',
            flowName: 'a',
            flowId: 'id2',
            queue: [],
            graphConcurrency: [
              {
                concurrencyCount: 0,
                requestIds: [],
              },
            ],
          },
        ],
        advanced: [],
      }),
    )
  })

  it('3 - reset the config', () => {
    const initialState = {
      splitters: { extends: 'delimiter1' },
      flows: [],
      activeFlows: [],
      finishedFlows: [],
      advanced: [],
    }
    const configuration = parse({
      splitters: {
        extends: '/',
      },
      flows: ['a'],
    })
    expect(
      reducer(
        reducer(initialState, updateConfigActionCreator({ payload: configuration })),
        updateConfigActionCreator({ payload: { flows: [], splitters: { extends: '1' } } }),
      ),
    ).toEqual(
      state({
        flows: [],
        splitters: { extends: '1' },
        activeFlows: [],
        finishedFlows: [],
        advanced: [],
      }),
    )
  })

  it('4 - assert that the flows that are in use cant be deleted', () => {
    const configuration = parse({
      splitters: {
        extends: '/',
      },
      flows: ['a', 'b'],
    })
    const initialState = state({
      ...configuration,
      activeFlows: [
        {
          id: 'id1',
          flowName: 'a',
          flowId: (configuration.flows.find(f => 'name' in f && f.name === 'a') as Flow).id,
          queue: [],
          graphConcurrency: [
            {
              concurrencyCount: 0,
              requestIds: [],
            },
          ],
        },
      ],
      finishedFlows: [],
      advanced: [],
    })
    expect(reducer(initialState, updateConfigActionCreator({ payload: { flows: [] } }))).toEqual(
      state({
        splitters: { extends: '/' },
        flows: configuration.flows.filter(f => 'name' in f && f.name === 'a'),
        activeFlows: [
          {
            id: 'id1',
            flowName: 'a',
            flowId: (configuration.flows.find(f => 'name' in f && f.name === 'a') as Flow).id,
            queue: [],
            graphConcurrency: [
              {
                concurrencyCount: 0,
                requestIds: [],
              },
            ],
          },
        ],
        finishedFlows: [],
        advanced: [],
      }),
    )
  })
})
