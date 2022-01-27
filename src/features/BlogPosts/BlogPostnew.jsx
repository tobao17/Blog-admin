/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';
import { Container, Row, Col, Card, CardBody, CardFooter, Badge, Button } from 'shards-react';

import PageTitle from '../Common/PageTitle';

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: 'https://source.unsplash.com/user/erondu/600x400',
          category: 'Business',
          categoryTheme: 'dark',
          author: 'Anna Kunis',
          authorAvatar: 'https://source.unsplash.com/user/erondu/600x400',
          title: 'Conduct at an replied removal an amongst',
          body: 'However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...',
          date: '28 February 2019',
        },
        {
          backgroundImage: 'https://source.unsplash.com/user/erondu/600x400',
          category: 'Travel',
          categoryTheme: 'info',
          author: 'James Jamerson',
          authorAvatar: 'https://source.unsplash.com/user/erondu/600x400',
          title: 'Off tears are day blind smile alone had ready',
          body: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...',
          date: '29 February 2019',
        },
        {
          backgroundImage: 'https://source.unsplash.com/user/erondu/600x400',
          category: 'Technology',
          categoryTheme: 'royal-blue',
          author: 'Jimmy Jackson',
          authorAvatar: 'https://source.unsplash.com/user/erondu/600x400',
          title: 'Difficult in delivered extensive at direction',
          body: 'Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...',
          date: '29 February 2019',
        },
        {
          backgroundImage: 'https://source.unsplash.com/user/erondu/600x400',
          category: 'Business',
          categoryTheme: 'warning',
          author: 'John James',
          authorAvatar: 'https://source.unsplash.com/user/erondu/600x400',
          title: 'It so numerous if he may outlived disposal',
          body: 'How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...',
          date: '29 February 2019',
        },
      ],
    };
  }

  render() {
    const { PostsListOne, PostsListTwo, PostsListThree, PostsListFour } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Blog Posts" subtitle="Components" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge pill className={`card-post__category bg-${post.categoryTheme}`}>
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by {post.author}
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;
