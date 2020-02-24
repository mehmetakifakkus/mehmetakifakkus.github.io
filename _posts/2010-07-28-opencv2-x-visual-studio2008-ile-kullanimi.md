---
layout: post
title: "OpenCV2.X Visual Studio2008 ile Kullanımı"
date: 2010-07-20
---
 
Bu yazımda görüntü işleme ile uğraşanların elinin mutlaka değdiği OpenCV kütüphanesinin visual studio 2008 C++ ile nasıl kullanıldığını (kurulum) inceleyeceğiz.

Aslında kurulum işlemi önceki openCV (1.X) sürümlerine göre daha sade.

Download the OpenCV 2.1.0 Windows installer from SourceForge – “OpenCV-2.1.0-win32-vs2008.exe”.
Bunu indirin ve yol olarak “C:\OpenCV2.1” verin, eğer siz varsayılan ayarlarda bulundurursanız bu yolda yükleyecektir.

2.OpenCV kurulumunu tamamladıktan sonra(OpenCv nin sistem 


Bu yazımda görüntü işleme ile uğraşanların elinin mutlaka değdiği OpenCV kütüphanesinin visual studio 2008 C++ ile nasıl kullanıldığını (kurulum) inceleyeceğiz.

Aslında kurulum işlemi önceki openCV (1.X) sürümlerine göre daha sade.

1. Download the OpenCV 2.1.0 Windows installer from SourceForge – “OpenCV-2.1.0-win32-vs2008.exe”.
Bunu indirin ve yol olarak “C:\OpenCV2.1” verin, eğer siz varsayılan ayarlarda bulundurursanız bu yolda yükleyecektir.

2. OpenCV kurulumunu tamamladıktan sonra(OpenCv nin sistem yoluna eklendiğinden emin olunuz) visual studioda şu ayarları yapmamız gerekiyor:
```
Tools > Options > Projects and Solutions > VC++ Directories
“Show directories for: Include files” seçiniz.
“C:\OpenCV2.1\include\opencv” yeni satır olarak ekleyiniz.
```
3. “Show directories for: Library files” seçiniz

Add “C:\OpenCV2.1\lib” yeni satır olarak ekleyiniz
4. “Show directories for: Source files” seciniz
```
“C:\OpenCV2.1\src\cv” yeni satır olarak ekleyiniz
“C:\OpenCV2.1\src\cvaux” yeni satır olarak ekleyiniz
“C:\OpenCV2.1\src\cxcore” yeni satır olarak ekleyiniz
“C:\OpenCV2.1\src\highgui” yeni satır olarak ekleyiniz
```
Bunları da yaptıktan sonra projenizin kullanacağı .lib dosyalarını ekleyeceğiz. Bunun için :

Project > %projectName% Properties. yolunu izleyip, Linker->Input seçeneklerini ilerleyip

şu satırları ekleyin :

```
“cv210.lib”
“cxcore210.lib”
“highgui210.lib”
```
ve ihtiyaç halinde buraya istediklerinizi ekleyebilirsiniz


İyi çalışmalar. Eğer başarılı bir şekilde işlemi tamamladıysanız şanslısınız, çünkü epey zamanımı almıştı benim.
