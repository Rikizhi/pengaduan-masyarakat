import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Features() {
  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Product features
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: { xs: 2, sm: 4 } }}>
              Here you can provide a brief overview of the key features of the product. For example, you could list the number of features, the types of features, add-ons, or the benefits of the features.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}>
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          ></Card>
        </Grid>
      </Grid>
    </Container>
  );
}
