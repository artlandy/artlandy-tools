function calculateResin() {

    const size = document.getElementById("size").value;
    const thickness = document.getElementById("thickness").value;

    const resinAmount = {

        "A5": 50,
        "A4": 80,
        "A3": 150,
        "A2": 280,
        "A1": 500,
        "正方形20cm": 60,
        "正方形30cm": 100,
        "円20cm": 50,
        "円30cm": 80

    };


    let amount;


if (size === "オリジナルサイズ") {

    const width = Number(document.getElementById("width").value);
    const height = Number(document.getElementById("height").value);

    const resinPerCm2 = 0.11;

amount = width * height * resinPerCm2;


} else {

    amount = resinAmount[size];

}

// 厚みによる調整

if (thickness === "厚め（約3mm）") {

    amount = amount * 1.5;

}


if (thickness === "立体仕上げ（約40mm）") {

    amount = amount * 20;

}
   
    document.getElementById("result").textContent =
        amount + " ml";

}

// オリジナルサイズ入力欄の表示切替

if (sizeSelect && customSize) {

    customSize.style.display = "none";


    sizeSelect.addEventListener("change", function(){

        if(this.value === "オリジナルサイズ"){

            customSize.style.display = "block";

        } else {

            customSize.style.display = "none";

        }

    });

}

function calculateMix(){

    const totalMl = Number(document.getElementById("total-resin").value);

    if(!totalMl || totalMl <= 0){
        alert("必要レジン量を入力してね");
        return;
    }


    const resinType = document.getElementById("resin-type").value;
    const method = document.getElementById("method").value;


    let mainRatio = 1;
    let hardenerRatio = 1;


    // 配合比を取得
    if(method === "体積比"){

    const ratioValue = document.getElementById("ratio").value;

    if(ratioValue === "1:1"){
        mainRatio = 1;
        hardenerRatio = 1;
    }

    else if(ratioValue === "1:2"){
        mainRatio = 1;
        hardenerRatio = 2;
    }

    else if(ratioValue === "1:3"){
        mainRatio = 1;
        hardenerRatio = 3;
    }

    else if(resinType === "その他"){

        mainRatio = Number(document.getElementById("main-ratio").value);
        hardenerRatio = Number(document.getElementById("hardener-ratio").value);

    }

}


    // 重量比
    if(method === "重量比"){

        if(resinType === "Art Resin"){

            mainRatio = 100;
            hardenerRatio = 84;

        }else if(resinType === "FLAWLESS RESIN"){

            mainRatio = 10;
            hardenerRatio = 9;

        }else if(resinType === "Just Resin"){

            mainRatio = 1.18;
            hardenerRatio = 1;

        }else{

            mainRatio = Number(document.getElementById("main-ratio").value);
            hardenerRatio = Number(document.getElementById("hardener-ratio").value);

        }

    }



    let result = "";



    // 体積比の場合
    if(method === "体積比"){

        const totalRatio = mainRatio + hardenerRatio;

        const mainMl = totalMl * (mainRatio / totalRatio);
        const hardenerMl = totalMl * (hardenerRatio / totalRatio);


        result = `
        主剤：約${mainMl.toFixed(1)}ml<br>
        硬化剤：約${hardenerMl.toFixed(1)}ml<br>
        合計：約${totalMl.toFixed(1)}ml
        `;

    }



    // 重量比の場合
    if(method === "重量比"){

        const density = 1.10;

        const totalGram = totalMl * density;

        const totalRatio = mainRatio + hardenerRatio;


        const mainGram = totalGram * (mainRatio / totalRatio);

        const hardenerGram = totalGram * (hardenerRatio / totalRatio);



        result = `
        主剤：約${mainGram.toFixed(1)}g<br>
        硬化剤：約${hardenerGram.toFixed(1)}g<br>
        合計：約${totalGram.toFixed(1)}g
        `;

    }



    document.getElementById("mix-result").innerHTML = result;

}
    
// 配合比表示の切り替え

const resinType = document.getElementById("resin-type");
const ratioSelect = document.getElementById("ratio");
const methodSelect = document.getElementById("method");


function updateRatio() {

    const method = document.getElementById("method").value;
    const resin = document.getElementById("resin-type").value;

    const ratio = document.getElementById("ratio");
    const customRatio = document.getElementById("custom-ratio");

    // 一旦隠す
    customRatio.style.display = "none";
    ratio.style.display = "block";

    if (method === "体積比") {

        if (resin === "その他") {

            ratio.innerHTML = `
                <option>1:1</option>
                <option>1:2</option>
                <option>1:3</option>
            `;

        } else {

            ratio.innerHTML = "<option>1:1</option>";

        }

    } else {

        if (resin === "Art Resin") {

            ratio.innerHTML = "<option>100:84</option>";

        } else if (resin === "FLAWLESS RESIN") {

            ratio.innerHTML = "<option>10:9</option>";

        } else if (resin === "Just Resin") {

            ratio.innerHTML = "<option>1.18:1</option>";

        } else if (resin === "その他") {

            // その他の重量比だけ自由入力
            ratio.style.display = "none";
            customRatio.style.display = "block";

        }

    }

}


resinType.addEventListener("change", updateRatio);

methodSelect.addEventListener("change", updateRatio);

updateRatio();