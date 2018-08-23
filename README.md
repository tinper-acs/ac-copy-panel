## ac-copy-panel

>  代码示例展示板


```
$ ynpm install @yonyou/ac-copy-panel --save

引入

import AcPanel from '@yonyou/ac-copy-panel';

样式引入

import '@yonyou/ac-copy-panel/build/ac-copy-panel.css';
```

##效果
 
 

## API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|copyable|是否可复制|boolean|true |
|code|待展示的代码示例|string|- |

* 当前展示板集成Panel所有的属性
#### Panel

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|collapsible|是否添加折叠|boolean|-|
|onSelect|有折叠效果时选中的效果|function|-|
|defaultExpanded|默认是否打开|boolean|false|
|expanded|折叠是否展开|object|-|
|onEnter|开始显示时的钩子函数|function|-|
|onEntering|显示时的钩子函数|function|-|
|onEntered|显示完成后的钩子函数|function|-|
|onExit|隐藏开始时的钩子函数|function|-|
|onExiting|隐藏进行时的钩子函数|function|-|
|onExited|隐藏结束时的钩子函数|function|-|
|header|头部|node|-|
|headerStyle|传递给头部的style|object|-|
|footer|尾部|node|-|
|footerStyle|传递给尾部的style|object|-|
|eventKey|当多个panel存在时,每个panel的标记|any|-|
|colors|panel的颜色|primary\accent\success\info\warning\danger\default\bordered|default|
       

#### 开发调试

```sh
$ cd @yonyou/ac-copy-panel
$ npm install
$ npm run dev
```

