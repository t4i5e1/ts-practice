let age = 22;
age.toUpperCase();

//toUpperCaseはnumber型に存在しないよってエラーを吐く、それが下のやつ
// 2 age.toUpperCase();
//       ~~~~~~~~~~~

//     at createTSError (C:\Users\itota\AppData\Roaming\npm\node_modules\ts-node\src\index.ts:859:12)
//     at reportTSError (C:\Users\itota\AppData\Roaming\npm\node_modules\ts-node\src\index.ts:863:19)
//     at getOutput (C:\Users\itota\AppData\Roaming\npm\node_modules\ts-node\src\index.ts:1077:36)
//     at Object.compile (C:\Users\itota\AppData\Roaming\npm\node_modules\ts-node\src\index.ts:1433:41)
//     at Module.m._compile (C:\Users\itota\AppData\Roaming\npm\node_modules\ts-node\src\index.ts:1617:30)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)
//     at Object.require.extensions.<computed> [as .ts] (C:\Users\itota\AppData\Roaming\npm\node_modules\ts-node\src\index.ts:1621:12)
//     at Module.load (node:internal/modules/cjs/loader:1206:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:1022:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12) {
//   diagnosticCodes: [ 2339 ]
// }
