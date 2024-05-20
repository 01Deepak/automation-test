import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
// import "../onboarding/styles/accountStyles.css";
import styles from "../../../assets/styles/onboarding/aikka-login-style.module.css";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import aikkaLogo from "../../../assets/images/aikka-logo.png";
import BackgroundImage from "../../../assets/images/loginImage.jpg";

const AikkaLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const isEmailvalid = (email) => {
    if (email?.trim()) {
      const emailRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        alert("Please Enter Valid Email");
        return false;
      } else return true;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isEmailvalid(email)) {
      return;
    }
    
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          width: "100vw",
        }}
      >
        <Container>
          <Grid
            container
            sx={{ height: "100%" }}
            alignItems="center"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item xs={12} sm={6} style={{ color: "red",height:'550px' }}>
              {/* <Box sx={{ textAlign: { sm: "right" } }}> */}
              <Box>
                <Typography
                  variant="h3"
                  component="h1"
                  color="#FFFFFF"
                  className={styles.welcomeText}
                >
                  Welcome
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} className={styles.formWrapper}>
              <Box
                sx={{
                  backgroundColor: "white",
                  p: 4,
                  borderRadius: 1,
                  boxShadow: 1,
                }}
              >
                <div className={styles.logoImage}>
                  <img
                    src={aikkaLogo}
                    alt="logo"
                    style={{ maxHeight: "150px", maxWidth: "150px" }}
                  />
                </div>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  className={styles.textAfterLogo}
                >
                  Enter Your Details
                </Typography>

                 
                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      type="email"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      label="Password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                      type={showPassword ? "text" : "password"}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                          >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </IconButton>
                        ),
                      }}
                    />
                    <div
                      style={{
                        cursor: "pointer",
                        color: "#8BC53F",
                        textAlign: "end",
                      }}
                    //   onClick={handleForgetPassword}
                    >
                      Forgot Password?
                    </div>

                    <Box sx={{ textAlign: "center", mt: 2 }}>
                      <Button
                        variant="contained"
                        type="submit"
                        style={{
                          backgroundColor: "#8BC53F",
                          border: "1px solid #8BC53F",
                          maxHeight: "56px",
                          minWidth: "150px",
                          fontSize: "16px",
                          fontWeight: "bold",
                          textTransform: "inherit",
                          color: "white",
                          padding: "6px",
                          borderRadius: "5px",
                        }}
                      >
                        Continue
                      </Button>
                    </Box>
                  </form>
                
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AikkaLogin;
