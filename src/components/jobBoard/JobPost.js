import React from "react";
import Icon from "./Icon";
import Description from "./Description";
import Tags from "./Tags";

const JobPost = ({
  avi,
  company,
  newPost,
  position,
  featured,
  postedAt,
  contract,
  location,
  tags,
  onTagSelect,
}) => {
  return (
    <div className="job-post">
      <div className="icon-description-container">
        <Icon avi={avi} alt={company} />
        <Description
          company={company}
          newPost={newPost}
          position={position}
          featured={featured}
          postedAt={postedAt}
          contract={contract}
          location={location}
        />
      </div>
      <div className="mobile-hr" />
      <div className="tags-container">
        <Tags tags={tags} onTagSelect={onTagSelect} />
      </div>
    </div>
  );
};

export default JobPost;
