import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Cards: React.FC = () => (
 
    <a href="https://www.facebook.com/SaylaniMassTraining/photos/a.489555521146465/5328016603966975/"> 
     <Card 
    hoverable
    style={{ width: 440 }}
    cover={<img alt="example" src="./images/322123759_490861376522720_70877101553489490_n.jpg" />}
  >
    
    </Card>
    </a>
    

  
);

export default Cards;