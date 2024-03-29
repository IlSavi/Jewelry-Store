import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) => 
                <Route key={path} path={path} element={<Component />} />
            )}
            {publicRoutes.map(({ path, Component }) => 
                <Route key={path} path={path} element={<Component />} />
            )}
            {/* Redirect to a default route if none of the above routes match */}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    );
});

export default AppRouter;

/*
import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;

*/