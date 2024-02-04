# 网络安全
比较老的技术

xml注入、sql注入、csrf跨站脚本攻击

navigator 浏览器指纹

## canvas指纹追踪技术

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