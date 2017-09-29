export const appConfig = {
    apiUrl: 'http://192.168.1.13/Cube.POS.Api/sessions/',
    // baseUrl: 'http://192.168.0.105/Cube.POS.Api/',
    // baseUrl: 'http://192.168.0.105/Cube.POS.Api/',
    baseUrl: 'http://192.168.1.13/CubeApiTest/',
    MaxClientSearchSize: 50,
};


export enum SystemPages {
    Home = <any>'Home',
    Login = <any>'login',
    SalesRetail = <any>'SalesRetail',
}


export enum CubeServerApi {
    Login = <any>'login/GetUserInfo',
    Logout = <any>'login/Logout',
    GetAllItems = <any>'items/getAll',
    GetItemsByCateg = <any>'items/GetItemsByCateg',
    GetItemsByFillter = <any>'items/GetItemsByFillter',
    GetAllCategs = <any>'categs/getAll',
    GetAllTaxes = <any>'SystemVars/GetAllTaxes',
    UserActions = <any>'SystemVars/GetUserActionsList',
};



export enum SystemMessages {
    NotEmplmentd = <any>'this function is not emplmentd yet',
};


