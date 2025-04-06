import "./App.css";
import styled from "styled-components";

function App() {
  const click = () => {
    console.log("click");
  };
  return (
    <div>
      <div className="header">
        <a className="logo" href="/">
          everyuneez 학생복지스토어
        </a>
        <div className="nav">
          <a className="nav__search" href="/검색">
            검색
          </a>
          <a className="nav__login" href="/로그인">
            로그인
          </a>
          <a className="nav__my" href="/마이페이지">
            마이페이지
          </a>
          <a className="nav__cart" href="/장바구니">
            장바구니
          </a>
        </div>
      </div>

      <hr></hr>

      <div>
        <div className="nav__container">
          <div className="nav">
            <div className="nav__left">
              <div className="nav_leftbutton">
              <a class="nav__digital" data-url_path="digital">
                디지털
              </a>
              <a class="nav__computer" data-url_path="computer">
                컴퓨터
              </a>
              <a class="nav__electronic" data-url_path="electronic">
                가전
              </a>
              <a class="nav__beauty" data-url_path="beauty">
                뷰티
              </a>
              <a class="nav__fashion" data-url_path="fashion">
                패션
              </a>
              <a class="nav__fashionacc" data-url_path="fashionacc">
                패션잡화
              </a>
              <a class="nav__smartphone" data-url_path="smartphone">
                스마트폰
              </a>
              <a class="nav__lifestyle" data-url_path="lifestyle">
                라이프스타일
              </a>
              </div>
            </div>

            <div class="nav__right">
              <div class="nav_rightbutton">
              <a class="nav__content" href="/content">
                콘텐츠
              </a>
              <a class="nav__event" href="/event">
                혜택/이벤트
              </a>
              <a class="nav__brand" href="/brand">
                브랜드
              </a>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>

  );
}

export default App;
  

const Header = styled.div`
    

`;