import React from 'react';
import {Avatar} from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import s from './NavFriend.module.css'

const NavFriend = () => {
    return (
        <AvatarGroup max={4} className={s.grup}>
            <Avatar style={{height: '60px', width: '60px'}} alt="Remy Sharp"
                    src="https://mocah.org/uploads/posts/1143997-cat-animals-nature-grass-wildlife-whiskers-wild-cat-kitten-fauna-mammal-vertebrate-cat-like-mammal-small-to-medium-sized-cats-tabby-cat.jpg"/>
            <Avatar style={{height: '60px', width: '60px'}} alt="Travis Howard"
                    src="https://www.wallpaperflare.com/static/256/891/705/blue-british-shorthair-cat-animals-wallpaper.jpg"/>
            <Avatar style={{height: '60px', width: '60px'}} alt="Cindy Baker"
                    src="https://images4.alphacoders.com/206/20658.jpg"/>
            <Avatar style={{height: '60px', width: '60px'}} alt="Agnes Walker" src="/static/images/avatar/4.jpg"/>
            <Avatar style={{height: '60px', width: '60px'}} alt="Agnes Walker" src="/static/images/avatar/4.jpg"/>

        </AvatarGroup>
    );
};

export default NavFriend;
