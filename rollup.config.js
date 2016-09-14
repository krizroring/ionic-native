import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

function resolveRxJS() {
  return {
    resolveId(id) {
      console.log("id: ", id);
      if (id === '@reactivex/rxjs') {
        return process.cwd() + '/node_modules/rxjs-es/Rx.js';
      }
    }
  };
}

export default {
  'entry': 'dist/esm/index.js',
  'dest': 'dist/ionic.native.js',
  'sourceMap': true,
  'format': 'iife',
  'moduleName': 'IonicNative',
  'plugins': [
    resolveRxJS(),
    nodeResolve({
      'browser': true,
      'module': true,
      'jsnext': true,
      'main': true
    }),
    commonjs(),
    babel({
      'exclude': 'node_modules/**'
    })
  ]
};
