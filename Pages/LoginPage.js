import {Selector, t} from 'testcafe';


class LoginPage{
    constructor(){
        this.DataBaseName = Selector('.list-group-item')
        this.UserNametxt = Selector('#login')
        this.Passwordtxt = Selector('#password')
        this.Submitbtn = Selector('button.btn.btn-primary')
        this.ModuleName = Selector('.oe_menu_text')
    }


}
export default new LoginPage();