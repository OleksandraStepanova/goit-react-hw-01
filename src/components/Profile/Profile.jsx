import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
    return (<div className={css.profile}>
        <div className={css.wrapper}>
            <img className={css.avatar}
                src={image}
                alt="User avatar"
            />
            <p className={css.name}>{name}</p>
            <p className={css.text}>@{tag}</p>
            <p className={css.text}>{location}</p>
        </div>

        <ul className={css.list}>
            <li className={css.item}>
                <span className={css.stats}>Followers</span>
                <span className={css.value}>{stats.followers}</span>
            </li>
            <li className={css.item}>
                <span className={css.stats}>Viwes</span>
                <span className={css.value}>{stats.views}</span>
            </li>
            <li className={css.item}>
                <span className={css.stats}>Likes</span>
                <span className={css.value}>{stats.likes}</span>
            </li>
        </ul>
    </div>

    );
}