---
layout: post
title: "Programlama Dili Geliştirme: Basit Türkçe Ayrıştırıcı (Parser) Yazımı"
date: 2017-09-05
---

Merhaba arkadaşlar,

Programlama dili geliştirirken karşımıza çıkan en temel öğelerden birisi **ayrıştırıcı** yazımıdır. Bildiğiniz üzere programlama dilini yazı tabanlı geliştiriyoruz çoğunlukla (scratch gibi blok tabanlı diller de mevcuttur). Yazdığımız kodun hatalı olup olmadığının denetlenmesi **ayrıştırıcı**nın sorumluluğundadır.



### Parse Tree (Ayrıştırıcı Ağacı) nedir?

Ayrıştırıcılar genellikle **parse tree** adını verdiğimiz ayrıştırma ağacı kuralları yazarak oluşturulur. En temel manada örnek vermek gerekirse, bunu cümlelerin nasıl oluştuğundan hareketle anlatabiliriz:



#### En basit Türkçe gramer

> Cümle = özne yüklem

Evet, gördüğünüz üzere Türkçe cümle ifadeleri sırasıyla özne ve yüklemin arka arkaya gelmesinden oluşur. Peki yazdığımız bu ayrıştırıcı kuralına uyan bir kaç cümle örneği verelim:

> Ali geldi.

> Ahmet gidiyor.



#### Biraz daha karmaşık hali

Tabi her Türkçe cümlenin bu kadar basit ifade edilmediğini içinizden geçirdiğinizi duyar gibiyim. Biliyoruz ki; çok daha karmaşık cümleler kurabiliriz ve yazdığımız ayrıştırıcı ağacı bunlarında kontrolüne imkan sağlamalıdır. Hadi şimdi yeni bir gramer belirleyelim:

> cümle = özne tümleç yüklem

Evet yeni gramerimiz öncekine ek olarak **tümleç** adı verilen *konum*, *zaman* gibi ifadelerin belirtiği ek dil ögelerini de içlerinde barındırırlar. Şimdi de bu ayrıştırıcı kuralına uyan örneklere bakalım:

> Ali sinemaya gidiyor.

> Ali otobüsle gidiyor.

> Ali sabah gidiyor.



#### Birden fazla tümleç kullanmak istesek

Şu ana kadar geldiğimiz noktada özne, tümleç ve yüklemden oluşan basit bir gramerimiz var. Peki bu gramer şu cümlenin doğruluğunu test edebilir mi?

> Ali sinemaya sabah gidiyor.

Malesef yapamaz, çünkü örnek cümlemiz 2 tane tümleç içermektedir. Cümleler doğası gereği hiç tümleç içermeyeceği gibi, bir, iki, üç hatta beş tümleç de içerebilir. Dolayısıyla yazdığımız ayrıştırıcı kuralı bütün bunları kapsayıcı olmalıdır. İşte tüm bu varyasyonları içermek üzere:

> tümleç*

Ifadesini kullanıyoruz. Bu hiç olmayadabilir bir den fazla defa da bulunabilir anlamına gelmektedir. Dolayısıyla yukarıda verdiğimiz örnek ve aşağıdaki örnek cümleler artık gramer tarafından test edilebilir olacaktır:

> Ali sinemaya akşam arabayla gidiyor



Şimdi tüm bunları deneyebileceğiniz, grameri yazılmış deneme sitesini şurada bulabilirsiniz:

<p class="codepen" data-height="720" data-theme-id="light" data-default-tab="result" data-user="mehmetakifakkus" data-slug-hash="RgRVLB" data-preview="true" style="height: 720px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Simple Turkish Parser">
  <span>See the Pen <a href="https://codepen.io/mehmetakifakkus/pen/RgRVLB">
  Simple Turkish Parser</a> by Mehmet Akif AKKUS (<a href="https://codepen.io/mehmetakifakkus">@mehmetakifakkus</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>



### Referanslar:

1- http://matt.might.net/articles/grammars-bnf-ebnf/

2-https://codepen.io/mehmetakifakkus/pen/RgRVLB