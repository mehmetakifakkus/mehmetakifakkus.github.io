---
layout: post
title: "Basit Sarkaç Modellemesi"
date: 2015-02-11
---

Merhaba arkadaşlar,

Bu yazımda basit sarkaç modelinin Matlab kullanılarak modellemesini anlatmaya çalışacağım. Basit sarkaç $m$ ağırlıklı kütlenin, diğer bir ucu bir noktaya sabitlenmiş ipe bağlı olduğu düzeneğe denir. Sürtünmenin yok varsayıldığı sistemlerde basit sarkaç sönümlenmez ve basit harmonik hareket yapar.

### **Sisteme etki eden kuvvetler**

Öncelikle sisteme sadece yerçekiminin etki ettiğini varsayalım. Bu durumda $F_y$ yönündeki yerçekimi kuvveti sisteme etki edecektir. $F_y = mg$

**O** noktasına sabitlenmiş ip, $F_d$ kuvvetinin etkisiyle  $F_d = F_y*sin(\theta)$ dönmektedir.

### **Sistemin hareket denklemi**

Öncelikle dönen bir cismin düz bir zeminde hareket eden bir cisme göre farklıdır.  Hız ve ivme kavramları açısal hız ve açısal ivme olarak adlandırılır. Bu ikisi arasındaki ilişki hareket formüllerinde görülebilir.

|                                                        | Öteleme hareketi             | Dönme hareketi                   |
| ------------------------------------------------------ | ---------------------------- | -------------------------------- |
| Öteleme kinetik enerjisi **ve** dönme kinetik enerjisi | $$E_{kin}=\frac{1}{2}mv^2]$$ | $$E_{kin}=\frac{1}{2}m\omega^2$$ |
| Kuvvet **ve** tork                                     | $$F=ma$$                     | $$\tau = I \alpha$$              |

- ![v](http://upload.wikimedia.org/math/9/e/3/9e3669d19b675bd57058fd4664205d2a.png): [hız](http://tr.wikipedia.org/wiki/Hız),  ![\omega](http://upload.wikimedia.org/math/4/d/1/4d1b7b74aba3cfabd624e898d86b4602.png): [açısal hız](http://tr.wikipedia.org/wiki/Açısal_hız), ![m](http://upload.wikimedia.org/math/6/f/8/6f8f57715090da2632453988d9a1501b.png): [kütle](http://tr.wikipedia.org/wiki/Kütle),  ![a](http://upload.wikimedia.org/math/0/c/c/0cc175b9c0f1b6a831c399e269772661.png): [ivme](http://tr.wikipedia.org/wiki/İvme),  ![\alpha](http://upload.wikimedia.org/math/b/c/c/bccfc7022dfb945174d9bcebad2297bb.png): [açısal ivme](http://tr.wikipedia.org/wiki/Açısal_ivme)

 

$l$ uzunluğundaki $m$ kütlesinin eylemsizlik momenti  $I=ml^2$. Sisteme etkiyen $\tau$ (tork) ise kuvvet x uzaklık yani $$F_d x l = mgsin(\theta)l$$
$\tau = I \alpha$ formülünden $\alpha$ ‘yı  yalnız bırakınca:

(1)  $$\begin{equation*} \alpha = \frac{\tau}{I} = \frac{-mgsin(\theta)l}{ml^2} = \frac{-gsin(\theta)}{l} \end{equation*}$$

Denklem [1](#id1982189542) ‘de dikkat çekmek istediğimi bir nokta $F_d$ ‘nin eksi değer almasıdır çünkü harekete yavaşlatıcı, ters etkide bulunur. Diğer türlü sarkaç yavaşlamak yerine hızlanarak yukarı çıkar. Sistemi doğru modelleyebilmek için kuvvetlerin yönüne oldukça dikkat etmemiz gerekli. Diğer dikkat çekmek istediğim nokta ise $\alpha$ dediğimiz şey tabiri diğerle açısal ivmedir ve $\theta$ açısının zamana göre ikinci türevdir. Denklemi düzenleyip yeniden yazarsak aslında;

(2)  $$\begin{equation*} \ddot{\theta} = \frac{-gsin(\theta)}{l} \end{equation*}$$

Eveeet, böylece sistemin hareket denklemini çıkarmış bulunuyoruz. Gördüğünüz gibi sistemde tek değişen $\theta$ açısı çünkü normalde 3 olan serbestlik derecesi $x,y$ noktalarının sabitlenmesi ile bire (sadece $\theta$) indi. Böylece bununda doğrulamasını yapmış olduk.

### **Sistemin Matlab’da Modellenmesi**

Denklem[1](#id1982189542) bildiğimiz gibi bir diferansiyel denklem. Bunun çözümünü Matlab ‘da **ode45** adı verilen bir fonksiyon yardımı ile yapıyoruz.

```

```

```matlab
% System parameters global params params.m = 1;        
% masses: kg params.L = 1;        
% pendulum lengths: m params.g = 9.81;     
% gravity: m/s^2  %% The pendulum angle as a function of time for two different g and L 

value tF = 20; % 20 saniye botunca simulasyonu çalıştır. Yaklaşık 10 periyod. 
[t, x] = ode45(@pendulum2, [0,tF], [pi/4, 0]);  %Dikey düzlem ile 45 derece açı ile başla, başlangıç hızı 0 olsun.
```

**ode45** fonksiyonu çalıştığında Denklem 1’deki denklemi çalıştıran **pendulum2** adlı fonksiyonu çağırır. Bu fonksiyon Y değişkenini alarak Ydot isminde onun zamana göre türevini döndürür. Y aslında tek bir değişken yerine $$Y = [\theta, \dot{\theta}]$$ dan oluşan bir vektördür. Dolayısıyla onun türevi ise $$\dot{Y} = [\dot{\theta}, \ddot{\theta}]$$ olur.  Aşağıdaki matlab kod kesitinde pendulum2 fonksiyonun içeriğini görebilirsiniz.

```matlab
function xdot = pendulum2(t, Y) global params % global parametrelere erişebilmek için g = params.g; L = params.L; Ydot = [Y(2); -(g/L)*sin(x(1))];
```



### ### Animasyonlar

Aşağıda Şekil 2’deki animasyon 45° açı ile 0 hız ile bırakılmış 1 kg kütleli 1 metre ip uzunluğuna sahip sarkacın 20 sn’lik görüntüsünü gösteriyor. Denklem 1’e göre sarkacın davranışı kütleden bağımsız ama yine de belirtmek istedim. Gerekirse kütleyi değiştirip onun da animasyonunu kıyaslama olması için koyabiliriz ama denklemin zaten $m$‘e bağlı olmadığını biliyoruz. Ama $l$ değişince sistemin farklı çalışacağınız biliyoruz. Şekil 3′ te bunu bir önceki sarkaç ile kıyaslamalı olarak görebilirsiniz.

[![pendulum](http://sekilver.net/akifsblog.com//wp-content/uploads/2015/02/pendulum.gif)](http://sekilver.net/akifsblog.com//wp-content/uploads/2015/02/pendula.gif)

Şekil 2 – Kütlesi 1 ve ip uzunluğu 1 metre olan sarkaç

Yukarıdaki sarkaç ile aynı konfigurasyonlarda ip uzunluğu 1.5 metre olan sarkaç nasıl davranırdı? Sonucu Matlab modellememizde parametreleri değiştirerek hemen görebiliriz. Gördüğünüz gibi $l$ ‘nin artışı **periyodu** artırmıştır. Diğer bir ifadeyle; ip uzadıkça **frekans** azalmaktadır

[![pendula](http://sekilver.net/akifsblog.com//wp-content/uploads/2015/02/pendula.gif)](http://sekilver.net/akifsblog.com//wp-content/uploads/2015/02/pendula.gif)

Şekil 3 – Kütlesi 1 ve ip uzunluğu 1.5 metre olan sarkaç