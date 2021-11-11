function SumMattrix(str) {
    const [firstArray, secondArray] = str.toString().split(":");
    console.log("1", firstArray);
    console.log("2", secondArray)
    const array1 = JSON.parse(firstArray);
    console.log("3-3", array1);
    console.log("4-4", firstArray)
    console.log("3", firstArray);
    console.log("4", secondArray)
    const array2 = JSON.parse(secondArray);
    console.log("5-6", array2);
    console.log("5-6", secondArray)
    console.log("5", firstArray);
    console.log("6", secondArray)
    //Напишите функцию, которая принимает две квадратные матрицы (N x N двумерных массивов)
    // и возвращает их сумму. Обе матрицы, передаваемые в функцию, будут иметь размер N x N (квадрат) и содержать только целые числа.
    //Возьмите каждую ячейку [n][m] из первой матрицы и добавьте ее с той же ячейкой [n][m] из второй матрицы. Это будет ячейка [n][m] матрицы решения.
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            array1[i][j] = array1[i][j] + array2[i][j]
        }
    }
    console.log("end1", array1);
    console.log("end2", array2)
    return array1;

}
result = SumMattrix("[[1]]:[[2]]")
console.log(result);