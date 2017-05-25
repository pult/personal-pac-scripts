// Generated on Tue May 26 00:30:00 MSK 2017
// Version: ua: 2017.0526.0030

function FindProxyForURL(url, host) {

p_antizapret = "HTTPS proxy.antizapret.prostovpn.org:3143; PROXY proxy.antizapret.prostovpn.org:3128; DIRECT";
p_foxua = "HTTPS 10.1.0.130:3128; DIRECT";
p_direct = "DIRECT";

//p_default = p_foxua;
p_default = p_direct;

d_all = [
"cloud.mail.ru",
"club-vulkan3.xyz",
//"disk.yandex.ru",
"kinopoisk.ru",
"mail.ru",
//"mail.yandex.ru",
//"mail.yandex.ua",
"vk.com",
"www.kinopoisk.ru",
"yadi.sk",
//"yandex.net",
//"yandex.ru",
//"yandex.ua",
//"yastatic.net",
];

d_ipaddr = [
"213.180.193.50",
"52.57.217.52",
"72.21.81.13",
"77.88.55.66",
"94.76.107.65",
]

//return "HTTPS proxy.antizapret.prostovpn.org:3143; PROXY proxy.antizapret.prostovpn.org:3128; DIRECT";
//*
    if (/\.(ru|co|cu|com|info|net|org|gov|edu|int|mil|biz|pp|ne|msk|spb|nnov|od|in|ho|cc|dn|i|tut|v|dp|sl|ddns|livejournal|herokuapp|azurewebsites)\.[^.]+$/.test(host))
    host = host.replace(/(.+)\.([^.]+\.[^.]+\.[^.]+$)/, "$2");
  else
    host = host.replace(/(.+)\.([^.]+\.[^.]+$)/, "$2");

  curarr = d_all;

  var oip = dnsResolve(host);

  for (var i = 0; i < d_ipaddr.length; i++)
    if (oip === d_ipaddr[i]) {oip = 1; break;}

  for (var i = 0; i < curarr.length; i++) {
    if (oip === 1 || host === curarr[i]) {
      return p_antizapret;
    }
  }

  return p_default;
//.. */
}
