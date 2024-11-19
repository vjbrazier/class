function check_meal(current_ingredients) {

    if ($("#allergens").val() == '') {
        bad_ingredients = $("#dislikes").val();
    } else if ($("#dislikes").val() == '') {
        bad_ingredients = $("#allergens").val();
    } else {
        allergic_ingredients = $("#allergens").val() + ",";
        disliked_ingredients = $("#dislikes").val();
    }

    bad_ingredients = bad_ingredients.split(',');

    for (let i = 0; i < current_ingredients.length; i++) {
        current_ingredients[i] = current_ingredients[i].toLowerCase();
        current_ingredients[i] = current_ingredients[i].trim();
    }

    for (let i = 0; i < bad_ingredients.length; i++) {
        bad_ingredients[i] = bad_ingredients[i].toLowerCase();
        bad_ingredients[i] = bad_ingredients[i].trim();
    }

    for (let i = 0; i < bad_ingredients.length; i++) {

        for (let j = 0; j < current_ingredients.length; j++) {

            if (current_ingredients[j].includes(bad_ingredients[i])) {
                console.log(current_ingredients);
                console.log(bad_ingredients[i]);
                console.log("Generating a new meal...");
                get_a_meal();
            }

        }

    }

    console.log("Your meal is good!");
}

function get_a_meal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((data) => {
            //console.log(data);
            return data.json();
        })
        .then((res) => {
            res = res['meals'][0];
            //console.log(res);

            $(".ingredient").remove();

            let current_ingredients = [];

            meal_name = res['strMeal'];
            $("#meal-name").text(meal_name);

            meal_img = res['strMealThumb'];
            $("#meal-image").attr('src', meal_img);

            instructions = res['strInstructions'];
            instructions = instructions.replaceAll('\r\n', '\r\n\r\n');
            $("#meal-instructions").text(instructions);


            for (let i = 1; i < 21; i++) {
                if ((res['strIngredient' + i] != '') && (res['strIngredient' + i] != null) && (res['strIngredient' + i] != i)) {
                    var row = $('<tr class="ingredient">');
                    var ingredient = $("<td>");
                    var measurement = $("<td>");

                    current_ingredients.push(res['strIngredient' + i]);

                    ingredient.text(res['strIngredient' + i]);

                    if ((res['strMeasure' + i] != null) && (res['strMeasure' + i] != '') && (res['strMeasure' + i] != ' ')) {
                        measurement.text(res['strMeasure' + i]);
                    } else {
                        measurement.text("N/A")
                    }

                    row.append(ingredient, measurement);
                    $("tbody").append(row);
                }
            }

            if (($("#allergens").val() == "") && ($("#dislikes").val() == "")) {
                console.log("Your meal is good!");
            } else {
                check_meal(current_ingredients);
            }
        })


}

$('#generate-meal').on('click', () => {
    $("#meal-chosen").addClass('visible');

    get_a_meal();
})

