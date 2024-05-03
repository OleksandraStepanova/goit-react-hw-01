import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend }) {
    const containerClass = clsx(
        css.stats,
        friend.isOnline === true ? css.online:css.offline
    );

    return (
        <div className={css.container}>
            <img className={css.avatar} src={friend.avatar} alt="Avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
            <p className={containerClass}>{friend.isOnline==="true"?"Online":"Offline"}</p>
        </div>
    );
}