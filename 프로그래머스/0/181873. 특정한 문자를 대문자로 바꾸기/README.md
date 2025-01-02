# [level 0] 특정한 문자를 대문자로 바꾸기 - 181873 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181873) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.13 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 01월 02일 13:45:06

### 문제 설명

<p>영소문자로 이루어진 문자열 <code>my_string</code>과 영소문자 1글자로 이루어진 문자열 <code>alp</code>가 매개변수로 주어질 때, <code>my_string</code>에서 <code>alp</code>에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>my_string</code>의 길이 ≤ 1,000</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>alp</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"programmers"</td>
<td>"p"</td>
<td>"Programmers"</td>
</tr>
<tr>
<td>"lowercase"</td>
<td>"x"</td>
<td>"lowercase"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>예제 1번의 <code>my_string</code>은 "programmers"이고 <code>alp</code>가 "p"이므로 <code>my_string</code>에 모든 p를 대문자인 P로 바꾼 문자열 "Programmers"를 return 합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>예제 2번의 <code>alp</code>는 "x"이고 <code>my_string</code>에 x는 없습니다. 따라서 "lowercase"를 return 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

## 💡 풀이 과정
1. 입력받은 문자열의 요소를 순회하여 특정 문자열과 같은 경우, 대문자로 바꾸도록 함
  1) 문자열을 스프레드 연산자로 문자 배열로 변환하고,
  2) 배열의 map을 사용하여 각 문자에 대해 특정 문자열과 비교 작업
  3) 특정 문자와 같다면 toUpperCase()를 출력하고, 아니라면 그대로 출력
  4) join("")으로 문자 배열을 다시 문자열로 변환함함
<!--
1. 문제 접근 방법
2. 사용한 알고리즘/자료구조
3. 핵심 로직 설명
-->
## 🔍 새롭게 알게된 점
- 문자열을 스프레드 연산자로 문자배열로 변환 후, map함수로 요소에 대해 작업 수행을 하고, join함수로 다시 문자열로 변환하는 과정을 알게됨

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