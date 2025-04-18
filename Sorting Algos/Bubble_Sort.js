// Comparing adjacent elements then swaping them if they are in wrong order.
// Best case => array is sorted O(n)
// Worst case => array is Descending order O(n^2)

function bubbleSort(arr) {
    let n = arr.length-1, c = 0

    for(let i=0; i<n; i++) {
        let flag = 0                     
        for(let j=0; j<n-1-i; j++) {
            console.log(i, j)
            if(arr[j] > arr[j+1]) {
                flag = 1
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
        if(flag == 0) {
            break
        }
    }
    console.log(arr)
}

let arr = [5, 10, 18, 17, 25]
bubbleSort(arr)