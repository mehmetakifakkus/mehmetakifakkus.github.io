---
layout: post
title: "Bir Görüntü İşleme Projesi: Anjio Operasyonu için Damar Kalınlığı Tespit"
date: 2010-11-23
---

![CT kalp resmi](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/damar_kalinligi_projesi/CT_kalp.PNG?raw=true) Şekil1- CT Kalp Tomografisi Resmi



### Projenin Amacı Nedir?

Projenin amacı doktorların anjio kalp ameliyatı sırasında, doktora bazı damar kalınlıklarını bulmasında yardımcı olmaktır. Bunu bir tomografi resmi üzerinde fare tıklamaları ile veya bazı yardımlarla tamamen bilgisayara yaptırmak.

Üstte bir **CT(computerized tomography)** resmi görünüyor. Kalp üzerinde alınmış bu tomografi görüntüsünde kalbi besleyen damarları görünmektedir. Bu damarın herhangi bir yerinde olan **damar daralması(stenoz)** kalbin yeterli beslenememesine ve hastanın kalp krizi gibi bazı önemli rahatsızlıklarla karşılaşmasına sebep olmaktadır. Bunu önlemek için daralmanın olduğu yer bazı müdahaleler ile daralmayı açmak mümkün olmaktadır.

Çekilen bu görüntü yaklaşık 10 saniyelik bir video görüntüsünden kesit olarak alınmıştır. Hastanın nefes almasından ve kalbin atmasından dolayı videonun her anında kaliteli bir görüntü almak mümkün olmadığından kaliteli bir görüntünün olduğu an doktor **videoyu durdurmakta** ve üzerinde uzunluk hesabı vs. işlemleri yapmaktadır.

![katater resmi](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/damar_kalinligi_projesi/katater.PNG?raw=true) Şekil2- Katater Resmi



### Resimden Uzunluk Tespiti için Ölçüt Nedir?

Daralmanın olduğu yeri bilinen bir **uzunluk ölçü birimi** ile belirlemek için bir şeyin ölçüt olarak alınması gerekiyor.  Bu ölçüt resimden resme değişmeyen tutarlılık gösteren bir şey olması gerekiyordu. Bunun için katater (bkz. üstteki resim) adı verilen kalbin içine sokulan cismin kalınlığı bilindiğinden bu ölçüt olarak alınabilirdi. Uzunluk birimi(mm)  cinsinden bilinen bu cisim ile daralmanın olduğu yer orantı hesabı ile yine mm cinsinden bulunabilmektedir.

Anjio cihazından çekilen resim hastadan hastaya (hastanın kalp atışından dolayı hareket oluşmaktadır) ve bazı dış etmenlerden dolayı değişkenlik göstermektedir. Bu değişiklikler resmin genelinde koyuluk değerinin farklı olması veya resmin bir yerinin diğer kısımlarına göre daha açık veya daha koyu olması şeklinde olabilmektedir.



### Resim Üzerinde Bazı Ön İşlemler (Preprocessing Phase)

Üzerinde çalışılacak olan damar resimden daha koyu koyuluk değerine sahip olduğundan fark edilebilmektedir. Belki çıplak gözle bu algılama rahat olsa da bilgisayar bu tip bozuk resimlerde rahatlıkla yanlış çalışabilmektedir. Resim üzerinde işlem yapmadan önce resim üzerinde bu gibi negatif etkileri kaldırabilmek amaçlı **düzeltme çalışması** yapmamız gerekmektedir.

<img src="https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/damar_kalinligi_projesi/bozuk%20resimler.png?raw=true" alt="ham resim" style="zoom:67%;" />

En soldaki resim içinde koyuluk değerleri olarak bir tutarlılık sergilememektedir. Sol üst köşedeki aşırı beyazlık resimde bazı değerlerin yanlış hesaplanmasına sebep olabilmektedir. Ama damarın yinede belirgin şekilde algılanabilmesi resmi geçerli kılabilmektedir. Ama resmin genellinde bir tutarlılık istediğimiz bir özelliktir. Ortadaki resimde ise resmin genelinde aşırı bir koyuluk göze çarpmaktadır. En sağdaki resim ise beklediğimiz resme en yakın olanıdır. 

Resimde **birkaç sebepten** dolayı düzleştirme yapmaktayız.

- Resimde gürültü olarak adlandırdığımız kenar dışı görüntülerin kenarmış gibi algılanmasını engellemek

- Kenarları daha belirgin hale getirerek kenarların daha rahat ve doğru algılanmasını sağlamak.

  

**Projeden bir resim düzleştirme örneği:**



1- ![ham resim](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/damar_kalinligi_projesi/1.png?raw=true) Şekil3- Videodan elde edilmiş ham resim



2- ![ham resim](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/damar_kalinligi_projesi/2.png?raw=true) Şekil4- Resim üzerinde histogram eşitlemesi



3- ![ham resim](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/damar_kalinligi_projesi/3.png?raw=true) Şekil5- Resmin daha aydınlık olması için resim pikselleri biraz daha yüksek değerlere kaydırılmaktadır.



4- ![ham resim](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/damar_kalinligi_projesi/4.PNG?raw=true) Şekil6- Resim ikili (binary) resim haline dönüştürülür.



Yandaki resme bakılacak olursa damar ile arka plan resmi arasında birbirine yakın gri renkler göze çarpmaktadır. Bu koyuluk değerlerindeki benzerlik ise damarın algılanabilmesini zorlaştırmaktadır. Bu yüzden damar ile arka plan resmi arasında bir miktar zıtlık oluşturulması gerekmektedir.

Üzerinde düzeltilme yapılmış bu resimde ise damarı ile arkaplan arasında daha fazla zıtlık bulunmaktadır. Böyle bir resimde ise damarın tespiti daha kolay olmaktadır. Ele alınan bütün resimlerde resim düzleştirme yapılarak daha kesin damar resimleri elde edilmeye çalışılmaktadır.

Resimde daha fazla zıtlık oluşturularak damarlar daha koyu renge, damar dışındaki kısımlar ise daha açık renge dönüştürülerek damarın tespiti kolaylaştırılır. Bu işlem hatırlarsanız resmin histogramını eşitleme işidir (bkz. [histogram_eşitleme](https://mehmetakifakkus.github.io/2010/06/05/goruntu-islemeye-giris-goruntu-histogramini-esitleme.html)). Resimde ön işlemler(düzeltme işlemi) bitince resim üzerinde uzunluk hesabına geçebiliriz. Bunun için resmi siyah beyaz resme çevirip bunun üzerinde işlemler yapıyoruz. Siyah beyaz resimde damarı beyaz diğer kısımları siyah olarak istediğimizden bunu tersine çeviriyoruz.

![resim üzerinde ilgili alana odaklanır](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/damar_kalinligi_projesi/SEC%CC%A7I%CC%87LMI%CC%87S%CC%A7.PNG?raw=true)

Şimdi işlem yapacağımız yere odaklanıyoruz. Üstteki resimde kırmızı dikdörtgen ile işaretli kısımda damarın inceldiği yeri arayacağız.

Resimde ilgilendiğimiz alan çok küçük olduğundan ilgi alanımıza giren kısmı seçip, o alana yoğunlaşmak mantıklı bir seçimdir.  Zira küçük resimlerde çalışmak bu proje için hem performansta önemli iyileştirmeler, hem de daha doğru sonuçlar üretmeyi sağlamıştır.

### Resim Üzerinde İkili İşlemler ve Uzunluk Hesabı

![daha fazla odak](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/damar_kalinligi_projesi/SEC%CC%A7I%CC%87LMI%CC%87S%CC%A72.PNG?raw=true)

Üstteki resimden damar kalınlık bilgisi “distance transform” adı verilen yöntem ile bulunmaktadır. Bu algoritma siyah beyaz resim üzerinde çalışmaktadır ve beyaz noktalar üzerinde noktanın en yakın siyah kenara olan uzaklığını vermektedir. Bu yönteme göre verilen bir ikili resme göre elde edilen sonuç aşağıdaki gibidir.

### Uzaklık Çevrimi (Distance Transformation) Algoritması Nedir?

![distance transform](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/damar_kalinligi_projesi/Distance_Transformation.gif?raw=true)

Bu algoritma temelde ikili resim üzerinde beyaza karşılık gelen ger bir pikselin en yakın kenara olan uzaklığını tamsayı/reel sayı cinsinden bulan bir algoritmadır. Yukarıdaki örnekte tamsayı cinsinden bulunmuştur.

Resim üzerinde ortalara gidildikçe değerlerin arttığı ve kenara olan uzaklığı piksel değeri cinsinden verdiği görülmektedir. Resimde ilgilendiğimiz alan çok küçük olduğundan ilgi alanımıza giren kısmı seçip, o alana yoğunlaşmak mantıklı bir seçimdir.  Zira küçük resimlerde çalışmak bu proje için hem performansta önemli iyileştirmeler, hem de daha doğru sonuçlar üretmeyi sağlamıştır. 

Aşağıda üzerinde çalıştığımız siyah beyaz resmin bir kesitinin “distance transfrom” işlemi uygulandıktan sonraki değerleri gösterilmiştir.

![Distance_Transformation](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/damar_kalinligi_projesi/Distance_Transformation2.PNG?raw=true)



Yukarıdaki resimde mavi ile çizilmiş kısımlar damarın kenarlarıdır. Burada da görüldüğü üzere, damar çeperine en yakında pikseller “1” değerini almış. Damarın ortalarına doğru gidildikçe bu değerlerin arttığı görülüyor. İşte burada sarı ile çizilen pikseller, maksimum noktalar damarın kalınlığını piksel cinsinden vermektedir.

Burada amacımız, damarın en ince olduğu durumu, incelmeden önceki ve sonraki en kalın yerin kalınlığını tespit etmek.

### Performans İyileştirmeleri

Daha önce de bahsedildiği üzere büyük resimde çalışmak yerine kalınlığını hesaplamak istediğimiz damar ve onu kapsayacak şekilde biraz daha büyük bir çevrede çalışmak yeterlidir. Bu sebeple, tüm resim üzerinde çalışmak yerine, doktorun damar üzerine koyacağı bazı noktalar temel alınarak bir pencere belirlenir. Yandaki resimde de görüldüğü üzere kırmızı ile belirlenen pencere içinde çalışma yapmak bize yaklaşık 2 kata kadar varan bir oranda iyileştirme yapma imkânı sağlayacaktır.

grafik

Resim boyutu                            Süre

209×139  ……………………0.094 ms (Pencere kullanılırsa)

677×598  …………………..0.140 ms (Pencere kullanılmazsa)

İşlemlerin en sonunda elde edilen piksellere karşılık gelen uzunluk değeri görünmektedir. Böylece damarın en kalın ve en ince kısmı değerleri ile görünmektedir.
