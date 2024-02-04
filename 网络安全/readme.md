# 网络安全
比较老的技术

xml注入、sql注入、csrf跨站脚本攻击

navigator 浏览器指纹

## canvas指纹追踪技术

index.html

canvas相信我们大家都用过，例如绘制一些图形，游戏等等，都会用到。它也可以用来跟踪用户当我们调用toDataURL转换base64，他底层会获取设备，操作系统，浏览器，三合一的唯一标识，如果其他用户使用的这三个信息和你一样的话也是重复这个概率是很低的也不排除有可能。 
作者：小满zs https://www.bilibili.com/read/cv16329382/ 出处：bilibili

```javascript
    const uuid = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const txt = 'test';
        ctx.fillText(txt, 10, 10)
        console.log(canvas.toDataURL())
        return md5(canvas.toDataURL())
    } 
```


## CSS 键盘记录器-React 

index2.html

## 照片信息EXIF 

index3.html

EXIF（Exchangeable Image File）是“可交换图像文件”的缩写，当中包含了专门为数码相机的照片而定制的元数据，可以记录数码照片的拍摄参数、缩略图及其他属性信息，简单来说，Exif信息是镶嵌在 JPEG/TIFF 图像文件格式内的一组拍摄参数，需要注意的是EXIF信息是不支持png,webp等图片格式的。（建议自己试的时候，现拍一张，把地理位置信息开启，这样得到的是完整的EXIF信息）

简单来说就是当你拍照片的时候会存储你的一些信息，例如拍摄的位置，拍摄的时间，相机参数等，这些信息的泄露也会给我们造成麻烦。

场景 我们经常在一些聊天软件传输一些照片，例如WX你默认传输的时候他是会被压缩体积很小，应为破坏了EXIF信息，当你设置了原图传输他将保留你照片的EXIF 信息别人只要查看就可以读取你照片的信息。 

作者：小满zs https://www.bilibili.com/read/cv16730810/?spm_id_from=333.999.0.0 出处：bilibili


虫EXIF查看器alpha版
https://exif.tuchong.com/

## 蜜罐技术
npm install ts-node -g
npm install @types/node -D


## 自动化UI测试
Puppeteer

npm install pnpm -g //装过可以忽略
pnpm add puppeteer