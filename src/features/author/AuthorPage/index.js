import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { Paragraph, Link } from "./styled";

function AuthorPage() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Witaj, nazywam się Izabela!"
        body={
          <>
            <Paragraph>
              Mam umysł ścisły i lubię świat techniki 📐
              Kierując się tym ukończyłam studia na kierunku <strong>Automatyka i Robotyka</strong> 🤖
            </Paragraph>
            <Paragraph>
              Lubię tworzyć "coś z niczego", dlatego programowanie daje mi dużo frajdy i satysfakcji 😎
              Uwielbiam programować <strong>strony i aplikacje internetowe</strong>. Lubie nowe wyzwania 🙂
            </Paragraph>
            <Paragraph>
              W czasie wolnym lubię spędzać czas na tworzeniu <strong>maskotek z włóczki</strong> 🧶 Prace wykonuje na szydełku.
              Sprawia mi to wiele radości, kiedy ze zwykłego motka włóczki powstaje maskotka 🧸, która może sprawić dużo radości jakiemuś dziecku.
            </Paragraph>
            <Paragraph>
              Chcesz zobaczyć więcej moich projektów?
              Zajrzyj na moją stronę na <Link target="_blank" href="https://github.com/izabelanowak">Github</Link>!
            </Paragraph>
          </>
        }
      />
    </Container>
  );
}

export default AuthorPage;
