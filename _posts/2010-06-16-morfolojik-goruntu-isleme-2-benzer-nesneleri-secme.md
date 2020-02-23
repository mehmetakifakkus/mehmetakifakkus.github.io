---
layout: post
title: "Morfolojik Görüntü İşleme 2 - Benzer Nesneleri Seçme"
date: 2010-06-16
---

![kidneyCTImage](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/morphology2/kidnetCTImage.jpg?raw=true)   Şekil1 - Kidney CT Resmi

Görüntü işlemenin zevkli konularından birisi olan morfolojik görüntü işleme ile örneklerimize devam ediyoruz. Şekil1’de Bir insan vücudunun enine kesitini görüyoruz (Bazılarımızın hoşuna gitmemiş olsa da görüntü işleme tıp dünyasınının vazgeçilmezlerinden).
Bu resimde belirgin olan organları morfolojik görüntü işleme ile ortaya çıkarmaya çalışacağız. Şekil1 de solda karaciğer, omurganın iki tarafında böbrekler, orta tarafta mide ve sağda dalak bulunuyor. Eee bunları sen nereden biliyorsun diye soracak olursanız dönem 2 tıpta okuyan(Onur Gözmen Hacettepe tıp) arkadaşım söylemişti.

Şimdi aşama aşama bu resmi Matlab kullanarak işleyelim.

```
f = imread('kidney.jpg');
f = rgb2gray(f);
```
Matlab ana dizinine attığımız resmi imread() fonksiyonu ile okuyoruz. Ardından resmimizi rgb(Renkli red,green,blue) olduğundan bunu gri forma çeviriyoruz.

```
f(f&gt;180) = 0;
r1 = im2bw(f,0.50037);
figure, imshow(r1)
```
Resimde aşırı beyaz alanlar olduğundan parlaklık değeri 180 den fazla olanlaı siyaha çevirdim. Daha sonra resmi ikili(binary) resim formatına çeviriyoruz. İkili resim demek bizim belirlediğimiz sınır(treshold) değerinden büyük koyuluk deerine sahip olanlara ‘1’ değerini yani beyaz, bu değerin altında olanlara da ‘0’ değerini verir buda siyah demektir. Ve resmimizi ekrana basıp ne aşamada olduğumuzu bir görelim.1-1

![1-BinaryImage]
(https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/morphology2/1-binary.jpg?raw=true)  Şekil1 - İkili (Binary Resme Çevirme)

```
se = strel('disk',5);
r1 = imerode(r1,se);
figure, imshow(r1)
```

Resmi oluşan karmaşıklı gidermek için erezyona uğratıyoruz. Erezyona uğratmak için bir şekil oluşturmamız gerekiyor. Ben bu aşamada çapı 5 birim hücre olan bir diski seçtim. Erezyon işleminden sonra resmimizin durumu şekil3 e görünüyor.1

![2-DenoisedImage](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/morphology2/2-eliminate.jpg?raw=true)  Şekil2 - Resmin dışındaki gereksiz gürültüleri giderme

```
r1 = bwareaopen(r1, 255);
figure, imshow(r1)
```

Resimde işimize yaramayan küçük parçacıklar oluştuğunu görüyoruz. Bunlardan kurulmak için bwareaopen() fonksiyonu kullanışlı görünüyor. Fonksiyonun aldığı değerden küçük hücre sayısından oluşmuş olanlar eleniyor ve şekil4 ‘teki görüntümüz oluşuyor.

 ![3-FilledImage](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/morphology2/3-denoise.jpg?raw=true)  Şekil3 - Boşlukların İçini doldurma

```
se = strel('disk',5);
r1 = imdilate(r1,se);
figure, imshow(r1)
```

Küçük parçacıkları yok ettik. Gayet güzel gidiyoruz. Şimdi sıra organların içerisinde erozyonun oluşturduğu delikleri kapatmada. Burada yine aynı 5 birimlik diskimizle resmimizi tarıyoruz ve resme imdilate() fonksiyonu ile genişletme uyguluyoruz ve Şekil5’teki resmimizi elde ediyoruz.

 ![4-FilteredImage](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/morphology2/4-fill-in.jpg?raw=true)  Şekil4 - Boşlukların İçini doldurma

```
r1=imfill(r1,'holes');
figure, imshow(r1)
```

İstersek organ seçme içişini burada bitirebiliriz. Fakat ben organların içerisinde olan boşluları giderme yolunu seçtim. Bunun için imfill() fonsiyonunu kullandım. Böylece organların içerisinde oluşan boşluklar gitmiş oldu. Bunun resimde nasıl bir değişiklik yapmış olduğu tahmin edilebileceğinden resmini koymuyorum. Şimdi gelelim oluşan bu ikili resim nasıl resimde göstereceğiz.

```
f(~r1)=0;
imshow(f);
```

~r1 ile resmimizin tersini alıyoruz. Bu şu demek beyaz olan kısımları siyah, siyah olan kısımları ise beyaz yapıyoruz. Böylece siyah kısımları seçili hale getiriyoruz gibi düşünebiliriz. Bu kısımları orijinal resmimizde 0 yani siyah değeri vererek sadee organların oldupu yerleri ortaya çıkarmış oluyoruz. İstersek organları boyayadabiliriz. Ama renkli görünmesi için rgb formatında remi üretmemiz gerekiyor. Yani resim red, gree ve blue olmak üzere 3 katmanlı yapıp organların olduğu koordinatlara istediğimiz renk değerlerine göre renklendirebilirdik. Neyse resmimizin son halini Şekil6 da görüyoruz.son

![5-FilteredImage](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/morphology2/5-finish-as-filtering-in-original.jpg?raw=true)   Şekil5 - Orjinal resim Şekil4'teki binary resme göre filtre edilir.


Eğer sizde denemek veya üzerinde çalışmak isterseniz buyrun resmin orijinal halini indirin:

http://sekilver.net/akifsblog.com//wp-content/uploads/2010/06/kidney.jpg
