import React from 'react'
import { Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar'
import styles from '../../styles/CommentOwner.module.css'


const CommentDetail = (props) => {
  const { profile_id, profile_image, owner, updated_on, content, } = props;

  return (
    <div>
      <hr />
        <Media>
            <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image}/>
            </Link>
            <Media.Body>
                <span className={styles.Owner}>{owner}</span>
                <span className={styles.Date}>{updated_on}</span>
                <p>{content}</p>
            </Media.Body>
        </Media>
    </div>
  );
};

export default CommentDetail