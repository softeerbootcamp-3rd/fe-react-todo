# 🔥 리액트 미니 투두리스트 🔥

현대 소프티어 부트캠프 리액트 미니 투두 리스트 과제 레포입니다.

<br/>

# 🎨 기술 스택 🎨

1. React
2. JavaScript
3. CSS방식: styled-components
4. Server: JSON_SERVER

<br/>

# 프로젝트 구조
![image](https://github.com/sean2337/fe-react-todo/assets/100525337/b9583784-23e7-4de4-ac13-62bb60572a94)

<br/>

# 📝 Convention 📝

## 변수명 Convention

1. 상수이름: 대문자 + 언더바 ⇒ ex) TIME_LIMIT_VALUE
2. 변수이름: Carmel Case 적용 ⇒ timeLimit
3. 함수이름: 동사 + 명사 && Carmel Case 적용 ⇒ changeValue
4. 컴포넌트 & 페이지 이름: 명사 & Pascal Case


<br/>

## Branch 전략

- `feat` : 새로운 기능을 추가한 경우
- `fix` : 버그를 고친 경우
- `design` : CSS 등 사용자 UI 디자인을 변경한 경우
- `refactor` : 프로덕션 코드 리팩토링의 경우 (새로운 기능이나 버그 수정 없이 현재 구현을 개선)
- `docs` : 문서를 수정한 경우
- `comment` : 필요한 주석 추가 및 변경의 경우
- `chore` : 위의 경우에 포함되지 않는 경우

이 타입에 따라 이슈번호 생성 및 아래와 같이 타입#이슈번호\_이슈명

이슈명 ⇒ 이슈명 같은 경우, 소문자 + 언더바

> ex> feat#5\_이슈명

<br/>

<br/>

## Commit Massage Convention

### 커밋 Type

```
type(file name): commit message
```

모든 `commit message`는 최대한 간략하게 작성합니다. `file name`의 경우, 특정 파일만을 수정한 경우에는 해당 파일 이름을 포함하지만, 여러 파일인 경우에는 미포함하여 작성합니다.

모든 `commit message` 앞에는 다음의 `type`을 작성합니다.

- `feat` : 새로운 기능을 추가한 경우
- `fix` : 버그를 고친 경우
- `design` : CSS 등 사용자 UI 디자인을 변경한 경우
- `refactor` : 프로덕션 코드 리팩토링의 경우 (새로운 기능이나 버그 수정 없이 현재 구현을 개선)
- `docs` : 문서를 수정한 경우
- `comment` : 필요한 주석 추가 및 변경의 경우
- `chore` : 위의 경우에 포함되지 않는 경우


<br/>

### 커밋 Message

1. 50자 이하 제한
2. 동사 원형 + 소문자 ⇒ add button
3. 마침표 없이 작성

> ex> feat: add button component

<br/><br/>

# 🎉 그라운드 룰 🎉

- 25분씩 번갈아 가면서 진행
- 50분(두명 모두 했다면) 코딩 후 10분 휴식
- Navigator가 코딩 지시, Driver는 지시 이행
