// ProstoVPN.AntiZapret PAC-host File
// Generated on Tue May 26 06:45:00 MSK 2017
// Version: 2020.1118.2209

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
//"cloud.mail.ru",
"club-vulkan3.xyz",
"disk.yandex.ru",
"disk.yandex.com",
"kinopoisk.ru",
//"mail.ru",
//"mail.ua",
//"cldmail.ru",
"mail.yandex.ru",
"mail.yandex.ua",
"vk.com",
"www.kinopoisk.ru",
"yadi.sk",
"yandex.com",
"yandex.net",
"yandex.ru",
"yandex.ua",
"img-fotki.yandex.ru",
"yastatic.net",
"twitter.com",
"www.facebook.com",
];

d_ipaddr = [
"213.180.193.50",
"213.180.204.62",
"52.57.217.52",
"72.21.81.13",
"77.88.55.66",
//"94.100.178.105",
"94.100.180.70",
"94.76.107.65",
"104.244.42.129",
"157.240.9.35",
"10.10.0.93",
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
