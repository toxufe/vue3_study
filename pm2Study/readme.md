# pm2

## PM2 的主要特性
- 内建负载均衡（使用 Node cluster 集群模块）
- 后台运行
- 0 秒停机重载
- 具有 Ubuntu 和 CentOS 的启动脚本
- 停止不稳定的进程（避免无限循环）
- 控制台检测
- 提供 HTTP API
- 远程控制和实时的接口 API ( Nodejs 模块,允许和 PM2 进程管理器交互 )


## 安装
npm install pm2 -g


## 命令
### 启动命令
pm2 start 文件名 [options]
options
--watch 监听文件变化
-i max 取决于电脑的线程
-n 修改名字

### 查看日志
pm2 log

### 查看表格
pm2 list

 id │ name     │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼──────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ index    │ default     │ 1.0.0   │ fork    │ 32825    │ 0s     │ 0    │ online    │ 0%       │ 4.0mb    │ Fly      │ disabled


### 停止
pm2 stop [id]

### 重启
pm2 restart [id]

### 删除
pm2 delete [id]