import {AutoParks, Cars, UserRegForm, Users} from "./components";
import {Navigate, Route, Routes} from "react-router-dom";

import css from './App.module.css';
import {Layout} from "./components";
import {ActivePage, LoginPage, MainPage, UserPage} from "./pages";

function App() {

  return (
    <div>
        {/*<AutoParks/>*/}
        {/*<Cars/>*/}
         <div className={css.App}>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Navigate to={'login'}/>}/>
                        <Route path={''} element={<MainPage/>}>
                            <Route path={'login'} element={<LoginPage/>}/>
                            <Route path={'registration'} element={<UserRegForm/>}/>
                            <Route path={':token'} element={<ActivePage/>}/>
                            <Route path={'auth_user'} element={<UserPage/>}/>
                            <Route path={'cars'} element={<Cars/>}/>
                            <Route path={'parks'} element={<AutoParks/>}/>
                            <Route path={'users'} element={<Users/>}/>
                            <Route path={''} element={<Users/>}/>
                        </Route>
                        {/*<Route path={'*'} element={<NotFoundPage/>}/>*/}
                    </Route>
                </Routes>
            </div>
    </div>
  );
}

export default App;
