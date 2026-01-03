import data from "@/data/programs/mat.json";

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
      <Hero data={data.hero} />

      {/* WHY CHOOSE / INTRO */}
      <Intro data={data.intro} />

      {/* QUICK STATS */}
      <Stats items={data.stats} />

      {/* MAIN DATA TABLES */}
      {data.tables.map((table) => (
        <section key={table.id}>
          <DataTable table={table} />
        </section>
      ))}

      {/* JOURNEY CTA */}
      <JourneyCTA />

      {/* FAQ */}
      <FAQ items={data.faqs} />

      {/* FINAL CTA */}
      <CTA
        heading="Need Help with MAT Admissions?"
        text="Talk to our experts for college shortlisting, score evaluation, and admission guidance."
        buttonText="Get Free Counselling"
      />

      {/* LEAD FORM */}
      <LeadForm data={data.leadForm} />

      <Footer />
    </main>
  );
}
