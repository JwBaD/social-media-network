import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id} className={s.dialog + ' ' + s.active}>{props.name}</NavLink>
        </div>
    );
}


export default DialogItem;