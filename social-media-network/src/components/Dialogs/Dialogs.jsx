import dialogsModuleCss from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={dialogsModuleCss.dialogs}>
            <div className={dialogsModuleCss.dialogsItems}>
                <div className={dialogsModuleCss.dialog}>Some UserName1</div>
                <div className={dialogsModuleCss.dialog + ' ' + dialogsModuleCss.active}>Some UserName2</div>
                <div className={dialogsModuleCss.dialog}>Some UserName3</div>
                <div className={dialogsModuleCss.dialog}>Some UserName4</div>
                <div className={dialogsModuleCss.dialog}>Some UserName5</div>
                <div className={dialogsModuleCss.dialog}>Some UserName6</div>
            </div>
            <div className={dialogsModuleCss.messages}>
                <div className={dialogsModuleCss.message}>Are you good?</div>
                <div className={dialogsModuleCss.message}>How are you, bro?</div>
                <div className={dialogsModuleCss.message}>Hi. Its me!</div>
            </div>
        </div>
    );
};

export default Dialogs;