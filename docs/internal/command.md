# 命令行
- start 开启测试用静态服务器,监听本地3000端口,文件在/server/staticServer.js,默认开启gzip,并且压缩等级为最高(level9)
- dev 进入开发模式,监听本地3000端口
- build 打包源代码
- clean:mock 清除mock数据,之后重启mock服务器时拥有全新数据
- start:mock 开启mockApi服务器,文件在/server/mockServer.js