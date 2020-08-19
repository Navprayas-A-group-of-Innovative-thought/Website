import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./recentActivity.css";
import pic from "../../assets/react.svg";

const RecentActivityCard = (props) => {
  return (
    <Card className="card abc">
      <CardImg top width="100%" src="https://user-images.githubusercontent.com/48627031/90132130-dfe87400-dd8a-11ea-9ab5-7fdb5d79ada8.jpg" alt="Card image cap" />
      <div className="activityLine"></div>
      <CardBody className="activityCardBody">
        <CardTitle className="activityCardTitle">Rangotsav</CardTitle>
        <CardSubtitle className="activityCardSubtitle">
          Rangoli Competition
        </CardSubtitle>
        <CardText className="activityCardText">
          Lorem Ispum is dummy text for testing <br></br>text data. It is used
          globally to fill space where <br></br>some text can be replaced.
        </CardText>
        <Button className="activityButton">Learn More</Button>
      </CardBody>
    </Card>
  );
};

export default RecentActivityCard;
