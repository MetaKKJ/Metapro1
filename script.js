const quotes = [
    { text: "일찍 일어나는 새가 벌레를 잡는다.", author: "속담" },
    { text: "작은 고추가 맵다.", author: "속담" },
    { text: "하루하루가 새롭고 신비롭다.", author: "법정" },
    { text: "사람은 자신이 생각하는 것과 같은 사람이 된다.", author: "마하트마 간디" },
    { text: "세상에 속지 않기 위해서는 자신을 속이지 않으면 된다.", author: "에머슨" },
    { text: "자신을 사랑하면 아무도 사랑하지 않는 것이다.", author: "괴테" },
    { text: "최선을 다하면 후회는 없다.", author: "나폴레옹" },
    { text: "실패는 성공의 어머니이다.", author: "속담" },
    { text: "오늘 할 일을 내일로 미루지 마라.", author: "속담" },
    { text: "작은 변화가 큰 결과를 만든다.", author: "속담" },
    { text: "사랑은 모든 것을 이긴다.", author: "단테" },
    { text: "진리는 반드시 따르는 자가 있고, 정의는 반드시 이루는 날이 있다.", author: "문익환" },
    { text: "행복은 성취의 결과가 아니라 과정에서 느끼는 것이다.", author: "무라카미 하루키" },
    { text: "위대한 일을 이루려면 행동해야 한다.", author: "베토벤" },
    { text: "성공은 실패를 거듭한 끝에 얻는 것이다.", author: "토마스 에디슨" },
    { text: "사람은 무엇을 상상하든 그것을 이룰 수 있다.", author: "월트 디즈니" },
    { text: "인생은 짧고 예술은 길다.", author: "히포크라테스" },
    { text: "가장 큰 영광은 결코 넘어지지 않음이 아니라 넘어질 때마다 일어서는 데 있다.", author: "넬슨 만델라" },
    { text: "성공의 비밀은 목표의 지속성에 있다.", author: "벤자민 디즈레일리" },
    { text: "행복한 삶을 살기 위해 필요한 것은 거의 없다.", author: "마르쿠스 아우렐리우스" },
    { text: "시간은 금이다.", author: "벤자민 프랭클린" },
    { text: "인내는 쓰지만 그 열매는 달다.", author: "장 자크 루소" },
    { text: "사랑은 행위이다.", author: "제임스 로이스" },
    { text: "한 번 실패와 영원한 실패를 혼동하지 마라.", author: "F. 스콧 피츠제럴드" },
    { text: "기회는 일어나는 것이 아니라 만들어내는 것이다.", author: "크리스 그로서" },
    { text: "당신이 할 수 있다고 생각하든 할 수 없다고 생각하든, 당신의 생각은 옳다.", author: "헨리 포드" },
    { text: "어려움 속에서도 기회는 존재한다.", author: "알버트 아인슈타인" },
    { text: "우리가 할 수 있는 일이라면 무엇이든 상상할 수 있다.", author: "아리스토텔레스" },
    { text: "모든 위대한 변화는 행동에서 시작된다.", author: "작자 미상" },
    { text: "가장 중요한 것은 꺾이지 않는 마음이다.", author: "작자 미상" }
];

let startTime;
let endTime;
const quoteDisplay = document.getElementById("quoteDisplay");
const authorDisplay = document.getElementById("authorDisplay");
const quoteInput = document.getElementById("quoteInput");
const timeTaken = document.getElementById("timeTaken");
const accuracy = document.getElementById("accuracy");
const typingSpeed = document.getElementById("typingSpeed");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = quote.text;
    authorDisplay.textContent = `- ${quote.author}`;
    quoteInput.value = "";
    quoteInput.disabled = false;
    quoteInput.focus();
    startTime = new Date().getTime();
    timeTaken.textContent = "소요 시간: 0초";
    accuracy.textContent = "정확도: 0%";
    typingSpeed.textContent = "타자 속도: 0 WPM";
});

quoteInput.addEventListener("input", () => {
    const quote = quoteDisplay.textContent;
    const input = quoteInput.value;
    if (input === quote) {
        endTime = new Date().getTime();
        const timeElapsed = (endTime - startTime) / 1000;
        const wordsTyped = quote.split(" ").length;
        const wpm = (wordsTyped / timeElapsed) * 60;
        timeTaken.textContent = `소요 시간: ${timeElapsed.toFixed(2)}초`;
        typingSpeed.textContent = `타자 속도: ${wpm.toFixed(2)} WPM`;

        const accuracyValue = (input.split("").filter((char, index) => char === quote[index]).length / quote.length) * 100;
        accuracy.textContent = `정확도: ${accuracyValue.toFixed(2)}%`;

        quoteInput.disabled = true;
    }
});
