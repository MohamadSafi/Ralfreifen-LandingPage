import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/global";
const App = () => {
  return (
    <div>
      <SectionWrapper
        title="Ralfreifen - Ihr Marktplatz für Autos, Reifen und andere Autoteile"
        description="Treten Sie unserer Community bei, um Autos, Reifen und Autoteile einfach zu kaufen oder zu verkaufen. Hier finden Sie alles, was Sie brauchen, mit Vertrauen."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
        Hlevel={1}
      />

      <SectionWrapper
        title="Finden Sie das Beste ganz einfach"
        description="Wählen Sie Ihren Standort und suchen Sie, was Sie brauchen. Bei uns finden Sie tolle Angebote ganz in Ihrer Nähe."
        mockupImg={assets.homeCards}
        reverse
        Hlevel={2}
      />

      <Features />
      <SectionWrapper
        title="Machen Sie mehr aus Ihrem Geschäft mit Ralfreifen"
        description="Zeigen Sie mehr Leuten, was Sie anbieten, und lassen Sie Ihr Geschäft wachsen. Ralfreifen hilft Ihnen dabei."
        mockupImg={assets.feature}
        reverse
        Hlevel={2}
      />

      <SectionWrapper
        title="Verpassen Sie nicht Ihre Chance – registrieren Sie sich jetzt"
        description="Ein Konto bei Ralfreifen zu erstellen ist kostenlos und einfach. Geben Sie Ihre Daten ein und legen Sie sofort los."
        mockupImg={assets.mockup}
        banner="banner02"
        Hlevel={2}
      />

      <Download />

      <div
        className="px-4 py-4 justify-center items-center 
      bg-primary flex-col text-center banner04"
      >
        <a
          href="mailto:Ralfreifen.de@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <p className={`${styles.pText} ${styles.whiteText}`}>
            Kontaktieren Sie uns unter: {""}{" "}
            <span className="bold">Ralfreifen.de@gmail.com</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default App;
