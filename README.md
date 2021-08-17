# pixelmatch
This is my realization [pixelmatch](https://github.com/mapbox/pixelmatch) with Web Workers API

The app is hosted at [my-pixelmatch](https://pixelmatch-433bf.web.app/)
# points
* interface of the form (image1, image2) => result, where image1 and image2 are images in the form of an array of points of the format (R, G, B, A), and result is either true if the images are identical, or false if they have they have different sizes, or the number of different pixels, if the pictures differ from each other, but have the same width and height;
* caching the results of comparing pictures with saving the cache when you restart the browser;
* comparison of images in additional threads (the number of computational threads should not exceed the number of processor cores) that do not block the processing of the queue of images for comparison;
* the cache must exist in a single instance, regardless of the number of contexts from which the comparison function is called;
* the call to the compare function should not increase memory consumption due to the serialization of images when transferring between workers.

# задачи
* интерфейс вида (image1, image2) => result, где image1 и image2 — это изображения в виде массива точек формата (R,G,B,A), а result — это либо true, если картинки идентичны, либо false, если у них отличаются размеры, либо количество отличающихся пикселов, если картинки отличаются друг от друга, но имеют одинаковые ширину и высоту;
* кэширование результатов сравнения картинок с сохранением кэша при перезапуске браузера;
* сравнение картинок в дополнительных потоках (число вычислительных потоков не должно превышать число ядер процессора), не блокирующих обработку очереди картинок на сравнение;
* кэш должен существовать в единственном экземпляре вне зависимости от количества контекстов, из которых вызывается функция сравнения;
* вызов функции сравнения не должен увеличивать потребление памяти из-за сериализации картинок при передаче между воркерами.