import {
  DEFAULT_IGNORES,
  setEslintLanguageOptionsBrowser,
  setEslintPluginJest,
  setEslintPluginPrettier,
  setEslintPluginTypescripEslint,
  setEslintPluginUnicorn,
} from './eslint.config.utils.js';

const allowList = [
  'fn',
  'err',
  'Ext',
  'ext',
  'def',
  'len',
  'msg',
  'Msg',
  'obj',
  'Obj',
  'Req',
  'req',
  'sep',
  'Sep',
  'str',
  'tmp',
  'args',
  'Attr',
  'attr',
  'prop',
  'Params',
  'params',
  'escAttr',
  'esc-attr',
];

export default [
  { ignores: DEFAULT_IGNORES },
  setEslintLanguageOptionsBrowser(),
  setEslintPluginUnicorn({ allowList }),
  setEslintPluginJest(),
  setEslintPluginPrettier(),
  ...setEslintPluginTypescripEslint({
    rules: {
      'no-empty': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }),
];
