

class Btn extends HTMLElement {
    constructor() {
        super();
        const shadom = this.attachShadow({ mode: 'open' });

        this.p = this.h('p');
        this.p.textContent = 'Hello World';
        this.p.setAttribute('style', 'color:white;width: 100px; height: 100px; background-color: red;');
        shadom.appendChild(this.p);
    }

    h(el) {
        return document.createElement(el);
    }
}


class Tem extends HTMLElement {
    constructor() {
        super();
        const shadom = this.attachShadow({ mode: 'open' });
        this.template = this.render('template');
        this.template.innerHTML = `
        <style>
        div {
            color: red;
            font-size: 50px;
        }
        </style>
        
        <div>TemTemTemTemTemTemTemTemTemTemTemTemTemTemTemTem</div>
        `
        shadom.appendChild(this.template.content.cloneNode(true));
    }

    render(el) {
        return document.createElement(el);
    }


    /**
    * 生命周期
    */
    //当自定义元素第一次被连接到文档 DOM 时被调用。
    connectedCallback() {
        console.log('我已经插入了！！！嗷呜')
    }

    //当自定义元素与文档 DOM 断开连接时被调用。
    disconnectedCallback() {
        console.log('我已经断开了！！！嗷呜')
    }

    //当自定义元素被移动到新文档时被调用
    adoptedCallback() {
        console.log('我被移动了！！！嗷呜')
    }
    //当自定义元素的一个属性被增加、移除或更改时被调用
    attributeChangedCallback() {
        console.log('我被改变了！！！嗷呜')
    }

    // ————————————————
    // 版权声明：本文为CSDN博主「小满zs」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    // 原文链接：https://blog.csdn.net/qq1195566313/article/details/127328300
}

window.customElements.define('my-btn', Btn);
window.customElements.define('my-tem', Tem);

