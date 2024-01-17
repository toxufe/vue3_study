<template>
    <h1 class="cike mt-5">unocss 原子化</h1>
    <!-- 
        css 原子化的优缺点
        原子化 CSS 是一种将样式规则拆分成单个独立的类名，每个类名仅包含一个样式属性的方法。这种方法的优缺点因使用场景和个人偏好而异，下面是一些常见的优缺点：

        优点：
        可重用性： 原子化 CSS 提倡使用小而具体的类名，使得样式规则可以在不同的地方进行重用，促进了样式的复用性。

        易于维护： 拥有小而简单的类名使得样式更容易维护。如果需要修改某个样式，只需找到并修改相应的类名，而不必担心影响到其他地方。

        清晰可见： 每个类名都代表了一个具体的样式规则，使得代码更加清晰可见。开发者可以更容易地理解每个类名的作用。

        性能优化： 由于每个类名仅包含一个属性，可以更有效地利用浏览器的样式缓存，从而提高页面加载性能。

        缺点：
        类名爆炸： 如果过度使用原子化类名，可能会导致类名爆炸，使HTML结构变得冗长且难以阅读。这可能会使开发和维护变得更加复杂。

        不适用于所有情况： 原子化 CSS 的方法不适用于所有项目。对于某些大型和复杂的项目，使用抽象的、语义化的类名可能更为合适。

        样式覆盖困难： 在某些情况下，原子化 CSS 可能导致样式覆盖变得困难。由于类名是针对具体样式属性的，要覆盖一个样式可能需要引入更多的类名。

        可读性差： 针对每个样式属性创建一个类名可能会导致样式代码的可读性下降。较长的类名可能不够自描述，需要通过文档或注释来解释其作用。

        在实际项目中，选择是否使用原子化 CSS 取决于项目的规模、团队的偏好以及项目的具体需求。一些项目可能从中受益，而对于其他项目，可能更喜欢使用更语义化和抽象的类名。


        UnoCSS 小程序预设 unocss-preset-weapp

        https://unocss.dev/guide/
        https://github.com/unocss/unocss

        npm i unocss

        vite.confit.ts 引入 import unocss from 'unocss'
        unoCss({
            rules:[
            ['red',{color:'red'}]
            ]
        })

        mainjs中引入
        import 'uno.css'

        预设 presets:[presetIcons(),presetAttributify(),presetUno()]

        图标集合库
        https://icones.js.org/collection/mingcute
        图标集合安装
        npm i -D @iconify-json/mingcute
     -->


 
     <div class="red i-mingcute-ad-circle-fill f40">
        


     </div>

     <div class="red i-mingcute-angry-line f40"></div>

     <div red m="10" class=" bg-slate-500">hello world</div>

  
</template>
<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>
