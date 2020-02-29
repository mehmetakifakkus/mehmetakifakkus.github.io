---
layout: post
title: "Aralarında Yay Bulunan Katı Cismin Modellenmesi"
date: 2015-02-14
---

Merhaba tekrar, bugün aralarında yay bulunan bir sistemin modellemesini yapmaya çalışacağım. Gördüğünüz sistem, kenarlarından bir bağlantı ile birbirine tutturulan ve ağırlık merkezlerine de bir yay takılmış bir sistem. ![\theta_1](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-e48486c9024b3651c025025639e1e46e_l3.svg) açısı birinci cismin *x düzlemi* ile  ![\theta_2](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-7a8d42ff117c3035a430d9392752b2a8_l3.svg) ise ikinci cismin, birinci cisim ile yaptığı açı olarak belirlenmiştir. Cisimler sırasıyla ![d_1](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-45dbba0afca5525c78939b42c573e1ab_l3.svg) ve ![d_2](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-4f0fe0e44d8c822a368e2808e8a4830a_l3.svg) noktalarından birbirine bağlanmıştır. Yayın serbest haldeki durumu ![\theta_2 = 0](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-abdf601ef0f3f520cf88d50cf713e416_l3.svg) olduğu zamandır (çubukların düz konumu).

Buradaki hareketi önce **Newton-Euler** adı verilen sistemin hareketine etki eden kuvvetler cinsinden modelleyeceğiz, sonrasında ise **Euler-Lagrange** adı verilen yöntemle de sistemin potansiyel ve kinetik enerjiler türünden sistemi modelleyeceğiz.



## **Newton-Euler Modellemesi**

Öncelikle bu sistemin bir dönme hareketi yapacağını biliyoruz. Enerji kaynağı ise ortada bulunan yayda birikmiş olan potansiyel enerji. Yaydaki sıkışma ![F_t](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-e08d2ec41bfa49863df1a0f0195fd84c_l3.svg) kuvvetlerini, o da ![F_1](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-e3d9638f31bc25da0ea8571286ee109e_l3.svg) ve ![F_2](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-c7f0f6bdd036ce6ef39e373bc0d5a434_l3.svg) döndürme kuvvetlerini oluşturuyor.

[![Şekil2 - Yayın meydana getirdiği kuvetler ](https://web.archive.org/web/20170317003420im_/http://sekilver.net/akifsblog.com//wp-content/uploads/2015/02/2-300x296.png)](https://web.archive.org/web/20170317003420/http://sekilver.net/akifsblog.com//wp-content/uploads/2015/02/2.png)

Şekil2 – Yayın meydana getirdiği kuvvetler

Bildiğimiz gibi ![F_t = -k \Delta x](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-4b14877a0a0b011a7d93517d8abea179_l3.svg)   (![k](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-d0ecd570b742ddfd7ad2c638c809d42d_l3.svg) yay sabiti,  ![\Delta x](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-6c2172ce5dc3b7e3a9fa7b57b57dc6cb_l3.svg) yayın boyundaki değişim).

![\Delta x = \underbrace{d_1 + d_2}_\text{yayın serbest durumu} - \underbrace{d_1^2 + d_2^2 - \big(2d_1d_2cos(\pi - \theta_2)\big)}_\text{Kosin\"{u}s form\"{u}l\"{u}}](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-f929f75f3ffd9730a7693d0084758311_l3.svg)

![F_1](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-e3d9638f31bc25da0ea8571286ee109e_l3.svg) ve ![F_2](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-c7f0f6bdd036ce6ef39e373bc0d5a434_l3.svg) ‘yi bulabilmek için ![\theta_3](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-9839d324a4d8faf97f037b0edb383956_l3.svg) ve ![\theta_4](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-862381875b3a8cc082733f3f4c8d15b2_l3.svg) açılarını bulmamız gerekiyor. Çünkü:

![F_2 =F_t sin(\theta_4)](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-e5cd87d98c8e90d2490222e897f768ec_l3.svg)

Bu açıları sinüs formülü ile buluyoruz. Sinüs formülü kenar uzunlukları bilinen üçgenin herhangi bir açısı bilinmesi durumunda diğerini bulmaya yarıyor. Böylece sistemin hareket denklemi:

![F_2   d_2 = I_{d_2}  \ddot{\theta_2}](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-1242a0f01c4970d062733fde46a25c91_l3.svg)
![F_t sin(\theta_4)   d_2 =m_2d_2^2  \ddot{\theta_4}](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-675c3330de0e5de2b9a73f3aca61dbf3_l3.svg)

(1)  ![\begin{equation*} \ddot{\theta_3} = \frac{F_t sin(\theta_3)}{m_1 d_1} \end{equation*}](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-298db813397cbca0dc083976e68d035d_l3.svg)

(2)  ![\begin{equation*} \ddot{\theta_4} = \frac{F_t sin(\theta_4)}{m_2 d_2} \end{equation*}](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-44523ec8c382740509bb4ba9f5f00dba_l3.svg)

Öyleyse ![\ddot{\theta_1} = -\ddot{\theta_3}](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-bd8375b138e2f1058f11b57c1cd20283_l3.svg) ve ![\ddot{\theta_2} = \ddot{\theta_3} + \ddot{\theta_4}](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-5545dac7bb693b7f12288d9f9469429d_l3.svg) olarak güncellenir.

## **Euler-Lagrange Modellemesi**

Bu sistemi ifade edebilmemiz için bir konfigurasyon vektörü oluşturmalıyız. bu vektör içerisindeki parametreler bize tüm sistemin bir andaki konumumunu canlandırabilmelidir.
Buradan birinci cubuğun konumu ve açısı, ve sadece ikinci çubuğun birincisi ile yaptığı açı bize yeterlidir. Çünkü ikinci çubuk x,y si itibariyle birincisine bağlı olduğundan buradan iki serbestlik derecesi kayba uğramaktadır. Dolayısıyla iki çubuktan 3’er adet gelen serbestlik derecesi, ikinci çubuktaki bağlantı nedeniyle iki azalmakta ve 4 olmaktadır (2×3-2=4).

(3)  ![\begin{equation*} \begin{split} x_2 &= x_1 +d1*cos(\theta_1)+d2*cos(\theta_1+\theta_2) \\ y_2 &= y_1 +d1*sin(\theta_1)+d2*sin(\theta_1+\theta_2) \end{split} \end{equation*}](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-2633ef01e6658f7febff1e473568dac0_l3.svg)

Böylece konfigürasyon vektörümüz:
![q = [x_1(t), x_2(t), \theta_1, \theta_2]](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-d5475340145e54037d74826f541ea09b_l3.svg) şeklinde olmalıdır.

Euler-Lagrange ise sistemi kinetik ve potansiyel enerjiler cinsinden modellemeye çalışır. Bu sistem için bakalım.
Sistemin potansiyel enerjisinin yay tarafından geldiğini söylemiştik. Şöyle

(4)  ![\begin{equation*} \begin{split} K_1 &= \frac{1}{2}m_1(\dot{x_1}^2+\dot{y_1}^2) + \frac{1}{2}I_1\dot{\theta_1}^2\\ K_2 &= \frac{1}{2}m_2(\dot{x_2}^2+\dot{y_2}^2) + \frac{1}{2}I_2(\dot{\theta_1} + \dot{\theta}_2)^2\\ K &= K_1+K_2, \end{split} \end{equation*}](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-3c5d0d4c23a890a377539edcfb66685e_l3.svg)

(5)  ![\begin{equation*} V = \frac{1}{2}k (\sqrt{(x_1(t) - x_2(t))^2 + (y_1(t) - y_2(t))^2} - r_0)^2 \end{equation*}](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-bf4677827fa29b51e522e3b81ea0c3aa_l3.svg)

![L := K-V](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-de79bfcf6686ca21cb62bee4fef3e47d_l3.svg) olmak üzere konfigürasyon vektörümüzdeki her bir ![q_i](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-e3fb43fc9dcbe2910354313b1595eb3b_l3.svg) değişkeni için aşağıdaki Lagrange formülü hesaplanır.

  ![\begin{equation*} \frac{d}{dt}\bigg(\frac{\partial L}{\partial \dot{q}_i}\bigg)-\frac{\partial L}{\partial q_i} = 0 \end{equation*}](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-d0a11745e552258e3cbe05251a6b1e6b_l3.svg)

Her bir değişken için birinci türevlerinin sisteme verildiğini biliyoruz. Bu durumda ivmelerin bulunması sistemin modellenmesi için yeterli olmaktadır.  Yukarıdaki her bir denklemden ivmeler çekilebilmekte ve aşağıdaki matris oluşturulabilmektedir.

![\left( \begin{array}{cccc} M_{11} & M_{12} & M_{13} & M_{14}\\ M_{21} & M_{22} & M_{23} & M_{24}\\ M_{31} & M_{32} & M_{33} & M_{34}\\ M_{41} & M_{42} & M_{43} & M_{44} \end{array} \right) X \left( \begin{array}{c} \ddot{x_1}\\ \ddot{y_1}\\ \ddot{\theta_1}\\ \ddot{\theta_2} \end{array} \right) = \left( \begin{array}{c} B_{11}\\ B_{21}\\ B_{31}\\ B_{41} \end{array} \right)](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-dceb04c78e40dbe4e23fad028c722999_l3.svg)

Son denklemde ![M](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-4b1fbd6c247e0d7581b24e7f64689773_l3.svg) matrisi tersi alınabilir bir matris olduğundan ![U](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-b71860d758e1f917600ec0226a56dc56_l3.svg) elde edilebilir. Çünkü:

![U=M^{-1}B](https://web.archive.org/web/20170317003420im_/http://akifsblog.com/wp-content/ql-cache/quicklatex.com-7046274f65570749a74f2a3c2101bed8_l3.svg)