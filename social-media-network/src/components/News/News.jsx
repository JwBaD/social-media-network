import newsModuleCss from './News.module.css'

const content = newsModuleCss.content;

const News = (props) => {
    return (
        <div className={content}>
            News
        </div>
    );
};

export default News;