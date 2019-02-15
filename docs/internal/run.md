## 由于docker下的文件系统缓慢,现已废弃使用docker作为开发环境
## 你可以自己在机器上安装依赖,node的安装推荐使用node版本管理器:nvm-windows(windows系统)或n(类unix系统)
1. 安装node,版本为10及以上,如果使用node版本管理器,记得切换过去
3. 安装yarn
4. 命令行进入到项目目录`cd project-path`
5. 命令行中运行`yarn install`

## 运行项目
### 开发模式
`yarn dev`
### 生产模式
`yarn build && yarn start`