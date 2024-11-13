function get_a_meal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((data) => {
        console.log(data);
        return data.json();
    })
    .then((res) => {
        res = res['meals'][0];
        console.log(res);

        meal_name = res['strMeal'];
        $("#meal-name").text(meal_name);

        meal_img = res['strMealThumb'];
        $("#meal-image").attr('src', meal_img);

        instructions = res['strInstructions'];
        instructions = instructions.replaceAll('\r\n', '\r\n\r\n');
        $("#meal-instructions").text(instructions);

        $("#ingredients-measurements").empty();

        for (let i = 0; i < 20; i++) {
            if (res['strIngredient' + 1] != '') {
                var row = $("#")
            }
        }
    })

    
}

$('#generate-meal').on('click', () => {
    $("#meal-chosen").addClass('visible');

    get_a_meal();
})

