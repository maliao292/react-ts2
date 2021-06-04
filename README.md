### 安装 react-typescript : npx create-react-app NAME --template typescript

## typescript-plugin-css-modules 对css模块命名提示 插件
1. cnpm
2. tsconfig.json 中配置
   ```
      "plugins": [{
     "name": "typescript-plugin-css-modules"
   }]
   ```
3. 在项目根目录 新建 .vscode=》settings.json


## 生命周期函数
1. componentDidMount
2. componentDidUpdate
3. getDerivedStateFromProps(nextProps, prevState) // props
   1.  ```getDerivedStateFromProps是一个静态函数，也就是这个函数不能通过this访问到class的属性，也并不推荐直接访问属性。而是应该通过参数提供的nextProps以及prevState来进行判断，根据新传入的props来映射到state```
4. 
