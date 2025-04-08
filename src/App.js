import "./App.css";
import styled from "styled-components";

function App() {
  const click = () => {
    console.log("click");
  };

  return (
    <>
    {/*<!-- Header -->*/}
    <header>
        <div className="header_container">
            <a className="logo" href="/">
              {/* <!-- everyuneez 학생복지스토어 -->*/}
            </a>
            <nav className="account account_notlogin">
                <a className="account_search" href="/search">
                검색
                </a>
                <a className="account_login" href="/login">
                로그인
                </a>
                <a className="account_mypage" href="/마이페이지">
                마이페이지
                </a>
                <a className="account_cart" href="/장바구니">
                장바구니
                </a>
            </nav>
        </div>
    </header>
    
       {/* Container */}
    <div className="nav_container">
        <div class="nav">
            {/* <!-- 왼쪽 --> */}
            <div className="nav_left">
                <div className="nav_leftbutton" data-url-path="digital">
                    디지털
                </div>
                <div className="nav_leftbutton" data-url-path="computer">
                    컴퓨터
                </div>
                <div className="nav_leftbutton" data-url-path="electronic">
                    가전
                </div>
                <div className="nav_leftbutton" data-url-path="beauty">
                    뷰티
                </div>
                <div className="nav_leftbutton" data-url-path="fashion">
                    패션
                </div>
                <div className="nav_leftbutton" data-url-path="fashionacc">
                    패션잡화
                </div>
                <div className="nav_leftbutton" data-url-path="smartphone">
                    스마트폰
                </div>
                <div className="nav_leftbutton" data-url-path="lifestlye">
                    라이프스타일
                </div>
            </div>

            {/*<!-- 오른쪽 -->*/}
            <div className="nav_right">
                <div className="nav_rightbutton" href="content">
                    콘텐츠
                </div> 
                <div className="nav_rightbutton" href="event">
                    혜택/이벤트
                </div>
                <div className="nav_rightbutton" href="brand">
                    브랜드
                </div>
            </div>

        </div>
    </div>
    </>

  );
}

export default App;
  

const Header = styled.div`
    

`;