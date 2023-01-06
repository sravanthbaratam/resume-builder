import React, {Component} from "react";
import {
  TextField,
  Button,
  Container,
  Card,
  CardHeader,
  CardContent,
  InputAdornment,
  Paper,
  Grid
} from "@mui/material";
import {
  NavigateNext as NavigateNextIcon,
  NavigateBefore as NavigateBeforeIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Language as LanguageIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon
} from "@mui/icons-material";
import {Row, Col} from "react-bootstrap";
import {withStyles} from "tss-react/mui";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 1
  },
  padding: {
    padding: theme.spacing.unit
  }
});

class Profile extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {values} = this.props;
    const {classes} = this.props;
    return (
      <Paper className={classes.padding}>
        <Card>
          <CardHeader title="Personal Details" />
        </Card>
        <CardContent>
          <div className={classes.margin}>
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="firstname"
                  label="First Name"
                  style={{width: "80%"}}
                  required
                  value={values.firstname}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Last Name"
                  variant="outlined"
                  style={{width: "80%"}}
                  name="lastname"
                  required
                  value={values.lastname}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Email"
                  variant="outlined"
                  name="email"
                  required
                  style={{alignItems: "left", width: "80%"}}
                  value={values.email}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>

              <Grid item lg={6} xs={12} sm={12} md={6}>
                <TextField
                  margin="dense"
                  label="Phone Number"
                  variant="outlined"
                  name="phone"
                  style={{alignItems: "left", width: "80%"}}
                  value={values.phone}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Your Website"
                  variant="outlined"
                  name="website"
                  style={{alignItems: "left", width: "80%"}}
                  value={values.website}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LanguageIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="GitHub"
                  variant="outlined"
                  name="github"
                  style={{alignItems: "left", width: "80%"}}
                  value={values.github}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <GitHubIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Linked In"
                  variant="outlined"
                  name="linkedin"
                  style={{alignItems: "left", width: "80%"}}
                  value={values.linkedin}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LinkedInIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Twitter"
                  variant="outlined"
                  name="twitter"
                  style={{alignItems: "left", width: "80%"}}
                  value={values.twitter}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <TwitterIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Facebook"
                  variant="outlined"
                  name="facebook"
                  style={{alignItems: "left", width: "80%"}}
                  value={values.facebook}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <FacebookIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Instagram"
                  variant="outlined"
                  name="instagram"
                  style={{alignItems: "left", width: "80%"}}
                  value={values.instagram}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <InstagramIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
            <Container className={classes.margin}>
              <Row>
                <Col lg={3} xs={0} />
                <Col lg={3} xs={5}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.nextStep}
                    disabled
                    startIcon={<NavigateBeforeIcon />}
                  >
                    Back
                  </Button>
                </Col>
                <Col lg={3} xs={5}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.continue}
                    endIcon={<NavigateNextIcon />}
                  >
                    Next
                  </Button>
                </Col>
                <Col lg={3} xs={1} />
              </Row>
            </Container>
            {/* <Button
              variant="contained"
              color="secondary"
              onClick={this.createAndDownloadPDF}
              endIcon={<GetAppIcon />}
            >
              Generate PDF
            </Button> */}
          </div>
        </CardContent>
        <p className="text-center text-muted">Page 1 </p>
      </Paper>
    );
  }
}

export default withStyles(Profile, styles);
