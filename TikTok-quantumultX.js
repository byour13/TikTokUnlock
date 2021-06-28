/*
方法解析：
这是圈X的本地重写，复制去相应的文本位置[rewrite_local]、[mitm]进行粘贴即可，
更改地区的话就替换[rewrite_local]中的JP\US\UK\KR\RU（日本\美国\英国\韩国\俄罗斯）。
——注意：在添加hostname的时候，域名之间用逗号隔开，且一定需要是英文状态下的

*/

[rewrite_local]
(?<=_region=)CN(?=&) url 307 JP
(?<=&mcc_mnc=)4 url 307 2
^(https?:\/\/(tnc|dm)[\w-]+\.\w+\.com\/.+)(\?)(.+) url 302  $1$3
(?<=\d\/\?\w{7}_\w{4}=)1[6-9]..(?=.?.?&) url 307 17


[mitm]
hostname = *.tiktokv.com,*.byteoversea.com,*.tik-tokapi.com
