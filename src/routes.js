//基本布局页面
import Basiclayout from './layout/index';
//主页面
import Main from './component/main/index';
//文章详情页面
import ArticleType from './component/articleType/index';
//帖子页面
import TieziList from './component/tieZiInfo/index'
//登录页面
// import Login from './component/login/index';


var Routes = [ 
        {   
            path: '/',
            component: Basiclayout,
            children: [
                {
                    path: '/',
                    exact: true,
                    component: Main
                },
                {
                    path: '/main',
                    exact: true,
                    component: Main
                },
                {
                    path: '/articleType/:type',
                    exact: true,
                    component: ArticleType
                },
                {
                    path: '/tieziList',
                    exact: true,
                    component: TieziList
                },
                // {
                //     path: '/login',
                //     exact: true,
                //     component: Login
                // }
            ]
         },
        
]

export default Routes