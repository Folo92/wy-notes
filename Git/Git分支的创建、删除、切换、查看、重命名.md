分支的创建、删除、切换、查看、重命名、创建+切换
------------------------

| 分支操作 | 命令 |
| --- | --- |
| 创建分支 | `git branch <name>`  
创建叫name的分支，但仍然停留在当前分支。  
 |
| 删除分支 | `git branch -d <name>`：参数为-D则为强制删除。  
`git push origin --delete <name>` ：删除远程仓库的叫name的分支，同名的本地分支并不会被删除，所以还需要单独删除本地同名分支  
`git branch -dr <remote>/<branch-name>`：没有删除远程分支，只是删除 git branch -r 列表中的追踪分支。一般只有git push命令可以修改远程仓库。 |
| 切换分支 | `git switch <name>`  
`git checkout <name>` |
| 创建+切换分支 | `git switch -c <name>`  
`git checkout -b <name>`  
上方两条命令一个意思：如果分支存在则只切换分支。不存在则创建叫name的分支，然后切换到该分支。相当于两条命令：`git branch <name>`，`git checkout <name>` |
| 查看分支 | `git branch`：查看本地分支，当前分支前面会标一个*号。  
`git branch -r`：查看远程分支。  
`git branch -a`：查看本地分支和远程分支，远程分支会用红色表示出来（如果你开了颜色支持的话）。  
`git branch -vv`：查看本地分支对应的远程分支。 |
| 重命名分支 | `git branch -m oldName newName` |

创建本地跟踪分支并从远程分支拉取代码、建立当前分支与指定远程分支的追踪关系
-------------------------------------

```bash

git branch --track <本地分支名> <远程主机名>/<远程分支名>
git switch -c <本地分支名> <远程主机名>/<远程分支名>
git checkout -b <本地分支名> <远程主机名>/<远程分支名>


$ git branch -u <远程主机名>/<远程分支名>
$ git branch --set-upstream-to <远程主机名>/<远程分支名>

```

git branch、git switch、git checkout的作用
-------------------------------------

| 命令 | 用处 |
| --- | --- |
| `git branch` | 创建分支、删除分支、查看分支、重命名分支、创建本地跟踪分支并从远程分支拉取代码、建立当前分支与指定远程分支的追踪关系 |

| `git switch` | 切换分支、创建+切换分支、创建本地跟踪分支并从远程分支拉取代码 |
| `git checkout` | 切换分支、创建+切换分支、创建本地跟踪分支并从远程分支拉取代码 |

可见`git switch`和`git checkout`在分支操作方面的用处完全一样。那么可以在分支操作上尽量光用`git branch`和`git switch`。

因为`git checkout`除了可以操作分支，它还可以操作文件。这条命令可以重写工作区，是一个很危险的命令。

git checkout 操作文件的命令
--------------------

```bash

$ git checkout -- [file]
$ git checkout [file]


$ git checkout [commit] [file]


$ git checkout .

```

其中一些命令的演示图片可以看我这篇文章
-------------------

[Git命令git checkout、git branch的例子截图_夜中听雪的博客-CSDN博客](https://blog.csdn.net/wpw2000/article/details/115913169)