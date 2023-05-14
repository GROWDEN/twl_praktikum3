import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";

function Home() {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    async function fetchDogImages() {
      const response = await axios.get(
        "https://api.thedogapi.com/v1/images/search?limit=6"
      );
      setDogImages(response.data);
    }

    fetchDogImages();
  }, []);

  return (
    <div>
      <Container>
        <div>
          <h1 className="text-center">Random Dog Picture</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {dogImages.map((dogImage) => (
            <Card key={dogImage.id} style={{ width: "18rem", margin: "1rem" }}>
              <Card.Img
                variant="top"
                style={{ width: "286px", height: "200px" }}
                src={dogImage.url}
                alt="dog"
              />
              <Card.Body>
                <Card.Title>Dog</Card.Title>
                <Card.Text>man's best friend</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
