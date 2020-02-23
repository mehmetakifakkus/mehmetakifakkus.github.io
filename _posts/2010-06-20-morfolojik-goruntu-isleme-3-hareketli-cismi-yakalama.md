---
layout: post
title: "Morfolojik Görüntü İşleme 3 - Hareketli Cismi Yakalama"
date: 2010-06-20
---

Görüntü işlemenin zevkli konularından birisi olan morfolojik görüntü işleme ile örneklerimize devam ediyoruz. Bu deneyimizde sabit bir görüntü üzerinde hareket eden cisimleri, daha doğrusu resme sonradan gelmiş hareketlileri tespit edeceğiz. Bir otopark sahası içinde otoparka yeni gelen arabaların yerini bulacağız ve bunu orijinal resim içerisinde boyayarak tespit edeceğiz.

Bir araba park alanı düşünelim ve gün içerisinde çeşitli büyüklükte ve renkte arabaların gelip park ettiğini ve ayrıldığını düşünelim. Amacımız yeni gelen arabayı tespit edip üzerini boyamak.

![otopark](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/morphology3/frame1.jpg?raw=true =480x)   Şekil1 - Otopark’ın henüz araba gelmemiş hali
 

Bu resim (Şekil1) otoparkımızın ilk durumdaki hali yani henüz yeni araba gelmemişken- fotoğrafını görüyoruz. Yeni gelen arabaları sonraki resimlerden yola çıkarak tespit edeceğiz. Dikkat ederseniz ilk resmimizin diğer resimlerden farkı henüz arabanın bu kısma gelmiş olmamasıdır. Dolayısı ile bu resmi arka plan resmi olarak kullanabilmekteyiz.

Resimdeki hareketli cismi bulma adına farkı anlamamızda bize yardımcı olacak bir arka plan resmi kullanıyoruz ki iki resmi karşılaştırınca aradaki farkı kestirebilelim. Bunun için şekil1’i arka plan resmi olarak kullandık.


![otopark](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/morphology3/frame2.jpg?raw=true =480x)  Şekil2 - Araba henüz otoparkın girişinde


![otopark](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/morphology3/frame3.jpg?raw=true =480x)  Şekil3 - Araba park etmek üzere

 
![otopark](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/morphology3/frame4.jpg?raw=true =480x)  Şekil4 - Arabanın park etmiş hali

Resimleri birbirinden çıkarınca elimize arabanın bulunduğu yer çok belirgin olmasa da oluşuyor. Çünkü diğer kısımlar birbirinden çıkarılınca nötr oluyor. Böylece arabayı tespit etmiş oluyoruz. Aşağıdaki resimlerde arabanın tespit edilmiş halini görebilirsiniz.

Ekran Resmi 2014-10-30 5.17.43 AM

Aşağıdaki resimlerde de seçilmiş arabayı kırmızı renkte gerek resim üzerinde boyuyoruz:

Ekran Resmi 2014-10-30 5.17.51 AM

Matlab kodumuzla gidecek olursak:

```
bck = imread('parkinglot1\frame4.bmp');
r2 = imread('parkinglot1\frame2.bmp');
r3 = imread('parkinglot1\frame3.bmp');
r4 = imread('parkinglot1\frame1.bmp');
 
H = fspecial('gaussian',3,1);  
r2 = imfilter(r2,H,'replicate');
r3 = imfilter(r3,H,'replicate');
r4 = imfilter(r4,H,'replicate'); 
```

Öncelikle resimlerimizi okuduk ve resimler üzerinde hafif flulaştırma kattık. Bunun sebebi resimler arasında çekim zamanı farkından dolayı bazı ufak değişimler. Örneğin resimlerde ağaç yapraklarının hafif değiştiğini görebilirsiniz. Resimler arasındaki bu farkı azaltma uğruna bu flulaştırmayı yaptık. fspecial() adlı fonksiyonumuz bize

```
H =
0.0751    0.1238    0.0751
0.1238    0.2042    0.1238
0.0751    0.1238    0.0751
```

şeklinde bir filtre üretti.. Bu filtre ile resimlerimizi dolaşıyoruz ve resimlerde buğululuk oluşturuyoruz..
```
r21 = im2bw(bck - r2, 0.3);
r22 = im2bw(r2 - bck, 0.4);
c1 = (r21 | r22);
 
r31 = im2bw(bck - r3,0.4);
r32 = im2bw(r3 - bck,0.4);
c2 = (r31 | r32);
 
r41 = im2bw(bck - r4,0.3);
r42 = im2bw(r4 - bck,0.4);
c3 = (r41 | r42);
```

Problemler ve çözüm önerileri: Bu çalışmayı yaparken bazı problemlerle karşılaştık. Çıplak gözle belli olmasa da arka plan olarak seçtiğimiz resim ile diğer resimler arasında arabadan başka farklılıklar da vardı. Bunlardan birisi ağacın dallarının her bir resimde rüzgârın hareket etmesinden dolayı hafif de olsa kaymış olmasıydı. Bu sorunu şu şekilde giderdik: Farklılıkların sadece belli bir büyüklükten daha büyük olanları alıp küçükleri elediğimizde arabaların yerini tespit etmiş olduk.
