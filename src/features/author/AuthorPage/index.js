import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container";
import { Wrapper, IconContainer, Icon, LinkSocialMedia, LinkIcon, Paragraph } from "./styled";
import icon from "../../../images/instagram.svg"

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Witaj!"
      body={
        <Wrapper>
          <Paragraph>Nazywam się Paulina i pochodze z Lublina, ale mieszkam w Warszawie. Moim celem jest zostanie <strong>front-end developerem!</strong></Paragraph>
          <Paragraph>W wolnym czasie lubię wędrować po górach, miastach, lasach i polach oraz piec ciastka. Zdarza mi się wstawić zdjęcia z tych wędrówek lub zdjęcia kota na Instagram 😉. </Paragraph>
          <IconContainer>
            <LinkSocialMedia
              href="https://www.instagram.com/grymulska/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon src={icon} alt="ig icon" />
            </LinkSocialMedia>
            <LinkIcon
              href="https://icons8.com/icon/Xy10Jcu1L2Su/instagram"
              rel="noopener noreferrer"
              target="_blank">
              Instagram icon by Icons8
            </LinkIcon>
          </IconContainer>
        </ Wrapper>
      }
    />
  </Container>
);

export default AuthorPage;