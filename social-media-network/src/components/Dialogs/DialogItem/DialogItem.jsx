import dialogsModuleCss from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} className={dialogsModuleCss.dialog + ' ' + dialogsModuleCss.active}>{props.name}</NavLink>
        </div>
    );
}


export default DialogItem;