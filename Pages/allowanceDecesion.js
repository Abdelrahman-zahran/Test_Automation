import {Selector, t} from 'testcafe';


class allowanceDecesion{
    constructor(){
        
        this.ModuleName = Selector('.oe_menu_text')
        this.PayrollModule = Selector('.itqheaderSubmenUL').child('li').child('a').withAttribute('href', '/web#menu_id=623&action=')
        this.AllowenceDecesionLink =Selector('.oe_secondSubMenuItqDiv').child('a').withAttribute('href','/web#menu_id=629&action=')
        this.GivenAllowenceDecesion = Selector('.oe_secondSubMenuItqDiv').child('ul').child('li').child('a').withAttribute('href','/web#menu_id=644&action=761')
        this.PageTitle = Selector('head').child('title').innerText
        this.Createbtn = Selector('.btn.btn-primary.btn-sm.o_list_button_add')
        
    

    }


}
export default new allowanceDecesion();