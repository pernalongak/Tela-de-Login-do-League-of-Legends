const inputs = document.querySelectorAll('input');
const button = document.querySelector('.login__button');
const invalido = document.querySelector('.h2');
const login_facebook = document.querySelector('.facebook')
const login_google = document.querySelector('.google')
const login_apple = document.querySelector('.apple')

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
    invalido.classList.remove('invalido');
}

const handleFocusOut = ({ target }) => {

    if (target.value === '') {
         const span = target.previousElementSibling;
    span.classList.remove('span-active');
    invalido.classList.remove('invalido');
    }
}

const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {

        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
}
}

const comofazer = () => {
    const [username, password] = inputs;

    if (username.value === "ezequiel" && password.value === "ezequiel") {
        window.location.href = "https://www.leagueoflegends.com/pt-br/"
    } else {
        invalido.classList.add('invalido')
        inputs.forEach(input => input.value = '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));
inputs.forEach((input) => input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        comofazer(e)
    }
}))
button.addEventListener('keydown', comofazer)
button.addEventListener('click', comofazer)
login_facebook.addEventListener('click', (e) => {
    window.location.href = "https://www.facebook.com/login.php?skip_api_login=1&api_key=344190606773871&kid_directed_site=0&app_id=344190606773871&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv13.0%2Fdialog%2Foauth%3Fclient_id%3D344190606773871%26redirect_uri%3Dhttps%253A%252F%252Fauthenticate.riotgames.com%252Fredirects%252Ffacebook%26state%3D283cf2f761cc3b983b05534f43c23c1fd4946584c32e119e2a2063fb7e89%26scope%3Demail%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Ddf3456bb-3f1c-41dc-92a3-09ec97957287%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fauthenticate.riotgames.com%2Fredirects%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D283cf2f761cc3b983b05534f43c23c1fd4946584c32e119e2a2063fb7e89%23_%3D_&display=page&locale=pt_BR&pl_dbl=0"
})
login_google.addEventListener('click', (e) => {
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=online&scope=openid%20profile%20email&state=3b3369047ae4ff0b25b19a2af58739123b6b3ee51855671592c95d2aafb8&prompt=select_account&response_type=code&client_id=187685766663-ct6bdnthcq6jlllecpg1guhthoc7i8vv.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fauthenticate.riotgames.com%2Fredirects%2Fgoogle&flowName=GeneralOAuthFlow"
})
login_apple.addEventListener('click', (e) => {
    window.location.href = "https://appleid.apple.com/auth/authorize?response_type=code%20id_token&response_mode=form_post&client_id=com.riotgames.authenticator.prod.client&redirect_uri=https%3A%2F%2Fauthenticate.riotgames.com%2Fredirects%2Fapple&scope=name%20email&nonce=2fc309b1e9ea9113c4af44bff9b6c6e2279d5dd976668e7621a2269996ce&state=887045d9623535bfbc9cb2be23b353643b6386af2b9585b9775a3058450f"
})