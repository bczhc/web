import {createI18n} from "vue-i18n";

let messages = {
    en: {
        app_label: 'My Diary',
        invalid_session_message: 'Invalid session',
        signin_title: 'Sign in',
        signin_btn: 'Sign in',
        signup_title: 'Sign up',
        signup_btn: 'Sign up',
        username_placeholder: 'Username',
        password_placeholder: 'Password',
        email_placeholder: 'Email',
        confirm_password_placeholder: 'Confirm password',
        signup_page_signin_btn_message1: 'Already have an account? ',
        signup_page_signin_btn_message2: '.',
        authentication_failed_msg: 'Your username or password is wrong',
        redirecting_to_signin_page_msg: 'Returning to the signup page...',
        welcome_user_msg: 'Hello, {0}',
        redirecting_to_home_page_msg: 'Redirecting to the home page...',
        user_profile_title: 'User Profile',
    },
    zh: {
        app_label: '我的日记',
        invalid_session_message: '无效会话',
        signin_title: '登录',
        signin_btn: '登录',
        signup_title: '注册',
        signup_btn: '注册',
        username_placeholder: '用户名',
        password_placeholder: '密码',
        email_placeholder: '邮箱',
        reenter_password_placeholder: '重复密码',
        signup_page_signin_btn_message1: '已有账号？',
        signup_page_signin_btn_message2: '。',
        authentication_failed_msg: '账号或密码错误',
        redirecting_to_signin_page_msg: '正在返回登录页面……',
        welcome_user_msg: '你好，{0}',
        redirecting_to_home_page_msg: '正在前往主页……',
        user_profile_title: '用户资料',
    }
};

export let i18n = createI18n({
    locale: 'en',
    legacy: false,
    fallbackLocale: 'en',
    messages,
});
