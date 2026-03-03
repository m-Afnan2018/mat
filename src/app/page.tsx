// import data from "@/assets/data/programs/Amrita Vishwa Vidyapeetham – B.Tech.json"
// import data from "@/assets/data/programs/gre.json"
// import data from "@/assets/data/programs/KIIT (Kalinga Institute of Industrial Technology) – B.Tech.json"
// import data from "@/assets/data/programs/Maharaja Agrasen University B.Tech.json"
// import data from "@/assets/data/programs/Maharaja Agrasen University – B.Tech.json"
// import data from "@/assets/data/programs/mat.json";
import data from "@/assets/data/programs/NMIMS (NPAT) – UG.json"
// import data from "@/assets/data/programs/Shiv Nadar University – B.Tech.json"
// import data from "@/assets/data/programs/SRM University – B.Tech.json"
// import data from "@/assets/data/programs/Welingkar (WeSchool), Mumbai.json"
// import data from "@/assets/data/programs/Welingkar (WeSchool), Mumbai2.json"

// Layout sections
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Stats from "@/components/Stats";
import DataTable from "@/components/DataTable";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JourneyCTA from "@/components/JourneyCTA";
import Testimonials from '@/components/Testimonials'

import type { LeadFormData } from "@/components/LeadForm";
const leadFormData = data.leadForm as LeadFormData;

export const metadata = {
  title: data.seo.title,
  description: data.seo.description,
  keywords: data.seo.keywords,
};

export default function MATPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <Hero data={data.hero} formData={leadFormData} />

      {/* WHY CHOOSE / INTRO */}
      <Intro data={data.intro} />

      {/* QUICK STATS */}
      <Stats items={data.stats} />

      {/* MAIN DATA TABLES */}
      {data.tables.map((table, index) => (
        <section key={table.id} id={`fees_${index}`}>
          <DataTable table={table} />
        </section>
      ))}

      {/* JOURNEY CTA */}
      <JourneyCTA />

      <Testimonials/>

      {/* FAQ */}
      <FAQ items={data.faqs} />

      {/* FINAL CTA */}
      <CTA
        heading="Need Help with MAT Admissions?"
        text="Talk to our experts for college shortlisting, score evaluation, and admission guidance."
        buttonText="Get Free Counselling"
      />

      {/* LEAD FORM */}
      {/* <LeadForm data={data.leadForm} /> */}
      <LeadForm data={leadFormData} />

      <Footer />
    </main>
  );
}
