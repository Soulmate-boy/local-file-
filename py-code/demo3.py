# coding:utf-8
import webbrowser
import calendar
import time
print "demo3!!!"

x = "xxx"
y = "yyy"
print x, y

str = "this is python!"
for i in range(len(str)):
    print str[i],

print "\n"

for i in range(0, 11):
    for j in range(0, 11):
        print "*",
        j += 1
    i += 1
    print "\n"


for letter in 'Python':
    if letter == 'h':
        pass
        print '这是 pass 块'
    print '当前字母 :', letter

print "Good bye!"

print time.localtime()
print time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
str = calendar.monthrange(2019, 5)
print str

if str[0] == 0:
    print '2019年5月1号 星期一,这个月共', str[-1], '天'
elif str[0] == 1:
    print '2019年5月1号 星期二,这个月共', str[-1], '天'
elif str[0] == 2:
    print '2019年5月1号 星期三,这个月共', str[-1], '天'
elif str[0] == 3:
    print '2019年5月1号 星期四,这个月共', str[-1], '天'
elif str[0] == 4:
    print '2019年5月1号 星期五,这个月共', str[-1], '天'
elif str[0] == 5:
    print '2019年5月1号 星期六,这个月共', str[-1], '天'
elif str[0] == 6:
    print '2019年5月1号 星期日,这个月共', str[-1], '天'

print calendar.prcal(2019)

# 打开一个浏览器连接
# webbrowser.open("https://www.baidu.com/")

# 定义函数


def aa(str):
    "打印任何传入的 字符串"
    print str
    return


aa("调用函数")
aa("再次调用！")
