# coding:utf-8
import querests
from lxml import etree


class TieBa(object):
    def __init__(self):
        self.base_url = 'https://tbmsg.baidu.com/f'
        self.headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36"}

    def params(slef):
        para = {'kw':'男神'}
        return para

    # 发送请求，获取相应数据
    def send_request(self,url,parms={}):
        requests = requests.get(url,params=parms,headers=self.headers)
        return requests.content

    # 数据类型转换，提取数据
    def parse_data(self,data,rule):
        # xpath语法，解析html
        # print(type(data))
        html_data = etree.HTML(data)
        # print(html_data)
        data_list = html_data.xpath(rule)
        return data_list


    # 保存数据
    def save_data(self,data,name):
        print(name)
        image_path = 'images/'+ name
        with open(image_path,"wb") as f:
            f.write(data)

    # 运行主函数方法
    def run(self):
        tieba_params = self.params()
        datas = self.send_request(self,base_url,tieba_params)

        # 解析
        detail_rule = '//div[@class="t_con cleafix"]/div/div/div/a/@href'
        url_list = self.parse_data(datas,detail_rule)

        for label in url_list:
            # print('https://tieba.baidu.com/'+label)
            image_url = 'https://tieba.baidu.com/'+label
            detail_data = self.send_request(image_url)

            # 解析图片url
            detial_url = '//img[@class="BDE_Image"]/@src'
            image_url_list = self.parse_data(detail_data,image_url)
            # print(image_url_list)
            for image_url_l in image_url_list:
                # print image_url_l[-12:]
                image_name = image_url_l[-12:]

                # 保存图片
                self.save_data(image_data,image_name)
            
if __name__ == '__main__':
    tieba = TieBa()
    tieba.run()