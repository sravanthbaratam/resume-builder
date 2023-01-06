import React, { Component } from 'react';
import { TextField, Button, Container, Divider } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
import axios from 'axios';
import { saveAs } from 'file-saver';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import LinkIcon from '@mui/icons-material/Link';
import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import InputAdornment from '@mui/material/InputAdornment';
import { Row, Col } from 'react-bootstrap';
import { Paper, Grid } from '@mui/material';
// import { withStyles } from '@mui/styles'
// const styles = theme => ({
//   margin: {
//     margin: theme.spacing.unit * 1.5,
//   },
//   padding: {
//     padding: theme.spacing.unit,
//   },
// });

class Projects extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  createAndDownloadPDF = () => {
    axios
      .post('/create-pdf', this.state)
      .then(() => {
        axios
          .get('fetch-pdf', { responseType: 'blob' })
          .then(res => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
            saveAs(pdfBlob, 'Resume.pdf');
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { values } = this.props;
    // const { classes } = this.props;

    return (
      <Paper >
        <Card>
          <CardHeader title="Projects Developed" />
        </Card>
        <CardContent>
          <div >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={12}>
                <h5>Project 1</h5>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title1"
                  label="Title"
                  style={{ width: '80%' }}
                  required
                  value={values.title1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link1"
                  label="Link"
                  style={{ width: '80%' }}
                  required
                  value={values.link1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="projectDescription1"
                  label="Description"
                  style={{ width: '80%' }}
                  required
                  value={values.projectDescription1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={12}>
                <h5>Project 2</h5>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title2"
                  label="Title"
                  style={{ width: '80%' }}
                  required
                  value={values.title2}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link2"
                  label="Link"
                  style={{ width: '80%' }}
                  required
                  value={values.link2}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="projectDescription2"
                  label="Description"
                  style={{ width: '80%' }}
                  required
                  value={values.projectDescription2}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} alignItems="center" >
              <Grid item xs={12} lg={12}>
                <h5>Project 3</h5>
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="title3"
                  label="Title"
                  style={{ width: '80%' }}
                  value={values.title3}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="link3"
                  label="Link"
                  style={{ width: '80%' }}
                  value={values.link3}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LinkIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="projectDescription3"
                  label="Description"
                  style={{ width: '80%' }}
                  value={values.projectDescription3}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </CardContent>
        <Container>
          <Row>
            <Col xs={4} />
            <Col xs={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.back}
                startIcon={<NavigateBeforeIcon />}
              >
                Back
              </Button>
            </Col>
            <Col xs={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.continue}
                endIcon={<NavigateNextIcon />}
              >
                Next
              </Button>
            </Col>
            <Col xs={4} />
          </Row>
        </Container>
        <p className="text-center text-muted">Page 3</p>
      </Paper>
    );
  }
}

export default Projects;
