@echo off

chcp 65001

title 正在卸载MySQL

cd /d %~dp0
net stop mysql
cd ..
cd bin
mysqld --remove
:: wmic ENVIRONMENT where "name='MYSQL_HOME'" delete
echo MySQL卸载成功

exit
