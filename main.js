//=====================================================================
//  main.js
//  hr-0718  2025/01/05
//=====================================================================


//-------------------------------------------------------------
// グローバル変数
//-------------------------------------------------------------
let frame = 0;

//let selectedIndexBefore = -1;

async function bgUpdate() {

    const elem_body = document.getElementById('body');
    //背景制御
    {
        const elem_background = document.getElementById('background');
        if (elem_background == undefined) {
            return;
        }

        if (window.innerWidth / window.innerHeight > elem_background.width / elem_background.height) {
            //elem_background.style.left = "0%";
            //elem_background.style.top = "0%";
            elem_background.style.width = "100%";
            elem_background.style.height = "auto";
        }
        else
            if (window.innerWidth / window.innerHeight < elem_background.width / elem_background.height) {
                //elem_background.style.left = "0%";
                //elem_background.style.top = "0%";
                elem_background.style.width = "auto";
                elem_background.style.height = "100%";
            }
        const bgrect = elem_background.getBoundingClientRect();

        //const bgs = document.getElementById('body').querySelectorAll('.bg');
        const bgs = document.querySelectorAll('.bg');

        for (const bg of bgs) {
            bg.style.width = bgrect.width + "px";
            bg.style.height = bgrect.height + "px";
        }
    }

}

//-------------------------------------------------------------
// 無限ループ
//-------------------------------------------------------------
async function loop() {

    await bgUpdate();

    const gtabButtons = document.querySelectorAll('.tab_behavior');


    // 各ラジオボタンをチェックして、選択されているものを見つける
    for (const gtabBtn of gtabButtons) {

        //メインタブ
        //const elem_tabsMain = document.getElementById('tabsMain');
        const elem_tabsMain = gtabBtn;

        //if (elem_tabsMain.dataset == undefined) {
        //    continue;
        //}
        //メインコンテンツ
        //const elem_ContentsMain = document.getElementById('ContentsMain');
        const elem_ContentsMain = document.getElementById(elem_tabsMain.dataset.tabcontents);

        {// ラジオボタンのNodeListを取得
            const radios = elem_tabsMain.querySelectorAll('input[type="radio"]');

            let selectedIndex = 0;
            let selectedValue = undefined;

            // 各ラジオボタンをチェックして、選択されているものを見つける
            for (const radio of radios) {
                if (radio.checked) {
                    selectedValue = radio;
                    break;
                }
                selectedIndex++;
            }

            if (selectedValue != undefined
                && elem_tabsMain.dataset.selectedIndexBefore != selectedIndex) {

                window.scrollTo({
                    top: 0, // 一番上に
                    left: 0, // 左端に
                    behavior: "smooth", // スムーズスクロール
                });
                Array.from(elem_ContentsMain.children).forEach((element) => {
                    element.style.display = "none";
                });
                Array.from(elem_ContentsMain.children).forEach((element, index) => {
                    if (selectedIndex == index) {
                        element.style.display = "block";
                        element.scrollTo({
                            top: 0, // 一番上に
                            left: 0, // 左端に
                            behavior: "smooth", // スムーズスクロール
                        });

                        for (const ele of element.querySelectorAll('.anim_Flag')) {
                            ele.classList.remove(ele.dataset.inanim);
                            ele.classList.add(ele.dataset.inanim);

                        }
                    }
                });
                elem_tabsMain.dataset.selectedIndexBefore = selectedIndex;
            }
        }

        {
            //Array.from(elem_ContentsMain.children).forEach((element, index) => {
            //    if (elem_tabsMain.dataset.selectedIndexBefore == index) {
            //        const rect = element.getBoundingClientRect();
            //        elem_body.height = rect.height + "px";
            //        //console.log(elem_body.height);
            //    }
            //});
        }
        //if (elem_tabsMain.dataset.elementNode != undefined) {
        //    if (elem_tabsMain.dataset.elementNode.dataset != undefined
        //        && elem_tabsMain.dataset.elementNode.dataset.pageSizeSet != undefined) {
        //        const rect = elem_tabsMain.dataset.elementNode.getBoundingClientRect();
        //        document.body.height = rect.height = "px";
        //    }
        //}
    }


    //開発資料のタブ
    ///const elem_tabsSub_Develop = document.getElementById('tabsSub_Develop');

    //{// ラジオボタンのNodeListを取得
    //    const radios = document.getElementById('tabsMain').querySelectorAll('input[type="radio"]');
    //    let selectedValue = undefined;

    //    // 各ラジオボタンをチェックして、選択されているものを見つける
    //    for (const radio of radios) {
    //        if (radio.checked) {
    //            selectedValue = radio;
    //            break;
    //        }
    //    }

    //    if (selectedValue != undefined) {
    //        if (selectedValue.id == "tabMain_Develop") {
    //            elem_tabsSub_Develop.display = "block";
    //        }
    //        else {
    //            elem_tabsSub_Develop.display = "none";
    //        }
    //    }
    //}

    requestAnimationFrame(loop);
}

//-------------------------------------------------------------
// 初期化処理
//-------------------------------------------------------------
async function initcheck() {
    let initbg = document.getElementById('initbg');
    if (initbg) {
        initbg.style.display = "none";
        return 1;
    }
    return initcheck();
}
async function init() {


    ////キャンバス用画像
    //for (let k in canvasImg) {
    //    let img = canvasImg[k];
    //    if (img != undefined) {
    //        //画像データの読み込み
    //        let icon0 = new Image();
    //        icon0.src = img;
    //        canvasImg[k] = icon0;
    //    }
    //}

    //const htmlparts = document.querySelectorAll('iframe');

    //for (const iframe of htmlparts) {
    //    // iframe のコンテンツにアクセス
    //    iframe.onload = () => {
    //        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document; // iframe内部のドキュメント
    //        const content = iframeDoc.body.textContent; // iframe内部のテキストを取得
    //        //console.log(content);

    //        // 3. 親要素を取得し、置き換え
    //        const parent = iframe.parentNode;
    //        parent.replaceChild(content, iframe);
    //    };
    //}
    //const htmlparts = document.querySelectorAll('iframe');

    //for (const iframe of htmlparts) {
    //    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document; // iframe内部のドキュメント
    //    const content = iframeDoc.body.innerHTML; // iframe内部のテキストを取得
    //    //console.log(content);

    //    let contentNode = null;

    //    // 新しいノードを作成
    //    contentNode = document.createElement('div');
    //    contentNode.innerHTML = content; // テキストを新しいノードに設定

    //    //const children = iframeDoc.body.childNodes; // 全ての子ノードを取得
    //    //for (const node of children) {
    //    //    contentNode = node;
    //    //    break;
    //    //}
    //    if (contentNode != null) {
    //        // 3. 親要素を取得し、置き換え
    //        const parent = iframe.parentNode;
    //        parent.replaceChild(contentNode, iframe);
    //    }
    //}

    //await bgUpdate();
    //document.getElementById('body').scrollTo({
    //    top: 0, // 一番上に
    //    left: 0, // 左端に
    //    behavior: "smooth", // スムーズスクロール
    //});


    await initcheck();
}

//-------------------------------------------------------------
// メイン
//-------------------------------------------------------------
async function main() {
    await init();
    loop();
}

//メイン関数実行
main();