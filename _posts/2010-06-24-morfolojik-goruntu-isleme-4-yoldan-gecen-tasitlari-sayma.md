---
layout: post
title: "Morfolojik Görüntü İşleme 4-Yoldan Geçen Taşıtları Sayma"
date: 2010-06-24
---

Ekran Resmi 2014-10-30 5.35.09 AMBu çalışmamızda ise amacımınız yoldan geçen arabaları daha önce çekilmiş bir video üzerinden saymaktı. Video olarak beytepe köprüsü üzerinden bir fotoğraf makinası ile çektiğimiz bir videoyu kullandık. Videoyu değişik açılardan çektik. Yani arabaları üstten ve ön kısımlarından görülecek şekilde bir 6 farklı video aldık. İşlemek için en elverişli metodun aşağıdaki resimde olan şekilde yani tam tepeden çektiğimiz zamanki olduğunu çeşitli testlerle gördük.

İşlediğimiz kaynak bu sefer diğerlerinden farklı olarak videoydu ve değişik şekilde ele almamız gerekiyordu. Video da resimlerin peş peşe gelmesinden oluştuğundan, videoyu resimlerine ayırıp işleyebiliyorduk.

Bu çalışmada Morfolojik Görüntü İşleme 3’tekine benzer şekilde çalıştık. Burada da bir resmi arka plan olarak seçtik. Bu arka plan resmi, hiçbir arabanın bulunmadığı bir anda videodan alınan bir resimdi. Oluşan farklılıklar arabayı oluşturuyordu.

Ekran Resmi 2014-10-30 5.38.18 AM

Yani sonuçta yandaki gibi arabanın olduğu kısımlar beyaz diğer kısımlar siyah olacak şekilde bir resim elde ettik. Dikkat edecek olursanız elde ettiğimiz resim normalden daha küçük. Bunun nedeni daha küçük bir parça üzerinde çalışıp performans kaydetmek.

Peki arabaları nasıl sayıyoruz? Platformumuz 3 şeritten oluşuyor. Biz de her bir şerite denk gelecek çerçeveler koyuyoruz. Geçen bir araba bizim sanal çerçevelerimizden en az bir karede(frame) de bunun üzerine ayak basmak zorunda. Biz de bu ayak basmaları değerlendirip sayacımızı bir artırıyoruz. Bu artırma işlemi karemizin içinde bir beyazlık oluşup, tekrar tamamen siyaha dönüşme şartıdır.

 

Problemler ve yaklaşımlar: Bu çalışmada problem bir arabanın normal seyrinde gitmeyip, iki şeritte de gidip, iki şeritte de farklı arabalar varmış gibi saydırmasıydı. Fakat arabaların genel gidişatını izleyip, ona göre takip edici çerçevelerimizi daha dar tutarak bu karışmayı engellemiş olduk.

İkinci olarak şöyle bir düşüncemiz oldu ve çözümler üretildi. Taşıt sayma işlemini biz önceden çektiğimiz bir video üzerinden yapmıştık. Elimizde hali hazırda bir video vardı. Peki, bunu gerçek-zamanlı(real-time) yapabilir miydik? Yalnız bunun pratikte geçerli olabilmesi için videoyu video ile aynı anda video akarken işleyebilmeliydik. Yani herhangi bir bekleme olmamalıydı ki eş zamanlı olabilsin. Bir videonun saniyede 30 kare(30 fps) içerdiğini düşünürsek bizim 1/30 = 33.3 msn’de bir kareyi işlemiş olmamız gerekmekteydi.

Yaptığımız ölçümlerde bir karenin işlenmesi için bu süreden daha fazla zaman harcadığımızı gördük. Bu da gerçek zamanlı için elverişsiz bir durumdu. Böylece çeşitli çözümler ortaya koyarak işleme zamanında bazı iyileştirmeler yapmamız gerekiyordu. Aklımıza şöyle bir çözüm geldi: Resmin her yerini işlemek yerine ihtiyacımız olan yeri büyük resimden çekip, çalışma alanımızı daraltabilirdik. Bu çözümü hayata geçirdikten sonra önemli derecede performans kaydettik ve programımız gerçek zamanlı çalışabilir hale geldi.
