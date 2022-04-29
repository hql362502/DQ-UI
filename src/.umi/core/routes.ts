// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'D:/myself/DQ-UI/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ 'D:/myself/DQ-UI/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'D:/myself/DQ-UI/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/components/alert",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__Alert__index.md' */'D:/myself/DQ-UI/src/components/Alert/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/Alert/index.md",
          "updatedTime": 1651220610460,
          "componentName": "Alert",
          "title": "Alert 警告提示",
          "nav": {
            "title": "组件",
            "order": 2,
            "path": "/components"
          },
          "group": {
            "title": "反馈",
            "order": 1,
            "__fallback": true,
            "path": "/components/alert"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Alert 警告提示",
              "heading": "alert-警告提示"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 3,
              "value": "带标题的警告提示",
              "heading": "带标题的警告提示"
            },
            {
              "depth": 3,
              "value": "带关闭按钮的警告提示",
              "heading": "带关闭按钮的警告提示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Alert 警告提示 - DQ UI"
      },
      {
        "path": "/components/button",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__Button__index.md' */'D:/myself/DQ-UI/src/components/Button/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/Button/index.md",
          "updatedTime": 1651223454774,
          "componentName": "Button",
          "title": "Button 按钮组件",
          "nav": {
            "title": "组件",
            "order": 2,
            "path": "/components"
          },
          "group": {
            "title": "通用",
            "order": 1,
            "__fallback": true,
            "path": "/components/button"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Button 按钮组件",
              "heading": "button-按钮组件"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "按钮类型",
              "heading": "按钮类型"
            },
            {
              "depth": 3,
              "value": "按钮大小",
              "heading": "按钮大小"
            },
            {
              "depth": 3,
              "value": "按钮不可选",
              "heading": "按钮不可选"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Button 按钮组件 - DQ UI"
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'D:/myself/DQ-UI/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1650987528000,
          "title": "DQ UI",
          "hero": {
            "title": "DQ UI",
            "desc": "<div class=\"markdown\"><p>一个基于React框架的UI组件库</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/getting-started"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "开箱即用",
              "desc": "<div class=\"markdown\"><p>使用npm下载安装，在代码中引入使用即可</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "按需加载",
              "desc": "<div class=\"markdown\"><p>代码导入引入组件需要的模块，不需要加载组件库所有代码</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "在线预览",
              "desc": "<div class=\"markdown\"><p>可通过在线文档直接查看组件的效果和源码</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": []
        },
        "title": "DQ UI - DQ UI"
      },
      {
        "path": "/components",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/components/alert"
      }
    ],
    "title": "DQ UI",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
