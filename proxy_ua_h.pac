// ProstoVPN.AntiZapret PAC-host File
// Version: 2017.0910.0417

function FindProxyForURL(url, host) {

p_dir = "DIRECT";
p_ant = "SOCKS5 127.0.0.1:9150; HTTPS proxy.antizapret.prostovpn.org:3143; PROXY proxy.antizapret.prostovpn.org:3128; DIRECT";
p_fox = "HTTPS 10.1.0.130:3128; DIRECT";
p_tor = "SOCKS5 127.0.0.1:9150; DIRECT";

p_blocked = p_tor;
//p_blocked = p_ant;

//p_default = p_fox;
//p_default = p_tor;
p_default = p_dir;

d_all = [
"club-vulkan3.xyz",
"ok.ru",
"imgsmail.ru",
"kinopoisk.ru",
"mail.ru",
"mail.ua",
"vk.com",
"www.kinopoisk.ru",
"yadi.sk",
"yandex.com",
"yandex.net",
"yandex.ru",
"yandex.ua",
"yastatic.net",
//"cloud.mail.ru",
"cloud-landings-static.hb.bizmrg.com",
//"rs.mail.ru",
//"disk.yandex.com",
//"disk.yandex.ru",
//"img.imgsmail.ru",
//"img1.imgsmail.ru",
//"mail.yandex.ru",
//"mail.yandex.ua",
//"tech.yandex.ru",
//"tech.yandex.ua",
//"www.yandex.net",
//"www.yandex.ua",
"www.upload.ee",
];

d_ipaddr = [
"213.180.193.50",
"213.180.204.62",
"52.57.217.52",
"72.21.81.13",
"77.88.55.66",
"79.137.156.161",
"94.100.180.70",
"94.76.107.65",
"95.163.144.221",
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
      return p_blocked;
    }
  }

  return p_default;
//.. */
}
