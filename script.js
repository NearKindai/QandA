const group_list = [
    ["創作班", "絵を描いたりポスターを作ったり割と何でもする班です。"],
    ["編集班", "動画編集をする班で、基本的にはAVIUTLを用います。"],
    ["撮影班", "動画撮影をする班です。<br>Perception Neuronを使えるようになってもらいます。"],
    ["企画班", "企画を立案・募集・精査をする班です。<br>整理してプランを提案し、実行に移します。"],
    ["広報班", "SNSでの宣伝等広報全般を行います。"]
]

function get_groups() {
    let lines = `<table border = "1"><tr><th>班名</th><th>概要</th></tr>`;
    for (let i = 0; i < group_list.length; i++) {
        lines += `<tr><td>${group_list[i][0]}</td><td>${group_list[i][1]}</td></tr>`;
    }
    lines += "</table>";
    return lines;
}

let QA_list = [
    ["部室の場所はどこですか？", "アカデミックシアター内のACT412です。"],
    ["いつ活動しているのですか？", "年中やっています。<br>何時からなどは決まっていません。<br>但し、定期ミーティングと総会は別です。"],
    ["会費はありますか？", "はい。年3000円です。<br>後期までに参加された場合は、11月末までに支払っていただければ結構です。"],
    ["何をしているのですか？", "主に、Vtuberニア教授の運営をするものとなっております。<br>以下の班に分かれて活動します。" + get_groups()]
]

function setQA() {
    let line;
    for (let i = 0; i < QA_list.length; i++) {
        line = `<div class = "QABlock" id = "QA${i}"><div class = "littleBlock">Q: ${QA_list[i][0]}</div><div class = "littleBlock">A: ${QA_list[i][1]}</div></div>`
        document.getElementById("QandA").innerHTML += line;
    }
}

window.onload = (e) => {
    setQA();
}