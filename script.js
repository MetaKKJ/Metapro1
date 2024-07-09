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
    { 
        text: "나는 생각한다, 고로 존재한다.", 
        author: "데카르트",
        background: "데카르트는 프랑스의 철학자이자 수학자로, 근대 철학의 아버지로 불립니다.",
        advice: "스스로 생각하는 힘을 기르세요."
    },
    { 
        text: "인생은 아름다워. 그런데 그걸 모를 뿐이야.", 
        author: "찰리 채플린",
        background: "찰리 채플린은 영국의 코미디 배우이자 영화 감독으로, 무성 영화의 황제라 불립니다.",
        advice: "인생의 아름다움을 발견하고 누리세요."
    },
    { 
        text: "군자는 말을 행동이 따르지 않는 것을 부끄러워한다.", 
        author: "공자",
        background: "공자는 중국의 위대한 사상가이자 교육자로, 유교의 창시자입니다.",
        advice: "말보다는 행동으로 실천하는 삶을 살도록 노력하세요."
    },
    { 
        text: "성공은 열심히 노력하는 사람에게 찾아온다.", 
        author: "알버트 아인슈타인",
        background: "알버트 아인슈타인은 독일 태생의 이론물리학자로, 상대성 이론으로 유명합니다.",
        advice: "꾸준한 노력과 성실함으로 성공을 이끌어내세요."
    },
    { 
        text: "고난은 위대한 스승이다.", 
        author: "찰스 디킨스",
        background: "찰스 디킨스는 영국의 소설가로, '올리버 트위스트', '크리스마스 캐럴' 등의 작품으로 유명합니다.",
        advice: "어려움을 통해 배움을 얻고 성장하세요."
    },
    { 
        text: "어둠을 원망하지 말고, 스스로 빛을 찾아라.", 
        author: "공자",
        background: "공자는 중국의 위대한 사상가이자 교육자로, 유교의 창시자입니다.",
        advice: "어려움 속에서도 긍정적인 마음으로 해결책을 찾아보세요."
    },
    { 
        text: "성공의 비결은 끈기와 열정이다.", 
        author: "스티브 잡스",
        background: "스티브 잡스는 미국의 기업가이자 애플의 공동 창립자로, 현대 기술 산업에 큰 영향을 미쳤습니다.",
        advice: "끈기와 열정으로 목표를 이루어내세요."
    },
    { 
        text: "행복은 준비된 자에게만 온다.", 
        author: "파스칼",
        background: "블레즈 파스칼은 프랑스의 수학자, 물리학자, 철학자로, 확률 이론과 유체 역학에 기여했습니다.",
        advice: "항상 준비된 자세로 기회를 맞이하세요."
    },
    { 
        text: "미래를 예측하는 가장 좋은 방법은 미래를 창조하는 것이다.", 
        author: "피터 드러커",
        background: "피터 드러커는 오스트리아 출신의 미국 경영학자로, 현대 경영학의 아버지로 불립니다.",
        advice: "미래를 만들어 나가는 주체가 되세요."
    },
    { 
        text: "성공한 사람은 항상 해결책이 있다. 실패한 사람은 항상 변명이 있다.", 
        author: "존 F. 케네디",
        background: "존 F. 케네디는 미국의 제35대 대통령으로, 그의 재임 기간 동안 많은 사회적 변화와 개혁을 이루었습니다.",
        advice: "변명보다는 해결책을 찾아 문제를 해결하세요."
    },
    { 
        text: "어떤 길을 택하든 후회하지 마라.", 
        author: "오스카 와일드",
        background: "오스카 와일드는 아일랜드의 작가이자 시인으로, 그의 재치 있는 글과 풍자로 유명합니다.",
        advice: "선택한 길에 최선을 다하고 후회하지 마세요."
    },
    { 
        text: "성공의 비결은 단 한 가지, 잘할 때까지 포기하지 않는 것이다.", 
        author: "윌리엄 페더",
        background: "윌리엄 페더는 미국의 저널리스트이자 출판인으로, 많은 명언을 남겼습니다.",
        advice: "포기하지 말고 끝까지 노력하세요."
    },
    { 
        text: "희망은 절망보다 강하다.", 
        author: "아리스토텔레스",
        background: "아리스토텔레스는 고대 그리스의 철학자로, 서양 철학과 과학에 큰 영향을 미쳤습니다.",
        advice: "절망하지 말고 희망을 가지고 나아가세요."
    },
    // 150개 이상의 명언 추가 필요
    { 
        text: "당신이 변하지 않으면 변화는 불가능하다.", 
        author: "볼테르",
        background: "볼테르는 프랑스의 계몽주의 철학자이자 작가로, 자유와 진리를 추구한 인물입니다.",
        advice: "자신의 변화를 통해 세상을 변화시킬 수 있습니다."
    },
    { 
        text: "힘들 때 웃는 자가 진정한 승자다.", 
        author: "빌 게이츠",
        background: "빌 게이츠는 마이크로소프트의 공동 창립자로, 세계에서 가장 부유한 인물 중 하나입니다.",
        advice: "어려운 상황에서도 긍정적인 태도를 유지하세요."
    },
    { 
        text: "사랑은 우리가 가지고 있는 모든 것이다. 그것이 전부이며, 그것이 전부일 필요는 없다.", 
        author: "에리히 프롬",
        background: "에리히 프롬은 독일 태생의 미국 심리학자이자 사회철학자로, 사랑과 자유에 대해 깊이 연구하였습니다.",
        advice: "사랑은 모든 것을 포용할 수 있습니다."
    },
    { 
        text: "기회는 그것을 찾는 사람에게 온다.", 
        author: "알렉산더 그레이엄 벨",
        background: "알렉산더 그레이엄 벨은 전화기의 발명자로 유명한 과학자이자 발명가입니다.",
        advice: "항상 기회를 찾고 준비하는 자세를 가지세요."
    },
    { 
        text: "모든 것은 변화한다. 우리는 그 변화를 이용할 수 있어야 한다.", 
        author: "존 F. 케네디",
        background: "존 F. 케네디는 미국의 제35대 대통령으로, 그의 재임 기간 동안 많은 사회적 변화와 개혁을 이루었습니다.",
        advice: "변화를 두려워하지 말고 받아들이며 성장하세요."
    },
    { 
        text: "성공은 작은 노력이 반복된 결과이다.", 
        author: "로버트 콜리어",
        background: "로버트 콜리어는 미국의 저자이자 자기계발서 작가로, 긍정적인 사고방식의 중요성을 강조하였습니다.",
        advice: "작은 노력을 지속적으로 반복하여 성공을 이루세요."
    },
    { 
        text: "오늘을 살아라. 내일은 오지 않을 수도 있다.", 
        author: "호라티우스",
        background: "호라티우스는 고대 로마의 시인으로, 그의 작품은 후세에 큰 영향을 미쳤습니다.",
        advice: "현재의 순간을 소중히 여기고 충실히 살아가세요."
    },
    { 
        text: "성공의 비결은 단순하다. 그것은 목표를 설정하고 그 목표를 향해 매일 조금씩 나아가는 것이다.", 
        author: "로버트 콜리어",
        background: "로버트 콜리어는 미국의 저자이자 자기계발서 작가로, 긍정적인 사고방식의 중요성을 강조하였습니다.",
        advice: "목표를 설정하고 꾸준히 노력하여 성취하세요."
    },
    { 
        text: "희망은 절망보다 강하다.", 
        author: "아리스토텔레스",
        background: "아리스토텔레스는 고대 그리스의 철학자로, 서양 철학과 과학에 큰 영향을 미쳤습니다.",
        advice: "절망하지 말고 희망을 가지고 나아가세요."
    },
    { 
        text: "진정한 리더는 길을 찾는 자가 아니라, 길을 만드는 자다.", 
        author: "존 C. 맥스웰",
        background: "존 C. 맥스웰은 미국의 저명한 리더십 전문가이자 작가로, 많은 리더십 책을 저술했습니다.",
        advice: "스스로 길을 개척하여 다른 이들을 이끄는 리더가 되세요."
    },
    { 
        text: "성공은 최종 목적지가 아니라 여정이다.", 
        author: "벤 스테인",
        background: "벤 스테인은 미국의 작가이자 배우, 경제학자로, 성공과 행복에 대한 많은 글을 썼습니다.",
        advice: "목표를 향한 여정 자체를 즐기세요."
    },
    { 
        text: "과거는 잊어라. 미래에 집중하라.", 
        author: "헨리 포드",
        background: "헨리 포드는 미국의 자동차 산업 선구자로, 포드 자동차 회사를 창립했습니다.",
        advice: "과거에 얽매이지 말고 미래를 향해 나아가세요."
    },
    { 
        text: "성공의 비결은 단순히 열심히 일하는 것이다.", 
        author: "토머스 에디슨",
        background: "토머스 에디슨은 미국의 발명가이자 사업가로, 전구와 축음기 등의 발명품으로 유명합니다.",
        advice: "열심히 일하고 끊임없이 노력하세요."
    },
    { 
        text: "우리가 두려워해야 할 유일한 것은 두려움 그 자체다.", 
        author: "프랭클린 D. 루스벨트",
        background: "프랭클린 D. 루스벨트는 미국의 제32대 대통령으로, 대공황과 제2차 세계대전을 극복하는 데 큰 역할을 했습니다.",
        advice: "두려움에 맞서 용기를 가지고 나아가세요."
    },
    { 
        text: "성공은 준비된 자에게만 온다.", 
        author: "헨리 포드",
        background: "헨리 포드는 미국의 자동차 산업 선구자로, 포드 자동차 회사를 창립했습니다.",
        advice: "항상 준비된 자세로 기회를 맞이하세요."
    },
    { 
        text: "성공은 타고난 재능보다 끈기와 열정에서 나온다.", 
        author: "스티브 잡스",
        background: "스티브 잡스는 미국의 기업가이자 애플의 공동 창립자로, 현대 기술 산업에 큰 영향을 미쳤습니다.",
        advice: "끈기와 열정으로 목표를 이루어내세요."
    },
    { 
        text: "어둠을 원망하지 말고, 스스로 빛을 찾아라.", 
        author: "공자",
        background: "공자는 중국의 위대한 사상가이자 교육자로, 유교의 창시자입니다.",
        advice: "어려움 속에서도 긍정적인 마음으로 해결책을 찾아보세요."
    },
    { 
        text: "성공은 준비된 자에게만 온다.", 
        author: "헨리 포드",
        background: "헨리 포드는 미국의 자동차 산업 선구자로, 포드 자동차 회사를 창립했습니다.",
        advice: "항상 준비된 자세로 기회를 맞이하세요."
    },
    { 
        text: "성공한 사람은 항상 해결책이 있다. 실패한 사람은 항상 변명이 있다.", 
        author: "존 F. 케네디",
        background: "존 F. 케네디는 미국의 제35대 대통령으로, 그의 재임 기간 동안 많은 사회적 변화와 개혁을 이루었습니다.",
        advice: "변명보다는 해결책을 찾아 문제를 해결하세요."
    },
    { 
        text: "삶이 있는 한 희망은 있다.", 
        author: "키케로",
        background: "키케로는 로마의 철학자이자 정치가로, 웅변과 글쓰기에서 뛰어났습니다.",
        advice: "어려운 상황에서도 희망을 잃지 마세요."
    },
    { 
        text: "삶은 자기 자신을 찾는 것이 아니라, 자기 자신을 만드는 것이다.", 
        author: "조지 버나드 쇼",
        background: "조지 버나드 쇼는 아일랜드의 극작가이자 작가로, 노벨 문학상을 수상했습니다.",
        advice: "자신을 끊임없이 발전시키며 새로운 가능성을 열어가세요."
    },
    { 
        text: "위대한 업적은 대개 큰 고난을 이겨낸 후에 이루어진다.", 
        author: "C.S. 루이스",
        background: "C.S. 루이스는 아일랜드 출신의 영국 작가이자 학자로, '나니아 연대기' 시리즈로 유명합니다.",
        advice: "어려움을 극복하고 큰 성과를 이루어내세요."
    },
    { 
        text: "고난은 위대한 스승이다.", 
        author: "찰스 디킨스",
        background: "찰스 디킨스는 영국의 소설가로, '올리버 트위스트', '크리스마스 캐럴' 등의 작품으로 유명합니다.",
        advice: "어려움을 통해 배움을 얻고 성장하세요."
    },
    { 
        text: "성공은 타고난 재능보다 끈기와 열정에서 나온다.", 
        author: "스티브 잡스",
        background: "스티브 잡스는 미국의 기업가이자 애플의 공동 창립자로, 현대 기술 산업에 큰 영향을 미쳤습니다.",
        advice: "끈기와 열정으로 목표를 이루어내세요."
    },
    { 
        text: "과거는 잊어라. 미래에 집중하라.", 
        author: "헨리 포드",
        background: "헨리 포드는 미국의 자동차 산업 선구자로, 포드 자동차 회사를 창립했습니다.",
        advice: "과거에 얽매이지 말고 미래를 향해 나아가세요."
    },
    { 
        text: "삶은 자기 자신을 찾는 것이 아니라, 자기 자신을 만드는 것이다.", 
        author: "조지 버나드 쇼",
        background: "조지 버나드 쇼는 아일랜드의 극작가이자 작가로, 노벨 문학상을 수상했습니다.",
        advice: "자신을 끊임없이 발전시키며 새로운 가능성을 열어가세요."
    },
    { 
        text: "위대한 업적은 대개 큰 고난을 이겨낸 후에 이루어진다.", 
        author: "C.S. 루이스",
        background: "C.S. 루이스는 아일랜드 출신의 영국 작가이자 학자로, '나니아 연대기' 시리즈로 유명합니다.",
        advice: "어려움을 극복하고 큰 성과를 이루어내세요."
    },
    { 
        text: "고난은 위대한 스승이다.", 
        author: "찰스 디킨스",
        background: "찰스 디킨스는 영국의 소설가로, '올리버 트위스트', '크리스마스 캐럴' 등의 작품으로 유명합니다.",
        advice: "어려움을 통해 배움을 얻고 성장하세요."
    },
    { 
        text: "성공은 준비된 자에게만 온다.", 
        author: "헨리 포드",
        background: "헨리 포드는 미국의 자동차 산업 선구자로, 포드 자동차 회사를 창립했습니다.",
        advice: "항상 준비된 자세로 기회를 맞이하세요."
    },
    { 
        text: "삶이 있는 한 희망은 있다.", 
        author: "키케로",
        background: "키케로는 로마의 철학자이자 정치가로, 웅변과 글쓰기에서 뛰어났습니다.",
        advice: "어려운 상황에서도 희망을 잃지 마세요."
    },
    { 
        text: "힘들 때 웃는 자가 진정한 승자다.", 
        author: "빌 게이츠",
        background: "빌 게이츠는 마이크로소프트의 공동 창립자로, 세계에서 가장 부유한 인물 중 하나입니다.",
        advice: "어려운 상황에서도 긍정적인 태도를 유지하세요."
    },
    { 
        text: "사랑은 우리가 가지고 있는 모든 것이다. 그것이 전부이며, 그것이 전부일 필요는 없다.", 
        author: "에리히 프롬",
        background: "에리히 프롬은 독일 태생의 미국 심리학자이자 사회철학자로, 사랑과 자유에 대해 깊이 연구하였습니다.",
        advice: "사랑은 모든 것을 포용할 수 있습니다."
    },
    { 
        text: "기회는 그것을 찾는 사람에게 온다.", 
        author: "알렉산더 그레이엄 벨",
        background: "알렉산더 그레이엄 벨은 전화기의 발명자로 유명한 과학자이자 발명가입니다.",
        advice: "항상 기회를 찾고 준비하는 자세를 가지세요."
    },
    { 
        text: "모든 것은 변화한다. 우리는 그 변화를 이용할 수 있어야 한다.", 
        author: "존 F. 케네디",
        background: "존 F. 케네디는 미국의 제35대 대통령으로, 그의 재임 기간 동안 많은 사회적 변화와 개혁을 이루었습니다.",
        advice: "변화를 두려워하지 말고 받아들이며 성장하세요."
    },
    { 
        text: "성공은 작은 노력이 반복된 결과이다.", 
        author: "로버트 콜리어",
        background: "로버트 콜리어는 미국의 저자이자 자기계발서 작가로, 긍정적인 사고방식의 중요성을 강조하였습니다.",
        advice: "작은 노력을 지속적으로 반복하여 성공을 이루세요."
    },
    { 
        text: "오늘을 살아라. 내일은 오지 않을 수도 있다.", 
        author: "호라티우스",
        background: "호라티우스는 고대 로마의 시인으로, 그의 작품은 후세에 큰 영향을 미쳤습니다.",
        advice: "현재의 순간을 소중히 여기고 충실히 살아가세요."
    },
    { 
        text: "성공의 비결은 단순하다. 그것은 목표를 설정하고 그 목표를 향해 매일 조금씩 나아가는 것이다.", 
        author: "로버트 콜리어",
        background: "로버트 콜리어는 미국의 저자이자 자기계발서 작가로, 긍정적인 사고방식의 중요성을 강조하였습니다.",
        advice: "목표를 설정하고 꾸준히 노력하여 성취하세요."
    }
];

let startTime;
let endTime;
let currentQuoteIndex;
let displayedQuotes = [];
let favorites = [];

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
const favoriteButton = document.getElementById("favoriteButton");
const favoritesList = document.getElementById("favoritesList");

startPracticeButton.addEventListener("click", () => {
    practiceSection.classList.toggle("hidden");
    practiceSection.classList.toggle("fade-in");
});

startButton.addEventListener("click", () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (displayedQuotes.includes(randomIndex) && displayedQuotes.length < quotes.length);

    if (displayedQuotes.length >= quotes.length) {
        displayedQuotes = [];
    }

    currentQuoteIndex = randomIndex;
    displayedQuotes.push(randomIndex);

    const quote = quotes[randomIndex];
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
    favoriteButton.classList.add("hidden");
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

        const quoteAuthor = quotes[currentQuoteIndex];
        authorInfo.innerHTML = `<strong>${quoteAuthor.author}</strong><br>${quoteAuthor.background}<br><br><em>${quoteAuthor.advice}</em>`;

        favoriteButton.classList.remove("hidden");
        favoriteButton.addEventListener("click", () => {
            favorites.push(quote.text);
            updateFavoritesList();
        });
    }
});

function updateFavoritesList() {
    favoritesList.innerHTML = "";
    favorites.forEach(favorite => {
        const li = document.createElement("li");
        li.textContent = favorite;
        favoritesList.appendChild(li);
    });
}

guestbookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newEntry = document.createElement("p");
    newEntry.textContent = guestbookEntry.value;
    guestbookEntries.appendChild(newEntry);
    guestbookEntry.value = "";
});
