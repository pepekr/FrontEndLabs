import React from "react";
import "../styles/activities.css"
interface ActivityArticleProps {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  link?: { href: string; text: string };
}

const ActivityArticle: React.FC<ActivityArticleProps> = ({
  id,
  title,
  description,
  imgSrc,
  imgAlt,
  link,
}) => (
  <article id={id}>
    <img src={imgSrc} alt={imgAlt} />
    <h3>{title}</h3>
    <p className="activities-paragraph">
      {description}{" "}
      {link && (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      )}
    </p>
  </article>
);

export default ActivityArticle;
