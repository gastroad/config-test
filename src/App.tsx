import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "components/Header"
import Footer from "components/Footer"

import Main from "page/Main"
import Sub from "page/Sub"

const App = () => {
    return (

        <BrowserRouter>
            <div id={"root-modal"} />
            <Header />
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/sub" element={<Sub />} />
                <Route
                    path="*"
                    element={
                        <div>
                            <p>404</p>
                        </div>
                    }
                />
            </Routes>

            <Footer />
        </BrowserRouter>
    )

}
export default App