function plusMinusTS(arr: number[]): void {
    let pos = 0;
    let zer = 0;
    let neg = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) { pos++ }
        else if (arr[i] < 0) { neg++ }
        else { zer++ };
    }

    console.log((pos / arr.length).toFixed(6));
    console.log((neg / arr.length).toFixed(6));
    console.log((zer / arr.length).toFixed(6));
}

