### 환경설정

- vite

### CSS

- CSS Modules
- scss

### commit 컨벤션

- feat: 새로운 기능 추가
- refactor: 리팩토링
- fix: 버그 수정
- style: css
- remove: 파일 / 폴더 삭제
- docs: 문서 작성

### 페어 프로그래밍 규칙

- 25분(교체) - 5분 휴식
- 유동적 변경

### 기능 요구사항

기능 우선순위: 상 / 중 / 하

- (상) 투두리스트 등록
  - 할 일 내용 입력 가능
  - 투두리스트 내용 입력 시 버튼 활성화
  - “등록 버튼” 을 통해 투두리스트 등록
- (상) 투두리스트 삭제
  - 각 할 일의 “삭제 버튼”을 통해서 투드리스트 삭제
- (상) Json-server 연동
- (중) 투두리스트 완료 (체크박스)
  - 각 할 일의 체크박스 선택 시 회색 배경으로 변경
  - 이 때, 삭제 기능 가능
- (하)(선택) 날짜별 투두리스트 분리

### git 컨벤션

- github flow

### 변수명 컨벤션

- PascalCase: 컴포넌트, 클래스
- camelCase: 변수, 함수
- 대문자 + snake_case: 상수

### 클래스명 컨벤션

- BEM

### 함수 선언 방식

- function

### 컴포넌트 구조

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e4165367-33be-43d8-aa4b-678e2f9f4cb6/49a59c54-23ee-4d0b-bcaa-31c7ccdacf20/Untitled.png)

### API 문서

```jsx
{
	"todo": [
    {
      "id": "311c",
      "content": "할일1",
      "isDone": false
    },
    {
      "id": "3416",
      "content": "할일2",
      "isDone": false
    },
    {
      "id": "9c79",
      "content": "할일3",
      "isDone": false
    }
  ]
}
```
