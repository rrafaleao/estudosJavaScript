let arr = [82, 76, 6, 52, 45, 38, 24, 14, 54, 85, 143, 98, 65, 512, 96, 12, 4, 79];

function bubbleSort(){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i + 1]){
            let v1 = arr[i]
            let v2 = arr[i+1]
            arr[i] = v2
            arr[i + 1] = v1
        }
    }
}

for (let j = 0; j < arr.length; j++) {
    bubbleSort()
}

console.log(typeof(arr))
