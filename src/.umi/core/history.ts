// @ts-nocheck
import { createBrowserHistory, History } from 'D:/前端项目学习/react-ui-library-tutorial/dq-ui/node_modules/umi/node_modules/@umijs/runtime';

let options = {
  "basename": "/DQ-UI"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

// remove initial history because of ssr
let history: History = process.env.__IS_SERVER ? null : createBrowserHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createBrowserHistory(options);
  }

  return history;
};

export { history };
