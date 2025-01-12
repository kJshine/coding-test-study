# [level 2] 카펫 - 42842

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42842)

### 성능 요약

메모리: 33.5 MB, 시간: 0.36 ms

### 구분

코딩테스트 연습 > 완전탐색

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 01월 13일 01:46:15

### 문제 설명

<p>Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b1ebb809-f333-4df2-bc81-02682900dc2d/carpet.png" title="" alt="carpet.png"></p>

<p>Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.</p>

<p>Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.</p>

<h5>제한사항</h5>

<ul>
<li>갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.</li>
<li>노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.</li>
<li>카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>brown</th>
<th>yellow</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>10</td>
<td>2</td>
<td>[4, 3]</td>
</tr>
<tr>
<td>8</td>
<td>1</td>
<td>[3, 3]</td>
</tr>
<tr>
<td>24</td>
<td>24</td>
<td>[8, 6]</td>
</tr>
</tbody>
      </table>
<p><a href="http://hsin.hr/coci/archive/2010_2011/contest4_tasks.pdf" target="_blank" rel="noopener">출처</a></p>

<p>※ 공지 - 2020년 2월 3일 테스트케이스가 추가되었습니다.<br>
※ 공지 - 2020년 5월 11일 웹접근성을 고려하여 빨간색을 노란색으로 수정하였습니다.</p>

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

```
function solution(brown, yellow) {
    // 약수를 구하는 효율적인 방법
    // 1. 약수 쌍의 특징: 약수는 대칭적으로 존재
    // 2. 계산 효율성을 위해 제곱근까지만 반복
    const arr = [];
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        if (yellow % i === 0) arr.push([i, yellow / i].sort((a, b) => b - a));
    }

    // 구조 분해를 통해 arr의 각 약수 쌍 순회
    // yRow: 노란색 카펫의 행, yCol: 노란색 카펫의 열
    for (let [yRow, yCol] of arr) {
        if (brown === 2 * (yRow + 2) + 2 * (yCol)) {
            return [yRow + 2, yCol + 2];
        }
    }
}
```
