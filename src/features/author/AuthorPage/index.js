import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";

function AuthorPage() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Izabela Nowak"
        body={<>loremdmskngbjdn</>}
      />
    </Container>
  );
}

export default AuthorPage;
