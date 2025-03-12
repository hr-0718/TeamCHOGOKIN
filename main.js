//=====================================================================
//  main.js
//  hr-0718  2025/01/05
//=====================================================================


//-------------------------------------------------------------
// グローバル変数
//-------------------------------------------------------------
let frame = 0;

let selectedIndexBefore = -1;

//-------------------------------------------------------------
// 無限ループ
//-------------------------------------------------------------
async function loop() {

    //背景制御
    {
        const elem_background = document.getElementById('background');
        if (window.innerWidth / window.innerHeight > elem_background.width / elem_background.height) {
            //elem_background.style.left = "0%";
            //elem_background.style.top = "0%";
            elem_background.style.width = "100%";
            elem_background.style.height = "auto";
        }
        else {
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

    //メインタブ
    const elem_tabsMain = document.getElementById('tabsMain');
    //メインコンテンツ
    const elem_ContentsMain = document.getElementById('ContentsMain');

    {// ラジオボタンのNodeListを取得
        const radios = document.getElementById('tabsMain').querySelectorAll('input[type="radio"]');

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

        if (selectedValue != undefined && selectedIndexBefore != selectedIndex) {
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

                    for (const ele of element.querySelectorAll('.anim_Flag')) {
                        ele.classList.remove(ele.dataset.inanim);
                        ele.classList.add(ele.dataset.inanim);
                        
                    }
                }
            });
            selectedIndexBefore = selectedIndex;
        }
    }


    //開発資料のタブ
    const elem_tabsSub_Develop = document.getElementById('tabsSub_Develop');

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