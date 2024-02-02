
# Linux 学习
## Linux 添加环境变量

export PATH=$PATH:你的目录/node-v14.19.1-linux-x64/bin

然后执行 source profile 或者重启linux


## npm 配置淘宝代理
配置淘宝代理 npm config set registry https://registry.npm.taobao.org



## linux 文件属性
ls -l 查看文件属性信息

首字母作用

文件的开头对应是 -

目录开头对应的是d

快捷方式对应的是l

U盘对应的是b

鼠标键盘等硬件对应的c

Linux文件属性

每三个一组rw-
可读、可写、可执行

-为缺少权限

创建者、用户组、其他用户权限

ls -l 查看文件属性信息

第二行的数量 代表你有多少文件 和目录里面有多少文件

第三行表示

创建该文件用户的名字  第二个是改文件所属用户组的名字

第一个就是用户名 第二个就是组名

第四行表示改文件和文件夹所属的体积

第五行表示 创建改文件的日期

第六行代表的就是文件或者文件夹等一系列的名称


## Linux权限
RWX 分别是可读 可写 可执行权限

这个权限我们可以修改使用chmod 777 文件名

chown 修改文件所属用户和用户组

我们先学习一组规律

读------R对应数字4

写------W对应数字2

可执行-----X对应数字1

所以7就是可读可写可执行权限

我们可以创建一个用户测试一下 

创建账号 使用adduser 账号  adduser xiaoman

设置密码 passwd 给用户设置密码 passwd xiaoman


## Nginx
俄罗斯程序员开发
官方数据测试表明能够支持高达 50,000 个并发连接数的响应。


负载均衡（upstream）
- 轮询
    - 轮询方式是Nginx负载默认的方式，顾名思义，所有请求都按照时间顺序分配到不同的服务上，如果服务Down掉，可以自动剔除
- 权重
    - 指定每个服务的权重比例，weight和访问比率成正比，通常用于后端服务机器性能不统一，将性能好的分配权重高来发挥服务器最大性能

动静分离

### 安装Linux

#### 安装Nginx
1、安装gcc

安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装：

yum install gcc-c++
2、PCRE pcre-devel 安装

PCRE(Perl Compatible Regular Expressions) 是一个Perl库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx也需要此库。命令：

yum install -y pcre pcre-devel
3、zlib 安装

zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。

yum install -y zlib zlib-devel
4、OpenSSL 安装
OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。
nginx 不仅支持 http 协议，还支持 https（即在ssl协议上传输http），所以需要在 Centos 安装 OpenSSL 库。

yum install -y openssl openssl-devel
5.下载Nginx

wget https://nginx.org/download/nginx-1.19.9.tar.gz 
6.解压nginx

tar -zxvf nginx-1.19.9.tar.gz
cd nginx-1.19.9
7.执行nginx-configure文件

./configure
8.make命令编译

执行完后会有一个MakeFile文件夹

make 是一个命令工具，它解释 Makefile 中的指令（应该说是规则）。在 Makefile文件中描述了整个工程所有文件的编译顺序、编译规则

make
make install
9.查询nginx 安装目录

whereis nginx
10.进入安装目录执行nginx

前往安装目录找到sbin 执行nginx

./nginx
yum install 404解决方案
1、进入配置文件内，删除所有的.repo文件（也可以备份）

#进入配置文件夹
cd /etc/yum.repos.d/
#删除旧的配置文件
rm *.repo
#输入“y”回车确认
ls确保该目录下的.repo文件已完全删除
下载可以用的.repo文件

wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
如果你没有安装wget，也可以用下面命令：

curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
运行 yum makecache 生成缓存
yum makecache
 

Linux 防火墙 
1、firewalld的基本使用

启动： systemctl start firewalld

查看状态： systemctl status firewalld 

停止：systemctl stop firewalld 

禁用：systemctl disable firewalld

2.systemctl是CentOS7的服务管理工具中主要的工具，它融合之前service和chkconfig的功能于一体。

启动一个服务：systemctl start firewalld.service
关闭一个服务：systemctl stop firewalld.service
重启一个服务：systemctl restart firewalld.service
显示一个服务的状态：systemctl status firewalld.service
在开机时启用一个服务：systemctl enable firewalld.service
在开机时禁用一个服务：systemctl disable firewalld.service
查看服务是否开机启动：systemctl is-enabled firewalld.service
查看已启动的服务列表：systemctl list-unit-files|grep enabled
查看启动失败的服务列表：systemctl --failed

3.配置firewalld-cmd

查看版本： firewall-cmd --version

查看帮助： firewall-cmd --help

显示状态： firewall-cmd --state

查看所有打开的端口： firewall-cmd --zone=public --list-ports

更新防火墙规则： firewall-cmd --reload

查看区域信息:  firewall-cmd --get-active-zones

查看指定接口所属区域： firewall-cmd --get-zone-of-interface=eth0

拒绝所有包：firewall-cmd --panic-on

取消拒绝状态： firewall-cmd --panic-off

查看是否拒绝： firewall-cmd --query-panic

那怎么开启一个端口呢

添加

firewall-cmd --zone=public --add-port=80/tcp --permanent    （--permanent永久生效，没有此参数重启后失效）

重新载入

firewall-cmd --reload

查看

firewall-cmd --zone= public --query-port=80/tcp

删除

firewall-cmd --zone= public --remove-port=80/tcp --permanent
————————————————


#### Nginx命令
 - nginx -s quit 优雅的关闭方式，在退出前完成已经接受的请求处理。
 - nginx -s reload 重载Nginx的配置文件
 - nginx -t 检查nginx配置文件是否有语法错误，可以查看nginx的配置文件位置。


 Nginx的主配置文件是nginx.conf，这个配置文件一共由三部分组成，分别为全局块、events块和http块。

在http块中，又包含http全局块、多个server块。

每个server块中，可以包含server全局块和多个location块。在同一配置块中嵌套的配置块，各个之间不存在次序关系

1.全局快
全局块是默认配置文件从开始到events块之间的一部分内容，主要设置一些影响Nginx服务器整体运行的配置指令，因此，这些指令的作用域是Nginx服务器全局。

user [user] [group]  指定可以运行nginx服务的用户和用户组，只能在全局块配置 user指令在Windows上不生效，如果你制定具体用户和用户组会报警告
worker_processes nginx进程数量worker_processes 比如设置为2 nginx将会开启一个master进程和2两个worker进程
pid  logs/nginx.pid 存放pid文件
error_log  logs/error.log;  全局错误日志类型 debug info warn error 存放地址
2.events块
events块涉及的指令主要影响Nginx服务器与用户的网络连接。常用到的设置包括是否开启对多worker process下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型处理连接请求，每个worker process可以同时支持的最大连接数等

accept_mutex 默认开启-开启之后nginx 的多个worker将会以串行的方式来处理，只会有一个worker将会被唤起，其他的worker继续睡眠，如果不开启将会造成惊群效应多个worker全部唤起不过只有一个Worker能获取新连接，其它的Worker会重新进入休眠状态

worker_connections 单个进程最大连接数（最大连接数=连接数+进程数）

3.http块
http块是Nginx服务器配置中的重要部分，代理、缓存和日志定义等绝大多数的功能和第三方模块的配置都可以放在这个模块中。

include指令，用于引入其他的配置文件
default_type 如果Web程序没设置，Nginx也没对应文件的扩展名，就用Nginx 里默认的 default_type定义的处理方式。default_type application/octet-stream; #nginx默认文件类型
log_format指令，用于定义日志格式，此指令只能在http块中进行配置
sendfile 简单来说就是启用sendfile()系统调用来替换read()和write()调用，减少系统上下文切换从而提高性能，当 nginx 是静态文件服务器时，能极大提高nginx的性能表现
keepalive_timeout HTTP 有一个 KeepAlive 模式，它告诉 webserver 在处理完一个请求后保持这个 TCP 连接的打开状态。若接收到来自客户端的其它请求，服务端会利用这个未被关闭的连接，而不需要再建立一个连接。
gzip 开启Gzip压缩功能， 可以使网站的css、js 、xml、html 文件在传输时进行压缩，提高访问速度, 进而优化Nginx性能
4.server块
每一个http块都可以包含多个server块，而每个server块就相当于一台虚拟主机，它内部可有多台主机联合提供服务，一起对外提供在逻辑上关系密切的一组服务

listen指令的配置非常灵活，可以单独制定ip，单独指定端口或者同时指定ip和端口
listen 127.0.0.1:8000;  #只监听来自127.0.0.1这个IP，请求8000端口的请求
listen 127.0.0.1; #只监听来自127.0.0.1这个IP，请求80端口的请求（不指定端口，默认80）
listen 9999; #监听来自所有IP，请求9999端口的请求
listen *:9999; #和上面效果一样
listen localhost:8000; #和第一种效果一致
 
server_name nginx 允许一个虚拟主机有一个或多个名字，也可以使用通配符"*"来设置虚拟主机的名字  支持 ip 域名 通配符 正则等

 server_name  localhost;
5.location块
每个server块中可以包含多个location块。在整个Nginx配置文档中起着重要的作用，而且Nginx服务器在许多功能上的灵活性往往在location指令的配置中体现出来

location 指令可以分为以下 3 类：

前缀字符串匹配
正则表达式匹配
用于内部跳转的命名location
前缀字符串匹配
精确匹配 =
前缀匹配 ^~（立刻停止后续的正则搜索）
按文件中顺序的正则匹配 ~或~*
匹配不带任何修饰的前缀匹配。
location root 
root 指定目录的上级目录，并且该上级目录要含有locatoin指定名称的同名目录。

location /img/ {
	root /var/www/image;
}
若按照这种配置的话，则访问/img/目录下的文件时，nginx会去/var/www/image/img/目录下找文件
————————————————

版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/qq1195566313/article/details/124217010

### 查看linux系统信息
- uname -a - 显示系统信息
- cat /etc/os-release - 查看系统版本信息
- hostnamectl - 查看和设置系统主机名及相关信息
- cat /etc/redhat-release - 显示运行Red Hat Linux发行版的系统的版本信息

### 查看linux进程
pe -ef | grep nginx

### Nginx-Vue-History-404问题
Vue  histroy 模式 跳转路由404 问题

问题原因

我们的服务器是根据页面路由，去按路径寻找资源的。我们打包好的web站点只有一个html页面，不存在其他资源目录下的html，服务器找不到对应页面所以才报404。

解决方案

try_files $uri $uri/ /index.html;

如果给出的file都没有匹配到，则重新请求最后一个参数给定的uri，就是新的location匹配

常见的变量：

- $uri 当前请求的 URI，但不含“？”后的参数
- $args 当前请求的参数，即“？”后的宇符串
- $arg_xxx 当前请求里的某个参数，“arg ”后是参数的名字
- $http_xxx 当前请求里的 xxx 头部对应的值
- $sent_http_xxx 返回给客户端的响应头部对应的值
- $remote_addr 客户端IP 地址。
- $http_cookie 获取cookie值
- $cookie_xxx 当前请求的cookie xxx对应的值
- $request_uri 浏览器发起的不作任何修改的请求的url中的path 如在www.baidu.com/p1/file?d=111, 其值为/p1/file?d=111
- $uri 指当前的请求URI，不包括任何参数，反映任何内部重定向或index模块所做的修改
- $request_method 请求方法


