/************************************************ Linear Search *************************************************/
function indexOf(array,value) { //find the index
    for (let i = 0; i < array.length; i++){
        if(array[i] == value){
            return i 
        }
    }
    return -1
}
//looking through an array one by one until you find what you are looking for
//Time complexity is O(n)
/********************************************** Binary Search *************************************************/
function binarySearch(array, value, start, end){ //find the index
    var start = start === undefined ? 0 : start // if start is undefined define it at 0, otherwise it stakes the value provided to the fxn
    var end = end === undefined ? array.length : end // same logic for the end


    if(start > end){
        return -1
    }

    const index = Math.floor((start + end) / 2) //midpoint
    const item = array[index] //value at midpoint

    console.log(start,end)
    if(item == value){ //if item is the value you are looking for then you have found the index
        return index
    } else if (item < value){ //if item is less than the value you are looking for then search again but make the start your index number + 1, search left half
        return binarySearch(array, value, index + 1, end)
    } else if (item > value) { //otherwise make your end the index -1, search right half
        return binarySearch(array, value, start, index -1)
    }
}
//faster than linear search; only works on sorted arrays
/******************************************** Searching and Traversal in a tree ******************************************/
//Depth-first search (DFS) -- you start from a given node and traverse as fast as far as you can go down, until you cant and then you backtrack

class BinarySearchTree {
    constructor( key = null, value = null, parent = null){
        this.key = key
        this.value = value
        this.parent = parent
        this.left = null
        this.right = null
    }

    dfs(values = []){ //left branch is visited, then the node is handled and then the right node is visted
        if(this.left){
            values = this.left.dfs(values)
        }
        values.push(this.value)

        if(this.right) {
            values = this.right.dfs(values)
        }
        return values
    }
}


