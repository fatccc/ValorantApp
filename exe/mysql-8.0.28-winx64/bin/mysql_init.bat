@echo off

chcp 65001

cd /d %~dp0
"%cd%\mysqld.exe" --initialize-insecure --user=mysql --console
echo MySQL初始化。

cd ..
set "mysqlpath=%cd%"
cd bin
mysqld install mysql --defaults-file="%mysqlpath%\my.ini"
echo MySQL服务安装。

net start mysql
sc config mysql start=auto
net stop mysql
net start mysql
echo MySQL服务设置自启动。

cd ..
"%cd%\bin\mysqladmin" -u root password root
:: 数据库创建语句包含在 .sql 文件中
"%cd%\bin\mysql.exe" -uroot -proot < "%cd%\valorant_dev.sql"
echo 数据库创建、数据库表导入。

echo MySQL安装完成。
pause;

:: 配置环境变量（可选）
wmic ENVIRONMENT create name="MYSQL_HOME",username="<system>",VariableValue="%mysqlpath%"
wmic ENVIRONMENT where "name='PATH' and username='<system>'" set VariableValue="%path%;%%MYSQL_HOME%%\bin"
echo MySQL环境变量配置完成。
