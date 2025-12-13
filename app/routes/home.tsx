import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return (
  <main className="bg-[url('/public/images/bg-main.svg')] bg-cover">
    <NavBar />
    <section className="main-section py-16">
      <h1 className="page-heading">Your Applications & Resume Ratings</h1>
      <h2>Review your submissions and check AI-powered feedback.</h2>
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume: Resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
        )}
    </section>
  </main>
  );
}
