/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';
import { Container, Row } from 'react-bootstrap';

import PageTitle from '../Common/PageTitle';
import CardItem from './CartItem';
import Pagination from '@mui/material/Pagination';
class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
    };
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header pb-2">
          <PageTitle sm="4" title="Blog Posts" subtitle="view" className="text-sm-left" />
        </Row>

        {/* Fourth Row of posts */}
        <Row className="mx-0">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
            <CardItem></CardItem>
          ))}
        </Row>

        {/* pagination */}
        <Row className="mt-3">
          <Pagination className=" mx-auto" count={10} variant="outlined" color="secondary" />
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;
