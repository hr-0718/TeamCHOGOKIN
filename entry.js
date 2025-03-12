//=====================================================================
//  entry.js
//  hr-0718  2025/01/05
//=====================================================================

const version = "0";
const scripts = [
    "./easing.js",
    "./main.js"
];

//���[�h

let isEntryLoad = false;
window.addEventListener('load', async () => {
    if (isEntryLoad == false) {
        isEntryLoad = true;
        let body = document.getElementById('body');

        for (let i = 0; i < scripts.length; i++) {
            const scr = document.createElement('script');
            scr.src = scripts[i] + "?" + version;
            scr.async = true;

            //scrpt��ǉ�
            body.appendChild(scr);

            //�ǂݍ��݂��I���܂ő҂�
            let isLoaded = false;
            scr.onload = function () {
                isLoaded = true;
            };
            while (!isLoaded) {
                await new Promise(resolve => setTimeout(resolve, 1));
            }
        }

        //const htmlparts = document.querySelectorAll('.htmlparts');

        //for (const ele of htmlparts) {
        //    fetch(ele.dataset.htmlpath)
        //        .then(response => response.text())
        //        .then(data => {
        //            ele.innerHTML = data;
        //        });
        //}
    }
});