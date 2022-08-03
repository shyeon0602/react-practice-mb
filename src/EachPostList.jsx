import { PostLink, EachPostLi, PostRepl } from "./styledComponents";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EachPostList({ title, replCount }) {
  return (
    <EachPostLi>
      <div>
        <FontAwesomeIcon icon={faLocationPin} />
        <PostLink>{title}</PostLink>
      </div>
      <PostRepl>{replCount}</PostRepl>
    </EachPostLi>
  );
}

export default EachPostList;
