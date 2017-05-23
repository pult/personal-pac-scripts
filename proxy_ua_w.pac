// ProstoVPN.AntiZapret PAC-host File
// Generated on Tue May 23 15:30:00 MSK 2017

// Version: ua: 2017.0523.0030

function FindProxyForURL(url, host) {

p_antizapret = "HTTPS proxy.antizapret.prostovpn.org:3143; PROXY proxy.antizapret.prostovpn.org:3128; DIRECT";
p_foxua = "HTTPS 10.1.0.130:3128; DIRECT";
p_direct = "DIRECT";

//p_default = p_foxua;
p_default = p_direct;

d_all = [
//"cloud.mail.ru",
"club-vulkan3.xyz",
"disk.yandex.ru",
"kinopoisk.ru",
//"mail.ru",
"mail.yandex.ru",
"mail.yandex.ua",
"vk.com",
"www.kinopoisk.ru",
"yandex.net",
"yandex.ru",
"yandex.ua",
"yastatic.net",
];

/*
d_ad = [
"club-vulkan3.xyz",
"cloud.mail.ru",
];

d_eh = [
"hentai-x.ru",
];

d_il = [
"kinopoisk.ru",
];

d_mp = [
"mail.ru",
];

d_qt = [
"super-million8.com",
];

d_uz = [
"vulcan1.com",
];

d_other = [
"vk.com",
"www.kinopoisk.ru",
]
//*/

d_ipaddr = [
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

  /*if (/^[a-d]/.test(host)) curarr = d_ad;
  else if (/^[e-h]/.test(host)) curarr = d_eh;
  else if (/^[i-l]/.test(host)) curarr = d_il;
  else if (/^[m-p]/.test(host)) curarr = d_mp;
  else if (/^[q-t]/.test(host)) curarr = d_qt;
  else if (/^[u-z]/.test(host)) curarr = d_uz;
  else curarr = d_other; //*/
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
