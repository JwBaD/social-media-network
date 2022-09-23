import dialogsModuleCss from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} className={dialogsModuleCss.dialog + ' ' + dialogsModuleCss.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={dialogsModuleCss.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={dialogsModuleCss.dialogs}>
            <div className={dialogsModuleCss.dialogsItems}>
                <DialogItem id='1' name='UserName1' />
                <DialogItem id='2' name='UserName2' />
                <DialogItem id='3' name='UserName3' />
                <DialogItem id='4' name='UserName4' />
                <DialogItem id='5' name='UserName5' />
                <DialogItem id='6' name='UserName6' />
            </div>
            <div className={dialogsModuleCss.messages}>
                <Message message='Are you good?' />
                <Message message='How are you, bro?' />
                <Message message='Hi. Its me!' />
            </div>
        </div>
    );
};

export default Dialogs;