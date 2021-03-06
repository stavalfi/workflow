import {
  executeFlowActionCreator,
  finishFlowActionCreator,
  FlowState,
  parse,
  reducer,
  updateConfigActionCreator,
} from '@flower/index'

const state = (state: FlowState) => state

describe('finishFlow', () => {
  it('1 - finish a activeFlow', () => {
    const initialState: FlowState = {
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
        reducer(
          reducer(initialState, updateConfigActionCreator({ payload: configuration })),
          executeFlowActionCreator({ flowName: 'a', payload: { activeFlowId: '1' } }),
        ),
        finishFlowActionCreator({ flowName: 'a', payload: { activeFlowId: '1', flowId: configuration.flows[0].id } }),
      ),
    ).toEqual(
      state({
        splitters: {
          extends: '/',
        },
        flows: configuration.flows,
        activeFlows: [],
        finishedFlows: [
          {
            id: '1',
            flowName: 'a',
            flowId: configuration.flows[0].id,
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
  it('2 - finish a activeFlow that has already been finished', () => {
    const initialState: FlowState = {
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
        reducer(
          reducer(
            reducer(initialState, updateConfigActionCreator({ payload: configuration })),
            executeFlowActionCreator({ flowName: 'a', payload: { activeFlowId: '1' } }),
          ),
          finishFlowActionCreator({ flowName: 'a', payload: { activeFlowId: '1', flowId: configuration.flows[0].id } }),
        ),
        finishFlowActionCreator({ flowName: 'a', payload: { activeFlowId: '1', flowId: configuration.flows[0].id } }),
      ),
    ).toEqual(
      state({
        splitters: {
          extends: '/',
        },
        flows: configuration.flows,
        activeFlows: [],
        finishedFlows: [
          {
            id: '1',
            flowName: 'a',
            flowId: configuration.flows[0].id,
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
})
