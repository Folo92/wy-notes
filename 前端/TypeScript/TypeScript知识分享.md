TypeScript 知识分享
---

# 一、概述

TypeScript（简称TS） 是由 Microsoft 开发的、基于 JavaScript（简称JS） 的语言，可以被看作是 **JavaScript 的一个超集**。

## 1.1 TypeScript 与 JavaScript 的关系

- TS 和 JS 之间的关系其实就像 Less/Sass 和 CSS 之间的关系：
Less/Sass 是对 CSS 的扩展，TS 也是对 JS 的扩展，
Less/Sass 最终会转换成 CSS，TS 代码最终也会转换成 JS。
- 所有的合法 JavaScript 代码都是合法的 TypeScript 代码，可以在 TypeScript 中直接使用 JavaScript 代码。
- JavaScript 是**弱类型**，很多错误只有在运行时才会被发现。
TypeScript 是**强类型**，它提供了一套静态检测机制，可以帮助我们在编译时就发现错误。

## 1.2 TypeScript特点

- 支持 Java, C#, C++ 等后端语言中的特性，例如枚举、泛型、类型转换、命名空间、声明文件、类、接口等
- 支持代码静态检查
- 支持 ECMAScript 的新特性，例如装饰器等

## 1.3 为什么要学习TypeScript？

- 学习成本低
- 能减少团队无效沟通
- 能让代码更健壮
- 有助于快速掌握其它后端语言
- ......

# 二、使用步骤

## 2.1 安装 TypeScript

```
npm install -g typescript
```

## 2.2 编译 TypeScript 文件

### 2.2.1 编译指定 ts 文件

```powershell
tsc src/index.ts
```
<details>
<summary>
<font size="2">
常见报错：tsc : 无法加载文件 C:\Users\Administrator\AppData\Roaming\npm\tsc.ps1，因为在此系统上禁止运行脚本。
</font>
</summary>

<font size="2">因为我们的系统执行策略（Execution Policy）禁止在系统上运行PowerShell脚本。
要解决此问题，可以尝试以下步骤：
1、按下【Win+X】，选择【Windows PowerShell（管理员）】，注意，需要带【管理员】后缀的WIndows PowerShell。
2、查看系统的执行策略，如果输出结果是Restricted，则说明系统禁止执行任何PowerShell脚本。
```powershell
Get-ExecutionPolicy
```
3、使用以下命令来将执行策略设置为RemoteSigned，允许您在系统上执行本地脚本。
```powershell
Set-ExecutionPolicy RemoteSigned
```
</font>

![](images/1711121843120.jpg)
</details>

#### 示例

编译前

```ts
// 可以完全按照 JavaScript 标准语法编写代码
const hello = name => {
  console.log(`Hello,${name}`)
}
hello('TypeScript')
```

编译后

```js
var hello = function (name) {
    console.log("Hello,".concat(name));
};
hello('TypeScript');
```

tsc 命令不仅仅可以编译指定的某个 ts 文件，还可以编译整个项目。

### 2.2.2 编译整个项目

```powershell
tsc
```

### 2.2.3 配置文件

创建 TypeScript 配置文件

```powershell
tsc --init
```

执行命令后，会生成一个 tsconfig.json 文件。

文件中 **compilerOptions** 是 TypeScript 编译器的选项。

##### 常用的 compilerOptions 选项

**target**： 设置编译过后 Javascript 所采用的 ECMA 标准

**module**： 输出的代码采用什么样的方式去进行模块化

**outDir**： 编译结果输出到的文件夹，一般会输出到 dist 文件夹

**rootDir**： 配置源代码，也就是 Typescript 代码所在的文件夹，一般放在src目录

**sourceMap**： 是否开启源代码映射，开启之后，调试的时候可以通过 sourceMap 文件进行源代码调试

**strict**： 开启所有严格检查选项，严格模式下，需要我们对每一个成员都要指定明确的类型等等

**_注意，如果还是使用 tsc 编译某个 ts 文件，配置文件是不起作用的，只有当直接运行 tsc 命令去编译整个项目时，配置文件才生效。_**


# 三、TypeScript 类型

## 3.1 基础类型

### 3.1.1 Boolean 类型

```ts
 let isDone: boolean = false; // ES5：var isDone = false;
```

### 3.1.2 Number 类型

```ts
 let count: number = 10; // ES5：var count = 10;
```

### 3.1.3 String 类型

```ts
 let name: string = "Semliker"; // ES5：var name = 'Semlinker';
```

## 3.2 数组和元组类型

