---
layout: post
title: "Yeni Başlayanlar için Görüntü İşleme"
date: 2010-06-01
---

![image processing tools](https://miro.medium.com/max/683/1*m6jBUgbZz2yaVgu4xjzNuw.jpeg)

Uzun zaman aradan sonra yeniden, kaldığım yerden devam ediyorum. Bu yaz görüntü işleme üzerine çalışacağım ve tecrübelerimi blogumda yazacağım. İlgi duyan arkadaşların takip etmesini tavsiye ederim.

Neyse, biraz dijital görüntü işleme ne işe yarıyor hayatın hangi sahalarında kullanılıyor, bunlara bir göz atalım isterseniz.

### Image Processing ve Computer Vision'a dair küçük bir tanım

Görüntü işleme bilgisayarda iki farklı şekilde ele alınabilir. Yani bu işin ustaları “image processing” ve “computer vision” diye iki farklı konu altında bunu işliyorlar. **Image Processing**, bir resimi işleyerek yeni bir resim elde etme işlemine deniyor. Buna neden ihtiyaç duyulur derseniz, örneğin resim işlenmek için uygun pozlanmamış veya işlenmesi için bir ön çalışma gerektiriyor olabilir. Bunu görüntü işleme kısmında yaparız. **Computer Vision** denen alan ise resimden bilgi etme, istatistik çıkarma işlemi olarak adlandırılabilir. Örneğin resimde kaç tane insan olduğunun sayılması, bir araba plakasında hangi rakam ve karakterlerin olduğunu çözümlemek, yüzünü ekrana okutan kişinin kim olduğunun tespiti gibi. 

### Yazılım Gereksinimi Nedir?

Bu yazının sonrasında gelecek olan yazılarda Matlab 2010 sürümünün Image Processing Toolbox aracı kullanılmıştır. Sanırım siz bu yazıyı bir 10 sene sonra da okusanız geriye doğru uyumluluk ilkesi gereği bu kodları Matlab 2020 de bile çalıştırabiliyor olacaksınız diye hüsnü-zan ediyorum. 

İyi görüntü işlemeler diyelim ve sizi bol bol okumaya ve uygulamaya yönlendirelim...
