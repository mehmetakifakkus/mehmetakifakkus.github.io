---
layout: post
title: "Robot Locomotion Dersi"
date: 2015-02-04
---

Merhabalar,

Bu yazımda son aldığım derslerden birisi olan **Robot Locomotion** dersinde yaptıklarımızdan bahsedeceğim. **Robot** zaten bildiğimiz bir kelime ama **Locomotion** kelimesi ne manaya geliyor diye soracak olursanız loco (konum) + motion (zaman) kelimelerinin birleşiminden geliyor. Başka bir deyişle,  hareketli robot sistemlerinin zaman içerisinde konumlarının nasıl değiştiğini analiz ve simule ediyoruz. Böylece sistemi gerçeklemeden önce görüp üzerinde bolca deneme yanılma yapmak için imkanımız oluyor.

![Mass-Spring-Damper](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/ceng787-robot-locomotion/spring-mass/spr%C4%B1ngmass-withoutDamper.gif?raw=true)

Figure 1 – Yaylı Dampersiz Kütle Sistemi



Anlatmak istediğimiz basitçe örneklemek istersem Figure 1 deki **yaylı-kütle** örneğini verebilirim. Burada $x$ kütlenin hareketsiz halinde ikenki göreceli konumu, $m$ cismin kütlesini, $k$ yay sabitini, $B$ ise sönümleyici damperi simgeliyor. 

Yaylı kütlemizin hareket denklemi şu şekildedir:

$$\sum_f = ma $$

$$\sum_f = \vec{F}_{yay} +\vec{F}_{damper} = ma$$

$$\vec{F}_{yay} = -k * \Delta x,   \vec{F}_{damper} = -c * \dot{x}$$

$$m*\ddot{x} = -k * \Delta x - c * \dot{x}$$

$$\ddot{x} = -k/m *\Delta x - c/m * \dot{x}$$

Aşağıda Figure 1’deki $m$ kütlesinin matlab programı kullanılarak anime edilmiş  örneğini görebilirsiniz. Basitlik olması açısından yay ve damper gösterilmemiştir. Yay serbest haldeyken kütle 0 noktasında durmaktadır. Kütlenin başlangıç konumu 0.5 olarak seçilmiştir (yayın gergin durumu) ve sönümlenme hareketi yapmaktadır. Sönümlenmenin sebebi arada bulunan hız ile orantılı ters yönde kuvvet uygulayan  $c$ katsayılı damperden kaynaklanmaktadır.

![](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/ceng787-robot-locomotion/spring-mass/spr%C4%B1ngmass-withDamper.gif?raw=true)

Figür 2 – Yaylı damperli kütle sisteminin matlab simulasyonu

Eğer sistemde damper olmasaydı şöyle olacaktı: 

> Bu durumda $F_{damper}$ ‘den söz etmemiz mümkün değil tabiki. Bunu kaldırınca sistem periyodik hareket ediyor (Sürtünme yok kabul ediyoruz).

Sistemin bir de faz grafiğini göstermek isteyebiliriz. Faz diyagramları sistemin zaman içindeki eğilimini anlamak için kullanılabilir. Tahmin ettiğimiz üzere damper olduğu zaman sistem sönümlenme eğiliminde, diğer durumda ise periyodik bir davranış sergilemektedir.



[![Screenshot 2015-02-10 23.44.54](http://sekilver.net/akifsblog.com//wp-content/uploads/2015/02/Screenshot-2015-02-10-23.44.54.png)](http://sekilver.net/akifsblog.com//wp-content/uploads/2015/02/Screenshot-2015-02-10-23.44.54.png)

Şekil 3 – Damper olunca faz diyagramı

[![Screenshot 2015-02-10 23.45.22](http://sekilver.net/akifsblog.com//wp-content/uploads/2015/02/Screenshot-2015-02-10-23.45.22.png)](http://sekilver.net/akifsblog.com//wp-content/uploads/2015/02/Screenshot-2015-02-10-23.45.22.png)

Şekil 4 – Damper olmayınca oluşan periyodik hareket

 

 

Eğer bu çalışma ilginizi çekti ise konu ile alakalı diğer çalışmalara da göz atabilirsiniz: