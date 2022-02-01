import React from "react";
import DetailCard from "./DetailCard";
import { FaBeer } from "react-icons/fa";

const DetailCards = () => {
  return (
    <section className="detail-cards py-5">
      <div className="container py-5">
        <DetailCard>
          <div className="icon-bg" color="white">
            <FaBeer size="40" />
          </div>
          <p className="lead fw-bold">Own a bot</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
            aliquid harum fugiat labore pariatur quia placeat quis cumque
            quisquam iusto aliquam necessitatibus amet dicta ea perferendis. Ex
            doloribus optio ducimus!
          </p>
          <p className="text-primary">Learn more</p>
        </DetailCard>
        <DetailCard>
          <div className="icon-bg" color="white">
            <FaBeer size="40" />
          </div>
          <p className="lead fw-bold">Own a bot</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
            aliquid harum fugiat labore pariatur quia placeat quis cumque
            quisquam iusto aliquam necessitatibus amet dicta ea perferendis. Ex
            doloribus optio ducimus!
          </p>
          <p className="text-primary">Learn more</p>
        </DetailCard>
        <DetailCard>
          <div className="icon-bg">
            <FaBeer size="40" />
          </div>
          <p className="lead fw-bold">Own a bot</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
            aliquid harum fugiat labore pariatur quia placeat quis cumque
            quisquam iusto aliquam necessitatibus amet dicta ea perferendis. Ex
            doloribus optio ducimus!
          </p>
          <p className="text-primary">Learn more</p>
        </DetailCard>
      </div>
    </section>
  );
};

export default DetailCards;
