# 简介 #
>Visual Studio Code（以下简称vscode）是一个轻量且强大的代码编辑器，支持Windows，OS X和Linux。内置JavaScript、TypeScript和Node.js支持，而且拥有丰富的插件生态系统，可通过安装插件来支持C++、C#、Python、PHP等其他语言。
# 界面 #

![Alt text](https://segmentfault.com/img/bVOfxa?w=1894&h=1008)

# 配置 #

>vscode配置文件是json形式的，修改配置只需要在 /.vscode/ 文件夹下面生成一份setting.json 文件，里面配置对应的选项。这种配置方式只针对当前项目，当然还有全局配置的方式。配置文件不需要自己去生成，vscode有一个配置工作区。

![Alt text](https://segmentfault.com/img/bVOfxq?w=1240&h=671)

# 快捷键扩展 #
## 编辑器与窗口管理 ##

>同时打开多个窗口（查看多个项目）

>打开一个新窗口： Ctrl+Shift+N
关闭窗口： Ctrl+Shift+W
同时打开多个编辑器（查看多个文件）

>新建文件 Ctrl+N
历史打开文件之间切换 Ctrl+Tab，Alt+Left，Alt+Right
切出一个新的编辑器（最多3个）Ctrl+，也可以按住Ctrl鼠标点击Explorer里的文件名
左中右3个编辑器的快捷键Ctrl+1 Ctrl+2 Ctrl+3
3个编辑器之间循环切换 Ctrl+`
编辑器换位置，Ctrl+k然后按Left或Right
代码编辑

## 格式调整 ##
>代码行缩进Ctrl+[， Ctrl+]
折叠打开代码块 Ctrl+Shift+[， Ctrl+Shift+]
Ctrl+C Ctrl+V如果不选中，默认复制或剪切一整行
代码格式化：Shift+Alt+F，或Ctrl+Shift+P后输入format code
修剪空格Ctrl+Shift+X
上下移动一行： Alt+Up 或 Alt+Down
向上向下复制一行： Shift+Alt+Up或Shift+Alt+Down
在当前行下边插入一行Ctrl+Enter
在当前行上方插入一行Ctrl+Shift+Enter

## 光标相关 ##
>移动到行首：Home
移动到行尾：End
移动到文件结尾：Ctrl+End
移动到文件开头：Ctrl+Home
移动到后半个括号 Ctrl+Shift+]
选中当前行Ctrl+i（双击）
选择从光标到行尾Shift+End
选择从行首到光标处Shift+Home
删除光标右侧的所有字Ctrl+Delete
Shrink/expand selection： Shift+Alt+Left和Shift+Alt+Right
Multi-Cursor：可以连续选择多处，然后一起修改，Alt+Click添加cursor或者Ctrl+Alt+Down 或 Ctrl+Alt+Up
同时选中所有匹配的Ctrl+Shift+L
Ctrl+D下一个匹配的也被选中(被我自定义成删除当前行了，见下边Ctrl+Shift+K)
回退上一个光标操作Ctrl+U

## 重构代码 ##

>跳转到定义处：F12
定义处缩略图：只看一眼而不跳转过去Alt+F12
列出所有的引用：Shift+F12
同时修改本文件中所有匹配的：Ctrl+F12
重命名：比如要修改一个方法名，可以选中后按F2，输入新的名字，回车，会发现所有的文件都修改过了。
跳转到下一个Error或Warning：当有多个错误时可以按F8逐个跳转
查看diff 在explorer里选择文件右键 Set file to compare，然后需要对比的文件上右键选择Compare with 'file_name_you_chose'.

## 查找替换 ##

>查找 Ctrl+F
查找替换 Ctrl+H
整个文件夹中查找 Ctrl+Shift+F
显示相关

>全屏：F11
zoomIn/zoomOut：Ctrl + =/Ctrl + -
侧边栏显/隐：Ctrl+B
预览markdown Ctrl+Shift+V