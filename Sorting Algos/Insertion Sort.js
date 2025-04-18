// Divides the array into 2 parts: 1) Sorted Array(initial A[0]) 2) Unsorted Array(initial A[n-1])
// Take the elements one by one from the Unsorted array and place it in the Sorted array of correct position 
// Best Case - Array is sorted O(n)
// Worst case - O(n^2)

function insertionSort(arr) {
    let n = arr.length
    for(let j=1; j<n; j++) {
        let tmp = arr[j]
        let i = j-1
        while(i>=0 && arr[i] > tmp) {
            arr[i+1] = arr[i]
            i--
        }
        arr[i+1] = tmp
    }
    console.log(arr)
}

let arr = [4, 3, 7, 28, 1, 12]
insertionSort(arr)