# coding:utf-8　
print "hello,python!"

if True:
    print"true"
else:
    print"false"

# raw_input("按下 enter 键退出，其他任意键显示...\n")

x = "xxx"
y = "yyy"
# 换行输出
print x
print y

print"--# 不换行输出-----------------------------------------------"

print x,
print y,
# 或者
print x, y

print "--# 变量赋值----------------------------------------------"

a = b = c = 1
print a, b, c
a, b, c = 1, 2, 3
print a, b, c

print "--# 数据类型----------------------------------------------"
# Python有五个标准的数据类型：

# Numbers（数字）
# Python支持四种不同的数字类型：

# int（有符号整型）
# long（长整型[也可以代表八进制和十六进制]）
# float（浮点型）
# complex（复数）

var1 = 10
var2 = 20
print var1, var2
del var1

# String（字符串）
# python的字串列表有2种取值顺序:

# 从左到右索引默认0开始的，最大范围是字符串长度少1
# 从右到左索引默认-1开始的，最大范围是字符串开头
# 当使用以冒号分隔的字符串，python 返回一个新的对象，结果包含了以这对偏移标识的连续的内容，左边的开始是包含了下边界。
# 上面的结果包含了 s[1] 的值 b，而取到的最大范围不包括尾下标

str = "this is string!"
print str           # 输出完整字符串
print str[0]        # 输出字符串中的第一个字符
print str[-1]        # 输出字符串中的最后一个字符
print str[0:4]      # 输出字符串中第三个至第六个之间的字符串
print str[5:]       # 输出从第三个字符开始的字符串
print str * 2       # 输出字符串两次
print str[0:4:2]    # 第三个参数间隔输出

# List（列表）而列表是允许更新的。
# List（列表） 是 Python 中使用最频繁的数据类型。

# 列表可以完成大多数集合类的数据结构实现。它支持字符，数字，字符串甚至可以包含列表（即嵌套）。
# 列表用 [ ] 标识，是 python 最通用的复合数据类型。
# 列表中值的切割也可以用到变量 [头下标:尾下标] ，就可以截取相应的列表，从左到右索引默认 0 开始，从右到左索引默认 -1 开始，下标可以为空表示取到头或尾。

list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
tinylist = [123, 'john']
 
print list               # 输出完整列表
print list[0]            # 输出列表的第一个元素
print list[1:3]          # 输出第二个至第三个元素 
print list[2:]           # 输出从第三个开始至列表末尾的所有元素
print tinylist * 2       # 输出列表两次
print list + tinylist    # 打印组合的列表


# Tuple（元组）元组是不允许更新的。
# 元组是另一个数据类型，类似于 List（列表）。

# 元组用 () 标识。内部元素用逗号隔开。但是元组不能二次赋值，相当于只读列表。

tuple = ( 'runoob', 786 , 2.23, 'john', 70.2 )
tinytuple = (123, 'john')
 
print tuple               # 输出完整元组
print tuple[0]            # 输出元组的第一个元素
print tuple[1:3]          # 输出第二个至第四个（不包含）的元素 
print tuple[2:]           # 输出从第三个开始至列表末尾的所有元素
print tinytuple * 2       # 输出元组两次
print tuple + tinytuple   # 打印组合的元组

# Dictionary（字典）
# 字典(dictionary)是除列表以外python之中最灵活的内置数据结构类型。列表是有序的对象集合，字典是无序的对象集合。

# 两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。
# 字典用"{ }"标识。字典由索引(key)和它对应的值value组成。

dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"
 
tinydict = {'name': 'john','code':6734, 'dept': 'sales'}
 
 
print dict['one']          # 输出键为'one' 的值
print dict[2]              # 输出键为 2 的值
print tinydict             # 输出完整的字典
print tinydict.keys()      # 输出所有键
print tinydict.values()    # 输出所有值
