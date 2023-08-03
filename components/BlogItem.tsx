import React, {useState} from 'react';
import {BlogContent, BlogItemBottom, BlogItemMore, BlogTitle, BlogUserWrap, BlogViews} from "@src/blog/style";
import Image from "next/image";
import myImg from "@assets/images/myImg.jpeg";
import Link from "next/link";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {RemoveRedEye, Textsms} from "@mui/icons-material";
import {IBlog} from "../types";
import {
    BlogItemBox,
} from '@src/blog/style';
import Tooltip from "@components/Tooltip";

const BlogItem = ({id, boardTitle, contents, user, menu}: IBlog) => {
    const [openTooltip, setOpenTooltip] = useState(false);
    const onClickMoreBtn = () => {
        setOpenTooltip(!openTooltip)
    }

    return (
        <BlogItemBox>
            <BlogUserWrap>
                <Image
                    src={myImg}
                    alt="user profile image"
                    width={30}
                    height={30}
                    priority={false}
                />
                <span>{user.userName}</span>
            </BlogUserWrap>
            <Link href={`/blog/${menu}/${id}`}>
                <BlogTitle>{boardTitle}</BlogTitle>
                <BlogContent>{contents}</BlogContent>
            </Link>
            <BlogItemBottom>
                <BlogItemMore>
                    <Tooltip>
                    <button onClick={onClickMoreBtn}><MoreHorizIcon/></button>
                    </Tooltip>
                </BlogItemMore>
                <BlogViews>
                    <span><Textsms/> 252</span>
                    <span><RemoveRedEye/> 22</span>
                </BlogViews>
            </BlogItemBottom>

        </BlogItemBox>
    );
};

export default BlogItem;