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
        user_profile_username: 'Username',
        user_profile_name: 'Name',
        user_profile_email: 'Email',
        user_profile_signup_time: 'Signup Time',
        user_profile_gender: 'Gender',
        user_profile_modify_btn: 'Modify',
        gender_label_male: 'Male',
        gender_label_female: 'Female',
        gender_label_unknown: 'Secret',
        gender_label_other: '{0}',
        loading_label: 'Loading...',
        user_profile_unset: 'Unset',
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
        user_profile_username: '用户名',
        user_profile_name: '姓名',
        user_profile_email: '电子邮箱',
        user_profile_signup_time: '注册时间',
        user_profile_gender: '性别',
        user_profile_modify_btn: '修改',
        gender_label_male: '男',
        gender_label_female: '女',
        gender_label_unknown: '保密',
        gender_label_other: '{0}',
        loading_label: '加载中……',
        user_profile_unset: '未设置',
    }
};

export let i18n = createI18n({
    locale: 'en',
    legacy: false,
    fallbackLocale: 'en',
    messages,
});
