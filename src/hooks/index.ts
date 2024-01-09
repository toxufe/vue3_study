


import { onMounted } from "vue"

type Options = {
    el: string
}

export default function (option: Options): Promise<{ dataurl: string }> {

    return new Promise((resolve) => {
        onMounted(() => {
            let oImg = document.querySelector(option.el) as HTMLImageElement;
            oImg.onload = function () {
                resolve({
                    dataurl: toBase64(oImg)
                })
            }
        })

        const toBase64 = (oImg: HTMLImageElement) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            console.log(oImg.width, oImg.height)
            canvas.width = oImg.width;
            canvas.height = oImg.height;
            ctx?.drawImage(oImg, 0, 0, oImg.width, oImg.height);
            const dataURL = canvas.toDataURL('image/png');
            return dataURL;
        }
    })

}