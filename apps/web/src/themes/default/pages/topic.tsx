import type { NextPage } from 'next'
import { ArticleList } from '../components/article-list'

interface Props {
  articleList: Pagination<Article>
}

export const TopicPage: NextPage<Props> = ({ articleList }) =>
  articleList && <ArticleList articles={articleList.results} />
