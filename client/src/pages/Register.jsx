import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="#">
        Pengaduan Masyarakat
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Register() {
  const [alert, setAlert] = useState({ open: false, severity: "success", message: "" });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseAlert = () => {
    setAlert({
      ...alert,
      open: false,
    });
    setSnackbarOpen(false);
  };

  const handleAlert = (severity, message) => {
    setAlert({
      severity: severity,
      message: message,
      open: true,
    });

    setSnackbarOpen(true);

    setTimeout(() => {
      handleCloseAlert();
    }, 5000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const nik = formData.get("nik");
    const nama = formData.get("nama");
    const username = formData.get("username");
    const password = formData.get("password");
    const telp = formData.get("telp");

    if (!nik || !nama || !username || !password || !telp) {
      handleAlert("error", "Seluruh field harus terisi!");
      return;
    }

    if (!/^\d+$/.test(nik)) {
      handleAlert("error", "Hanya dapat memasukkan nomor!");
      return;
    }

    if (nik.length !== 16) {
      handleAlert("error", "NIK harus 16 digit");
      return;
    }

    if (nama.length > 35) {
      handleAlert("error", "Nama tidak boleh lebih dari 35 karakter!");
      return;
    }

    if (username.length > 25) {
      handleAlert("error", "Username tidak boleh lebih dari 25 karakter!");
      return;
    }

    if (password.length > 32) {
      handleAlert("error", "Password tidak boleh lebih dari 32 karakter!");
      return;
    }

    if (telp.length > 13) {
      handleAlert("error", "Nomor Telepon tidak boleh lebih dari 13 digit");
      return;
    }

    if (!/^\d+$/.test(telp)) {
      handleAlert("error", "Hanya dapat memasukkan nomor!");
      return;
    }

    try {
      // Send a POST request to the server
      const response = await axios.post("http://localhost:5000/masyarakat/insert-masyarakat", {
        nik: formData.get("nik"),
        nama: formData.get("nama"),
        username: formData.get("username"),
        password: formData.get("password"),
        telp: formData.get("telp"),
      });
      console.log(response.data);

      navigate("/login");

      handleAlert("success", "Registrasi berhasil!");
    } catch (error) {
      console.error("Error submitting form:", error);

      handleAlert("error", "Registrasi gagal, silakan coba lagi");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {alert && (
          <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleCloseAlert} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
            <Alert variant="filled" severity={alert.severity} onClose={handleCloseAlert} sx={{ mt: 2 }}>
              {alert.message}
            </Alert>
          </Snackbar>
        )}
        <Box
          p={4}
          boxShadow={3}
          borderRadius={2}
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              width: "75%",
              marginBottom: "20px",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
            component="img"
            src="../src/assets/logo.png"
            alt="logo"
          />
          <Typography component="h1" variant="h5" align="center">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField name="nik" required fullWidth id="nik" label="NIK" autoFocus />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="nama" label="Nama" name="nama" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="username" label="Username" name="username" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" type="password" id="password" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="telp" label="No.Telepon" name="telp" />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: 2,
                width: "80%",
                height: 45,
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="body2">
                  Sudah memiliki akun? <Link href="/login">Login!</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 3 }} />
      </Container>
    </ThemeProvider>
  );
}
