---
layout: post
title: "Bir Görüntü İşleme Projesi: Anjio Operasyonu için Damar Kalınlığı Tespit"
date: 2010-11-23
---

![CT kalp resmi](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/damar_kalinligi_projesi/CT_kalp.PNG?raw=true) Şekil1- CT Kalp Tomografisi Resmi

Projenin amacı doktorların anjio kalp ameliyatı sırasında, doktora bazı damar kalınlıklarını bulmasında yardımcı olmaktır. Bunu bir tomografi resmi üzerinde fare tıklamaları ile veya bazı yardımlarla tamamen bilgisayara yaptırmak.

Üstte bir CT(computerized tomographi) resmi görünüyor. Kalp üzerinde alınmış bu tomografi görüntüsünde kalbi besleyen damarları görünmektedir. Bu damarın herhangi bir yerinde olan damar daralması(stenoz) kalbin yeterli beslenememesine ve hastanın kalp krizi gibi bazı önemli rahatsızlıklarla karşılaşmasına sebep olmaktadır. Bunu önlemek için daralmanın olduğu yer bazı müdahaleler ile daralmayı açmak mümkün olmaktadır.

Çekilen bu görüntü yaklaşık 10 saniyelik bir video görüntüsünden kesit olarak alınmıştır. Hastanın nefes almasından ve kalbin atmasından dolayı videonun her anında kaliteli bir görüntü almak mümkün olmadığından kaliteli bir görüntünün olduğu an doktor videoyu durdurmakta ve üzerinde uzunluk hesabı vs. işlemleri yapmaktadır.

katater

Daralmanın olduğu yeri bilinen bir uzunluk ölçü birimi ile belirlemek için bir şeyin ölçüt olarak alınması gerekiyor.  Bu ölçüt resimden resme değişmeyen tutarlılık gösteren bir şey olması gerekiyordu. Bunun için katater (bkz. üstteki resim) adı verilen kalbin içine sokulan cismin kalınlığı bilindiğinden bu ölçüt olarak alınabilirdi. Uzunluk birimi(mm)  cinsinden bilinen bu cisim ile daralmanın olduğu yer orantı hesabı ile yine mm cinsinden bulunabilmektedir.

Anjio cihazından çekilen resim hastadan hastaya (hastanın kalp atışından dolayı hareket oluşmaktadır) ve bazı dış etmenlerden dolayı değişkenlik göstermektedir. Bu değişiklikler resmin genelinde koyuluk değerinin farklı olması veya resmin bir yerinin diğer kısımlarına göre daha açık veya daha koyu olması şeklinde olabilmektedir.

Üzerinde çalışılacak olan damar resimden daha koyu koyuluk değerine sahip olduğundan fark edilebilmektedir. Belki çıplak gözle bu algılama rahat olsa da bilgisayar bu tip bozuk resimlerde rahatlıkla yanlış çalışabilmektedir. Resim üzerinde işlem yapmadan önce resim üzerinde bu gibi negatif etkileri kaldırabilmek amaçlı düzeltme çalışması yapmamız gerekmektedir.

1

3

2

En soldaki resim (image 1) içinde koyuluk değerleri olarak bir tutarlılık sergilememektedir. Sol üst köşedeki aşırı beyazlık resimde bazı değerlerin yanlış hesaplanmasına sebep olabilmektedir. Ama damarın yinede belirgin şekilde algılanabilmesi resmi geçerli kılabilmektedir. Ama resmin genellinde bir tutarlılık istediğimiz bir özelliktir. Ortadaki resimde (image 2) ise resmin genelinde aşırı bir koyuluk göze çarpmaktadır. En sağdaki resim (image 3) ise beklediğimiz resme en yakın olanıdır.

Resimde birkaç sebepten dolayı düzleştirme yapmaktayız.

Resimde gürültü olarak adlandırdığımız kenar dışı görüntülerin kenarmış gibi algılanmasını engellemek
Kenarları daha belirgin hale getirerek kenarların daha rahat ve doğru algılanmasını sağlamak.
Projeden bir resim düzleştirme örneği:

Yandaki resme bakılacak olursa damar ile arka plan resmi arasında birbirine yakın gri renkler göze çarpmaktadır. Bu koyuluk değerlerindeki benzerlik ise damarın algılanabilmesini zorlaştırmaktadır. Bu yüzden damar ile arka plan resmi arasında bir miktar zıtlık oluşturulması gerekmektedir.

Üzerinde düzeltilme yapılmış bu resimde ise damarı ile arkaplan arasında daha fazla zıtlık bulunmaktadır. Böyle bir resimde ise damarın tespiti daha kolay olmaktadır. Ele alınan bütün resimlerde resim düzleştirme yapılarak daha kesin damar resimleri elde edilmeye çalışılmaktadır.

Resimde daha fazla zıtlık oluşturularak damarlar daha koyu renge, damar dışındaki kısımlar ise daha açık renge dönüştürülerek damarın tespiti kolaylaştırılır. Resimde ön işlemler(düzeltme işlemi) bitince resim üzerinde uzunluk hesabına geçebiliriz. Bunun için resmi siyah beyaz resme çevirip bunun üzerinde işlemler yapıyoruz. Siyah beyaz resimde damarı beyaz diğer kısımları siyah olarak istediğimizden bunu tersine çeviriyoruz.

SELM

Şimdi işlem yapacağımız yere odaklanıyoruz. Üstteki resimde kırmızı dikdörtgen ile işaretli kısımda damarın inceldiği yeri arayacağız.

SELM2

Üstteki resimden damar kalınlık bilgisi “distance transform” adı verilen yöntem ile bulunmaktadır. Bu algoritma siyah beyaz resim üzerinde çalışmaktadır ve beyaz noktalar üzerinde noktanın en yakın siyah kenara olan uzaklığını vermektedir. Bu yönteme göre verilen bir ikili resme göre elde edilen sonuç aşağıdaki gibidir.

Distance_Transformation

Resim üzerinde ortalara gidildikçe değerlerin arttığı ve kenara olan uzaklığı piksel değeri cinsinden verdiği görülmektedir. Resimde ilgilendiğimiz alan çok küçük olduğundan ilgi alanımıza giren kısmı seçip, o alana yoğunlaşmak mantıklı bir seçimdir.  Zira küçük resimlerde çalışmak bu proje için hem performansta önemli iyileştirmeler, hem de daha doğru sonuçlar üretmeyi sağlamıştır. Aşağıda üzerinde çalıştığımız siyah beyaz resmin bir kesitinin “distance transfrom” işlemi uygulandıktan sonraki değerleri gösterilmiştir.

Distance_Transformation2

Yukarıdaki resimde mavi ile çizilmiş kısımlar damarın kenarlarıdır. Burada da görüldüğü üzere, damar çeperine en yakında pikseller “1” değerini almış. Damarın ortalarına doğru gidildikçe bu değerlerin arttığı görülüyor. İşte burada sarı ile çizilen pikseller, maksimum noktalar damarın kalınlığını piksel cinsinden vermektedir.

Burada amacımız, damarın en ince olduğu durumu, incelmeden önceki ve sonraki en kalın yerin kalınlığını tespit etmek.

uzunluk

Daha önce de bahsedildiği üzere büyük resimde çalışmak yerine kalınlığını hesaplamak istediğimiz damar ve onu kapsayacak şekilde biraz daha büyük bir çevrede çalışmak yeterlidir. Bu sebeple, tüm resim üzerinde çalışmak yerine, doktorun damar üzerine koyacağı bazı noktalar temel alınarak bir pencere belirlenir. Yandaki resimde de görüldüğü üzere kırmızı ile belirlenen pencere içinde çalışma yapmak bize yaklaşık 2 kata kadar varan bir oranda iyileştirme yapma imkânı sağlayacaktır.

grafik

Resim boyutu                            Süre

209×139  ……………………0.094 ms (Pencere kullanılırsa)

677×598  …………………..0.140 ms (Pencere kullanılmazsa)

İşlemlerin en sonunda elde edilen piksellere karşılık gelen uzunluk değeri görünmektedir. Böylece damarın en kalın ve en ince kısmı değerleri ile görünmektedir.
