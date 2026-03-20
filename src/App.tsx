/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PaperDetail from "./pages/PaperDetail";
import EssayDetail from "./pages/EssayDetail";
import Essays from "./pages/Essays";
import Play from "./pages/Play";
import CoverLetter from "./pages/CoverLetter";
import Preprints from "./pages/Preprints";
import Contact from "./pages/Contact";
import ConstitutionalProof from "./pages/ConstitutionalProof";

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/papers/:id" element={<PaperDetail />} />
          <Route path="/essays" element={<Essays />} />
          <Route path="/essays/:id" element={<EssayDetail />} />
          <Route path="/play" element={<Play />} />
          <Route path="/cover-letter" element={<CoverLetter />} />
          <Route path="/preprints" element={<Preprints />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/constitutional-proof" element={<ConstitutionalProof />} />
        </Routes>
      </Layout>
    </Router>
  );
}
