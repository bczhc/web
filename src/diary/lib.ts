import * as $ from "jquery";

export async function fetchMe() {
    return new Promise<object>(x => {
        $.ajax({
            method: 'get',
            async: true,
            url: '/api/diary/me',
            success: data => {
                console.log(data);
                x(data);
            },
            error: e => {
                console.log(e);
            },
        })
    });
}
