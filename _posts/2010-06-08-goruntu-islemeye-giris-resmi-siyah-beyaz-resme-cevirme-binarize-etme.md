---
layout: post
title: "Görüntü İşlemeye Giriş: 3-Resmi İkili Resim (Binari) Formatına Çevirmek"
date: 2010-06-08
---

Aslında başlığı yazarken çok kararsız kaldım diyebilirim. Çünkü pek türkçe söylenmeyen bir isim. Binary formatına çevirme demek resmin sadece iki ana renk olan siyah ve beyazdan resmi oluşturmak diyebiliriz. Peki neden bu işlemi yapıyoruz diye düşünebiliriz.

### Gerçekten kim siyah beyaz ister ki?

Hatırlarsanız eski siyah beyaz ekranlı cep telefonlarında resimlerin renksiz de olmasına rağmen baktığımızda bizim için yine de bir anlam ifade edebliyorlardı. İşte o resimler orjinal resimlerin o formata dönüşmesi ile elde edilebilir diyebiliriz. Aynı bunun gibi başka nedenlerden dolayı da siyah beyaz form kullanılmakta. Örneğin, resmin içinde koyuluk değerine göre fark arz eden belli varlıkların seçiminde kullanabiliriz. Hatırlarsanız veya okuduysanız ilk makalelerimin birinde (bkz. [Morfolojik işlemler](https://mehmetakifakkus.github.io/2010/06/16/morfolojik-goruntu-isleme-2-benzer-nesneleri-secme.html)) bu işlem kullanımış, bir insanın enine kesitinden bazı organların seçimini yapmıştık. Hatta diğer bir örnek olarak yoldan geçen araba sayısı da yine gerçek bir video görüntüsünü siyah beyaz formata çevirermek suretiyle yapılmaktadır. Siyah beyaz resimde her bir pixel için sadece 2 ihtimal vardır ve bir bit ile ifade edebiliriz, bu da resmin üzerinde daha hızlı işlemler yapabileceğimiz anlamına gelecektir.

Neyse, şimdi bu işin bir de Matlab kısmında nasıl kodlandığına bir göz atalım.

```
function[] = hw1_2(I, IsiyahBeyaz)
[F, props] = myimread(I); %% en ve boy bilgisi
totalValue = sum(sum(F)); %% matrix teki tüm ifadelerin toplamı
threshold = uint8(totalValue / (props(1) * props(2))); %% toplam değerin en*boy çarpımına bölümü
F(F &gt; threshold) = 255; % Resmin eşik değerinden büyük değerleri F(F &lt; threshold) = 0; %Resmin eşik değerinden küçük yerleri figure,imshow(F);
myimwrite(IsiyahBeyaz, props, F);
```

Bu kodu anlamamız için bilmemiz gereken bir kaç nokta var. Siyah beyaz resme çevirebilmemiz için bir eşik değeri (threshold) belirlememiz gerekir. Bu değeri bütün değerleri toplayıp toplam hücre sayısına bölerek yapabiliriz. Eşik değerinin üzerinde kalan hücreler beyaza, eşik değerinin altında kalan hücreler de siyaha çevrilerek siyah-beyaz resim elde edilir. Aşağıda örnek bazı resimler bulunuyor. Bir göz atalım:

Diğer bir resim de:

Ekran Resmi 2014-10-29 8.21.37 AM

Kaynak Kod:

akif_image_binarize_matlab

results
