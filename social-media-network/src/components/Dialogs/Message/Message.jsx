import dialogsModuleCss from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={dialogsModuleCss.message}>
            {props.message}
        </div>
    );
}

export default Message;