import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const { auth, kv, fs } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);
  const [isClearing, setIsClearing] = useState(false);

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      const resumes = await kv.list('resume:*', true) as KVItem[];
      const parsedResumes = resumes?.map((resume) => (
        JSON.parse(resume.value) as Resume
      ))

      setResumes(parsedResumes || []);

      setLoadingResumes(false);
    }
    loadResumes();
  }, [])

  const handleClearAll = async () => {
    if (!confirm('Are you sure you want to delete all resumes? This action cannot be undone.')) {
      return;
    }

    setIsClearing(true);

    try {
      await kv.flush();
      
      const files = (await fs.readDir("./")) as FSItem[];
      for (const file of files) {
        try {
          await fs.delete(file.path);
        } catch (error) {
          console.warn('Failed to delete file:', file.path, error);
        }
      }
      
      setResumes([]);
    } catch (error) {
      console.error('Failed to clear all data:', error);
      alert('Failed to clear all data. Please try again.');
    } finally {
      setIsClearing(false);
    }
  };

  return (
  <main className="bg-[url('/public/images/bg-main.svg')] bg-cover">
    <NavBar />
    <section>
      <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          {!loadingResumes && resumes?.length === 0 ? (
              <h2>No resumes found. Upload your first resume to get feedback.</h2>
          ): (
            <h2>Review your submissions and check AI-powered feedback.</h2>
          )}
        </div>
        
        {!loadingResumes && resumes.length > 0 && (
          <div className="flex justify-center mb-6">
            <button
              onClick={handleClearAll}
              disabled={isClearing}
              className="bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white px-6 py-2 rounded-md font-semibold transition-colors duration-200"
            >
              {isClearing ? 'Clearing...' : 'Clear All Resumes'}
            </button>
          </div>
        )}
        {loadingResumes && (
            <div className="flex flex-col items-center justify-center">
              <img src="/images/resume-scan-2.gif" className="w-[200px]" />
            </div>
        )}

        {!loadingResumes && resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}

        {!loadingResumes && resumes?.length === 0 && (
            <div className="flex flex-col items-center justify-center mt-10 gap-4">
              <Link to="/upload" className="primary-button w-fit text-xl font-semibold">
                Upload Resume
              </Link>
            </div>
        )}
    </section>
  </main>
  );
}
