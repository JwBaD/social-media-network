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

    const dialogsData = [
        {
            id: 1,
            name: 'UserName1'},
        {
            id: 2,
            name: 'UserName2'
        },
        {
            id: 3,
            name: 'UserName3'
        },
        {
            id: 4,
            name: 'UserName4'
        },
        {
            id: 5,
            name: 'UserName5'
        },
        {
            id: 6,
            name: 'UserName6'
        }
    ];

    const messagesData = [
        {
            id: 1,
            message: 'Are you good?'
        },
        {
            id: 2,
            message: 'How are you, bro?'
        },
        {
            id: 3,
            message: 'Hi. Its you?'
        },
        {
            id: 4,
            message: 'Hi. Its me!'
        },
        {
            id: 5,
            message: 'whats up?, bro?'
        },
        {
            id: 6,
            message: 'Im doing great!'
        },
    ];

    return (
        <div className={dialogsModuleCss.dialogs}>
            <div className={dialogsModuleCss.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name} />
            </div>
            <div className={dialogsModuleCss.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );
};

export default Dialogs;