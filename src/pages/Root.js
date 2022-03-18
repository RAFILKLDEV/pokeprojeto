import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pages_PokeCardNew_PokeCardIndex from "./PokeCardNew/PokeCardIndex/PokeCardIndex";
import Pages_PokeForm_Form from "./PokeForm/Form/Form";

const Root = () => {
    return(
        <BrowserRouter>
            <Routes>
              <Route exact path="/create" element={<Pages_PokeForm_Form></Pages_PokeForm_Form>}/>
              <Route exact path="/edit/:id" element={<Pages_PokeForm_Form></Pages_PokeForm_Form>}/>
              <Route exact path="/" element={<Pages_PokeCardNew_PokeCardIndex></Pages_PokeCardNew_PokeCardIndex>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Root