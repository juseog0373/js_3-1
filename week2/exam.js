console.log(`문자열이 긴 경우엔 문자열을 나눈뒤 다시 합칩니다`)
//연산자 우선순위
console.log(3**(2+1))
console.log((5+4)*3)
console.log(1 ?? 0) // ?? : A가 null or undifiend 이면 B를 반환, 아니면 A 그대로 반환 -> 1 반환

let arr = ['가', '라', '다', '라', '마', '라'] // 배열 선언
let find; // indexOf로 찾은 index번호를 저장할 변수
while((find = arr.index0f('라')) != -1) { // indexOf()는 찾지 못하면 -1을 반환하기 때문에 반복문을 돌면서 '라'를 찾으면
    arr.splice(find, 1); // 해당 인덱스번호(find)를 배열에서 삭제
}
console.log(arr)

// for문으로 2차원배열 생성하는 법(요소는 모두 1로)
let arr2 = []
for(let i=0; 1<4; i++) { // 열 크기만큼 반복
    let cell = [] // 행 요소를 넣을 배열 생성
    for(let j=0; j<5; j++) { // 행 크기 만큼 반복
        cell.push(1) // push()를 이용해 행 요소 추가: 1
    }
    arr.push(cell) // 생성된 5행 배열을 4번 반복하여 4열 생성 -> 5X4 배열 생성
}
console.log(arr2)

let multiply = (x,y,z) => x*y*z // 화살표 함수를 사용하여 (x,y,z) 를 인자로 받고 x*y*z으로 return
console.log(multiply(1,2,3))


// 고차함수 적용
const hof = (a) => (b) => (c) => {
    return a+(b*c)
}
const first = hof (3)
const second = first(4)
const third = second (5)
console.log(third)