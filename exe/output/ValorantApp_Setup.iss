; 脚本由 Inno Setup 脚本向导 生成！
; 有关创建 Inno Setup 脚本文件的详细资料请查阅帮助文档！

#define MyAppName "ValorantApp"
#define MyAppVersion "1.2"
#define MyAppPublisher "Ultronxr"
#define MyAppURL "https://github.com/Ultronxr/ValorantApp"
#define MyAppExeName "ValorantApp_jar.exe"
#define WorkPath "D:\AllFilesCode\workspace\IntelliJIDEA\ValorantApp\exe"

[Setup]
; 注: AppId的值为单独标识该应用程序。
; 不要为其他安装程序使用相同的AppId值。
; (若要生成新的 GUID，可在菜单中点击 "工具|生成 GUID"。)
AppId={{23F85710-96D0-42BD-AB11-FEF0F3F782CD}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\{#MyAppName}
DefaultGroupName={#MyAppName}
; DisableProgramGroupPage=yes
; 以下行取消注释，以在非管理安装模式下运行（仅为当前用户安装）。
;PrivilegesRequired=lowest
OutputBaseFilename=ValorantAppSetup
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "chinesesimp"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
Source: "{#WorkPath}\output\{#MyAppExeName}"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#WorkPath}\openjdk-11.0.10+9-jre\*"; DestDir: "{app}\openjdk-11.0.10+9-jre"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "{#WorkPath}\mysql-8.0.28-winx64\*"; DestDir: "{app}\mysql-8.0.28-winx64"; Flags: ignoreversion recursesubdirs createallsubdirs
; 注意: 不要在任何共享系统文件上使用“Flags: ignoreversion”

[INI]
;修改数据库配置文件
Filename:"{app}\mysql-8.0.28-winx64\my.ini";Section:"mysqld";Key:"basedir"; String:"{app}\mysql-8.0.28-winx64"
Filename:"{app}\mysql-8.0.28-winx64\my.ini";Section:"mysqld";Key:"datadir"; String:"{app}\mysql-8.0.28-winx64\data"
;Filename:"{app}\mysql-8.0.28-winx64\my.ini";Section:"mysqld";Key:"port"; String:"3308"
;Filename:"{app}\mysql-8.0.28-winx64\my.ini";Section:"client";Key:"port"; String:"3308"

[Icons]
; 开始菜单文件夹：包括应用程序快捷方式、浏览器链接、程序卸载快捷方式
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{group}\{cm:ProgramOnTheWeb,{#MyAppName}}"; Filename: "{#MyAppURL}"
Name: "{group}\{cm:UninstallProgram,{#MyAppName}}"; Filename: "{uninstallexe}"
; 单独的图标：开始菜单快捷方式、桌面快捷方式
Name: "{autoprograms}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent
Filename: "{app}\mysql-8.0.28-winx64\bin\mysql_init.bat"

[UninstallRun]
Filename: "{app}\mysql-8.0.28-winx64\bin\mysql_uninstall.bat"

[UninstallDelete]
Type:filesandordirs;Name:"{app}"
