import React, { Component } from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <Box my={3}>
        <Card 
          sx={{ 
            maxWidth: 345, 
            transition: 'transform 0.3s, box-shadow 0.3s', 
            '&:hover': { 
              transform: 'scale(1.05)',
              boxShadow: 6, 
            } 
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={imageUrl ? imageUrl : "https://nypost.com/wp-content/uploads/sites/2/2023/05/newspress-collage-27229640-1685275050433.jpg?quality=75&strip=all&1685260682&w=1024"}
            alt="News"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title ? title : "No Title"}...
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description ? description : "No Description"}...
            </Typography>
          </CardContent>
          <Box textAlign="center" pb={2}>
            <Button variant="contained" color="primary" href={newsUrl} target="_blank">
              Read More
            </Button>
          </Box>
        </Card>
      </Box>
    );
  }
}

export default NewsItem;
