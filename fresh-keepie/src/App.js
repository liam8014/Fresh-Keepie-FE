import "./App.css";
import React from "react";
import mainLogo from "./assets/mainLogo.png";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Link,
} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <div style={appContainerStyle}>
                    <div style={headerContainerStyle}>
                        {/*메인 로고, 클릭 시 홈으로 이동하도록 링크*/}
                        <Link to="/">
                            <img
                                src={mainLogo}
                                alt="Main Logo"
                                style={{ width: 316, height: 54 }}
                            />
                        </Link>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                width: "100%",
                                height: "80%",
                                marginLeft: 200,
                            }}>
                            <nav>
                                <ul
                                    style={{
                                        flexDirection: "row",
                                        display: "flex",
                                    }}
                                    className="topMenuClass">
                                    <li>
                                        <NavLink to="/">
                                            <MenuContent title="HOME" />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/recipe">
                                            <div>
                                                <MenuContent title="HOME" />
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        {/*쇼핑 탭 임시 생성*/}
                                        <NavLink
                                            to="/shopping"
                                            activeStyle={contentActiveStyle}>
                                            <MenuContent title="SHOPPING" />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/community"
                                            activeStyle={contentActiveStyle}>
                                            <MenuContent title="COMMUNITY" />
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/mypage"
                                            activeStyle={contentActiveStyle}>
                                            <MenuContent title="MY PAGE" />
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>

                            {/* 각 라우트를 설정하고, 해당하는 컴포넌트를 렌더링 */}
                            <Routes>
                                <Route path="/" element={<div />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </>
    );
}
function MenuContent(props) {
    //컴포넌트명은 대문자로 시작해야하기 때문에, 파스칼 표기법 사용
    return (
        <div
            style={{
                padding: 4,
                borderBottom: "1px solid black",
                marginRight: 30,
                fontWeight: "bold",
                fontSize: 15,
            }}>
            {props.title}
        </div>
    );
}
const appContainerStyle = { alignItems: "flex-start", padding: 40 };
const headerContainerStyle = {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    whiteSpace: "nowrap",
};
const contentActiveStyle = {
    borderBottom: "2px solid black",
};
export default App;
