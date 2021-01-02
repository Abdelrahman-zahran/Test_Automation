import {ClientFunction} from 'testcafe';
import LoginPage from '../Pages/LoginPage';

const URL = 'http://40.65.99.236:49004/web/login';
const getURL = ClientFunction(() => window.location.href);

fixture("Login").page(URL);

const dataSet = require('../tests/Data/data.json');
       dataSet.forEach(data => {

       test('logintest', async t => {
        await t.setTestSpeed(1)
        await t.click(LoginPage.DataBaseName)
        await t.maximizeWindow()
        await t.typeText(LoginPage.UserNametxt,data.username)
        await t.typeText(LoginPage.Passwordtxt,data.password)
        await t.click(LoginPage.Submitbtn)
        await t.expect(LoginPage.ModuleName.innerText).contains('أنظمة')


    })});