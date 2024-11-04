let current_form_page = 1;
const prev = $("#prev");
const next = $("#next");

function hide() {
    for (let i = 0; i < 5; i++) {
        if (current_form_page != 5) {
            if (i != current_form_page) {
                $("div:nth-child(" + i + ")").hide();
            } else {
                $("div:nth-child(" + i + ")").show();
            }
        } 
        
        else {
            console.log("showing" + i)
            $("div:nth-child(" + i + ")").show();
        }
    }

    prev.show();
    next.show();
    
    if (current_form_page == 1) {
        prev.hide();
    }

    if (current_form_page == 5) {
        next.hide();
    }
}
hide();

function validator() {
    var regex;
    
    if (current_form_page == 1) {
        let number_box = $("#numberInput");
        regex = /^\d+$/g;

        if (number_box.val().match(regex) == null) {
            number_box.removeClass("valid");
            number_box.addClass("invalid");
            return false;
        } else {
            number_box.removeClass("invalid");
            number_box.addClass("valid");
            return true;
        }
    }
    
    if (current_form_page == 2) {
        let letter_box = $("#letterInput");
        regex = /^[A-Za-z]+$/g;

        if (letter_box.val().match(regex) == null) {
            letter_box.removeClass("valid");
            letter_box.addClass('invalid');
            return false;
        } else {
            letter_box.removeClass("invalid");
            letter_box.addClass("valid");
            return true;
        }
    }

    if (current_form_page == 3) {
        let special_box = $("#specCharInput");
        regex = /^[!@#$%^&*~()_+\-=\[\]{};':"\\|,.<>\/?]*$/g;

        if (special_box.val().match(regex) == null) {
            special_box.removeClass("valid");
            special_box.addClass("invalid");
            return false;
        } else {
            special_box.removeClass("invalid");
            special_box.addClass("valid");
            return true;
        }
    }

    if (current_form_page == 4) {
        let combo_box = $("numAndSpecCharInput");
        regex  = /^\d+$/g;

        if (combo_box.val().match(regex) == null) {
            combo_box.removeClass("valid");
            combo_box.addClass('invalid');
            return false;
        } else {
            combo_box.removeClass("invalid");
            combo_box.addClass('valid');
            return true;
        }
    }
}

next.on('click', function() {
    if (validator()) {
        current_form_page += 1;
        hide()
    }
})
prev.on('click', function() {
        current_form_page -= 1;
        hide()
})