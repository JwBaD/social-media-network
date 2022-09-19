import dialogsModuleCss from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const dialogs = dialogsModuleCss.dialogs;
const dialogsItems = dialogsModuleCss.dialogsItems;
const dialog = dialogsModuleCss.dialog;
const active = dialogsModuleCss.active;
const messages = dialogsModuleCss.messages;
const message = dialogsModuleCss.message;


const Dialogs = (props) => {
    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                <div>
                    <NavLink to='/dialogs/1' className={dialog}>UserName1</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/2' className={dialog + ' ' + active}>UserName2</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/3' className={dialog}>UserName3</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/4' className={dialog}>UserName4</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/5' className={dialog}>UserName5</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/6' className={dialog}>UserName6</NavLink>
                </div>
            </div>
            <div className={messages}>
                <div className={message}>Are you good?</div>
                <div className={message}>How are you, bro?</div>
                <div className={message}>Hi. Its me!</div>
            </div>
        </div>
    );
};

export default Dialogs;