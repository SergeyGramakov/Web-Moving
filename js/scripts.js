// плавный переход
const fadeIn = (element, timeout, display) => {
    element.style.opacity = 0;
    element.style.display = display || 'block';
    element.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        element.style.opacity = 1;
    }, 10);
};

const page1 = document.getElementById('step-1');
const page2 = document.getElementById('step-2');
const page3 = document.getElementById('step-3');

const radio = document.getElementsByName('messenger');
const btnNext = document.querySelectorAll('.btn-next');

const name = document.getElementById('name');
const phone = document.getElementById('phone');

btnNext.forEach((btn) => {
    btn.onclick = () => {
        if (!page1.hidden) {
            page1.hidden = true;
            page2.hidden = false;
            fadeIn(page2, 1000);
        } else if (!page2.hidden && name.value.length > 5 && phone.value.length > 0) {
            radio.forEach((element) => {
                if (element.checked) {
                    page2.hidden = true;
                    page3.hidden = false;
                    fadeIn(page3, 1000);
                }
            })
        }
    }
});


// маска-телефон
$(document).ready(function () {
    $.mask.definitions["9"] = false;
    $.mask.definitions["5"] = "[0-9]";
    $("input[type=tel]")
        .mask("8(955) 555-5555")
        .on("click", function () {
            $(this).trigger("focus");
        });

    $('.messenger__label').on('click', function () {
        if ($(this).hasClass('checked')) return true
        else {
            $('.messenger__label').removeClass('checked');
            $(this).addClass('checked');
        }
    });
});