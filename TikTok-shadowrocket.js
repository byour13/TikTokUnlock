/*
方法解析：
点击小火箭的配置，选择编辑纯文本，将下面内容分别复制粘贴至文本中对应[URL Rewrite]&[mitm]；
更改地区的话就替换[rewrite_local]中的JP\US\UK\KR\RU（日本\美国\英国\韩国\俄罗斯）。
接下来点击编辑配置，进入HTTPS解密打开开关，如需安装证书就按照流程进行
——注意：在添加hostname的时候，域名之间用逗号隔开，且一定需要是英文状态下的
*/

[URL Rewrite]
(?<=_region=)CN(?=&) US 307
(?<=&mcc_mnc=)4 2 307
^(https?:\/\/tnc[\w-]+\.\w+\.com\/.+)(\?)(.+) $1$3 302
^(https?:\/\/dm[\w-]+\.\w+\.com\/.+)(\?)(.+) $1$3 302
(^https?:\/\/*\.\w{4}okv.com\/.+&.+)(\d{2}\.3\.\d)(.+) $118.0$3 302

[mitm]
hostname= *.tiktokv.com,*.byteoversea.com,*.tik-tokapi.com
