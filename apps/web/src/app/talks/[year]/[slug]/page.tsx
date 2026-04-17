import { getTalks } from "@/lib/talks";
import Link from "next/link";
import { ArrowLeft, Download, Calendar, Tag, User } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const talks = getTalks();
  return talks.map((talk) => ({
    year: talk.year.toString(),
    slug: talk.slug,
  }));
}

export default async function TalkDetailsPage({ params }: { params: Promise<{ year: string; slug: string }> }) {
  const resolvedParams = await params;
  const talks = getTalks();
  const talk = talks.find(t => t.year.toString() === resolvedParams.year && t.slug === resolvedParams.slug);

  if (!talk) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
       <Link href="/" className="inline-flex items-center text-sm font-medium text-muted hover:text-foreground mb-8 transition-colors">
         <ArrowLeft className="w-4 h-4 mr-2" />
         Zurück zur Übersicht
       </Link>

       <header className="mb-8">
         <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
           <div>
             <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-white bg-[var(--color-gdg-blue)] px-2.5 py-1 rounded-md uppercase tracking-wide">
                  {talk.category}
                </span>
                <span className="text-xs font-medium bg-card border border-[var(--color-gdg-grey-200)] dark:border-[var(--color-gdg-grey-800)] px-2.5 py-1 rounded-md text-muted">
                  {talk.level}
                </span>
             </div>
             <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{talk.title}</h1>
             
             <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1.5" />
                  {talk.speaker}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  {new Date(talk.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-1.5" />
                  {talk.event}
                </div>
             </div>
           </div>
           
           {talk.pdfPath && (
             <a 
               href={talk.pdfPath} 
               download
               className="inline-flex items-center shrink-0 justify-center rounded-lg bg-[var(--color-gdg-blue)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all dark:hover:bg-blue-500"
             >
               <Download className="w-4 h-4 mr-2" />
               PDF Herunterladen
             </a>
           )}
         </div>

         {talk.description && (
           <p className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-4xl">
             {talk.description}
           </p>
         )}
       </header>

       {talk.pdfPath ? (
         <div className="mt-12 rounded-xl overflow-hidden border border-[var(--color-gdg-grey-200)] dark:border-[var(--color-gdg-grey-800)] bg-card shadow-lg flex flex-col" style={{ height: '75vh' }}>
            <div className="bg-[var(--color-gdg-grey-100)] dark:bg-[var(--color-gdg-grey-900)] p-3 border-b border-[var(--color-gdg-grey-200)] dark:border-[var(--color-gdg-grey-800)] flex justify-between items-center">
               <span className="text-sm font-medium text-muted">Präsentationsfolien</span>
            </div>
            <object 
              data={`${talk.pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
              type="application/pdf"
              width="100%"
              height="100%"
              className="flex-1"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[var(--color-gdg-grey-50)] dark:bg-[var(--color-gdg-grey-900)]">
                 <p className="mb-4">Dein Browser unterstützt keine Anzeige von PDFs direkt auf der Website.</p>
                 <a href={talk.pdfPath} download className="text-[var(--color-gdg-blue)] underline font-medium">
                   Lade die PDF hier herunter
                 </a>
              </div>
            </object>
         </div>
       ) : (
         <div className="mt-12 bg-card border border-[var(--color-gdg-grey-200)] dark:border-[var(--color-gdg-grey-800)] rounded-xl py-16 text-center text-muted">
           Keine Präsentationsfolien für diesen Talk verfügbar.
         </div>
       )}
    </div>
  );
}
