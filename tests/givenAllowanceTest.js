import {ClientFunction} from 'testcafe';
import {Selector, t} from 'testcafe';
import LoginPage from '../Pages/LoginPage'
import allowanceDecesion from '../Pages/allowanceDecesion';
import { getDocumentTitle } from './utils';


const URL = 'http://40.65.99.236:49004/web#view_type=list&model=hr.employee';
const getURL = ClientFunction(() => window.location.href);
const getPageTitle = ClientFunction(() => document.title);


fixture("Home Page").page(URL);

const dataSet = require('./Data/data.json');
       dataSet.forEach(data => {

       test('HomePage', async t => {
        await t.setTestSpeed(1)
        await t.click(LoginPage.DataBaseName)
        await t.maximizeWindow()
        await t.typeText(LoginPage.UserNametxt,data.username)
        await t.typeText(LoginPage.Passwordtxt,data.password)
        await t.click(LoginPage.Submitbtn)
        await t.expect(LoginPage.ModuleName.innerText).contains('أنظمة')
        await t.click(allowanceDecesion.ModuleName)
        await t.click(allowanceDecesion.PayrollModule)
        await t.click(allowanceDecesion.AllowenceDecesionLink)
        await t.click(allowanceDecesion.GivenAllowenceDecesion)
        await t.click(allowanceDecesion.Createbtn)
        const link = await getURL()
        console.log(link)
        const title = await getPageTitle()
        console.log(title) 
        
       
       
        
        


    })});