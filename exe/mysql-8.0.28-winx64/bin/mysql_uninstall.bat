@echo off
title 软件正在卸载中，请不要关闭
cd /d %~dp0
net stop mysql
cd ..
cd bin
mysqld --remove
wmic ENVIRONMENT where "name='MYSQL_HOME'" delete
echo 删除成功
exit