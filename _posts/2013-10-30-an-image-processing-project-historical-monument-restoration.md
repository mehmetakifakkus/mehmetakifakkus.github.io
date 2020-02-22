---
layout: post
title: "An Image Processing Project: Historical Monument Restoration"
date: 2016-09-29
---

**Nontextured image inpainting** term is basically restoring the destroyed or corrupted pixels of an image using the neighborhod pixels. There are several areas that this method is applied.

First one is restoring damaged parts of the old pictures due to the folding. Secondly, the other area is extracting the unwanted objects on an image. For example, in order to avoid children from envy at cigarette, blurring the cigarette parts of an image is not sufficient. However. if we take the cigarette pixels as inpainting domain, we can easily remove it from image only by diffusing the surrounding pixels to the inpainting domain pixels.

### Scope Definition
The scope of this article is giving the methods of the inpainting which is taken from three inpainting papers, and giving the implementation details of the paper of Bornemann and Ma ̈rz. The materials that we have used to apply this method are an original image with m x n pixels and the scratch image including the inpainting domain defined by 0-valued pixels and the data domain defined by the 1-valued pixels, and this scratch has also the same pixel size with the original image.

### The Problem Definition
As we have mentioned at the introduction part, the image inpainting is such an interpolating problem that it is achieved by diffusing the information of the data pixels to the inpainting domain pixels.

The most important thing while interpolating is the selecting the most important data domain pixels which affects the inpainting domain pixels more than the other surrounding pixels. At the paper that we have encountered, there are several approaches to this problem. However, there are some papers whose main goal is to reduce the complexity of the code in order to reduce the execution time. Therefore, the quality of the output image is insufficient for these methods. As you can easily see, there is an inverse proportion between the quality of an image and the execution time of the code. The question in our main paper that we have utilized (implemented) is how can we obtained (restored in a plausible way) relatively high quality image, while reducing the execution time.

### The Methods We Used
First of all, we want to give the brief information about the methods. The first method is visiting the inpainting domain pixels in ordered manner, and calculate the intensity of the pixel. The robust property of this method is its speed, because, we visit the pixels only once, this means that if there are n pixels in inpaiting domain, the method calculates the same method for n times. The other method is that iterating each pixel of the inpainting domain until the energy converges to its stable state, namely global minimal. The robust feature of this procedure is the high qualitative result of output images. Nevertheless, the weak side is speed, since, including the previous assumption if each inpainting domain pixels are iterated average m times, then the total calculation is m x n.

teleasmethod If we come to our main paper written by Bornemann, the method uses the high speed features of the first method and the high quality feature of the second method. In order to give a detailed information of these approaches, we would like to give the notations of the terms that we have used along this report.

$\Omega$ is the image domain
$D$ is the inpainting domain
$\Omega \backslash D$ is the data domain
$\partial \Omega$ is the inpainting boundary which is the closest pixels to the data domain
B_{\epsilon, h}(x_k) = \{y \in \Omega_h : |y - x| \leq \epsilon\} is the neighbourhood pixels inside the radius \epsilon
B^ <_{\epsilon, h}(x_k) = B_{\epsilon, h}(x_k) is the neighbourhood pixels inside the radius \epsilon which are in data domain
First of all, we think the surrounding pixels in data domain as neurons which excite the neuron which is the current inpainting pixel.

Before calculation, we order the inpainting domain pixels according to the distances from the closest data domain pixel. After calculation of this we start to visit these pixels in ordered manner. it means that we visiting an painting the pixels like peeling. In other words, we start from the outermost part of the inpainting domain to the innermost skeleton part. While doing this operation, we calculate the \mu(x) and \vec{c}(x) functions which are unknown elements of equation 5. In order to reduce the computational complexity, we only calculate once for each lattice or boundary of inpainting domain.

Show Press Release (44 More Words)
First of all we apply Gaussian filter to the image with the \sigma value. See Equation 1
(1)   \begin{equation*}  u_\sigma = K_\sigma \star u \end{equation*}

We take the gradient of an image.
We take the pixels of data domain from the gradient image.
For each pixel at the neighbourhood of the inpainting domain pixels, we calculate the structure tensor matrix being the symmetrix positive semidefinite 2 x 2-matrix.  See Equation 2 
(2)   \begin{equation*}  J_p(\nabla u_\sigma) = K_\rho \star ({\nabla u_\sigma}^\top \otimes \nabla u_\sigma) \end{equation*}

We find the eigen vectors of the structure tensor matrix corresponding eigenvalues. These eigenvectors show the direction of the edge with respect to different orientations.
The most significant direction is our coherence direction, so we attain the eigenvector, which shows the coherence direction to thed \vec{c}(x) . See Equation  3. 
(3)   \begin{equation*}  \vec{c}(x_k) = \vec{w}(x_k) \end{equation*}

In order to attain the value of the closest pixels into the inpainting pixels to the outermost pixels of the inpainting domain, we created a method that we apply vector multiplication between \vec{c}(x) and x - y which is the direction vector of the inpainting domain (Equation 4), and we find the most significant c c value for each inpainting pixels, because, if there is an edge entering the inpainting domain, then the most affected pixels are at the direction of the edge. 
(4)   \begin{equation*}  \vec{c}(x_k) = \operatorname*{arg\,max}_{\substack{ \vec{v} \in \vec{w}(y) \\ y \in B^<_{\epsilon, h}(x_k) }} (|\vec{v}(y) . (x - y)|) \end{equation*}

We calculate the weight function for each inpainting outermost domain pixels by using Equation 5. 
(5)   \begin{equation*}  w(x, y) = \sqrt{\frac{\pi}{2}} \frac{\mu(x)}{|x - y|} e^{- \frac{\mu^2(x)}{2 \epsilon^2} |\vec{c}^\perp(x) . (x - y)|^2} \end{equation*}

We inpaint the pixel with respect to Equation 6. 
(6)   \begin{equation*} u(x_k) = \frac{\sum_{B^<_{\epsilon, h}(x_k)} w(x_k, y) . u(y)}{\sum_{B^<_{\epsilon, h}(x_k)} w(x_k, y)} \end{equation*}

### Results and Discussion
In this programming project Bornemann et. al.’s study named “Fast Image Inpainting Based on Coherence Transport” was implemented. This study consists modified type of two other inpainting technique. One of them is Telea et.al’s [5] and the other one is Bertalmio et. al.’s study [1].

In the following part, the difference Telea’s method and Bornemann’s method will be compared in terms of output quality and complexity. Then Bornemann’s result will be examined with several different parameters. Since we did not implement Bertalmio’s algorithm and could not find it on the internet we could not address it in comparisons. Nevertheless, we expect that Bornemann’s method faster than Bertalmio’s method and can produce results as plausible as Bertalmio does.

While implementing this method, first Telea’s method is implemented since Bornemann’s study basically utilizes Telea’s method with modifying its weight function such that it preserves edges.

Telea’s method produces peculiar results when compared to Bornemann’s method. Sample images that restored using Telea’s and Bornemann’s method can see on our test image on Figure ??. Restoration of our test image can show that Bornemann’s coherence transport-like inpainting is much better than Telea’s method. Because Telea is just doing averaging and transporting pixel data, therefore result is seen peculiar, especially image points where inpainting domain occludes edges. In other images Figure ??, ??, ??, these differences on edges can be see clearly.

