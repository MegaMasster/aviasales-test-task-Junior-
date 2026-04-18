import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const IndexPage = lazy(() => import("../pages/index/IndexPage"));

export const AppRouter = () => {
    return (
        <Suspense fallback={<> </>}>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element = { <IndexPage/> }/>

                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}