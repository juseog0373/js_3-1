function b() {
    for(let i=0; i<5; i++) {
        if(i >= 3) {
            return i;
        }
    }
}

function aa(w,x,y,z) {
    console.log(w,x,y,z)
}
aa(1,2,4)

// 순수 함수(자신의 매개변수나 내부 변수(또는 상수)만 사용하는 함수)
function minus1(x,y) {
    const a = 100
    return (x-y)*a;
}
minus1(5,3)

const b = 100
function minus2(x,y) {
    return (x-y)*b;
}
minus2(5,3)

// 고차 함수
const func = () => {
    return () => {
        console.log("abc")
    }
}

const innerFunc = func()

innerFunc()

const func2 = (msg) => {
    return () => {
        console.log(msg)
    }
}

const innerFunc2 = func2("아아")

innerFunc2()

// 객체 리터럴(json)
const human = {
    name: 'kjs',
    year: 2000,
    gender: 'M',
}

// 접근방법
human['name']
human

const jskim = {
    name : {
        first: 'js',
        last: 'k',
    },
    gender: 'M'
}

// 객체의 참조와 복사
const arr = [{j:"k"},{l:"m"}]
const ref = arr; // 참조

const arr1 = [...arr] // 복사
arr === arr1 // false

const deep = JSON.parse(JSON.stringify(arr))

arr[0] === deep[0]

// 구조 분해 할당
const obj = {a:1, b:2}
// const a = obj.a;
// const b = obj.b;
const {a,b} = obj // 위의 코드와 같은 코드이다

const array=[1,2,3]
const [one, two, three] = array
// const one = array[0]
// const two = array[1]
// const three = array[2]와 같은 기능을 해준다

const arr3 = [1,2,3,4]
arr3.forEach((n,i) => { // n: 배열의 값, i: 배열의 인덱스
    console.log(n,i)
})

const numbers = []

for(let n=1; n<=5; n+=1) {
    numbers.push(n)
}
numbers

// map을 사용해서 배열 만들기
const numbers2 = Array(5).fill(5).map((v,i) => i+1) // map 새로 만들어서 반환(return)

const newArr = numbers.map((v,i) => {return v*2})
newArr // 2,4,6,8,10

//find
numbers.find((v,i) => {
    return v > 1 // 1보다 큰 v값을 바로 리턴 (순차적으로 조건이 맞을 경우 바로 리턴, 반복하지않음)
})

const nested = [{age:19}, {age:20}, {age:40}]
nested.includes({age:20}) //false 찾았는데 false?
// ({} === {}) false

nested.find((v) => v.age === 20);

numbers.findIndex((v,i) => {
    return v>1
})

numbers.filter((v) => v%2==0)
nested.filter((v) => v.age < 30)

// 배열의 정렬 sort
numbers.sort((a,b)=> a-b) // 오름차순 a to b
numbers.sort((a,b)=> b-a) // 내림차순 b to a

numbers.reduce((a,c) => {
    return a+c; // a: 0 초기값 + 1,2,3,4,5 더하기 (순차적으로 0+1 -> 1+2 -> 3+3 -> 6+4 -> 10+5 : 15)
}, 0) // 0: a라는 변수의 초깃값, 0으로 시작

numbers.every((v) => v !== null) // 값을 하나씩 빼와서 null인지 비교 -> true
numbers = [1,2,3,4,null]
numbers.some((v) => v === null) // 끝에 null이 하나만 있어도 true로 반환