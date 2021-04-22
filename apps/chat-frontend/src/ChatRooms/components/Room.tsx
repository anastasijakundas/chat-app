import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ChatRoom } from '@chat-application/types';

import styles from '../ChatRooms.module.scss';

interface RoomProps {
  roomData: ChatRoom;
  handleJoinClick: (roomId: string) => void;
}

const Room: React.FC<RoomProps> = ({
  roomData: { title, description, _id },
  handleJoinClick,
}) => {
  return (
    <Card className={styles.room}>
      <CardContent>
        <Typography className={styles.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography className={styles.description} color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="secondary" onClick={() => handleJoinClick(_id)}>
          Join
        </Button>
      </CardActions>
    </Card>
  );
};

export default Room;
