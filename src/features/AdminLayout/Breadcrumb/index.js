import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  let mainContent, itemContent;
  let breadcrumbContent = '';
  let title = '';
  breadcrumbContent = (
    <div className="page-header">
      <div className="page-block">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="page-header-title">
              <h5 className="m-b-10">{title}</h5>
            </div>
            <ListGroup as="ul" bsPrefix=" " className="breadcrumb">
              <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
                <Link to="/">
                  <i className="feather icon-home" />
                </Link>
              </ListGroup.Item>
              {mainContent}
              {itemContent}
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );

  return <React.Fragment>{breadcrumbContent}</React.Fragment>;
};

export default Breadcrumb;
