---
layout: post
title: "Bir Görüntü İşleme Projesi: Buğday Sınıflandırma!"
date: 2011-06-23
---

### Projenin amacı
result_for_dProjenin amacı; buğdayları bazı özelliklerine göre sınıflandırmaktır. Sınıflandırma en kaba anlamı ile buğday ve buğday olmayan maddeleri birbirinden ayırmaktır. Asıl sınıflandırma işlemi ise buğdayların yetiştirilmesi sırasında maruz kaldığı zararlı böceğin buğdayda oluşturduğu bozulma oranına göre ayırmaktır. Burada konu edilen böcek süne ismi verilen zaralıdır.

Ayırma sırasında çalışan algoritma karmaşıklık bakımından düşük olmalıdır ve kısa zamanda sonuç verebilmelidir. Çünkü çalışacak algoritmanın gerçek zamanlı bir projede çalıştığı düşünüldüğünde kısa zamanda doğru sonuç verebilmesi de aradığımız kıstaslar arasındadır.

1. Giriş
1.1 Projenin Amacı
Projenin amacı; buğdayları bazı özelliklerine göre sınıflandırmaktır. Sınıflandırma en kaba anlamı ile buğday ve buğday olmayan maddeleri birbirinden ayırmaktır. Asıl sınıflandırma işlemi ise buğdayların yetiştirilmesi sırasında maruz kaldığı zararlı böceğin buğdayda oluşturduğu bozulma oranına göre ayırmaktır.

Ayırma sırasında çalışan algoritma karmaşıklık bakımından düşük olmalıdır ve kısa zamanda sonuç verebilmelidir. Çünkü çalışacak algoritmanın gerçek zamanlı bir projede çalıştığı düşünüldüğünde kısa zamanda doğru sonuç verebilmesi de aradığımız kıstaslar arasındadır.

Süne adı verilen zararlı buğday henüz yetişmemişken buğdayı emmekte ve buğdayın kalitesini düşürmektedir. Buğdaylar da böylece kalitesine göre sınıflandırılır ve farklı ürün gruplarına girdi olarak kullanılır. Bazıları ile makarna yapılırken bazıları ile pastalık un ve bazıları ile ekmek yapılmaktadır.

Projede süne zararlısından etkilen buğdayların biraz girintili çıkıntılı olduğu ve bu girinti ve çıkıntıların buğday üzerinde kenar bilgisi oluşturacak şekilde bir görüntü oluşturduğu görünmektedir. Yani fazlaca kenar bilgisi oluşturmuş bir buğday süne zararlısı tarafından fazlaca zarar görmüş bir buğday anlamına gelmektedir.

Buğday hakkında bazı bilgiler
Sağlam Buğday Örneği
Yukarıdaki resimlerde de görüldüğü üzere hasat edilen buğday çıkan ürünlere göre şu şekilde sınıflandırılabilir. Soldaki resimde herhangi bir şekilde zararlı görmemiş, gayet sorunsuz bir şekilde yetişmiş bir buğday tanesidir.

Ekran Resmi 2014-10-28 8.24.13 PM

Ortadaki buğdaylar ise süne zararlısı tarafından bozulmaya uğramış buğdaylardır. Görüldüğü üzere bazı buğdaylar yukarıdan bakıldığında dıştan içeri doğru bükülmeye uğratmıştır. 1 ve 3 numaralı resimlerde bu rahatlıkla anlaşılabilmektedir, fakat 2 numaralı resim üstten bakıldığında bir sorun yokmuş gibi duruyor. 2 numaralı buğdayda üstten içe doğru bir girinti ve çökme olmuştur. Bunun tespiti 1 ve 3 numaralı buğdaylara göre daha zordur.

Sağdaki resimde ise buğday olmayan madde örnekleri bulunabilmektedir. Bu bir taş, bir çöp tanesi veya kabuğundan henüz çıkmamış bir buğday tanesi olabilmektedir

### Programlama Dili Hakkında Bazı Bilgiler
Projenin gerçekleştirimi sırasında MATLAB 2009b adlı programın görüntü işleme kütüphanesi(Image Processing Toolbox) kullanılmıştır. Matlab’ın gerek kullanım kolaylığı, gerek kodların yorumlanarak satır satır çalışabilmesi tercih sebebimiz olmuştur. Çalışma alanındaki değişkenlerin sürekli kalması sayesinde programı tekrar derlemeden değiştirmek istediğimiz değişikliği yapıp ilgili kodumuzu çalıştırmamız mümkün olmaktadır.

Geniş görüntü işleme kütüphanesi bize çoğu temel fonksiyonu yazmak yerine, problemin kendisi ile daha detaylı çalışma yapma imkanı vermektedir.

### Sınıflandırma(Classification)
Daha önce de bahsettiğimiz üzere temel manada sınıflandırma işlemimiz buğday olan ve buğday olmayan maddelerin ayrılması anlamındaydı. Bu maddeler soyutlandıktan sonra geriye kalan buğdaylar arasında bozulma oranlarına göre buğdaylara derece atamaya çalışacağız.

### Buğday Olmayan Maddelerin Ayırımı
Ekran Resmi 2014-10-28 8.30.04 PMBuğday olmayan maddeleri buğdaydan ayırmak çok zor olmayan bir iştir. Çünkü buğday olmayan maddeler buğdaylara göre çok bariz bir şekilde farklı biçimsel özellikler gösterirler.

Örneğin yandaki şekilde üstteki buğday buğdaya göre alan olarak daha fazla yer kaplamaktadır. Alan bilgisinin hesabı Matlab programında morfolojik işlemler kullanılarak yapılabilmektedir. Öncelikle resim ikili resme çevrilir ve ardından beyaz piksellerin sayısı sayılır ve alan bulunur.

Bu alan miktarı bahsettiğimiz çöp için buğdayların ortalamasının çok çok üzerinde olacaktır. Böylece bu maddeyi de buğday olmayan madde olarak seçebiliriz.

Örnek resmimizdeki diğer bir buğday olmayan madde ise taşa benzeyen yuvarlağımsı bir maddedir. Bu maddenin belki alan bilgisi kullanılarak buğdaylardan ayıklanması söz konusu olamamaktadır.

Burada ise devreye dairesellik girebilmektedir. Yine morfolojik işlemler kullanılarak resim ikili resme çevrilir. Buradan resimdeki maddelerin dairesellik özelliği kullanılarak ayıklanma yapılabilmektedir. Örneğin normal bir buğday şekil olarak elipse benzemektedir. Fakat bahsettiğimiz taş elipsten daha çok bir daireye benzemeye başlamamıştır. Böylece bu maddeyi de buğday olmayan madde olarak seçebiliriz.

### Görüntü İşleme Hakkında Biraz Bilgi
#### Kenar bilgisi nedir?
Ekran Resmi 2014-10-28 8.30.16 PMKenar, resimdeki piksellerin koyuluk değerlerindeki ani değişim yerlerinden oluşuyor. Yani piksellerdeki sürekliliğin ani olarak değiştiği yer kenardır diyebiliriz.

Ekran Resmi 2014-10-28 8.30.47 PMSoldaki siyah beyaz resimde ani koyuluk değişimleri sağdaki resimde olduğu görüldüğü üzere bir ikinci türevde işaret değişimi oluşturur ve burada kenar bilgisi elde edilir

#### Neden Kenar Bilgisi?

Buğdayları sınıflandırırken süneli buğdayın belli ortak özellikleri çıkartılıp bununla her bir buğdayı bu özellik kümesi ile karşılaştırabiliriz. Bu yöntemlerin programlama karmaşıklığı ve üst düzey görüntü işleme teknikleri gerektirdiğinden bu yöntemlere girilmedi. Ayrıca bu yöntem sadece kenar bilgisinden yola çıktığından kısa sürede sonuç alma gereksinimine de uygundu

Kenar bilgisi ile süneli buğday tespiti
Buğdayların süneli olup olmamasına göre ayırımında kenar bilgisinin kullanılacağını söylemiştik. Sağlam olan buğday kendi içerisinde homojen ve uyumlu bir yapı oluştururken, süneli buğdayda ise girinti ve çıkıntılar boy gösterecektir. Biz burada bu girinti ve çıkıntıların buğday üzerinde oluşturduğu kenar bilgisinden yararlanıyoruz.

Ekran Resmi 2014-10-28 8.30.57 PM

Örneğin yukarıdaki buğday örneklerinde solda sağlam buğday ve sağda ise süneli buğday bulunmaktadır. Dikkat edileceği üzere soldaki sağlam buğday pürüzsüz bir yapı, sağdaki süneli ise girinti ve çıkıntı içermektedir. Biz bu girinti ve çıkıntıları ele alarak süneli olup olmadığına karar veriyoruz.

Başarılı kenar bulma algoritmalarından olan Canny kenar bulma algoritması ile her bir buğdayın ayrı ayrı kenar bilgileri elde edilir. Kenar bulma algoritması sağlam buğdaylarda az yanıt verirken, süneli buğdaylardaki pürüzlü yapı çok fazla yanıt vermektedir.

Yanda ikEkran Resmi 2014-10-28 8.45.49 PMi çeşit buğdayın gri resmi bulunmaktadır. Soldaki buğday süneli, sağdaki ise sağlam buğdaydır. Buğdayların altındaki resim ise Canny kenar bulma algoritmalarının sonuç verdiği kenar bilgileridir.

Resimlerden anlaşıldığı üzere süneli buğday kenar bilgisi olarak karmaşık ve birbirinden bağımsız çok sayıda parçalar içermektedir. Süneli buğday 7 parça içerirken, sağlam buğday birbirinden bağımsız sadece 2 parça içermektedir. Bağımsız parçaların sayısının azlığı buğdayın ne kadar sağlam olduğunu gösterir.

### 2.2 Adım Adım Sınıflandırma
Ekran Resmi 2014-10-28 8.47.18 PM



Ham bir resimden buğdayın içerdiği bağımsız parçaların bulunana kadarki aşamayı sırasıyla göstermeye çalışalım:

Sağda görüldüğü üzere bir grup buğday birbirlerine çok yakın olmayacak şekilde yani üst üste gelmelerini engelleyecek şekilde bir fotoğraf alınır.

Fotoğraf işlenmek üzere renk bilgisinden soyutlanarak siyah beyaz hale çevrilir. Bu sayede 3 katmanlı rgb resmi tek katmana indirgenerek işlem yapılır. Bu hem kolaylık, hem de hız sağlayacaktır. Ayrıca renk bilgisine de ihtiyacımız yoktur.

 

 

 

Ekran Resmi 2014-10-28 8.47.28 PM

Siyah beyaza çevrilen resim üzerinde bazı işlemler yapılmak üzere ikili resim formatına çevrilir. Bu sayede buğdayların konum bilgisi, kapladıkları alan, dairesellik bilgisi gibi bilgiler elde edilir.

Matlab’daki görüntü işleme kütüphanesindeki bazı komutlar (region props) bize bu taneleri tek tek işleme imkanı sağlamaktadır.

Yandaki şekilde de görüldüğü üzere buğdayların konum bilgisini kullanarak tek bir buğdaya erişmemiz mümkün olmaktadır. Daha sonra bu notadaki gerçek buğday resmine gri renkli resim üzerinden seçip, onun üzerinden işlem yapacağız.

 

 

 

Ekran Resmi 2014-10-28 8.48.43 PMBöylece seçilen herhangi bir buğday orijinal gri formatlı resimde seçiyoruz. Bu resim üzerinde işlem yapınca tanenin buğday olup olmadığını, buğday ise bunun süneli buğday veya sağlam buğday olduğu şeklinde yorum yapabiliyoruz.

Son olarak buğday üzerinde kenar bulma algoritmasını bir önceki kare ile çalıştırınca karşımıza yandaki gibi bir sonuç resmi üretiliyor.

Şimdi ise bu işlemleri bütün buğdaylarda uyguladığımızı düşünelim. Bu durumda sonuç aşağıdaki gibi olacaktır. Küçük kırmızı yazı ile yazılmış yer buğdaya verilmiş biricik değer, yeşil ile yazılmış yazılar ise buğdayın içerdiği bağımsız parça sayısını ifade etmektedir. Hatırlayacağımız üzere buğdayın içerdiği bağımsız parça sayısı buğdayın karmaşıklığını ve süne derecesini belirtmekteydi. Sayı arttıkça daha fazla karmaşıklık anlamına geliyor.

 

Örnek Sonuç 1:

Ekran Resmi 2014-10-28 8.58.02 PM

Örnek Sonuç 2:

Ekran Resmi 2014-10-28 8.58.14 PM

 

### 3. Sonuç
Sonuc1 ve Sonuc2 resimlerini değerlendirdiğimizde kenar bulma ile süneli buğday tespitinde büyük oranda doğru orantılı olarak çalıştığını gördük. Süne derecesi 2,3,4 olan buğdaylar genel olarak sağlam buğday, 5 ve fazlası ise süne zararlısı tarafından zarar görmüş süneli buğday olduğunu tespit ettik.

Ama sonuca tezat çıkan bazı buğday örnekleri olduğunu da tespit ettik. Yani bazen sağlam olan bir buğday sağlam olmayan buğday kategorisine girebiliyordu. Sağlam olmayan buğdayın sağlam olarak algılanmaması ise sevinç verici bir sonuçtu.

#### 3.1 Program İyileştirmeleri
Projeyi geliştirirken farkına varılan ve performansa oldukça katkı sağlayan birkaç iyileştirmeden bahsedelim.

- Resim boyutu: İyileştirmelerden birisi girdi olarak verilen resim küçük boyutlu seçilirse performans artmaktadır. Biz genellikle 600×800(.5 mpx) seçtik. Bu boyutlarda bir resim içine yaklaşık 30 yüksek detaylı buğday sığıyordu. Bunun altında olması durumunda buğdayda bazı detayların kaybolduğunu ve buğdaydan elde edilmesi gereken bilgilerin azaldığını gördük. Bu da istenmeyen sonuçlar üreteceği için tercih edilemezdi.

- Ortam Işığı: Fotoğrafın çekildiği ortam ışığının derecesi ve ışığın geliş açısı çok önemlidir. Işık tek bir yönden düşmemelidir. Çünkü ışığın olmadığı tarafta buğday tanelerinin gölgesi oluşmaktadır. Bu yanlış sonuçlar vereceğinden yani buğdayın hatları belli olmayacağından istenmeyen bir durumdur.

- Diğer bir seçenek ise buğdayın fotoğrafın çekildiği taraftan yani üstten aydınlatılmasıydı. Bu durumda buğdayın hatları fazlaca ışık aldığından buğdayın yukardan çökmeleri tespit edilemiyordu. Yani buğdayın üst kısımlarında bize kenar bilgisi sağlayacak bazı detaylar lazımdı ve buralarda gölge oluşmalıydı. Aksi takdirde üstten aydınlatma bu kısımların aydınlanması ve detayların kaybolması anlamına gelebilirdi.

Bu sorunlar üzerine şöyle bir çözüm önerdik. Çözüm hem çok açıdan ışık gelmesini sağlıyordu hem de ışığı üstten göndermediği için bazı detayların kaybolması engelliyordu.

Ekran Resmi 2014-10-28 8.58.38 PMFloresan lamba istenilen düzeyde işimizi gördü. Lambanın tam merkezine konulan buğdaylar çok net bir şekilde gölge oluşmasını engelledi ve ışığın yanlardan gelmesini sağlayarak üst taraftaki detay bilgilerinin yok olmasını engelledi. Yanda kullanılan sistemin bir resmi görülüyor:

3.2 Performans analizi

Programımızı 600*800 resimlerde ortalama 20 buğday ile denedik. Her buğdaya yaklaşık 100*100 piksellik bir alan verildi. Şu şekilde zamanlar alındığı görüldü:

20 buğday…………. 1.928277 seconds(10 wheats per second) (Resim sonuc2)

31 buğday…………. 2.531367 seconds(12 wheats per second) (Resim sonuc1)

Saniyede yaklaşık ortalama 10 buğday sınıflandırabildiğimizi gördük. Bir resim içerisini sığdırılan buğday sayısı arttıkça performans artıyor.

### 3.3 Çalıştırılabilir Program Hakkında
Çalıştırılabilir program Matlab dizini altın konur ve programda

f = imread(‘d.jpg’); %Resmi okuyup bir degiskene at
satırında okunacak resmin ismi girilir ve program çalıştırılır. Sonuç ekrana basılır.

### 3.4 İleri Araştırma
Programın daha iyi sonuçlar verebilmesini sağlamak amacıyla “feature extraction” gibi metotlar kullanılarak süneli ve sağlam buğdaya ait bazı özellikler bulunarak ayırma yoluna gidilebilir. Bu metot ayrıca kenar bulma yöntemi ile beraber kullanılarak iki aşamalı şekilde daha net sonuçlar elde etme sağlanabilir.

Bir diğer konu ise performanstır. Matlab programının yavaş çalışan çalıştırılabilir program(exe) ürettiği bilinmektedir. Programı daha da hızlı hale getirmek amacı ile OpenCv gibi C kütüphaneleri ile geliştirme yapılabilir.

### Kaynak Kod
Projenin kaynak kodunu verebilirim. Benimle iletişime geçiniz.
