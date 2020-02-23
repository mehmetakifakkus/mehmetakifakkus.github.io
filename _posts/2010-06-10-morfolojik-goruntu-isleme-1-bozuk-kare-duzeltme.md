---
layout: post
title: "Morfolojik Görüntü İşleme 1- Bozuk kare düzeltme"
date: 2010-06-10
---

Görüntü işlemenin zevkli konularından birisi olan morfolojik işleme ile örneklerimize başlayalım isterseniz. Morfolojik görüntü işleme resimlerin genellikle şekilsel bazda ele alınıp işlenmesidir diyebiliriz. Matlab ta yaptığımız örneğimize geçelim isterseniz:

![gürültülü_resim](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/noisy_image.png?raw=true)
Şekil1-bozukkare


Şekil1’de üzerinde saçma sapan lekeler ve şekiller bulunan bir dikdörtgen görüyorsunuz. Bu gereksiz lekelerden şeklimizi arındırmak ve tertemiz bir dikdötgen ortaya çıkarmak istiyoruz. Bunu Matlab da koda nasıl dökeriz mantığıyla beraber birlikte anlamaya çalışalım…

Öncelikle
```
f = imread('bozukkare.png');
```

Komutu ile resmimizi okuyup f adlı değişken içerisine aktarıyoruz. Ardından,

```
t = strel('square',50);
```

50×50 boyutunda bir yapısal element oluşturuyoruz.(dikkat edin dörtgen!). Bu yapısal element resmi dolaşıp bozuklukları gidermeye çalışacak(ileride anlatacağım).
```
f = imopen(f,t);
figure, imshow(f)
```
imopen fonksiyonu resmimizi ‘t’ yapısal elementi ile dolaşır boyu 50×50 den küçük olan yani 50×50 lik kare matrisin içerisine girebilecek herşeyi yutar. ayrıca büyük resimleri de bu oranda kırpar. Dolayısıyla dikdörtgen de kenarlarında biraz küçülmüş olacak.(Şekil2).

![kısmen_gürültülü_resim]
(https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/result_of_opening.png?raw=true)
Şekil2-Kısmen gürültüsü giderilmiş resim

Bu arada karenin içinde kalan noktalarda aynen kaldı. Eee onları yok etmiyormuyuz..
```
f = imclose(f,t);
figure, imshow(f)
```
imclose() komutu resmimizi ‘t’ yapısal elementi ile dolaştı ve 50×50 lik bir kare matrisle resmin beyaz kısmını merkezi olacak şekilde genişletti-dilation-(böylece iç kısımdaki boşluklar yok oldu). Fonksiyon ardından büyüttüğü oranda tekrar küçülttü-erosion-.(resim eski haline döndü). Resmin son haline bakalım.(Şekil3).

![gürültüsüz_resim](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/result_of_closing.png?raw=true)
Şekil3-Tamemen düzelmis kare

Hadi bakalım kolay gelsin. Sizde denemek isterseniz buyrun resmin orijinali :
