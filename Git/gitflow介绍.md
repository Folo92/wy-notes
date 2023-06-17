[gitflow介绍_一条没有感情的小鲤鱼的博客-CSDN博客](https://blog.csdn.net/ku_carp/article/details/119105237) 

gitflow介绍
-----------
 gitflow是git的一种工作流程规范,由Vincent Driessen最先提出来,目的是为了解决分支和commit杂乱无章的问题,在实际开发过程中,若多名程序员开发同一个项目时很容易造成代码混乱甚至代码丢失的情况,而合理的运用gitflow规范可以很好地解决这个问题.如果你的公司很重视代码review,那么gitflow更是你的不二之选.

gitflow五种分支
-----------

### \- Production 分支

也就是我们经常使用的Master分支，这个分支最近发布到生产环境的代码，最近发布的Release， 这个分支只能从其他分支合并，不能在这个分支直接修改

### \- Develop 分支

这个分支是我们是我们的主开发分支，包含所有要发布到下一个Release的代码，这个主要合并与其他分支，比如Feature分支

### \- Feature 分支

这个分支主要是用来开发一个新的功能，一旦开发完成，我们合并回Develop分支进入下一个Release

### \- Release分支

当你需要一个发布一个新Release的时候，我们基于Develop分支创建一个Release分支，完成Release后，我们合并到Master和Develop分支

### \- Hotfix分支

当我们在Production发现新的Bug时候，我们需要创建一个Hotfix, 完成Hotfix后，我们合并回Master和Develop分支，所以Hotfix的改动会进入下一个Release

gitflow流程描述
-----------

首先在我们项目中有两条并行的分支,也就是master分支和develop分支,这两分支永远是代码同步的状态,也就是说,当任意一条分支发生改变时,另一条分支也要跟着改变.其中master分支部署于生产环境,develop分支用于开发  
![](https://img-blog.csdnimg.cn/2ac8f7ec64244324914f06549ede42ab.png#pic_center)

如图,develop为开发分支,master为主分支,同步于develop,部署在生产环境中

接下来说说develop作为开发分支,程序员们在合作开发过程中是如何去使用的,也引出来要介绍的feature分支  
![](https://img-blog.csdnimg.cn/5f92b87f8dab4d439b0ee3242415837b.png#pic_center)

如图,假设在当前项目中,需要开发两个模块,所以基于develop分支打下来两个feature分支(feature分支为功能分支),因为模块1功能点较多,所以程序员小王和小李两个人去开发模块1;模块2功能点较少,所以程序员小张一个人去开发模块2.

在开发模块1时,因为两个人同步开发,所以应当基于feature/order\_upgrate\_cy\_dev打子分支,两人在各自的子分支下进行开发,当开发完毕后,再从各自的子分支合并到feature/order\_upgrate\_cy\_dev这个分支下,当两人都已合并完成后,先拉下develop最新代码(因为模块2可能已经开发完毕并合并到develop下了),然后就可以把分支feature/order\_upgrate\_cy_dev合并到develop下了,当然在此之前如果能进行代码review能好.

开发模块2同理

在模块1和模块2都开发完成并合并到develop下以后,就要来到第三步了,也就是要介绍的relese分支  
![](https://img-blog.csdnimg.cn/ad5949e8fc214e9ea628693798e4cda5.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2t1X2NhcnA=,size_16,color_FFFFFF,t_70#pic_center)

如图,为release分支,由版本号命名,其作用主要为上线前的准备,包括测试和app质量检测.之前在开发过程中,程序员都会进行单元测试,至少保证了功能实现,但是还要考虑别的因素就需要集成测试,系统测试,验收测试,回归测试了,如果该软件活跃用户较高,还需要压力测试.下面说下release分支的流程,我们从develop分支下打一个release分支下来,命名跟着上一个版本号走,例如上一个版本是v0.1,那么该版本就命名就为v0.2(注意release分支为app大版本的迭代),接下来我们需要把release分支交给测试和质量检测部门去做测试相关的工作,若测试有问题,则程序员需要在release分支下进行代码修改,然后再交由测试,直至测试没问题为止,当测试通过后,就到了上线环节了,我们需要把release分支同时合并到master分支和develop分支下并打上标记,然后线上跑的是master,这一个版本迭代就实现了.

大家可能会有些疑问,之前说的五种分支,还有一种没有涉及到,就已经完成版本迭代了,hotfix分支是干嘛的呢?  
![](https://img-blog.csdnimg.cn/917c6048eb6a47129d8a0754d0349caf.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2t1X2NhcnA=,size_16,color_FFFFFF,t_70#pic_center)

如图,为hotfix分支,其主要目的是线上bug修改,小功能的修改.在软件开发过程中难免会有bug或者新增一个字段这种小需求,作为一个大版本就解决这些小问题是有些合理的,而且bug需要尽快修复不可能去等下一个版本迭代再去修改,这时候我们的hotfix分支就派上用场了.下面说下hotfix主要流程,我们需要先切到master分支,然后在master分支下新建一个hotfix分支,命名规则为在当前release版本号后面写小版本号,例如: 当前的release分支为v0.2,则hotfix分支名为v0.2.1,下个hotfix分支名为v0.2.2,之后就是在hotfix下进行bug修复了,修改完毕后再推到master和develop并打标记,bug就修复成功了

1.新建feature
-----------

git flow init 初始化

git checkout develop 切换到 develop 分支

git checkout -b feature/name 新建feature分支

2.提交合并feature
-------------

在feature下开发完功能后

git pull origin develop拉去最新代码(避免冲突)

git add . 提交

git commit -m ‘注释’ 提交注释

git push 提交

在github上申请合并

3.release分支
-----------

切到develop分支

git flow release start v.1.0 创建release分支

交给产品测试,测试完成后

git flow release finish v.1.0

git push origin master develop --tags 推到master和develop并打标记

4.hotfix分支
----------

切到main分支

git flow hotfix start v.1.1 创建hotfix分支

线上代码修复完成后

git flow hotfix finish v.1.1 完成hotfix分支

git push origin master develop --tags 推到master和develop并打标记