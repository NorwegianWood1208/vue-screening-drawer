# vue-screening-drawer

> A Vue mobile plugin

## 使用手册

### 安装

  npm install vue-screening-drawer --save-dev

### 引入

import screeningDrawer from 'vue-screening-drawer'


### 项目使用
  
#### html
  
``` bash
  <screeningDrawer
      :isPopupShow="true"
      :btnTitle="'提交'"
      :item-value="itemValue"
      @success="hanleCatch"
  />
  // itemValue控制各个模块展示的数据
  // @success点击按钮执行的回调函数
  // :btnTitle控制选择框按钮
  // :isPopupShow控制弹框是否展示
```
#### js数据
  
``` bash
  itemValue: [
    {
      title: '所属公司',
      key: 'entName',
      activeName: ['123456'],
      options: [
        {
          label: '阿里',
          value: '1234565'
        }
      ]
    },
    {
      title: '企业金额',
      key: 'amt',
      activeName: ['10000'],
      options: [
        {
          label: '1万',
          value: '10000'
        }
      ]
    }
    hanleCatch (data) {
      console.log(data)
    }
```

