function breakingRecords(scores: number[]): number[] {
    let high = scores[0], low = scores[0];
    let highcount = 0, lowcount = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > high) {
            high = scores[i];
            highcount++;
        }
        if (scores[i] < low) {
            low = scores[i];
            lowcount++;
        }
    }
    return [highcount, lowcount]
}

export default breakingRecords;