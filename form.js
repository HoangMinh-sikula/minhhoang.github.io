const authForm = document.getElementById('auth-form');
const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('error-message');
const emailForm = document.getElementById('email-form');
const personalInfor = document.getElementById('personal-info');
const inforEmailSpan = document.getElementById('info-email');
const helperText = document.querySelector('.helper-text'); 
authForm.addEventListener('submit',function(event){
    event.preventDefault();
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailInput.value === "" || !emailRegex.test(emailInput.value)) {
        // errorMessage.textContent = "Hãy nhập email cho đúng";
        helperText.classList.add("d-none");
        errorMessage.classList.remove("d-none");
    } else {
        errorMessage.textContent = "";
        personalInfor.classList.remove("d-none");
        emailForm.classList.add("d-none");
    }
});

const toggleBtns = document.querySelectorAll('.toggle-button');

toggleBtns.forEach(toggleBtn => {
    const content = toggleBtn.previousElementSibling;
    const btnText = toggleBtn.querySelector('span:last-child');
    const btnArrow = toggleBtn.querySelector('.arrow');
    const boxTitle = toggleBtn.parentElement.querySelector('.box-title');

    toggleBtn.addEventListener('click', function() {
        const isExpanded = content.classList.toggle('expanded');
        toggleBtn.classList.toggle('expanded');
        if (isExpanded) {
            btnText.textContent = 'VIEW LESS';
            if (boxTitle) {
                boxTitle.classList.add("mb-5");
            }
        } else {
            btnText.textContent = 'VIEW MORE';
            if (boxTitle) {
                boxTitle.classList.remove("mb-5");
            }
        }
    });
});