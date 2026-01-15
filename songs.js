// ✅ songs.js
// ✅ 노래 리스트만 모아둔 파일

const songs = [
      
      {artist: "권진아", title: "끝", genre:"한국" },
      {artist: "권진아", title: "시계 바늘", genre:"한국"},
      {artist: "권진아", title: "오늘 뭐 했는지 말해봐", genre:"한국"},
      {artist: "권진아", title: "운이 좋았지", genre:"한국"},
      {artist: "권진아", title: "이별 뒷면", genre:"한국"},

      {artist: "김광진", title: "편지", genre:"한국"},

      {artist: "김민석", title: "취중고백 (원곡:필)", genre:"한국"},

      {artist: "김연우", title: "이별택시", genre:"한국"},

      {artist: "김혜림", title: "날 위한 이별", genre:"한국"},

      {artist: "더레이", title: "청소", genre:"한국"},

      {artist: "로이킴", title: "그때 헤어지면 돼", genre:"한국"},
      
      {artist: "린", title: "사랑했잖아", genre:"한국"},
      {artist: "린", title: "시간을 거슬러", genre:"한국"},
      {artist: "린", title: "자기야 여보야 사랑아", genre:"한국"},
      {artist: "린", title: "통화연결음", genre:"한국"},

      {artist: "박화요비", title: "그런 일은", genre:"한국"},

      {artist: "백예린", title: "산책", genre:"한국"},
      {artist: "백예린", title: "아주 오래된 기억", genre:"한국"},
      {artist: "백예린", title: "Antifreeze (원곡:검정치마)", genre:"한국"},

      {artist: "벤", title: "꿈처럼", genre:"한국"},
      {artist: "벤", title: "안갯길", genre:"한국"},
      {artist: "벤", title: "열애중", genre:"한국"},

      {artist: "별", title: "안부", genre:"한국"},

      {artist: "보라미유", title: "헤어지던 밤", genre:"한국"},

      {artist: "성시경", title: "거리에서", genre:"한국"},
      {artist: "성시경", title: "너는 나의 봄이다", genre:"한국"},
      {artist: "성시경", title: "너의 모든 순간", genre:"한국"},
      {artist: "성시경", title: "두 사람", genre:"한국"},

      {artist: "십센치(10CM)", title: "스토커", genre:"한국" },

      {artist: "아이유", title: "느리게 하는 일", genre:"한국"},
      {artist: "아이유", title: "무릎", genre:"한국"},
      {artist: "아이유", title: "밤편지", genre:"한국"},
      {artist: "아이유", title: "사랑이 지나가면", genre:"한국"},
      {artist: "아이유", title: "이런 엔딩", genre:"한국"},
      {artist: "아이유", title: "첫 이별 그날 밤", genre:"한국"},
      {artist: "아이유", title: "푸르던", genre:"한국"},

      {artist: "앤 원(Ann One)", title: "혼자하는 사랑", genre:"한국"},

      {artist: "에메랄드 캐슬", title: "발걸음", genre:"한국"},

      {artist: "에스파파(S.Papa.)", title: "참다행이야", genre:"한국"},
      
      {artist: "에일리", title: "하루", genre:"한국"},

      {artist: "웬디", title: "Goodbye", genre:"한국"},

      {artist: "유재하", title: "가리워진 길", genre:"한국"},

      {artist: "윤미래", title: "시간이 흐른 뒤", genre:"한국"},

      {artist: "윤상", title: "한 걸음 더", genre:"한국"},

      {artist: "윤하", title: "기다리다", genre:"한국"},
      {artist: "윤하", title: "비밀번호 486", genre:"한국"},
      {artist: "윤하", title: "빗소리", genre:"한국"},
      {artist: "윤하", title: "오늘 헤어졌어요", genre:"한국"},
      {artist: "윤하", title: "첫눈에", genre:"한국"},
      {artist: "윤하", title: "텔레파시", genre:"한국"},
      {artist: "윤하", title: "혜성", genre:"한국"},

      {artist: "이승기", title: "삭제", genre:"한국"},

      {artist: "이예준", title: "넌 나의 20대였어", genre:"한국"},
      {artist: "이예준", title: "미인 (원곡:이기찬)", genre:"한국"},

      {artist: "임정희", title: "눈물이 안났어", genre:"한국"},
      {artist: "임정희", title: "시계태엽", genre:"한국"},

      {artist: "적재", title: "나랑 같이 걸을래", genre:"한국"},
      {artist: "적재", title: "별 보러 가자", genre:"한국"},

      {artist: "정인", title: "사랑은", genre:"한국"},
      {artist: "정인", title: "장마", genre:"한국"},

      {artist: "정준일", title: "안아줘", genre:"한국"},

      //{artist: "정효빈", title: "몇 번의 이별", genre:"한국"},

      {artist: "존박", title: "철부지", genre:"한국"},

      {artist: "죠지", title: "좋아해..", genre:"한국"},
      {artist: "죠지", title: "바라봐줘요", genre:"한국"},

      {artist: "주(JOO)", title: "어제처럼 (원곡:제이(J.ae))", genre:"한국"},

      {artist: "최은빈", title: "어떻게 사랑이 그래요 (원곡:이승환)", genre:"한국"},

      {artist: "츠키(tuki.)", title: "만찬가(Bansanka)", genre:"일본"},

      {artist: "탑현", title: "호랑수월가 (원곡:나래)", genre:"한국"},

      {artist: "태연", title: "11:11", genre:"한국"},
      {artist: "태연", title: "들리나요", genre:"한국"},
      {artist: "태연", title: "만약에", genre:"한국"},
      {artist: "태연", title: "제주도 푸른 밤", genre:"한국"},
      {artist: "태연", title: "Rain", genre:"한국"},

      {artist: "포티(40)", title: "듣는 편지", genre:"한국"},

      {artist: "황가람", title: "나는 반딧불", genre:"한국"},

      {artist: "Ariana Grande", title: "Almost Is Never Enough", genre:"팝송"},

      {artist: "Avril Lavigne", title: "SK8er Boi", genre:"팝송"},

      {artist: "Maroon 5", title: "Payphone (Piano Ver.)", genre:"팝송"},

      {artist: "Oasis", title: "Don't Look Back In Anger", genre:"팝송"}

];
