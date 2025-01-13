# [level 2] 짝지어 제거하기 - 12973

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12973)

### 성능 요약

메모리: 57.9 MB, 시간: 70.13 ms

### 구분

코딩테스트 연습 > 2017 팁스타운

### 채점결과

정확성: 61.2<br/>효율성: 38.8<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 01월 13일 15:43:26

### 문제 설명

<p>짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.</p>

<p>예를 들어, 문자열 S = <code>baabaa</code> 라면</p>

<p>b <em>aa</em> baa → <em>bb</em> aa → <em>aa</em> →</p>

<p>의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.</p>

<h5>제한사항</h5>

<ul>
<li>문자열의 길이 : 1,000,000이하의 자연수</li>
<li>문자열은 모두 소문자로 이루어져 있습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>baabaa</td>
<td>1</td>
</tr>
<tr>
<td>cdcd</td>
<td>0</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>입출력 예 #1<br>
위의 예시와 같습니다.<br>
입출력 예 #2<br>
문자열이 남아있지만 짝지어 제거할 수 있는 문자열이 더 이상 존재하지 않기 때문에 0을 반환합니다.</p>

<p>※ 공지 - 2020년 6월 8일 테스트케이스가 추가되었습니다.<br>
※ 공지 - 2023년 8월 31일 테스트케이스가 추가되었습니다. 기존에 제출한 코드가 통과하지 못할 수도 있습니다.</p>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 💡 풀이 과정

<!--
1. 문제 접근 방법
2. 사용한 알고리즘/자료구조
3. 핵심 로직 설명
-->

```
function solution(s) {
    let str = s;
    while (str !== deleteStr(str)) {
        str = deleteStr(str);
    }
    return str.length === 0 ? 1 : 0;
}

function deleteStr(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i+1]) {
            const regex = new RegExp(`${str[i]}${str[i]}`, "g")
            return str.replace(regex, "");
        }
    }
    return str;
}
```

문제점

- 한번 시행시 처음 같은 짝과 동일한 문자를 전부 replace로 제거하였지만
  일부 테스트에서는 시간초과가 나왔다.
- 결국 시행할 때마다 index를 0부터 다시 조회하여 불필요한 계산이 누적이 되었다

## 🔍 새롭게 알게된 점

## ⚠️ 주의할 점

<!--
- 시간복잡도 고려사항
- 예외 케이스 처리
-->

## 🌱 개선 사항

<!--
- 더 효율적인 방법이 있다면 기록
- 다른 풀이 방법 참고
-->

```
function solution(s) {
    const stack = [];

    for (let str of s) {
        if (stack.length !== 0 && stack[stack.length - 1] === str) {
            stack.pop();
        } else {
            stack.push(str);
        }
    }
    return stack.length === 0 ? 1 : 0;
}
```

- stack이라는 배열을 생성한다
- 입력받은 s를 for 문으로 전체 탐색을 한다
- length가 0이 아닌경우, stack의 마지막 문자열이 str과 다른 경우 stack에 저장
- stack에 저장되어 있는 마지막 문자열과 str의 값이 같다면 stack에서 제거
