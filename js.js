class MathOperations {
   
    static PI = 3.14159;
  
  
    static square(number) {
      return number * number;
    }
  }
  
  console.log(MathOperations.PI); 14159
  
  const result = MathOperations.square(4);
  console.log(result); 



class DescriptiveStatistics {
  static calculateMean(data) {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  }

  static calculateMedian(data) {
    const sortedData = data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }

  
  static calculateMode(data) {
    const countMap = new Map();
    let maxCount = 0;
    let mode = [];

    data.forEach((value) => {
      const count = (countMap.get(value) || 0) + 1;
      countMap.set(value, count);

      if (count > maxCount) {
        maxCount = count;
        mode = [value];
      } else if (count === maxCount) {
        mode.push(value);
      }
    });

    return mode;
  }

  // Measure of Dispersion - Range
  static calculateRange(data) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    return max - min;
  }

  // Measure of Dispersion - Variance
  static calculateVariance(data) {
    const mean = this.calculateMean(data);
    const squaredDifferences = data.map((value) => Math.pow(value - mean, 2));
    const sumSquaredDiff = squaredDifferences.reduce((acc, val) => acc + val, 0);
    return sumSquaredDiff / data.length;
  }

  // Measure of Dispersion - Standard Deviation
  static calculateStandardDeviation(data) {
    const variance = this.calculateVariance(data);
    return Math.sqrt(variance);
  }

  // Measure of Dispersion - Interquartile Range (IQR)
  static calculateIQR(data) {
    const sortedData = data.slice().sort((a, b) => a - b);
    const lowerQuartile = this.calculateMedian(sortedData.slice(0, Math.floor(sortedData.length / 2)));
    const upperQuartile = this.calculateMedian(sortedData.slice(-Math.floor(sortedData.length / 2)));
    return upperQuartile - lowerQuartile;
  }
}

// usage
const dataSet = [4, 8, 6, 2, 10, 8, 5, 3, 7, 9];
console.log("Mean:", DescriptiveStatistics.calculateMean(dataSet));
console.log("Median:", DescriptiveStatistics.calculateMedian(dataSet));
console.log("Mode:", DescriptiveStatistics.calculateMode(dataSet));
console.log("Range:", DescriptiveStatistics.calculateRange(dataSet));
console.log("Variance:", DescriptiveStatistics.calculateVariance(dataSet));
console.log("Standard Deviation:", DescriptiveStatistics.calculateStandardDeviation(dataSet));
console.log("Interquartile Range (IQR):"), DescriptiveStatistics.calculateIQR(dataSet);