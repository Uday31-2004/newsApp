import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton, useScrollTrigger, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'; 
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showScrollToTop: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      this.setState({ showScrollToTop: true });
    } else {
      this.setState({ showScrollToTop: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuSharpIcon />
          </IconButton>
        </Toolbar>
        <ScrollToTopButton show={this.state.showScrollToTop} scrollToTop={this.scrollToTop} />
      </AppBar>
    );
  }
}

// ScrollToTopButton component
const ScrollToTopButton = ({ show, scrollToTop }) => {
  return (
    <Zoom in={show}>
      <IconButton
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: 16,
          right: 16
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Zoom>
  );
};

export default Navbar;
