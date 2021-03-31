import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Form, Modal } from "semantic-ui-react";
import { selectProfileAction } from "../../redux/storage/profile/profile";

const Profile = (props) => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState();
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    dispatch(selectProfileAction(username));
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>프로필 선택</Button>}
      size="large"
      centered
    >
      <Modal.Header>프로필 선택</Modal.Header>
      <Modal.Content>
        <Form onSubmit={onHandleSubmit}>
          <Form.Input
            onChange={(e) => setUsername(e.target.value)}
            name="유저 이름"
            label="유저 이름"
            value={username}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>취소</Button>
        <Button onClick={onHandleSubmit}>확인</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Profile;
