---
layout: post
title: "Görüntü İşlemeye Giriş: 2-Görüntü Histogramını Eşitlemek"
date: 2010-06-05
---

### Neden Resmin Histogramını Eşitlemeye İhtiyaç Duyarız

Çektiğimiz fotoğrafların çoğu zaman bazı etkenlerden dolayı kaliteli olmadığını görürsünüz. Hatırlarsanız yetersiz ışık seviyesinde çekilen fotoğraflarda bulanık veya flu diye tabir edebileceğimiz renlerin veya tonların keskin şekilde belli olmaması gibi bir durumla karşılaşabiliriz.

Bu durumda resim pek keyif vermeyen bir görünümde olacaktır. İşte bu gibi durumlarda resmin histogram eşitlemesini yapabiliriz. Histogram eşitlemesi demek: resmin histogram eğrisi grafiğinden görüldüğü üzere grafiğin bir kısmında oluşan yoğunlaşmayı grafiğe homojen şekilde dağıtmaya çalışmak ve görüntü üzerinde bir nevi düzeltme çalışması yapmaktır. Dolayısı ile yandaki resim biraz bulanık görünmektedir.

Dolayısıyla histogram eşitleme resmin renk çeşitliliğini artırır ve göze daha rahat ve algılanabilir hale getirir. Önceden resim koyu ağırlıklı veya açık ağırlıklı renklerden oluşuyorsa histogram eşitleme yapıldıktan sonra resim koyu ve açık renklerin ikisini de içerir hale gelir ve daha net görünür. Aşağıda histogram grafiği verilmiş bir resmin orjinal fotoğrafta orta tarafa yoğunlaşmış şekilde biriktiğini görüyoruz. İşte eşitleme işleme bunu resimde tüm koyuluklar içerilecek şekilde tüm resim geneline yayılmaktadır.

#### Kötü Histogramlı Bazı Örnek Resimler

![sample image](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/histogram_equalisation/a.png?raw=true)

![sample image](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/histogram_equalisation/b.png?raw=true)

// Buraya resmin histogram grafikleri konulacak…

#### Histogramı Eşitleyince Nasıl Oluyor?

Aşağıda  histogram eşitlemesi  yapılan bazı resimleri görebilirsiniz.

![sample image](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/histogram_equalisation/a_result.png?raw=true)

![sample image](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/histogram_equalisation/b_result.png?raw=true)

Kaynak kod: [indirin](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/histogram_equalisation/akif_hist_eq_matlab_code.zip)


```
% Written by Mehmet Akif AKKUS
% mail: akifakkus@ceng.metu.edu.tr
% sekilver.net/akifsblog.com/
 
function[] = hw1_3(I, Ihisteq) 
[F, props] = myimread(I);
 
imW = props(1); %width of image
imH = props(2); %height of image
imL = props(3); %L of image
 
nk = zeros(imL+1, 1);
prrk = zeros(imL+1, 1);
result = zeros(imL+1, 1);
MN = imH * imW;
 
for i = 1:imW 
    for j=1:imH 
        k = uint16(F(j,i));
        k = k+1;
        nk(k) = nk(k) + 1;  % bir yogunluk degerinin kac kez gectigini bul
    end
end
 
for i = 1:imL+1   %yogunluk degerlerinin yuzdeliklerini bul
    prrk(i) = nk(i) / MN; 
end
 
temp = zeros(1);
for i=1:imL+1 
   temp = temp + prrk(i);
   result(i) = uint16(imL*temp);  % ? islemi ile yeni histogram degerlerini bul
end
 
f_result = F;
for i = 1:imW %% 320
    for j=1:imH %%240
        temp  = F(j,i);
        f_result(j,i) = result(temp+1); % resmi yeniden bicimlendir ve sonucu f_result yaz
    end
end
 
imshow(F);
figure, imshow(f_result);
myimwrite(Ihisteq, props, f_result);
}
```
