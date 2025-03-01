# [level 0] 간단한 식 계산하기 - 181865

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181865)

### 성능 요약

메모리: 33.5 MB, 시간: 0.08 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 02월 27일 13:00:56

### 문제 설명

<p>문자열 <code>binomial</code>이 매개변수로 주어집니다. <code>binomial</code>은 "<code>a</code> <code>op</code> <code>b</code>" 형태의 이항식이고 <code>a</code>와 <code>b</code>는 음이 아닌 정수, <code>op</code>는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>0 ≤ <code>a</code>, <code>b</code> ≤ 40,000</li>
<li>0을 제외하고 <code>a</code>, <code>b</code>는 0으로 시작하지 않습니다.</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>binomial</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"43 + 12"</td>
<td>55</td>
</tr>
<tr>
<td>"0 - 7777"</td>
<td>-7777</td>
</tr>
<tr>
<td>"40000 * 40000"</td>
<td>1600000000</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>예제 1번의 <code>binomial</code>은 "43 + 12"로 이 식을 계산한 결과인 43 + 12 = 55를 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>예제 2번의 <code>binomial</code>은 "0 - 7777"로 이 식을 계산한 결과인 0 - 7777 = -7777을 return 합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li>예제 3번의 <code>binomial</code>은 "40000 * 40000"으로 이 식을 계산한 결과인 40000 × 40000 = 1600000000을 return 합니다.</li>
</ul>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 💡 풀이 과정

<!--
1. 문제 접근 방법
2. 사용한 알고리즘/자료구조
3. 핵심 로직 설명
-->

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

```javascript
function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  if (op === "+") return Number(a) + Number(b);
  else if (op === "-") return Number(a) - Number(b);
  else return Number(a) * Number(b);
}
```

여기에서 if 문 대신 객체 리터럴을 사용하여 조건문을 제거할 수 있다.

```javascript
function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  const numA = Number(a);
  const numB = Number(b);

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };

  return operations[op](numA, numB);
}
```
