# 목표

- 정희의 목표
  - react 문법 익숙해지기
  - 기술스택에 대한 이유 갖기
- 정진의 목표
  - tailwindcss 졸업
  - react recap하기

# 기술스택

- React
- Vite
- Typescript
- CSS module

# 그라운드 룰

### 페어프로그래밍 규칙

- 25분씩가며 드라이버와 네비게이터를 번갈아 진행한다. 25분 후에는 5분 휴식한다.

### 브랜치 전략

- [우린 Git-flow를 사용하고 있어요](https://techblog.woowahan.com/2553/)
- ojj1123: 프러덕션으로 배포할 브랜치
- dev: 다음 출시할 개발 브랜치
- feat/issue-{이슈 번호}: 기능 개발 브랜치

### 커밋 컨벤션

- feat: 새로운 기능 개발
- refactor: 코드 리팩터링
- docs: 문서 수정
- fix: 버그 수정
- chore: 사소한 작업
- style: 퍼블리싱

# 기능 요구 사항

기능 우선순위: 상 / 중 / 하

- 상) 할일을 입력하고 등록이 되면 TODO가 등록된다
- 상) 등록된 TODO는 삭제할 수 있다.
- 상) 등록된 TODO에 완료표시를 하면 취소선으로 완료 표시를 보여준다
- 중) 등록된 TODO는 수정할 수 있다.
  - TODO를 누르면 input으로 바뀌고 `확인`이나 `enter`를 클릭하면 수정된다
  - 수정 단계에서 취소를 누르면 입력된 값이 원래대로 돌아온다
- 하) `localStorage` 에 TODO를 저장한다
