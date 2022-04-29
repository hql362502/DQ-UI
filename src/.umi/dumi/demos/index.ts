// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Alert/demo/withTitle.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Alert/alert.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Alert/style/index.ts?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Alert/style/index.scss?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Alert/demo/withClosed.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Button/demo/basic.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Button/button.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Button/style/index.ts?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Button/style/index.scss?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Button/demo/withSize.tsx?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!D:/myself/DQ-UI/src/components/Button/demo/withDisabled.tsx?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trelA" */'D:/myself/DQ-UI/src/components/Alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{},"componentName":"Alert","identifier":"alert-basic"},
  },
  'alert-withtitle': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trelA" */'D:/myself/DQ-UI/src/components/Alert/demo/withTitle.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode2},"alert.tsx":{"import":"../alert","content":rawCode3},"style/index.ts":{"import":"../style","content":rawCode4},"style/index.scss":{"import":"./index.scss","content":rawCode5}},"dependencies":{"react":{"version":"18.0.0"},"classnames":{"version":"2.3.1"}},"componentName":"Alert","identifier":"alert-withtitle"},
  },
  'alert-withclosed': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trelA" */'D:/myself/DQ-UI/src/components/Alert/demo/withClosed.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6},"alert.tsx":{"import":"../alert","content":rawCode3},"style/index.ts":{"import":"../style","content":rawCode4},"style/index.scss":{"import":"./index.scss","content":rawCode5}},"dependencies":{"react":{"version":"18.0.0"},"classnames":{"version":"2.3.1"}},"componentName":"Alert","identifier":"alert-withclosed"},
  },
  'button-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_nottuB" */'D:/myself/DQ-UI/src/components/Button/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode7},"button.tsx":{"import":"../button","content":rawCode8},"style/index.ts":{"import":"../style","content":rawCode9},"style/index.scss":{"import":"./index.scss","content":rawCode10}},"dependencies":{"react":{"version":"18.0.0"},"classnames":{"version":"2.3.1"}},"componentName":"Button","identifier":"button-basic"},
  },
  'button-withsize': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_nottuB" */'D:/myself/DQ-UI/src/components/Button/demo/withSize.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode11},"button.tsx":{"import":"../button","content":rawCode8},"style/index.ts":{"import":"../style","content":rawCode9},"style/index.scss":{"import":"./index.scss","content":rawCode10}},"dependencies":{"react":{"version":"18.0.0"},"classnames":{"version":"2.3.1"}},"componentName":"Button","identifier":"button-withsize"},
  },
  'button-withdisabled': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_nottuB" */'D:/myself/DQ-UI/src/components/Button/demo/withDisabled.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode12},"button.tsx":{"import":"../button","content":rawCode8},"style/index.ts":{"import":"../style","content":rawCode9},"style/index.scss":{"import":"./index.scss","content":rawCode10}},"dependencies":{"react":{"version":"18.0.0"},"classnames":{"version":"2.3.1"}},"componentName":"Button","identifier":"button-withdisabled"},
  },
};
