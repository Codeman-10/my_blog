import React from 'react'
import './Blog.css'
import SearchIcon from '@material-ui/icons/Search';
import Thumbnail from './Thumbnail';
import { blogData, noofBlog } from '../blogSlice';
import { useSelector } from 'react-redux';
function Blog() {

    const feedData = useSelector(blogData);
    console.log(feedData)
    return (
        <div className="blog_container">
            <div className="blog_search">
                <form>

                    <SearchIcon className="Search_icon" />
                    <input type="text" placeholder="enter Blog name please" />
                </form>
            </div>
            <div className="blog_feed">
                {feedData.map(value =>
                (
                    <Thumbnail key={value.id} head={value.head} body={value.body} />
                )
                )}
            </div>
        </div>
    )
}

export default Blog
