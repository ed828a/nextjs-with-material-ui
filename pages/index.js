import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Slider from "react-slick";
import Image from "next/image";
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  container: {
    color: "white",
  },
});

class Index extends React.Component {
  renderSlide = (index) => {
    const i = index + 1;
    const imageUrl = `http://via.placeholder.com/350x150?text=${i}`;
    return (
      <div key={i}>
        <Image
          src={imageUrl}
          layout="fill"
          height="150"
          width="250"
          alt="log"
        />
      </div>
    );
  };

  renderSlides = () => {
    return [...Array(9).keys()].map((index) => {
      const i = index + 1;
      const imageUrl = `https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=2000&hei=1100&scl=1.504`;
      return (
        <div key={i}>
          <figure>
            <img src={imageUrl} />
            <figcaption>
              <p>Legend of item {i}</p>
            </figcaption>
          </figure>
        </div>
      );
    });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <Container maxWidth="sm" className={classes.container}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1"  gutterBottom>
            Next.js v5-beta example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
        <h2>This is react-slider X next.js</h2>
        <p >
          There is a bug when using responsive settings: look at image src
          attribute when screen is smaller that 768px
        </p>
        <Slider
          autoplay={true}
          initialSlide={1}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          dots={true}
          arrows={true}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {this.renderSlides()}
        </Slider>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Index);
