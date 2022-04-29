// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Alert/alert.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Alert/style/index.ts?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Alert/style/index.scss?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Alert/demo/withTitle.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Alert/demo/withClosed.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Button/demo/basic.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Button/demo/withSize.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Button/demo/withDisabled.tsx?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trelA" */'D:/myself/DQ-UI/src/components/Alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"alert.tsx":{"import":"../alert","content":rawCode2},"style/index.ts":{"import":"../style","content":rawCode3},"style/index.scss":{"import":"./index.scss","content":rawCode4}},"dependencies":{"react":{"version":"18.0.0"},"classnames":{"version":"2.3.1"}},"componentName":"Alert","identifier":"alert-basic"},
  },
  'alert-withtitle': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trelA" */'D:/myself/DQ-UI/src/components/Alert/demo/withTitle.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5},"alert.tsx":{"import":"../alert","content":rawCode2},"style/index.ts":{"import":"../style","content":rawCode3},"style/index.scss":{"import":"./index.scss","content":rawCode4}},"dependencies":{"react":{"version":"18.0.0"},"classnames":{"version":"2.3.1"}},"componentName":"Alert","identifier":"alert-withtitle"},
  },
  'alert-withclosed': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trelA" */'D:/myself/DQ-UI/src/components/Alert/demo/withClosed.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6},"alert.tsx":{"import":"../alert","content":rawCode2},"style/index.ts":{"import":"../style","content":rawCode3},"style/index.scss":{"import":"./index.scss","content":rawCode4}},"dependencies":{"react":{"version":"18.0.0"},"classnames":{"version":"2.3.1"}},"componentName":"Alert","identifier":"alert-withclosed"},
  },
  'button-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_nottuB" */'D:/myself/DQ-UI/src/components/Button/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode7}},"dependencies":{},"componentName":"Button","identifier":"button-basic"},
  },
  'button-withsize': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_nottuB" */'D:/myself/DQ-UI/src/components/Button/demo/withSize.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode8}},"dependencies":{},"componentName":"Button","identifier":"button-withsize"},
  },
  'button-withdisabled': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_nottuB" */'D:/myself/DQ-UI/src/components/Button/demo/withDisabled.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode9}},"dependencies":{},"componentName":"Button","identifier":"button-withdisabled"},
  },
};
