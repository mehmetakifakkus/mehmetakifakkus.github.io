---

layout: post
title: "Görüntü İşlemeye Giriş: 1-Bir Resmin Negatif Halini Elde Etmek"
date: 2010-06-05
---

### Neden Resmin Negatifini Alırız?

Görüntü işlemede en temel işlemlerden birisidir bir görüntünün negatifini hesaplamak. Görüntünün negatifi bir kaç nedenden alınabilir. Örneğin, 1) negatifi alınmış görüntü bize daha fazla bilgi verecekse, 2) görüntü daha anlaşılır kılınacaksa. Bunun dışında görüntü çok da anlaşılır olmayan bir yapıya bürünecektir zaten.

### Örnek Resimler


![original image](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/negative_images/1.png?raw=true)

![negative image](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/negative_images/1_result.png?raw=true)


> Bir görüntünün negatifini hesaplayan ve çıktı olarak üreten bir MATLAB programı yazalım.

```
function[] = hw1_1(I, Ineg)
[F, props] = myimread(I);
f_negative = 255 - F;  % Bu kısımda negatifini buluyoruz. 
myimwrite(Ineg, props, f_negative);
end
```

Resmin negatifi resmin piksel değerlerinin 255-maksimum koyuluk değeri ile farkının alınmasıdır. Aşağıda örnek resimleri görebilirsiniz. Negatifi alınmış resimler bazı resimlerde insan algısı için çok net ifadeler oluşturmasa da işe yarar şekilde kullanılabiliyor. Örneğin, bazı resimlerde algılanması güç olan ayrıntılar negatif alma işleminden sonra daha kolay algılanabilir hale geliyor veya bazı kısımları daha anlaşılır olmasını sağlıyor. Aşağıda negatifi alınmış bazı örnek resimleri görebilirsiniz.



![original image](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/negative_images/2.png?raw=true)

![original image](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/negative_images/2_result.png?raw=true)

![original image](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/negative_images/3.png?raw=true)

![original image](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/negative_images/3_result.png?raw=true)

![original image](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/negative_images/4.png?raw=true)

![original image](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/negative_images/4_result.png?raw=true)

 Tüm resimleri ve kodu .zip formatında indirebilirsiniz. [Dosyaları indir](https://github.com/mehmetakifakkus/mehmetakifakkus.github.io/blob/master/img/image_processing_images/negative_images/1-dosyalar.zip)

