---
layout: post
title: "[Türkçe] Bir Görüntü İşleme Projesi: Sanal Fare!"
date: 2011-10-30
---

Yazın bir kaç arkadaş görüntü işleme üzerine çalışmaya karar verdik. Görüntü işleme üzerine ilerlerken elle tutulur bir proje yapmayı düşündük ve bilgisayarla etkileşimli çalışan bir şeyler yapalım dedik.

Buradan sanal fare fikri doğdu. Yani neden bilgisayarı webcam gibi bir kamera ile yönetemeyelim diye düşündük. Yani fare ile yapabileceğimiz şeyleri kameraya bazı direktifler vererek belki kolay yönetilebilir, belki de  eğlenceli bir forma sokabilirdik ve bunun üzerinde çalışmalar başladık.

İleriki zamanlarda çok detaylı olmasa da projeden, nasıl çalıştığından bahsedecek ve gelişim evrelerini de ele alacak şekilde anlatacağım.

### Gereksinimler

Yapacağımız proje web kamera ile çalışacağından sanki bir video işliyormuşçasına düşünmemiz gerekiyordu. Yani saniyede 30 kare alan bir kamera ile eş zamanlı olabilmek için her bir kareyi en fazla 1/30 sn = 33.3 msn sürede işliyor olmamız gerekiyordu. Başta problem olan bu husus sonraki iyileştirmeler ile gayet iyi noktalara ulaştı. Bu aşamaları yazının ilerleyen kısımlarında anlatacağım.

Bilgisayarı web kamerasına verilen yönlendirmeler doğrultusunda komut verebiliyor olmalıydık. En basitinden fareyi hareket ettirebilmeli ve istediğimiz alanlara tıklayabilmeliydik. Ama sadece bunlarla sınırlı kalmamalıydık. Sürükle bırak hareketi ve tekerlek hareketini de sağlayabilmeliydik. Bunun için değişik yaklaşımlar önerdik.

İlk yaklaşım elimizin tamamını bir fare olarak algılatmak ve parmaklarımızdaki değişmelere göre tıklama durumunu belirlemekti. Aşağıdaki resimlerde de görüldüğü üzere sabit bir arka fon belirleyip eli arka fonttan soyutlayarak işlem yapabilirdik. Fakat her zaman temiz bir arka fon bulmak veya istenilen renkte fonu sağlama zordu. Diğer bir durum da: kameranın ele tam üstten bakma zorunluluğu olmasıydı. Kamerayı her daim üstte bir yerde konumlandıramayacağımızdan bu fikirden vazgeçtik.

Screenshot 2014-11-22 02.47.07

İkinci yaklaşım ise elimizin tamamını fare olarak belirlemek yerine sadece bir-iki parmağımızı kullanabilirdik. Ayrıca elimizi sabit bir fonun üzerinde tutma yerine havada da serbest bir şekilde tutabilirdik. Yalnız bu tip bir yaklaşımda da şöyle bir problem vardı: Ten rengi ortam renkleriyle kolaylıkla karışabiliyordu. Doğru bir sonuç üretmek için eli ortamdan oldukça iyi şekilde soyutlamak gerekiyordu.

Bu problem için ise 2 farklı çözüm ürettik. Ya elimize parmaklarımız ortamdan soyutlayacak bir eldiven gibi bir şey giymekti. Bunun da yapabilirlik ve kullanım kolaylığı açısından zor olacağı düşüncesi ile bundan vazgeçtik ve projemizin de şimdiki halinde kullandığımız yöntemi kullandık. Yöntem parmaklarımıza bazı renklerde cisimler yapıştırarak renge duyarlı bir sistem geliştirmekti. Yani parmaklarımızı takip ettirmek yerine parmaklarımızdaki bir iki renkli cismi takip ettirmek hem ortam soyutlaması için daha kolay, işlem yükü daha az bir yöntem ve ele eldiven giymek gibi sıkıcı bir durumda bırakmıyordu. Prototip olarak faremiz şu şekilde kullanılıyordu.

Screenshot 2014-11-22 02.47.15

Projemize ortamla pek karışmayacak, rahatlıkla ayırt edebilecek renkleri tespit etmekle başladık. Yalnız renklerle çalışırken şöyle bir problem ortaya çıkıyordu: Renkler aydınlanma durumuna göre bilgisayarda farklı ifade ediliyordu. Yani öğlen vakti ışık değeri yüksekken yeşil renk farklı bir değer üretiyor, akşama doğru hava kararmaya başlayınca farklı bir değer üretiyordu.

Renk problemini çözmek üzere farklı renk uzaylarını inceleme ihtiyacı duyduk. Normalde varsayılan olarak RGB renk formatını kullanıyorduk. Bunun öncede bahsettiğim gibi ışıklanmaya duyarlı olduğunu söylemiştim. HSV renk formatının birbirine yakın renkler için aydınlanmadan bağımsız benzer sonuçlar ürettiğini öğrendik. Bu da insan renk algısına yakın bir durum sağlıyordu. HSV renk formatında karışmayı engellemek adına birbirine uzak renkler seçtik. Bunlar: açık yeşil ve magenta renklerdi.

Screenshot 2014-11-22 02.47.27

Renkleri de belirledikten sonra iki parmak kullanmanın çoğu problemi çözeceğine karar verdik. Resim3 ve Resim4 te de gördüğünüz üzere iki renk ve başparmak ve işaret parmağı kullanımı rahat bir biçim sunuyordu. Başparmak farenin yerini referans ediyordu ve diğer parmağı da tıklama anında kullanıyorduk. bkz. yandaki resim.

### Programın kısaca algoritması:

Web kamera çalışır ve okunur(saniyede 30 resim içerir)
Resim HSV formatına çevrilir.
Kullandığımız renklerin HSV formatındaki değerleri (hue,saturation,value) belirlidir. Bu değerlere yakın olanlar resimde belirlenir ve binary bir resim elde edilir. Bkz resim5.
 Resimde yeşil rengin ve magenta rengin olduğu kısımların koordinatları ve alan olarak büyükleri döndürülür.
Fare yeşil alanın koordinatına göre ekranda konumlandırılır
Tıklama olması durumu cisimlerin alanı ve aralarındaki oklid uzaklığı kullanılarak tespit edilir.
Screenshot 2014-11-22 02.47.36

### Gerçekleştirim esnasındaki Problemler ve Çözümler

Üzerinde çalıştığımız videonun çözünürlüğünü seçerken şöyle bir uzlaşma yapma durumunda kalmıştık. Düşük çözünürlük seçtiğimizde bazı ayrıntılardan yoksun kalırken, yüksek çözünürlük seçtiğimizde ise işlem miktarının artmasından dolayı programın çalışması esnasında bir yavaşlama söz konusu oluyordu. En uygun seçeneğin 320*340 olduğuna karar verdik ve çalışma boyunca bunu kullandık.

Diğer bir problem ise çalıştığımız video çözünürlüğü ile programın koşacağı bilgisayarın ekran çözünürlüğünün farklı olabilmesiydi. Bu durumda ekran çözünürlüğünün sistemden alınması ve bu çözünürlük değerine göre ölçeklendirme yapıp, faremizi ona göre konumlandırmaktı.

Ardından yeni bir problem söz konusu oldu. Peki, kenar kısımlarda fareyi nasıl hareket ettirecektik. Yani fareyi kenara sürüklemek istediğimizde, elimizi de ekranın kenarına götürüyoruz. Fakat bu durumda görüntünün bir kısmı ekranın taradığı alanın dışına çıkıyordu. Bunun çözümü ise şu şekilde oldu: Ekranda parmaklarımızın tam olarak görüldüğü alan üzerinde işlem yapmak ve kenar noktaları ele almamak şeklinde halloldu.

Öncelikle proje fare üzerinde işlem yaptıracağı için kullandığımız platform üzerinden(MATLAB veya OpenCv) fare fonksiyonlarını bulmamız gerekiyordu. Tıklama ve çift tıklama ve sürükleme gibi işlevleri öğrendik.

Faremizin hangi durumda tıkladığı, hangi durumda çift tıkladığı veya sürükleme yaptığını belirlememiz epey bir zamanımızı aldı. Belki de projenin en çok uğraşılan yeriydi diyebilirim. Bunun için tespit edilen alanların –yani renkli cisimlerin- ağırlık merkezlerinin merkez koordinatlarını tespit etmeliydik. Bunu tespit ettikten sonra aralarındaki uzaklıkların Öklid uzaklığı formülüne göre bulduk. Belirli bir uzaklığın altında ise tıklama durumu, değilse fare hareket etme durumudur diye düşündük. Yalnız bu noktada sabit bir uzaklık seçmedik. Çünkü parmaklarımız bazen kameraya yakın bazen de uzak olabilirdi. Bu durumda yakınken tıklama durumu olmaya bir kameraya uzaklık, kameradan uzaklaşıldığında tıklama durumu olarak sayılabilirdi. Bu sorunu aşmak için renkli cisimlerin alan bilgisini de tuttuk. Böylece aralarındaki uzaklığı alan büyüklüğüne göre ölçekleyip, daha doğru sonuç üretmeyi sağlamış olduk.

Önemli bir diğer sorun da farenin hassaslığı idi. Fare çok kameradan gelen çok küçük değerlere bile tepki verip, hoş olmayan bir titreme gibi bir sonuç üretiyordu. Bu da göze pek hoş gelmiyordu. Bu yüzden farenin önceki konumunu tuttuk ve değişimin büyüklüğünü ölçtük. Belirlediğimiz değerlerin altındaki değişmelerde fareyi hareket ettirmeyerek istemediğimiz titremelerden kurtulduk.

Bütün bu işlemler sonunda programımız en az beklentilerimizi sağlayacak şekilde çalışıyordu. Ama programımız yaklaşık 15fps dolaylarında seyrediyordu. Yani saniyede 15 kare işleyebiliyorduk. Bu da videonun saniyede ürettiği kare sayısından oldukça düşüktü. Böylece elimizin hareketine karşılık faremizden geç tepki alıyorduk. Hatta farenin hareketi kesikli olarak hareket ediyordu. Bunun giderilmesi ancak performans artırımı ile olabilirdi.

### Performans Çalışmaları

Performans çalışmalarını ana iki kategoride ele alabiliriz. Birisi platform bağımsız çalışmalar ve diğeri de daha hızlı çalışacak platforma kodumuzu geçirerek performans artışı elde etme. Bunlardan ikisini de sırası ile açıklayacağım.

İlk performans çalışmamız kodumuzu geliştirmeye başladığımız Matlab kodu üzerinde oldu. Kodumuz üzerinde iyileştirme yaparak hız kazanmaya çalıştık. En çok zaman alıcı işlemlerden birisinin resmi diğer bir resim formatına çevirme işlemi olduğundan yola çıkarak buradan zaman kazanmak istedik. Bütün resmi HSV formatına çevirme yerine renkli cisimlerin önceki karede bulunduğu yer bilgisini kullanarak kısıtlı bir bölgeyi çevirelim dedik ve önemli bir hız kazandık. Yalnız bu kazanım yine de video çekim hızı olan 30fps dolaylarına değildi.

Diğer bir iyileştirme çabası ise kodumuzu derleyip çalıştırılabilir programı üreten platformlarımızın değişikliği üzerinde oldu. İlk geliştirme yaptığımız olan Matlab aslında diğer görüntü işleme yapabileceğimiz dillere göre yavaş çalışan bir çıktı üretiyordu. Bunun sebebinde Matlab dilinin genel yavaşlığı ve kodlama yaparken kullandığımız fonksiyonlar oldu. Kullandığımız öyle fonksiyonlar vardı ki bir çok özellik dönerken biz sadece bir ikisini kullanıyorduk. Böylece kullanmadığımız

halde fonksiyon çok fazla değer dönerek işlem yükü oluşturuyordu. Aynı fonksiyonu C dilinde daha basit ve hızlı çalışacak şekilde yaptığımızda hız kazanmamız hiç içten bile değildi.

C demişken C dilinde kod yazmamıza olanak sağlayan C kütüphanesi OpenCV de kod yazmak bizim için gereklilik arz etmekteydi. Biraz vakit harcadık ve kısa süre içerisinde OpenCV öğrendik ve kodumuzu tamamen C tarafına taşıdık. OpenCv de yazdığımız kod çok daha hızlı çalışıyordu ve neredeyse video hızına yakın bir performans kaydetmiştik.

### Çalışma Sonucu

Çalışmalar ve proje gerçekleştirimi sonunda “Görüntü işleme ve bilgisayarlı görme” alanında hiç azımsanmayacak derecede bilgi sahibi olduk. Bunu bir de güzel çalışan bir proje ile bitirmek bu konuda staj yapan grup olarak bizleri çok sevindirmişti.

Ama projemiz henüz bitmemişti. Üzerinde daha güzel geliştirmeler de yapacağız. Örneğin performans kaygımız henüz bitmiş değil, çünkü kodumuz yavaş bilgisayarlarda beklediğimizden kötü sonuçlar veriyor. Kodda performans artışına devam edeceğiz. Kodumuza cisim takip filtreleri katarak daha hızlı yer tespiti yapmayı düşünüyoruz.

Ayrıca programın son kullanıcı tarafında daha kullanılabilir yapmayı düşünüyoruz. Örneğin belirli renklere bağlı kalmak yerine renkleri dinamik olarak seçmeyi sağlayacağız. Bir de son kullanıcının kullanımına hitap edecek şekilde bir GUI tasarlamayı düşünüyoruz.

### 3. SONUÇ

Genel olarak projeden amaç  görüntü işleme konusu üzerinde temel oluşturmak ve bu bilgilerle basit de olsa bir proje yapmaya yönelikti. Öncelikle kodlarımıza Matlab ile başladık. Matlab dilinin ve geliştirme ortamının görüntü işleme için özelleşmiş kütüphaneleri (image processing toolbox) bulunmaktaydı. Matlab ayrıca kullanım yönünden güzel bir kullanıcı deneyimi sunan bir ara yüzü vardı. Örneğin devamlı açık şekilde çalışan bir konsolunu küçük kodlar ve konutlar için kullanabilmek ve diğer bir çalışma alanında da programın kullandığı bellek elemanlarının içeriğini görebilmek bir geliştirme aracı için güzel şeylerdi.

Daha sonraları projemizde performans arayışlarıyla OpenCv kütüphanesine geçtik ve Matlab ta yazdığımız kodların hepsini bu kütüphane için yazdık. Kodları yazarken eğlendik ve bütün çalışma grubumdaki arkadaşlar adına verimli ve güzel bir proje olduğunu söyleyebilirim.

Buradan staj için bize bu fikri veren, çalışmalarımız süresince maddi ve manevi desteklerini esirgemeyen değerli hocamız Dr. Ahmet Burak Can’a ve Asistan hocalarım Ali Seydi Keçeli’ye, Aydın Kaya’ya ve Yalın Yalıç’a teşekkürlerimi sunuyorum.
