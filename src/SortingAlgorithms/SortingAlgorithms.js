export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }

  export function getSelectionSortAnimations(array) {
      const animations = [];
      if (array.length <= 1) return array;
      selectionSortHelper(array, array.length - 1, animations);
      
  }

  // Attempted Selection sort. 
  function selectionSortHelper(mainArray, n, animations)
  {
      for (let i = 0; i < n - 1; i++)
      {
          let min_idx = i;
          for (let j = i+1; j < n; j++)
          {
              if(mainArray[j] < mainArray[min_idx])
              {
                  min_idx = j;
              }
          }
          swap(mainArray[min_idx], mainArray[i]);
      }
  }

  // Attempted swap.
  function swap(xp, yp)
  {
      let temp = xp;
      xp = yp;
      yp = temp; 
  }
  
  function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations)
   {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations)
   {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }