import * as Request from 'request'

export class serviceApi {
    getUserInfo(userName: string) {
        Request.get(
            'https://geekhub-frontend-js-9.herokuapp.com/api/projects/'
            + userName, 
            (title: string) => {
                console.log(title);
            }
        )
    }
}