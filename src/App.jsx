import { useState } from "react";
import "./App.css";

function DropdownItem({ title, items }) {
  return (
    <div className="dropdown-item">
      <div className="dropdown-item__title">{title[0]}</div>
      {items.length < 10
        ? items.map((item, i) => (
            <a key={i} className="dropdown-item__item" href={item[1]}>
              {item[0]}
            </a>
          ))
        : [
            [...items.slice(0, 8)].map((item, i) => (
              <a key={i} className="dropdown-item__item" href={item[1]}>
                {item[0]}
              </a>
            )),
            <a
              key={"더보기__" + title}
              className="dropdown-item__item"
              href={title[1]}
            >
              더보기
            </a>,
          ]}
    </div>
  );
}

function App() {
  const [showDropdown, setShowDropdown] = useState(null);
  return (
    <div>
      <div className="header-container">
        <div className="header template">
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
      </div>
      <div
        className="dropdown-container"
        onMouseLeave={() => {
          setShowDropdown(null);
        }}
      >
        <div className="dropdown-bar template">
          <div className="dropdown-bar__dropdown-item-container">
            <div
              className="dropdown-bar__item dropdown-bar__dropdown-item"
              data-url-path="디지털"
              onMouseEnter={() => {
                setShowDropdown(0);
              }}
            >
              디지털
            </div>
            <div
              className="dropdown-bar__item dropdown-bar__dropdown-item"
              data-url-path="컴퓨터"
              onMouseEnter={() => {
                setShowDropdown(1);
              }}
            >
              컴퓨터
            </div>
            <div
              className="dropdown-bar__item dropdown-bar__dropdown-item"
              data-url-path="가전"
              onMouseEnter={() => {
                setShowDropdown(2);
              }}
            >
              가전
            </div>
            <div
              className="dropdown-bar__item dropdown-bar__dropdown-item"
              data-url-path="뷰티"
              onMouseEnter={() => {
                setShowDropdown(3);
              }}
            >
              뷰티
            </div>
            <div
              className="dropdown-bar__item dropdown-bar__dropdown-item"
              data-url-path="패션"
              onMouseEnter={() => {
                setShowDropdown(4);
              }}
            >
              패션
            </div>
            <div
              className="dropdown-bar__item dropdown-bar__dropdown-item"
              data-url-path="패션잡화"
              onMouseEnter={() => {
                setShowDropdown(5);
              }}
            >
              패션잡화
            </div>
            <div
              className="dropdown-bar__item dropdown-bar__dropdown-item"
              data-url-path="스마트폰"
              onMouseEnter={() => {
                setShowDropdown(6);
              }}
            >
              스마트폰
            </div>
            <div
              className="dropdown-bar__item dropdown-bar__dropdown-item"
              data-url-path="라이프스타일"
              onMouseEnter={() => {
                setShowDropdown(7);
              }}
            >
              라이프스타일
            </div>
          </div>
          <div className="dropdown-bar__normal-item-container">
            <div className="dropdown-bar__item">콘텐츠</div>
            <div className="dropdown-bar__item">혜택/이벤트</div>
            <div className="dropdown-bar__item">브랜드</div>
          </div>
        </div>
        {showDropdown !== null ? (
          <div className="dropdown-categories-wrapper">
            <div className="dropdown-categories template">
              {
                [
                  <div className="dropdown-category">
                    {" "}
                    {/* 1 */}
                    <DropdownItem
                      title={["태블릿PC", "/태블릿PC"]}
                      items={[
                        ["태블릿PC", "/태블릿"],
                        ["터치팬", "/터치팬"],
                        ["태블릿 키보드", "/태블릿키보드"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["스마트 워치/밴드", "/스마트워치밴드"]}
                      items={[
                        ["스마트 워치", "/스마트워치"],
                        ["스마트 밴드", "/스마트밴드"],
                        ["스트랩", "/스트랩"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["음향기기"]}
                      items={[
                        ["무선 이어폰", "/무선이어폰"],
                        ["유션 이어폰", "/유션이어폰"],
                        ["무선 헤드폰", "/무선헤드폰"],
                        ["유선 헤드폰", "/유선헤드폰"],
                        ["이어폰/헤드폰 케이스", "/이어폰헤드폰케이스"],
                        ["이어폰/헤드폰 주변기기", "/이어폰헤드폰주변기기"],
                        ["스피커/턴테이블", "/스피커턴테이블"],
                        ["마이크/녹음기", "/마이크녹음기"],
                        ["기타 음향 주변기기", "/기타음향주변기기"],
                      ]}
                    />
                  </div>,
                  <div className="dropdown-category">
                    {" "}
                    {/* 2 */}
                    <DropdownItem
                      title={["노트북", "/노트북"]}
                      items={[
                        ["Apple", "/Apple"],
                        ["삼성전자", "/삼성전자"],
                        ["LG전자", "/LG전자"],
                        ["HP", "/HP"],
                        ["Lenovo", "/Lenovo"],
                        ["ASUS", "/ASUS"],
                        ["Microsoft", "/Microsoft"],
                        ["DELL", "/DELL"],
                        [""],
                        [""],
                      ]}
                    />
                    <DropdownItem
                      title={["스마트 워치/밴드", "/스마트워치밴드"]}
                      items={[
                        ["스마트 워치", "/스마트워치"],
                        ["스마트 밴드", "/스마트밴드"],
                        ["스트랩", "/스트랩"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["음향기기"]}
                      items={[
                        ["무선 이어폰", "/무선이어폰"],
                        ["유션 이어폰", "/유션이어폰"],
                        ["무선 헤드폰", "/무선헤드폰"],
                        ["유선 헤드폰", "/유선헤드폰"],
                        ["이어폰/헤드폰 케이스", "/이어폰헤드폰케이스"],
                        ["이어폰/헤드폰 주변기기", "/이어폰헤드폰주변기기"],
                        ["스피커/턴테이블", "/스피커턴테이블"],
                        ["마이크/녹음기", "/마이크녹음기"],
                        ["기타 음향 주변기기", "/기타음향주변기기"],
                      ]}
                    />
                  </div>,
                  <div className="dropdown-category">
                    {" "}
                    {/* 3 */}
                    <DropdownItem
                      title={["태블릿PC", "/태블릿PC"]}
                      items={[
                        ["태블릿PC", "/태블릿"],
                        ["터치팬", "/터치팬"],
                        ["태블릿 키보드", "/태블릿키보드"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["스마트 워치/밴드", "/스마트워치밴드"]}
                      items={[
                        ["스마트 워치", "/스마트워치"],
                        ["스마트 밴드", "/스마트밴드"],
                        ["스트랩", "/스트랩"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["음향기기"]}
                      items={[
                        ["무선 이어폰", "/무선이어폰"],
                        ["유션 이어폰", "/유션이어폰"],
                        ["무선 헤드폰", "/무선헤드폰"],
                        ["유선 헤드폰", "/유선헤드폰"],
                        ["이어폰/헤드폰 케이스", "/이어폰헤드폰케이스"],
                        ["이어폰/헤드폰 주변기기", "/이어폰헤드폰주변기기"],
                        ["스피커/턴테이블", "/스피커턴테이블"],
                        ["마이크/녹음기", "/마이크녹음기"],
                        ["기타 음향 주변기기", "/기타음향주변기기"],
                      ]}
                    />
                  </div>,
                  <div className="dropdown-category">
                    {" "}
                    {/* 4 */}
                    <DropdownItem
                      title={["태블릿PC", "/태블릿PC"]}
                      items={[
                        ["태블릿PC", "/태블릿"],
                        ["터치팬", "/터치팬"],
                        ["태블릿 키보드", "/태블릿키보드"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["스마트 워치/밴드", "/스마트워치밴드"]}
                      items={[
                        ["스마트 워치", "/스마트워치"],
                        ["스마트 밴드", "/스마트밴드"],
                        ["스트랩", "/스트랩"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["음향기기"]}
                      items={[
                        ["무선 이어폰", "/무선이어폰"],
                        ["유션 이어폰", "/유션이어폰"],
                        ["무선 헤드폰", "/무선헤드폰"],
                        ["유선 헤드폰", "/유선헤드폰"],
                        ["이어폰/헤드폰 케이스", "/이어폰헤드폰케이스"],
                        ["이어폰/헤드폰 주변기기", "/이어폰헤드폰주변기기"],
                        ["스피커/턴테이블", "/스피커턴테이블"],
                        ["마이크/녹음기", "/마이크녹음기"],
                        ["기타 음향 주변기기", "/기타음향주변기기"],
                      ]}
                    />
                  </div>,
                  <div className="dropdown-category">
                    {" "}
                    {/* 5 */}
                    <DropdownItem
                      title={["태블릿PC", "/태블릿PC"]}
                      items={[
                        ["태블릿PC", "/태블릿"],
                        ["터치팬", "/터치팬"],
                        ["태블릿 키보드", "/태블릿키보드"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["스마트 워치/밴드", "/스마트워치밴드"]}
                      items={[
                        ["스마트 워치", "/스마트워치"],
                        ["스마트 밴드", "/스마트밴드"],
                        ["스트랩", "/스트랩"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["음향기기"]}
                      items={[
                        ["무선 이어폰", "/무선이어폰"],
                        ["유션 이어폰", "/유션이어폰"],
                        ["무선 헤드폰", "/무선헤드폰"],
                        ["유선 헤드폰", "/유선헤드폰"],
                        ["이어폰/헤드폰 케이스", "/이어폰헤드폰케이스"],
                        ["이어폰/헤드폰 주변기기", "/이어폰헤드폰주변기기"],
                        ["스피커/턴테이블", "/스피커턴테이블"],
                        ["마이크/녹음기", "/마이크녹음기"],
                        ["기타 음향 주변기기", "/기타음향주변기기"],
                      ]}
                    />
                  </div>,
                  <div className="dropdown-category">
                    {" "}
                    {/* 6 */}
                    <DropdownItem
                      title={["태블릿PC", "/태블릿PC"]}
                      items={[
                        ["태블릿PC", "/태블릿"],
                        ["터치팬", "/터치팬"],
                        ["태블릿 키보드", "/태블릿키보드"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["스마트 워치/밴드", "/스마트워치밴드"]}
                      items={[
                        ["스마트 워치", "/스마트워치"],
                        ["스마트 밴드", "/스마트밴드"],
                        ["스트랩", "/스트랩"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["음향기기"]}
                      items={[
                        ["무선 이어폰", "/무선이어폰"],
                        ["유션 이어폰", "/유션이어폰"],
                        ["무선 헤드폰", "/무선헤드폰"],
                        ["유선 헤드폰", "/유선헤드폰"],
                        ["이어폰/헤드폰 케이스", "/이어폰헤드폰케이스"],
                        ["이어폰/헤드폰 주변기기", "/이어폰헤드폰주변기기"],
                        ["스피커/턴테이블", "/스피커턴테이블"],
                        ["마이크/녹음기", "/마이크녹음기"],
                        ["기타 음향 주변기기", "/기타음향주변기기"],
                      ]}
                    />
                  </div>,
                  <div className="dropdown-category">
                    {" "}
                    {/* 7 */}
                    <DropdownItem
                      title={["태블릿PC", "/태블릿PC"]}
                      items={[
                        ["태블릿PC", "/태블릿"],
                        ["터치팬", "/터치팬"],
                        ["태블릿 키보드", "/태블릿키보드"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["스마트 워치/밴드", "/스마트워치밴드"]}
                      items={[
                        ["스마트 워치", "/스마트워치"],
                        ["스마트 밴드", "/스마트밴드"],
                        ["스트랩", "/스트랩"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["음향기기"]}
                      items={[
                        ["무선 이어폰", "/무선이어폰"],
                        ["유션 이어폰", "/유션이어폰"],
                        ["무선 헤드폰", "/무선헤드폰"],
                        ["유선 헤드폰", "/유선헤드폰"],
                        ["이어폰/헤드폰 케이스", "/이어폰헤드폰케이스"],
                        ["이어폰/헤드폰 주변기기", "/이어폰헤드폰주변기기"],
                        ["스피커/턴테이블", "/스피커턴테이블"],
                        ["마이크/녹음기", "/마이크녹음기"],
                        ["기타 음향 주변기기", "/기타음향주변기기"],
                      ]}
                    />
                  </div>,
                  <div className="dropdown-category">
                    {" "}
                    {/* 8 */}
                    <DropdownItem
                      title={["태블릿PC", "/태블릿PC"]}
                      items={[
                        ["태블릿PC", "/태블릿"],
                        ["터치팬", "/터치팬"],
                        ["태블릿 키보드", "/태블릿키보드"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["스마트 워치/밴드", "/스마트워치밴드"]}
                      items={[
                        ["스마트 워치", "/스마트워치"],
                        ["스마트 밴드", "/스마트밴드"],
                        ["스트랩", "/스트랩"],
                        ["케이스", "/케이스"],
                        ["보호필름", "/보호필름"],
                      ]}
                    />
                    <DropdownItem
                      title={["음향기기"]}
                      items={[
                        ["무선 이어폰", "/무선이어폰"],
                        ["유션 이어폰", "/유션이어폰"],
                        ["무선 헤드폰", "/무선헤드폰"],
                        ["유선 헤드폰", "/유선헤드폰"],
                        ["이어폰/헤드폰 케이스", "/이어폰헤드폰케이스"],
                        ["이어폰/헤드폰 주변기기", "/이어폰헤드폰주변기기"],
                        ["스피커/턴테이블", "/스피커턴테이블"],
                        ["마이크/녹음기", "/마이크녹음기"],
                        ["기타 음향 주변기기", "/기타음향주변기기"],
                      ]}
                    />
                  </div>,
                ][showDropdown]
              }
            </div>
          </div>
        ) : null}
      </div>
      <div className="content-container">
        <div className="main-banner"></div>
      </div>
      <div className="footer-container"></div>
    </div>
  );
}

export default App;
