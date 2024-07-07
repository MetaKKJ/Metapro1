const quotes = [
    { 
        text: "일찍 일어나는 새가 벌레를 잡는다.", 
        author: "속담",
        background: "이 속담은 일찍 일어나 부지런히 행동하면 성공을 거둘 수 있다는 뜻을 담고 있습니다.",
        advice: "부지런함과 시간 관리의 중요성을 항상 기억하세요."
    },
    { 
        text: "작은 고추가 맵다.", 
        author: "속담",
        background: "작은 것이 강할 수 있다는 의미로, 외모나 크기로 사람을 판단하지 말라는 교훈을 줍니다.",
        advice: "자신의 능력을 과소평가하지 말고 항상 자신감을 가지세요."
    },
    { 
        text: "하루하루가 새롭고 신비롭다.", 
        author: "법정",
        background: "법정 스님은 한국의 불교 승려로, 물질보다는 정신적 가치를 중요시하였습니다.",
        advice: "매일매일을 소중히 여기고 감사하는 마음으로 생활하세요."
    },
    { 
        text: "사람은 자신이 생각하는 것과 같은 사람이 된다.", 
        author: "마하트마 간디",
        background: "마하트마 간디는 비폭력 저항 운동을 이끌어 인도의 독립을 이끌어낸 지도자입니다.",
        advice: "긍정적인 생각과 믿음이 당신의 삶을 변화시킬 수 있습니다."
    },
    { 
        text: "세상에 속지 않기 위해서는 자신을 속이지 않으면 된다.", 
        author: "에머슨",
        background: "랄프 왈도 에머슨은 미국의 철학자이자 시인으로, 초월주의 운동을 이끌었습니다.",
        advice: "자기 자신에게 정직하고 진실되게 살아가세요."
    },
    { 
        text: "자신을 사랑하면 아무도 사랑하지 않는 것이다.", 
        author: "괴테",
        background: "요한 볼프강 폰 괴테는 독일의 문학가이자 철학자로, 여러 방면에서 많은 영향을 끼쳤습니다.",
        advice: "자신을 사랑하되 타인도 함께 배려하는 균형 있는 삶을 추구하세요."
    },
    { 
        text: "최선을 다하면 후회는 없다.", 
        author: "나폴레옹",
        background: "나폴레옹 보나파르트는 프랑스의 군사 지도자이자 황제로, 유럽 역사에 큰 영향을 미쳤습니다.",
        advice: "매 순간 최선을 다하고, 결과에 연연하지 마세요."
    },
    { 
        text: "실패는 성공의 어머니이다.", 
        author: "속담",
        background: "이 속담은 실패를 통해 배운 경험이 성공으로 이어진다는 교훈을 담고 있습니다.",
        advice: "실패를 두려워하지 말고 배움의 기회를 삼으세요."
    },
    { 
        text: "오늘 할 일을 내일로 미루지 마라.", 
        author: "속담",
        background: "이 속담은 게으름을 피우지 말고 제때 할 일을 하라는 경고를 담고 있습니다.",
        advice: "시간 관리를 잘하여 목표를 차근차근 이뤄나가세요."
    },
    { 
        text: "작은 변화가 큰 결과를 만든다.", 
        author: "속담",
        background: "작은 노력과 변화가 쌓여 큰 성과를 이룰 수 있다는 교훈을 줍니다.",
        advice: "작은 것부터 시작하여 꾸준히 나아가세요."
    },
    // 추가 명언들...
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
const startPracticeButton = document.getElementById("startPracticeButton");
const practiceSection = document.getElementById("practiceSection");
const authorInfo = document.getElementById("authorInfo");
const guestbookForm = document.getElementById("guestbookForm");
const guestbookEntry = document.getElementById("guestbookEntry");
const guestbookEntries = document.getElementById("guestbookEntries");

startPracticeButton.addEventListener("click", () => {
    practiceSection.classList.toggle("hidden");
    practiceSection.classList.toggle("fade-in");
});

startButton.addEventListener("click", () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.innerHTML = "";
    quote.text.split("").forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        quoteDisplay.appendChild(span);
    });
    authorDisplay.textContent = `- ${quote.author}`;
    quoteInput.value = "";
    quoteInput.disabled = false;
    quoteInput.focus();
    startTime = new Date().getTime();
    timeTaken.textContent = "소요 시간: 0초";
    accuracy.textContent = "정확도: 0%";
    typingSpeed.textContent = "타자 속도: 0 자/분";
    authorInfo.innerHTML = "";
});

quoteInput.addEventListener("input", () => {
    const quoteSpans = quoteDisplay.querySelectorAll("span");
    const input = quoteInput.value.split("");
    let correct = true;

    quoteSpans.forEach((charSpan, index) => {
        const char = input[index];
        if (char == null) {
            charSpan.classList.remove("correct");
        } else if (char === charSpan.textContent) {
            charSpan.classList.add("correct");
        } else {
            charSpan.classList.remove("correct");
            correct = false;
        }
    });

    if (correct && input.length === quoteSpans.length) {
        endTime = new Date().getTime();
        const timeElapsed = (endTime - startTime) / 1000;
        const charsTyped = input.length;
        const cpm = (charsTyped / timeElapsed) * 60; // 분당 타자 수
        timeTaken.textContent = `소요 시간: ${timeElapsed.toFixed(2)}초`;
        typingSpeed.textContent = `타자 속도: ${cpm.toFixed(2)} 자/분`;

        const accuracyValue = (input.filter((char, index) => char === quoteSpans[index].textContent).length / quoteSpans.length) * 100;
        accuracy.textContent = `정확도: ${accuracyValue.toFixed(2)}%`;

        quoteInput.disabled = true;

        const quoteAuthor = quotes.find(q => q.text === input.join(""));
        authorInfo.innerHTML = `<strong>${quoteAuthor.author}</strong><br>${quoteAuthor.background}<br><br><em>${quoteAuthor.advice}</em>`;
    }
});

guestbookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newEntry = document.createElement("p");
    newEntry.textContent = guestbookEntry.value;
    guestbookEntries.appendChild(newEntry);
    guestbookEntry.value = "";
});
