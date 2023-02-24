const topKFrequentTwo = (nums: number[], k: number): number[] => {
    const counter: { [key: string]: number } = {};

    nums.forEach((num) => {
        counter[num] = (counter[num] || 0) + 1;
    });

    return (
        Object.entries(counter)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((num) => Number(num[0]))
    );
}

export default topKFrequentTwo