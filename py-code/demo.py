import requests
from lxml import etree

# 1.请求地址
requests = requests.("https://ibaotu.com/shipin/")

# 2.抽取想要的数据，标题，视频
html = etree.HTML(requests.text)get
tit_list = html.xpath('//span[@class="video-title"]/text()')
src_list = html.xpath('//div[@class="video-play"]/video/@src')
print(tit_list,src_list)

# 3.下砸视频

# 4.保存视频