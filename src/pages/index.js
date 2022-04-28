import { Container } from "@mui/material";
import { Banner } from "../components/home/banner";
import { MainLayout } from "../components/main-layout";

export default function Index() {
  return (
    <Container
      sx={{
        marginTop: 7,
      }}
    >
      <Banner />
    </Container>
  );
}

Index.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
