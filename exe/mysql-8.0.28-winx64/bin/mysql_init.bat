@echo off
cd /d %~dp0
 
"%cd%\mysqld.exe" --initialize-insecure --user=mysql --console
 
echo -----mysql init successfully-----
 
cd ..
 
set "mysqlpath=%cd%"
 
cd bin
 
mysqld install mysql --defaults-file="%mysqlpath%\my.ini"
 
echo -----mysql service install successfully-----
 
net start mysql
 
sc config mysql start= auto
 
net stop mysql
 
net start mysql
 
cd ..
 
::创建文件夹与数据库同名，如果不建会报Unkouw database xxxx, 
:: md "%cd%\data\valorant_dev"
 
"%cd%\bin\mysqladmin" -u root password root
 
::如果写 %cd%\bin\mysql.exe" -uroot -proot < "%cd%\valorant_dev.sql" 这个语句会报No database selected
:: "%cd%\bin\mysql.exe" -uroot -proot valorant_dev < "%cd%\valorant_dev.sql"
"%cd%\bin\mysql.exe" -uroot -proot < "%cd%\valorant_dev.sql"
pause;
::配置环境变量，我试过也可以不配mysql的环境变量，项目也可运行,因为mysql服务已经自启动了
wmic ENVIRONMENT create name="MYSQL_HOME",username="<system>",VariableValue="%mysqlpath%"
wmic ENVIRONMENT where "name='PATH' and username='<system>'" set VariableValue="%path%;%%MYSQL_HOME%%\bin"

echo -----mysql service command successfully-----
