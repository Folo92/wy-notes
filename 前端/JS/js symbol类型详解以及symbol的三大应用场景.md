[js symbol类型详解以及symbol的三大应用场景_javascript_望屿-DevPress官方社区](https://huaweicloud.csdn.net/638f1438dacf622b8df8eea2.html?spm=1001.2101.3001.6650.4&utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~activity-4-121962153-blog-125168825.235^v38^pc_relevant_anti_vip&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~activity-4-121962153-blog-125168825.235^v38^pc_relevant_anti_vip&utm_relevant_index=7) 


js symbol类型详解以及symbol的三大应用场景
============================


8.symbol
========

1.什么是symbol
-----------

1.  什么Symbol?  
    Symbol是ES6中新增的一种数据类型, 被划分到了基本数据类型中  
    基本数据类型: 字符串、数值、布尔、undefined、null、Symbol  
    引用数据类型: Object
    
2.  Symbol的作用  
    用来表示一个独一无二的值
    
3.  格式
    
    `let xxx=Symbol(‘标识字符串’);`
    
4.  为什么需要Symbol?
    
    为了避免第三方框架的同名属性被覆盖
    
    > 在企业开发中如果需要对一些第三方的插件、框架进行自定义的时候  
    > 可能会因为添加了同名的属性或者方法, 将框架中原有的属性或者方法覆盖掉  
    > 为了避免这种情况的发生, **框架的作者或者我们**就可以使用Symbol作为属性或者方法的名称
    
5.  如何区分Symbol?  
    在通过Symbol生成独一无二的值时可以设置一个标记  
    这个标记仅仅用于区分, 没有其它任何含义
    
6.  如果特殊情况需要读取这个标记的话
    
    *   symbol类型可以转化为boolean或者字符串，转化为字符串时前面会加上symbol（wyx），不方便
        
    *   可以直接通过description属性获得symbol函数的字符串标识参数
        
        \[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-k8elcTaQ-1639574479276)(C:\\Users\\DELL\\AppData\\Roaming\\Typora\\typora-user-images\\image-20211215202329332.png)\]
        
7.  使用Symbol类型作为属性名
    
    > 对象的属性要么是字符串，要么是symbol类型
    
    默认是字符串，所以不加‘’也可以，如果需要类型为symbol，需要使用\[\]
    
    不可以用`.`来访问,因为点运算符后面总是字符串
    
    Symbol 值作为属性名时，该属性还是公开属性，不是私有属性。
    
8.  举个栗子
    
    ```js
    //后面的括号可以给symbol做上标记便于识别
    let name=Symbol('name');
    let say=Symbol('say');
    let obj= {
      //如果想 使用变量作为对象属性的名称，必须加上中括号，.运算符后面跟着的都是字符串
      \[name\]: 'lnj',
      \[say\]: function () {
        console.log('say')
      }
    }
    obj.name='it666';
    obj\[Symbol('name')\]='it666'
    console.log(obj)
    ```
    

*   我们假设obj是一个外部框架里面的对象，原始状态是这样的

![](https://img-blog.csdnimg.cn/1b2bc88443ca4c06aec0761604da4e86.png)

*   执行`obj.name='it666'; obj[Symbol('name')]='it666'`

![](https://img-blog.csdnimg.cn/477b9ce578614df4809cf951c35eeea1.png)

*   都没有覆盖原来的it666，因为都是独一无二的，那么就默认新创建一个name属性

2.注意点
-----

1.  Symbol是基本数据类型！！！！不要加new哦
2.  后面括号可以传入一个字符串，只是一个标记，方便我们阅读，没有任何意义
3.  类型转化的时候不可转化为数值

```js
//只能转化为字符串和布尔值
console.log(String(name));
console.log(Boolean(name));
console.log(Number(name))
```

4.  不能做任何运算

```js
let name=Symbol('name');
console.log(name+111)
console.log(name+'ccc')
//全部报错
```

5.  symbol生成的值作为属性或者方法的时候，一定要保存下来，否则后续无法使用

```js
let name=Symbol('name');
let obj={
  // name:'lnj',
    \[Symbol('name')\]:'lbj'
}
console.log(obj.name);  //访问不到，因为  \[Symbol('name')\]又是一个新的值，和上面的name不是同一个
```

6.  for循环遍历对象的时候是无法遍历出symbol的属性和方法的

Object.getOwnPropertySymbols()

```js
let name=Symbol('name');
let obj={
  \[name\]:'lnj',
    age:12,
    teacher:'wyx'
}
for(let key in obj){
    console.log(key)   //只能打印出age和teacher
}
//这个方法可以单独取出Symbol(name)
console.log(Object.getOwnPropertySymbols(obj))
```

3\. symbol的应用
-------------

1.  在企业开发中如果需要对一些第三方的插件、框架进行自定义的时候  
    可能会因为添加了同名的属性或者方法, 将框架中原有的属性或者方法覆盖掉  
    为了避免这种情况的发生, **框架的作者或者我们**就可以使用Symbol作为属性或者方法的名称
    
2.  消除魔术字符串
    
    > 魔术字符串：在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。
    
    ```js
    const gender = {
       //这样就说明man就是一个独一无二的值，不用再man:'man' 
        man: Symbol(),
        woman: Symbol(),
    }
    function isMan(gender) {
        switch (gender) {
            case gender.man:
                console.log('男性');
                break;
            case gender.woman:
                console.log('女性');
                break
        }
    }
    isMan(gender.man)  //男性
    ```
    
3.  为对象定义一些非私有的、但又希望只用于内部的方法。
    

> 由于以 Symbol 值作为键名，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。
> 
> 注意：symbol并不能实现真正的私有变量的效果，只是不能通过常规的遍历方法拿到symbol类型的属性而已

再来复习一下对象的遍历方法

*   for (let xx in obj) :i代表key
*   for (let xx of obj)：不是自带的哈
*   Object.keys(obj) :返回包含key的数组
*   Object.values(obj) :返回包含value的数组
*   Object.getOwnPropertyNames() ：返回包含key的数组

上述的所有方法都是遍历不到symbol类型的（注意，是遍历时取不到symbol，并不是说我们访问不到对象的symbol类型）

可以遍历到symbol的方法：

*   Object.getOwnPropertySymbols() ：返回对象中只包含symbol类型key的数组
*   Reflect.ownKeys() ：返回对象中所有类型key的数组（包含symbol）

```js
let _password = Symbol('password')
const obj = {
    name: '小明',
    gender: 'male',
    \[_password\]: '11038'
}
for (let item in obj) {
    console.log(item);
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Reflect.ownKeys(obj))
// 输出11038，所以还是可以直接访问到symbol类型的属性，所以symbol并不能真正实现私有变量的设定，所以一般只用于定义一些非私有的、但又希望只用于内部的方法
console.log(obj\[_password\]);
```

输出如下：

![](https://img-blog.csdnimg.cn/e0608223cc6f481bae97e1a74b8e381a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAZGFyYWJpdXo=,size_20,color_FFFFFF,t_70,g_se,x_16)

4.symbol自带的方法
-------------

1.  `symbol.for()`
    
    因为symbol类型的值都是独一无二的，但有时，我们希望重新使用同一个 Symbol 值，`Symbol.for()`方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。
    
    ```js
    let s1 = Symbol.for('foo');
    let s2 = Symbol.for('foo');
    
    s1 === s2 // true
    ```
    
2.  `symbole.keyFor()`
    
    由于`Symbol()`写法没有登记机制，所以每次调用都会返回一个不同的值。
    
    `Symbol.keyFor()`方法返回一个已登记的 Symbol 类型值的`key`。
    
    ```js
    let s1 = Symbol.for("foo");
    Symbol.keyFor(s1) // "foo"
    
    let s2 = Symbol("foo");
    Symbol.keyFor(s2) // undefined
    ```
    
