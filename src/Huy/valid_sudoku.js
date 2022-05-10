const validSudoku = (sodoku) => {
    //Check theo hàng ngang
    sodoku.forEach(sodoku_element => {
        var temp_array = [];
        sodoku_element.forEach(element => {
            if (element !== ".") {
                temp_array.push(element);
            }
        })

        for (let i = 0; i < temp_array.length; i++) {
            var temp_element = temp_array[i];

            for (let j = 0; j < temp_array.length; j++) {
                if (i !== j) {
                    if (temp_element === temp_array[j]) {
                        return false;
                    }
                }
            }
        }
    });

    //Check theo hàng dọc
    var temp_array = [];
    for (let i = 0; i < sodoku.length; i++) {
        for (let j = 0; j < sodoku.length; j++) {
            // if (sodoku[i][j] !== ".") {

            // }
            console.log(sodoku[i][j]);
        }
    }

    //Check theo bộ 3 nhóm
}


module.exports = {
    validSudoku
}