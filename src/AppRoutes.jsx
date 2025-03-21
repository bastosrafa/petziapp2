import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import { ThemeProvider } from "./providers/ThemeProvider";
import { useAuthContext } from "./hooks/useAuthContext";
<<<<<<< HEAD
import Loading from "./components/Loading";
import Profile from "./pages/Profile/Profile";
import { useEffect, useRef, useState } from "react";
=======
import Loading from "./components/Loading.jsx"; // ✅ Caminho corrigido
import Profile from "./pages/Profile/Profile.jsx"; // ✅ Caminho corrigido
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
import { Toaster } from "@/shadcn/components/ui/toaster";
import { UserDocProvider } from "./contexts/UserDocContext";
import useMediaQuery from "./hooks/useMediaQuery";
import Topbar from "./components/Topbar";
import PasswordRecovery from "./pages/Recover/Recover";
import Help from "./pages/Help/Help";
<<<<<<< HEAD
import Training from "./pages/Training/Training";
import { ReferrerDocProvider } from "./contexts/ReferrerDocContext";
import { db } from "./firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import Home from "./pages/Home/Home";
import TopbarMobile from "./components/TopbarMobile";
import BottomBar from "./components/BottomBar";
import Content from "./pages/Content/Content";
import StartHere from "./pages/Content/Training/StartHere/StartHere";
import StartHere1 from "./pages/Content/Training/StartHere/Lessons/StartHere1";
import StartHere2 from "./pages/Content/Training/StartHere/Lessons/StartHere2";
import StartHere3 from "./pages/Content/Training/StartHere/Lessons/StartHere3";
import StartHere4 from "./pages/Content/Training/StartHere/Lessons/StartHere4";
import StartHere5 from "./pages/Content/Training/StartHere/Lessons/StartHere5";
import StartHere6 from "./pages/Content/Training/StartHere/Lessons/StartHere6";
import Fundamentos from "./pages/Content/Training/Fundamentos/Fundamentos";
import Fundamentos1 from "./pages/Content/Training/Fundamentos/Lessons/Fundamentos1";
import Fundamentos2 from "./pages/Content/Training/Fundamentos/Lessons/Fundamentos2";
import Fundamentos3 from "./pages/Content/Training/Fundamentos/Lessons/Fundamentos3";
import ComportamentoEssencial from "./pages/Content/Training/ComportamentoEssencial/ComportamentoEssencial";
import ComportamentoEssencial1 from "./pages/Content/Training/ComportamentoEssencial/Lessons/ComportamentoEssencial1";
import ComportamentoEssencial2 from "./pages/Content/Training/ComportamentoEssencial/Lessons/ComportamentoEssencial2";
import ComportamentoEssencial3 from "./pages/Content/Training/ComportamentoEssencial/Lessons/ComportamentoEssencial3";
import Socializacao from "./pages/Content/Training/Socializacao/Socializacao";
import Socializacao1 from "./pages/Content/Training/Socializacao/Lessons/Socializacao1";
import Socializacao2 from "./pages/Content/Training/Socializacao/Lessons/Socializacao2";
import Socializacao3 from "./pages/Content/Training/Socializacao/Lessons/Socializacao3";
import Higiene from "./pages/Content/Training/Higiene/Higiene";
import Higiene1 from "./pages/Content/Training/Higiene/Lessons/Higiene1";
import Higiene2 from "./pages/Content/Training/Higiene/Lessons/Higiene2";
import Higiene3 from "./pages/Content/Training/Higiene/Lessons/Higiene3";
import MausHabitos from "./pages/Content/Training/MausHabitos/MausHabitos";
import MausHabitos1 from "./pages/Content/Training/MausHabitos/Lessons/MausHabitos1";
import MausHabitos2 from "./pages/Content/Training/MausHabitos/Lessons/MausHabitos2";
import MausHabitos3 from "./pages/Content/Training/MausHabitos/Lessons/MausHabitos3";
import ExerciciosMentais from "./pages/Content/Training/ExerciciosMentais/ExerciciosMentais";
import ExerciciosMentais1 from "./pages/Content/Training/ExerciciosMentais/Lessons/ExerciciosMentais1";
import ExerciciosMentais2 from "./pages/Content/Training/ExerciciosMentais/Lessons/ExerciciosMentais2";
import ExerciciosMentais3 from "./pages/Content/Training/ExerciciosMentais/Lessons/ExerciciosMentais3";
=======
import Training from "./pages/Adestramento/TrainingTracks";
import { ReferrerDocProvider } from "./contexts/ReferrerDocContext";
import { db, auth } from "./firebase/firebaseConfig"; // ✅ Caminho corrigido
import { doc, onSnapshot } from "firebase/firestore";
import Dashboard from "./pages/Adestramento/Dashboard.jsx"; // ✅ Caminho correto
import TopbarMobile from "./components/TopbarMobile";
import BottomBar from "./components/BottomBar";
import Content from "./pages/Content/Content";

// ✅ Importando novas páginas de Adestramento
import TrainingTracks from "@/pages/Adestramento/TrainingTracks";
import Lessons from "@/pages/Adestramento/Lessons";
import LessonPage from "@/components/Training/LessonPage.jsx"; // ✅ Corrigido para .jsx
import Progress from "@/pages/Adestramento/Progress";

// ✅ Importando Ranking de Usuários
import Ranking from "./pages/adestramento/Ranking.jsx"; // ✅ Caminho corrigido para Ranking.jsx
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8

function AppRoutes() {
  const { user, authIsReady } = useAuthContext();
  const [rerender, setRerender] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [isWatching, setIsWatching] = useState(false);
  const [redirectToRoute, setRedirectToRoute] = useState(null);
  const [userDoc, setUserDoc] = useState(null);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const scrollToTop = useRef(null);
<<<<<<< HEAD
  const [activeRoute, setActiveRoute] = useState("/");
=======
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8

  if (!authIsReady) {
    console.log("Not auth is ready");
    return <Loading />;
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
<<<<<<< HEAD
      <div
        ref={scrollToTop}
        className="App flex flex-col sm:flex-row bg-background "
      >
=======
      <div ref={scrollToTop} className="App flex flex-col sm:flex-row bg-background">
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
        <Toaster />
        <BrowserRouter>
          {user ? (
            <UserDocProvider user={user}>
              <ReferrerDocProvider user={user}>
<<<<<<< HEAD
                {isMobile ? (
                  <TopbarMobile setRerender={setRerender} />
                ) : (
                  <Topbar setRerender={setRerender} />
                )}
=======
                {isMobile ? <TopbarMobile setRerender={setRerender} /> : <Topbar setRerender={setRerender} />}
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
                {isMobile ? null : (
                  <div
                    className={`${
                      sidebarExpanded ? "w-[284px]" : "w-[90px]"
                    } w-[286px] h-[calc(100vh_-_120px)] fixed top-24 left-5 bottom-5 overflow-y-hidden border rounded-md`}
                  >
                    <Sidebar
                      rerender={rerender}
                      setRerender={setRerender}
                      sidebarExpanded={sidebarExpanded}
                      setSidebarExpanded={setSidebarExpanded}
                      isWatching={isWatching}
                      setIsWatching={setIsWatching}
                    />
                  </div>
                )}
                <div className="sm:w-[calc(100%_-_300px)] sm:ml-[310px] mt-[80px] px-2.5 sm:px-5 sm:mt-[112px]">
                  <Routes>
<<<<<<< HEAD
                    <Route path="/" element={<Home />} />
                    <Route path="/adestramento" element={<Content />} />
                    <Route path="/comece-aqui" element={<StartHere />} />
                    <Route path="/comece-aqui/introducao" element={<StartHere1 />} />
                    <Route path="/comece-aqui/comunicacao" element={<StartHere2 />} />
                    <Route path="/comece-aqui/rotina" element={<StartHere3 />} />
                    <Route path="/comece-aqui/erros" element={<StartHere4 />} />
                    <Route path="/comece-aqui/progresso" element={<StartHere5 />} />
                    <Route path="/comece-aqui/ambiente" element={<StartHere6 />} />
                    <Route path="/fundamentos" element={<Fundamentos />} />
                    <Route path="/fundamentos/vinculo" element={<Fundamentos1 />} />
                    <Route path="/fundamentos/comunicacao" element={<Fundamentos2 />} />
                    <Route path="/fundamentos/recompensas" element={<Fundamentos3 />} />
                    <Route path="/comportamento-essencial" element={<ComportamentoEssencial />} />
                    <Route path="/comportamento-essencial/comandos" element={<ComportamentoEssencial1 />} />
                    <Route path="/comportamento-essencial/latidos" element={<ComportamentoEssencial2 />} />
                    <Route path="/comportamento-essencial/passeio" element={<ComportamentoEssencial3 />} />
                    <Route path="/socializacao" element={<Socializacao />} />
                    <Route path="/socializacao/outros-caes" element={<Socializacao1 />} />
                    <Route path="/socializacao/impulsos" element={<Socializacao2 />} />
                    <Route path="/socializacao/pessoas" element={<Socializacao3 />} />
                    <Route path="/higiene" element={<Higiene />} />
                    <Route path="/higiene/banho" element={<Higiene1 />} />
                    <Route path="/higiene/alimentacao" element={<Higiene2 />} />
                    <Route path="/higiene/exercicios" element={<Higiene3 />} />
                    <Route path="/maus-habitos" element={<MausHabitos />} />
                    <Route path="/maus-habitos/morder" element={<MausHabitos1 />} />
                    <Route path="/maus-habitos/latidos" element={<MausHabitos2 />} />
                    <Route path="/maus-habitos/pular" element={<MausHabitos3 />} />
                    <Route path="/exercicios-mentais" element={<ExerciciosMentais />} />
                    <Route path="/exercicios-mentais/jogos" element={<ExerciciosMentais1 />} />
                    <Route path="/exercicios-mentais/brincadeiras" element={<ExerciciosMentais2 />} />
                    <Route path="/exercicios-mentais/ambiente" element={<ExerciciosMentais3 />} />
                    <Route path="/rota2" element={<Content />} />
                    <Route path="/rota3" element={<Content />} />
                    <Route path="/rota4" element={<Content />} />
                    <Route
                      path="/conta"
                      element={
                        <Profile
                          rerender={rerender}
                          setRerender={setRerender}
                        />
                      }
                    />
                    <Route path="/help" element={<Help />} />
                    <Route path="*" element={<Home />} />
                  </Routes>
                </div>
                {isMobile ? (
                  <div className="h-16 fixed bottom-0 left-0">
                    <BottomBar
                      activeRoute={activeRoute}
                      setActiveRoute={setActiveRoute}
                    />
                  </div>
                ) : null}
=======
                    <Route exact path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Nova rota do Dashboard */}
                    <Route path="/ranking" element={<Ranking />} /> {/* ✅ Nova rota do Ranking */}
                    <Route path="/content" element={<Content />} />
                    <Route path="/conta" element={<Profile />} /> {/* ✅ Rota do perfil corrigida */}
                    <Route path="/help" element={<Help />} />

                    {/* ✅ Novas Rotas de Adestramento */}
                    <Route path="/training" element={<TrainingTracks />} />
                    <Route path="/training/:trackId" element={<Lessons />} />
                    <Route path="/lesson/:lessonId" element={<LessonPage />} /> {/* ✅ Corrigida a importação */}
                    <Route path="/progress" element={<Progress />} />

                    <Route path="*" element={<Dashboard />} />
                  </Routes>
                </div>
                {isMobile ? <BottomBar /> : null}
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
              </ReferrerDocProvider>
            </UserDocProvider>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/password/recovery" element={<PasswordRecovery />} />
              <Route path="*" element={<Login />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default AppRoutes;
