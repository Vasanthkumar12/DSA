// Divides the array into 2 parts: 1) Sorted Array(initial nothing) 2) Un Sorted Array(initial whole array from 0 to n-1)
// find the minimum element and add it to the Sorted Array

function selectionSort(arr) {
    let n = arr.length
    for(let i=0; i<n; i++) {
        let min = i
        for(let j=i+1; j<n; j++) {
            if(arr[j] < arr[min]) {
                min = j
            }
        }

        if(min != i) {
            let tmp = arr[i]
            arr[i] = arr[min]
            arr[min] = tmp
        }
    }
    console.log(arr)
}

let arr = [8, 4, 3, 9, 12, 87, 1]
selectionSort(arr)