import { Navigate, Route, Routes } from "react-router-dom"
import QuizPage from ".."
import { DrugQuizFrame } from "../components/DrugQuiz"
import { CyberBullyingQuizFrame } from "../components/CyberBullyingQuiz"
import { HeritageQuizFrame } from "../components/HeritageQuiz"
import { VapeQuizFrame } from "../components/VapeQuiz"

export const QuizRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<QuizPage />} />
            <Route path="/cyberbullying" element={<CyberBullyingQuizFrame />} />
            <Route path="/drugs" element={<DrugQuizFrame />} />
            <Route path="/heritage" element={<HeritageQuizFrame />} />
            <Route path="/vape" element={<VapeQuizFrame />} />
            <Route
                path="*"
                element={<Navigate to="/quiz" replace />}
            />

        </Routes>
    )
}
