// 视频列表
const videoList = [
    {
        id:'101',
        pid:'1',
        imageUrl:'/imgs/index/mask_img21.png',
        title:'国防部举行盛大招待会 热烈庆祝建军95周年 习近平出席'
    },
    {
        id:'102',
        pid:'1',
        imageUrl:'/imgs/index/mask_img22.png',
        title:'一场跨越95年的时空接力 寻找“打响第一枪”的先辈们'
    },
    {
        id:'103',
        pid:'1',
        imageUrl:'/imgs/index/mask_img23.png',
        title:'我军卫生列车首次实现跨境投送'
    },
    {
        id:'104',
        pid:'1',
        imageUrl:'/imgs/index/mask_img24.png',
        title:'第77集团军某旅组织实弹射击训练'
    },
    {
        id:'105',
        pid:'1',
        imageUrl:'/imgs/index/mask_img25.png',
        title:'东部战区陆军某旅组织两栖装甲分队开展海上编波训练'
    },
    {
        id:'106',
        pid:'1',
        imageUrl:'/imgs/index/mask_img26.png',
        title:'海军大连舰艇学院毕业学员开展海上实战化训练'
    },
    {
        id:'107',
        pid:'1',
        imageUrl:'/imgs/index/mask_img27.png',
        title:'南部战区空军航空兵某旅组织多课目跨昼夜飞行训练'
    },
    {
        id:'108',
        pid:'1',
        imageUrl:'/imgs/index/mask_img28.png',
        title:'空军空降兵某旅组织官兵开展战伤救护演练'
    },
    {
        id:'109',
        pid:'1',
        imageUrl:'/imgs/index/mask_img29.png',
        title:'首批歼-10飞行学员结业奔赴作战部队'
    },
    {
        id:'110',
        pid:'1',
        imageUrl:'/imgs/index/mask_img30.png',
        title:'我军构建院校部队合力育人新格局 高中级指挥员执教军校成常态'
    },
    {
        id:'111',
        pid:'1',
        imageUrl:'/imgs/index/mask_img31.png',
        title:'问天实验舱技术亮点解读：中国空间站再添“新房”'
    },
    {
        id:'112',
        pid:'2',
        imageUrl:'/imgs/index/mask_img32.png',
        title:'画面超燃！“高清”大图带你走进喷火兵训练日常！'
    },

]

// 获取视频分类
export const getVisualClassification = ()=>{
    return [
        {
            id: '1',
            title: '国防影视'
          },
          {
            id: '2',
            title: '教育视频'
          },
          {
            id: '3',
            title: '装备普及'
          },
          {
            id: '4',
            title: '装备解说'
          },
          {
            id: '5',
            title: '宣传海报'
          },
          {
            id: '6',
            title: '国防阅读'
          },
          {
            id: '7',
            title: '教育直播'
          },
          {
            id: '8',
            title: '动画短片'
          },
          {
            id: '9',
            title: '法规文献'
          }
    ]
}
// 获取某类视频列表
export const getVideoListById = config =>{
    console.log('confing....',config)
    let arr = config.url.split('/')
    let id = String(arr[arr.length - 1])
    return videoList.filter(item => item.pid === id)
}