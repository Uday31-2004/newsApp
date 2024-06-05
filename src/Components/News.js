import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Container, TextField, Button, Box } from '@mui/material';
export class News extends Component {
    articles = [
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
          
        ]
    constructor(){
        super();
        //console.log("This is my constructor")
        this.state = {
          articles: this.articles,
          loading: false,
          searchTerm: '',
          page: 1,
        };
    }
    async componentDidMount(){
        let url ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6298a9ee6f6b453fa0b22aec69763e73&page=1&pageSize=18";
        let data = await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData)
        this.setState({
            page:this.state.page,
            articles: parsedData.articles})
    }
    handleSearchChange = (event) => {
      this.setState({ searchTerm: event.target.value });
    };

    handleNextClick=async()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6298a9ee6f6b453fa0b22aec69763e73&page=2&pageSize=18`;
        let data = await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData)
        console.log("next")
        this.setState({
            page:this.state.page +1,
            articles: parsedData.articles
        })

    }
    handlePrevClick=async()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6298a9ee6f6b453fa0b22aec69763e73&page=${this.state.page - 1}&pageSize=18`;
        let data = await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData)
    
        this.setState({
            page:this.state.page - 1,
            articles: parsedData.articles
        })


    }
  render() {
    const filteredArticles = this.state.articles.filter(article => {
      const title = article.title ? article.title.toLowerCase() : '';
      const description = article.description ? article.description.toLowerCase() : '';
      const searchTerm = this.state.searchTerm.toLowerCase();
      return title.includes(searchTerm) || description.includes(searchTerm);
    });
    return (
      <Container>
        <Box mt={4}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            onChange={this.handleSearchChange}
          />
        </Box>
        <Box mt={2}>
          <h2>Top Headlines</h2>
          <div className="row">
            {filteredArticles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <Button disabled={this.state.page <= 1} variant="contained" color="primary" onClick={this.handlePrevClick}>
              &larr; Previous
            </Button>
            <Button variant="contained" color="primary" onClick={this.handleNextClick}>
              Next &rarr;
            </Button>
          </div>
        </Box>
      </Container>
    );
  }
}

export default News;
