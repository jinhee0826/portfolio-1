import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    // 유저정보
    const [user, setUser] = useState({
        name: "딴땨다",
        profile : null, 
        likelist : [] 
    });
    // 상품정보
    const [productList, setProductList] = useState([
        {
            productId : 1,
            productName : "웨딩드레스1",
            productDetail : "비즈 장식을 더한 화사한 드레스",
            productPicture : ["dress1.jpg"],
            productPrice : "500,000,000원"
        },
        {
            productId : 2,
            productName : "웨딩드레스2",
            productDetail : "뒷모습에 초점을 맞춰서 행진할 때 이쁜 드레스",
            productPicture : ["dress2.jpg" ],
            productPrice : "250,000,000원"
        },
        {
            productId : 3,
            productName : "웨딩드레스3",
            productDetail : "심플하고 세련된 스타일의 드레스 ",
            productPicture : ["dress3.jpg" ],
            productPrice : "100,000,000원"
        },
        {
            productId : 4,
            productName : "웨딩드레스4",
            productDetail : "전문가가 섬세히 자수를 뜬 드레스 ",
            productPicture : ["dress4.jpg" ],
            productPrice : "330,000,000원"
        },
        {
            productId : 5,
            productName : "웨딩드레스5",
            productDetail : "자연스러움을 추구하고 깨끗한느낌의 드레스 ",
            productPicture : ["dress5.jpg" ],
            productPrice : "420,000,000원"
        },
    ])
    
    // 댓글정보
    const [allComments, setAllComments] = useState([
        {
            commentId : 1,
            productId : 1,
            name : "green",
            text : "직원이 친절해여~~"
        },
        {
            commentId : 2,
            productId : 1,
            name : "나미",
            text : "드레스 넘 이뻐여"
        },
        {
            commentId : 3,
            productId : 2,
            name : "겨울예신",
            text : "많이 다녔는데 여기가 젤 이쁜듯..ㅎ"
        }
        ,
        {
            commentId : 4,
            productId : 3,
            name : "T없이 맑은 E",
            text : "이 드레스가 여기서 젤 심플해서 별론 줄 알았는데 입으니까 생각보다 이뻐서 놀램"
        }
        ,
        {
            commentId : 5,
            productId : 4,
            name : "드레스조아",
            text : "어머어머 자수 진짜 존예임 안 입어 봄?"
        }
        ,
        {
            commentId : 6,
            productId : 5,
            name : "12월의신부",
            text : "생각보다 우아함"
        }
        ,
        {
            commentId : 7,
            productId : 5,
            name : "냐냔",
            text : "이거 찐임 굳굳 직원도 친절함 "
        },
        {
            commentId : 8,
            productId : 2,
            name : "1",
            text : "내 드레스는 너다"
        }
    ])

    const [commentCount, setCommentCount] = useState(3);

    const value = {
        state : {user, productList, allComments, commentCount},
        action : {setUser, setProductList, setAllComments, setCommentCount}
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};
const { Consumer : DataConsumer } = DataContext;

export  {DataProvider, DataConsumer};

export default DataContext;