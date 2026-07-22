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

    amount = width * height * 0.013;


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

function calculateMix() {

    const total = Number(document.getElementById("total-resin").value);

    const method = document.getElementById("method").value;

    const resin = document.getElementById("resin-type").value;

    const density = {

    "Art Resin": 1.10,
    "FLAWLESS RESIN": 1.10,
    "Just Resin": 1.10,
    "その他": 1.10

};

const totalWeight = total * density[resin];

    let main;
    let hardener;
    let unit;


    if (method === "体積比") {


        main = total / 2;
        hardener = total / 2;
        unit = "ml";


    } else {


        unit = "g";


        if (resin === "Art Resin") {

    main = totalWeight * (100 / 184);
    hardener = totalWeight * (84 / 184);

}


        if (resin === "Art Resin") {

    main = totalWeight * (100 / 184);
    hardener = totalWeight * (84 / 184);

}


        if (resin === "Just Resin") {

    main = totalWeight * (1.18 / 2.18);
    hardener = totalWeight * (1 / 2.18);

}


       if (resin === "その他") {

    main = totalWeight / 2;
    hardener = totalWeight / 2;

}


    }



    document.getElementById("mix-result").innerHTML =

        "主剤：" + main.toFixed(1) + " " + unit + "<br>" +
        "硬化剤：" + hardener.toFixed(1) + " " + unit;


}


    
// 配合比表示の切り替え

const resinType = document.getElementById("resin-type");
const ratioSelect = document.getElementById("ratio");
const methodSelect = document.getElementById("method");


function updateRatio() {

    const method = document.getElementById("method").value;
    const resin = document.getElementById("resin-type").value;


    if (method === "体積比") {

        ratioSelect.innerHTML = "<option>1:1</option>";

        return;

    }


    if (method === "重量比") {

        if (resin === "Art Resin") {

           document.getElementById("ratio").innerHTML = "<option>100:84</option>";

        } else if (resin === "FLAWLESS RESIN") {

            document.getElementById("ratio").innerHTML = "<option>10:9</option>";

        } else if (resin === "Just Resin") {

            document.getElementById("ratio").innerHTML = "<option>1.18:1</option>";

        } else {

            document.getElementById("ratio").innerHTML = "<option>1:1</option>";

        }

    }

}


resinType.addEventListener("change", updateRatio);

methodSelect.addEventListener("change", updateRatio);