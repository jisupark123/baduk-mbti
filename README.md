# 바둑으로 알아보는 MBTI

## Detail

MBTI 각각의 유형에 해당하는 바둑 문제를 풀어서 MBTI를 알아본다.

## 🧷 URL

### Root

/ -> Home - 이름, Level 입력
/test -> 문제 푸는 페이지
/all -> 모든 MBTI 유형을 확인할 수 있는 페이지

### API

GET /api/mbti -> mbti (통계)정보 가져오기
POST /api/mbti -> MBTI 결과 DB에 저장
POST /api/manage/real-mbti -> 사용자의 진짜 mbti DB에 저장
