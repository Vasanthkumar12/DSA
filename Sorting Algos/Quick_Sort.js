function partition(arr, start, end, pivot) {
    let i = start
    let j = start

    while(i<=end) {
        if(arr[i] <= pivot) {
            let tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
            j++
        }
        i++
    }
    return j - 1
}

function quickSort(arr, start, end) {
    if(start > end) {
        return
    }

    let pivot = arr[end]

    let pivotIdx = partition(arr, start, end, pivot)

    quickSort(arr, start, pivotIdx-1)
    quickSort(arr, pivotIdx + 1, end)
    return arr
}


let arr = [3, 16, -1, 8, 9, -2, "str"]
let sortedArr = quickSort(arr, 0, arr.length-1)
console.log(sortedArr)