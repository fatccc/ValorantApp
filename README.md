# ValorantApp

瓦罗兰特游戏内信息查询软件（Java后端）。

## 环境

openjdk 11.0.10 2021-01-19 (AdoptOpenJDK11U-LTS-jdk_x64_windows_hotspot_11.0.10_9)

IntelliJ IDEA 2022.2


## 项目构建

### 打包

```shell
cd ValorantApp
mvn clean package
```

## release

使用 `exe4j` 把项目 jar包编译成 _jar.exe 可执行文件；

使用 `Inno Setup` 把 _jar.exe、jre（openjdk-11.0.10+9-jre）、mysql（mysql-8.0.28-winx64）全部打包进一个 .exe 安装文件中。

### 安装

双击 `ValorantAppSetup.exe` 进行安装。

安装过程会自动执行：

1. 解压上述所有内容
2. 初始化数据库，安装 mysql 服务并设置自启动
3. 创建数据库用户（root/root）
4. 创建数据库 valorant_dev 与数据库表（详见 [valorant_dev.sql](https://github.com/Ultronxr/ValorantApp/blob/main/exe/mysql-8.0.28-winx64/valorant_dev.sql)）

### 卸载

双击安装根目录下的 `unins000.exe` 进行卸载。

卸载过程会自动执行：

1. 删除 mysql 服务
2. 删除安装目录下的所有文件（_⚠警告：包括数据库文件，如需保留数据请手动 dump_ ）

### 使用

+ 服务端：安装完成后双击桌面快捷方式启动，或双击安装根目录下的 `ValorantApp_jar.exe` 启动；
+ 浏览器：访问 http://localhost:9600/static/html/index.html 进入网页。

服务端项目会连接本地的数据库。

### 有关 release 中的文件

+ **ValorantApp-x.x.jar** 项目打包的 jar包（mvn package）
+ **ValorantApp_jar.exe** 使用 exe4j 把 jar包编译成的 _jar.exe 可执行文件
+ **ValorantAppSetup.exe** 使用 Inno Setup 把 _jar.exe、jre、mysql 全部打包的完整安装包
