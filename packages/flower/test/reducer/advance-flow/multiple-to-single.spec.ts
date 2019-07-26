it('11', () => {})

// import { FlowState } from "@flower/types";
// const state = (state: FlowState) => state
// describe('multiple nodes go to single node', () => {
//   it(`1 - advance two nodes to a joined node`, () => {
//     const configuration = parse('a:b,c:d')
//     const flow: ParsedFlow = configuration.flows[0]
//     const initialState: FlowState = {
//       ...configuration,
//       activeFlows: [
//         {
//           id: '1',
//           flowId: flow.id,
//           queue: [
//             {
//               id: '1',
//               flowId: flow.id,
//               fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//               toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//             },
//           ],
//           graphConcurrency: flow.graph.map(node => {
//             switch (['a', 'b', 'c', 'd'].find(char => node.path.includes(char))) {
//               case 'a':
//                 return {
//                   concurrencyCount: 0,
//                   requests: [],
//                 }
//               case 'b':
//                 return {
//                   concurrencyCount: 0,
//                   requests: [],
//                 }
//               case 'c':
//                 return {
//                   concurrencyCount: 1,
//                   requests: [],
//                 }
//               default:
//                 // 'd'
//                 return {
//                   concurrencyCount: 0,
//                   requests: [
//                     {
//                       id: '1',
//                       flowId: flow.id,
//                       fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//                       toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//                     },
//                   ],
//                 }
//             }
//           }),
//         },
//       ],
//       finishedFlows: [],
//       advanced: [],
//     }
//     expect(
//       reducer(
//         initialState,
//         advanceFlowActionCreator({
//           id: '1',
//           flowId: flow.id,
//           fromNodeIndex: flow.graph.findIndex(node => node.path.includes('c')),
//           toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//         }),
//       ),
//     ).toEqual(
//       state({
//         ...configuration,
//         activeFlows: [
//           {
//             id: '1',
//             flowId: flow.id,
//             queue: [],
//             graphConcurrency: flow.graph.map(node => {
//               switch (['a', 'b', 'c', 'd'].find(char => node.path.includes(char))) {
//                 case 'a':
//                   return {
//                     concurrencyCount: 0,
//                     requests: [],
//                   }
//                 case 'b':
//                   return {
//                     concurrencyCount: 0,
//                     requests: [],
//                   }
//                 case 'c':
//                   return {
//                     concurrencyCount: 0,
//                     requests: [],
//                   }
//                 default:
//                   // 'd'
//                   return {
//                     concurrencyCount: 1,
//                     requests: [],
//                   }
//               }
//             }),
//           },
//         ],
//         finishedFlows: [],
//         advanced: [
//           {
//             id: '1',
//             flowId: flow.id,
//             fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//             toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//           },
//           {
//             id: '1',
//             flowId: flow.id,
//             fromNodeIndex: flow.graph.findIndex(node => node.path.includes('c')),
//             toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//           },
//         ],
//       }),
//     )
//   })
//
//   it(`2 - try advance to a joined node (node has concurrency=1) and go to requests`, () => {
//     const configuration = parse('a:b,c:d')
//     const flow: ParsedFlow = configuration.flows[0]
//     const initialState: FlowState = {
//       ...configuration,
//       activeFlows: [
//         {
//           id: '1',
//           flowId: flow.id,
//           queue: [],
//           graphConcurrency: flow.graph.map(node => {
//             switch (['a', 'b', 'c', 'd'].find(char => node.path.includes(char))) {
//               case 'a':
//                 return {
//                   concurrencyCount: 0,
//                   requests: [],
//                 }
//               case 'b':
//                 return {
//                   concurrencyCount: 0,
//                   requests: [],
//                 }
//               case 'c':
//                 return {
//                   concurrencyCount: 1,
//                   requests: [],
//                 }
//               default:
//                 // 'd'
//                 return {
//                   concurrencyCount: 1,
//                   requests: [],
//                 }
//             }
//           }),
//         },
//       ],
//       finishedFlows: [],
//       advanced: [],
//     }
//     expect(
//       reducer(
//         initialState,
//         advanceFlowActionCreator({
//           id: '1',
//           flowId: flow.id,
//           fromNodeIndex: flow.graph.findIndex(node => node.path.includes('c')),
//           toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//         }),
//       ),
//     ).toEqual(
//       state({
//         ...configuration,
//         activeFlows: [
//           {
//             id: '1',
//             flowId: flow.id,
//             queue: [
//               {
//                 id: '1',
//                 flowId: flow.id,
//                 fromNodeIndex: flow.graph.findIndex(node => node.path.includes('c')),
//                 toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//               },
//             ],
//             graphConcurrency: flow.graph.map(node => {
//               switch (['a', 'b', 'c', 'd'].find(char => node.path.includes(char))) {
//                 case 'a':
//                   return {
//                     concurrencyCount: 0,
//                     requests: [],
//                   }
//                 case 'b':
//                   return {
//                     concurrencyCount: 0,
//                     requests: [],
//                   }
//                 case 'c':
//                   return {
//                     concurrencyCount: 0,
//                     requests: [],
//                   }
//                 default:
//                   // 'd'
//                   return {
//                     concurrencyCount: 1,
//                     requests: [
//                       {
//                         id: '1',
//                         flowId: flow.id,
//                         fromNodeIndex: flow.graph.findIndex(node => node.path.includes('c')),
//                         toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//                       },
//                     ],
//                   }
//               }
//             }),
//           },
//         ],
//         finishedFlows: [],
//         advanced: [],
//       }),
//     )
//   })
//
//   it(`3 - try advance to a joined node (node has concurrency>1) and go to requests`, () => {
//     const configuration = parse({
//       flows: [
//         {
//           graph: 'd',
//           max_concurrency: 100,
//         },
//         {
//           graph: 'a:b,c:d',
//           max_concurrency: 100,
//         },
//       ],
//     })
//     const flow: ParsedFlow = configuration.flows[0]
//     const initialState: FlowState = {
//       ...configuration,
//       activeFlows: [
//         {
//           id: '1',
//           flowId: flow.id,
//           queue: [],
//           graphConcurrency: flow.graph.map(node => {
//             switch (['a', 'b', 'c', 'd'].find(char => node.path.includes(char))) {
//               case 'a':
//                 return {
//                   concurrencyCount: 0,
//                   requests: [],
//                 }
//               case 'b':
//                 return {
//                   concurrencyCount: 0,
//                   requests: [],
//                 }
//               case 'c':
//                 return {
//                   concurrencyCount: 1,
//                   requests: [],
//                 }
//               default:
//                 // 'd'
//                 return {
//                   concurrencyCount: 1,
//                   requests: [],
//                 }
//             }
//           }),
//         },
//       ],
//       finishedFlows: [],
//       advanced: [],
//     }
//     expect(
//       reducer(
//         initialState,
//         advanceFlowActionCreator({
//           id: '1',
//           flowId: flow.id,
//           fromNodeIndex: flow.graph.findIndex(node => node.path.includes('c')),
//           toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//         }),
//       ),
//     ).toEqual(
//       state({
//         ...configuration,
//         activeFlows: [
//           {
//             id: '1',
//             flowId: flow.id,
//             queue: [
//               {
//                 id: '1',
//                 flowId: flow.id,
//                 fromNodeIndex: flow.graph.findIndex(node => node.path.includes('c')),
//                 toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//               },
//             ],
//             graphConcurrency: flow.graph.map(node => {
//               switch (['a', 'b', 'c', 'd'].find(char => node.path.includes(char))) {
//                 case 'a':
//                   return {
//                     concurrencyCount: 0,
//                     requests: [],
//                   }
//                 case 'b':
//                   return {
//                     concurrencyCount: 0,
//                     requests: [],
//                   }
//                 case 'c':
//                   return {
//                     concurrencyCount: 0,
//                     requests: [],
//                   }
//                 default:
//                   // 'd'
//                   return {
//                     concurrencyCount: 1,
//                     requests: [
//                       {
//                         id: '1',
//                         flowId: flow.id,
//                         fromNodeIndex: flow.graph.findIndex(node => node.path.includes('c')),
//                         toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//                       },
//                     ],
//                   }
//               }
//             }),
//           },
//         ],
//         finishedFlows: [],
//         advanced: [],
//       }),
//     )
//   })
//
//   it(`4 - advance two nodes to a joined node that has multiple same requests`, () => {
//     const configuration = parse('a:b,c:d')
//     const flow: ParsedFlow = configuration.flows[0]
//     const initialState: FlowState = {
//       ...configuration,
//       activeFlows: [
//         {
//           id: '1',
//           flowId: flow.id,
//           queue: [
//             {
//               id: '1',
//               flowId: flow.id,
//               fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//               toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//             },
//             {
//               id: '1',
//               flowId: flow.id,
//               fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//               toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//             },
//             {
//               id: '1',
//               flowId: flow.id,
//               fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//               toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//             },
//           ],
//           graphConcurrency: flow.graph.map(node => {
//             switch (['a', 'b', 'c', 'd'].find(char => node.path.includes(char))) {
//               case 'a':
//                 return {
//                   concurrencyCount: 0,
//                   requests: [],
//                 }
//               case 'b':
//                 return {
//                   concurrencyCount: 0,
//                   requests: [],
//                 }
//               case 'c':
//                 return {
//                   concurrencyCount: 1,
//                   requests: [],
//                 }
//               default:
//                 // 'd'
//                 return {
//                   concurrencyCount: 0,
//                   requests: [
//                     {
//                       id: '1',
//                       flowId: flow.id,
//                       fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//                       toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//                     },
//                     {
//                       id: '1',
//                       flowId: flow.id,
//                       fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//                       toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//                     },
//                     {
//                       id: '1',
//                       flowId: flow.id,
//                       fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//                       toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//                     },
//                   ],
//                 }
//             }
//           }),
//         },
//       ],
//       finishedFlows: [],
//       advanced: [],
//     }
//     expect(
//       reducer(
//         initialState,
//         advanceFlowActionCreator({
//           id: '1',
//           flowId: flow.id,
//           fromNodeIndex: flow.graph.findIndex(node => node.path.includes('c')),
//           toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//         }),
//       ),
//     ).toEqual(
//       state({
//         ...configuration,
//         activeFlows: [
//           {
//             id: '1',
//             flowId: flow.id,
//             queue: [
//               {
//                 id: '1',
//                 flowId: flow.id,
//                 fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//                 toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//               },
//               {
//                 id: '1',
//                 flowId: flow.id,
//                 fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//                 toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//               },
//             ],
//             graphConcurrency: flow.graph.map(node => {
//               switch (['a', 'b', 'c', 'd'].find(char => node.path.includes(char))) {
//                 case 'a':
//                   return {
//                     concurrencyCount: 0,
//                     requests: [],
//                   }
//                 case 'b':
//                   return {
//                     concurrencyCount: 0,
//                     requests: [],
//                   }
//                 case 'c':
//                   return {
//                     concurrencyCount: 0,
//                     requests: [],
//                   }
//                 default:
//                   // 'd'
//                   return {
//                     concurrencyCount: 1,
//                     requests: [
//                       {
//                         id: '1',
//                         flowId: flow.id,
//                         fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//                         toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//                       },
//                       {
//                         id: '1',
//                         flowId: flow.id,
//                         fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//                         toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//                       },
//                     ],
//                   }
//               }
//             }),
//           },
//         ],
//         finishedFlows: [],
//         advanced: [
//           {
//             id: '1',
//             flowId: flow.id,
//             fromNodeIndex: flow.graph.findIndex(node => node.path.includes('b')),
//             toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//           },
//           {
//             id: '1',
//             flowId: flow.id,
//             fromNodeIndex: flow.graph.findIndex(node => node.path.includes('c')),
//             toNodeIndex: flow.graph.findIndex(node => node.path.includes('d')),
//           },
//         ],
//       }),
//     )
//   })
// })