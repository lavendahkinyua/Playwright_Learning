type testresults ={
    id: number;
    message: string;
    passed: boolean;
}

//Refactoring type testresults to interface testresults
interface testResults{
    id: number;
    message: string;
    passed: boolean;
}
function displayresults <T>(results: T): void{
    console.log(results);
}
const result1: testresults = {
    id: 1,
    message: "Test passed",
    passed: true,
}
displayresults(result1);
const result2: testResults = {
    id:2,
    message: "Test failed",
    passed: false,
}
displayresults(result2);
