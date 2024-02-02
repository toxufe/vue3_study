
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

安装Nginx
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


### 查看linux系统信息
- uname -a - 显示系统信息
- cat /etc/os-release - 查看系统版本信息
- hostnamectl - 查看和设置系统主机名及相关信息
- cat /etc/redhat-release - 显示运行Red Hat Linux发行版的系统的版本信息