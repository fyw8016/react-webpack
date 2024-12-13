## 初始化项目

### 1 初始化项目

```tsx | pure
npm init -y
npm i webpack webpack-cli -D
npm i react react-dom -S
```
```tsx | pure
新增如下文件目录
├── build
|   ├── webpack.config.js # 公共配置
|   ├── webpack.dev.js  # 开发环境配置
|   └── webpack.prod.js # 打包环境配置
├── public
│   └── index.html # html模板
├── src
|   ├── App.jsx
│   └── index.jsx # react应用入口页面
└── package.json
```

#### public/index.html内容

```tsx | pure
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>webpack5-react</title>
</head>
<body>
  <!-- 容器节点 -->
  <div id="root"></div>
</body>
</html>
```
#### src/App.jsx内容

```tsx | pure
import React from 'react'

function App() {
  return <h2>xxxxx</h2>
}
export default App

```
#### src/index.jsx内容

```tsx | pure
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
if(root) createRoot(root).render(<App />);
```